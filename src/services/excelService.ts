import * as XLSX from 'xlsx';

export class ExcelExportService {

    static exportInvoiceData(invoices) {
        const worksheet = XLSX.utils.json_to_sheet(invoices);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Invoices');

        // Define the file name
        const fileName = `invoices_${new Date().toISOString().slice(0, 10)}.xlsx`;

        // Generate buffer
        XLSX.writeFile(workbook, fileName);
    }
}