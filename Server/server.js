import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from 'inngest/express';
import { inngest, functions } from './inngest/index.js';
import showRouter from './routes/showRoutes.js';

const app = express();
const PORT = 3000;

await connectDB()

// Middleware
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())

// Routes
app.get('/', (req, res) => res.send('Welcome to the Movie Ticket App Server is Live!'));
// Set up the "/api/inngest" (recommended) routes with the serve handler
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use('/api/show', showRouter)
app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`);});