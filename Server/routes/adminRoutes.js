import express from "express";
import { protectAdmin } from "../middleware/auth.js";
import { getAllBookings, getAllShows, getDashBoardData, isAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();
// Check out the dashboard APIs because they are being used in the admin dashboard page

adminRouter.get('/is-admin', protectAdmin, isAdmin);
adminRouter.get('/dashboard', protectAdmin, getDashBoardData);
adminRouter.get('/all-shows', protectAdmin, getAllShows);
adminRouter.get('/all-bookings', protectAdmin, getAllBookings);

export default adminRouter;