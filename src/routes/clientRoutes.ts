import { Router } from 'express';
import clientController from '../controllers/clientController';

const router = Router();

router.post('/', (req, res) => {
    clientController.createClient(req.body);
});

router.get('/:id', (req, res) => {
    clientController.getClient(req.params.id);
});

router.put('/:id', (req, res) => {
    clientController.updateClient(req.params.id, req.body);
});

router.delete('/:id', (req, res) => {
    clientController.deleteClient(req.params.id);
});

export default router;