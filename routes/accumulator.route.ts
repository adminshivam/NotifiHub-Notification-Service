import express, { Router, Request, Response } from 'express';
import { getAccumulators } from '../controllers/accumulator.controller';

const router: Router = express.Router();

// Define routes
router.get('/get', getAccumulators);
// router.get('/products/:id', getProductById);
// router.post('/products', addProduct);
// router.put('/products/:id', updateProduct);
// router.delete('/products/:id', deleteProduct);

export default router;