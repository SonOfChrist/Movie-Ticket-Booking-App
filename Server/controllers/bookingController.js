import Booking from "../models/Booking.js";
import Show from "../models/Show.js"

// Checking Seats availability
const checkingSeatsAvailability =  async (showId, selectedSeats) => {
    try {
        const showData = await Show.findById(showId)
        if(!showData) return false;
        const occupiedSeats =  showData.occupiedSeats
        const isAnySeatTaken =  selectedSeats.some(seat => occupiedSeats[seat]);
        return !isAnySeatTaken;
    } catch(error) {
        console.log(error.message)
        return false;
    }
}

export const createBooking = async (req, res) => {
    try {
        const {userId} = req.auth();
        const {showId, selectedSeats} = req.body;
        const {origin} = req.header;

        // Check if seats are available
        const isAvailable = await checkingSeatsAvailability(showId, selectedSeats)
        if(!isAvailable){
            return res.json({success: false, message: "Selected Seats are not Available."})
        }

        // Fetch Show Data
        const showData  =  await Show.findById(showId).populate('movie');

        // Create a new Booking
        const booking = await Booking.create({
            user: userId,
            show: showId,
            amount: showData.showPrice * selectedSeats.length,
            bookedSeats: selectedSeats
        })
        selectedSeats.map((seat) => {
            showData.occupiedSeats[seat] = userId
        })

        showData.markModified('occupiedSeats');

        await showData.save();

        // Stripe Gateways Initialized 
        res.json({success: true, message:"Booked successfully"})
    }catch (error){
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}

export const getOccupiedSeats =  async (req, res) => {
    try {
        const {showId} = req.params;
        const showData =  await Show.findById(showId)
        const occupiedSeats = Object.keys(showData.occupiedSeats)
        res.json({success: true, occupiedSeats})
    }catch(error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}