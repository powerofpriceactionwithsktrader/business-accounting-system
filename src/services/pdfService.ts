import express from 'express';

export class PDFService {
    static generateInvoicePDF(invoiceData: any): Buffer {
        // Generate PDF buffer from invoice data
        const pdfContent = Buffer.from('PDF content would be generated here');
        return pdfContent;
    }

    static addBusinessHeader(doc: any, businessName: string, gstin: string, logo?: string): void {
        // Add business header to PDF
doc.fontSize(20).text(businessName, { align: 'center' });
        doc.fontSize(10).text(`GSTIN: ${gstin}`, { align: 'center' });
        if (logo) {
            doc.image(logo, 50, 50, { width: 100 });
        }
    }

    static addInvoiceDetails(doc: any, invoiceNumber: string, invoiceDate: string, dueDate: string): void {
        // Add invoice details
doc.fontSize(12).text(`Invoice #${invoiceNumber}`);
        doc.text(`Date: ${invoiceDate}`);
        doc.text(`Due Date: ${dueDate}`);
    }

    static addItemsTable(doc: any, items: any[]): void {
        // Add line items table
doc.fontSize(10);
        doc.text('Item Details');
        items.forEach((item: any) => {
            doc.text(`${item.description} - ${item.quantity} x ${item.rate} = ${item.amount}`);
        });
    }

    static addGSTBreakdown(doc: any, baseAmount: number, cgst: number, sgst: number, total: number): void {
        // Add GST breakdown
doc.fontSize(10).text('GST Breakdown');
        doc.text(`Base Amount: ${baseAmount}`);
        doc.text(`CGST (9%): ${cgst}`);
        doc.text(`SGST (9%): ${sgst}`);
        doc.text(`Total: ${total}`);
    }
}

export default PDFService;