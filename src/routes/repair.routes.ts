import express from 'express';
const router = express.Router();
import { authenticateToken } from '../middleware/auth';
// TODO: Add repair-related routes here
// routes/repair.routes.ts
import { createRepair, getRepairTickets,updateRepair,getRepairById ,updateRepairByTicketId } from '../controllers/repair.controller';
import RepairTicket from '../models/RepairTicket';
import { getRepairTicketsForTech } from '../controllers/repair.controller';

router.post('/', createRepair);
router.get('/', getRepairTickets);

router.get('/', updateRepairByTicketId);

router.post('/', authenticateToken, createRepair);

// router.post('/', createRepair);
router.get('/',authenticateToken, getRepairTickets);
router.put("/:_id", authenticateToken, updateRepair) // expects a MongoDB ObjectId
// router.put('/:TicketId', updateRepairByTicketId);

router.get('/:customerId', getRepairById);


router.get('/', getRepairTicketsForTech);


export default router; 