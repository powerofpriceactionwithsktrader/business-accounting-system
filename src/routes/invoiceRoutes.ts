import { Router } from 'express';
import invoiceController from '../controllers/invoiceController';

const router = Router();

router.post('/', (req, res) => {
    invoiceController.createInvoice(req, res);
});

router.get('/:id', (req, res) => {
    invoiceController.getInvoice(req, res);
});

router.put('/:id', (req, res) => {
    invoiceController.updateInvoice(req, res);
});

router.delete('/:id', (req, res) => {
    invoiceController.deleteInvoice(req, res);
});

export default router;