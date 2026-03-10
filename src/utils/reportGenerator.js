import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const generateOrderReport = (order) => {
    try {
        if (!order || !order.items) {
            console.error("Invalid order data provided for report");
            return;
        }

        const doc = new jsPDF();
        const accentColor = [16, 185, 129]; // Emerald-500 equivalent

        // Header Background
        doc.setFillColor(18, 18, 18);
        doc.rect(0, 0, 210, 40, 'F');

        // Title
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(24);
        doc.setFont('helvetica', 'bold');
        doc.text('UXE_STORE', 15, 25);

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('PREMIUM GEAR COLLECTION', 15, 32);

        // Invoice Details
        doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.setFontSize(18);
        doc.text('ORDER REPORT', 140, 25);

        doc.setTextColor(150, 150, 150);
        doc.setFontSize(10);
        doc.text(`Order ID: #${order.id || 'N/A'}`, 140, 32);

        // Customer & Order Info
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('Billing Details:', 15, 55);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        const orderDate = new Date(order.date || order.timestamp || Date.now()).toLocaleString();
        doc.text(`Email: ${order.userEmail || 'N/A'}`, 15, 62);
        doc.text(`Date: ${orderDate}`, 15, 67);
        doc.text(`Status: ${order.status || 'Confirmed'}`, 15, 72);

        // Table
        const tableData = order.items.map(item => [
            item.name || 'Unknown Product',
            `$${(item.price || 0).toFixed(2)}`,
            item.quantity || item.qty || 1,
            `$${((item.price || 0) * (item.quantity || item.qty || 1)).toFixed(2)}`
        ]);

        autoTable(doc, {
            startY: 85,
            head: [['Product', 'Unit Price', 'Qty', 'Total']],
            body: tableData,
            headStyles: {
                fillColor: [18, 18, 18],
                textColor: [255, 255, 255],
                fontStyle: 'bold'
            },
            styles: {
                fontSize: 10,
                cellPadding: 6
            },
            alternateRowStyles: {
                fillColor: [245, 245, 245]
            },
            margin: { left: 15, right: 15 }
        });

        // Totals
        const finalY = (doc).lastAutoTable ? doc.lastAutoTable.finalY + 15 : 150;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('Summary', 140, finalY);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text(`Subtotal:`, 140, finalY + 8);
        doc.text(`$${(order.amount || 0).toFixed(2)}`, 180, finalY + 8, { align: 'right' });

        doc.text(`Shipping:`, 140, finalY + 14);
        doc.text(`FREE`, 180, finalY + 14, { align: 'right' });

        doc.setDrawColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.setLineWidth(0.5);
        doc.line(140, finalY + 18, 195, finalY + 18);

        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.text(`TOTAL:`, 140, finalY + 28);
        doc.text(`$${(order.amount || 0).toFixed(2)}`, 180, finalY + 28, { align: 'right' });

        // Footer
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text('Thank you for choosing UXE_STORE. For support, contact support@uxestore.com', 105, 285, { align: 'center' });

        doc.save(`Order_${order.id || 'Report'}.pdf`);
    } catch (error) {
        console.error("Error generating PDF:", error);
    }
};
