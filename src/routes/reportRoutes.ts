import { Router } from 'express';
import reportController from '../controllers/reportController';

const router = Router();

router.get('/monthly/:month/:year', (req, res) => {
    reportController.getMonthlyReport(req.params.month, req.params.year);
});

router.get('/yearly/:year', (req, res) => {
    reportController.getYearlyReport(req.params.year);
});

router.get('/gst/:startDate/:endDate', (req, res) => {
    reportController.getGSTReport(req.params.startDate, req.params.endDate);
});

router.get('/client-revenue/:clientId', (req, res) => {
    reportController.getClientRevenueReport(req.params.clientId);
});

router.post('/export-pdf', (req, res) => {
    reportController.exportReportAsPDF(req.body);
});

router.post('/export-excel', (req, res) => {
    reportController.exportReportAsExcel(req.body);
});

export default router;