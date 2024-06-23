import { Router } from 'express';
import accumulatorRoutes from './routes/accumulator.route';

const router: Router = Router();

// Use the router files
router.use('/api/accumulator', accumulatorRoutes);

export default router;
