const ExcelJS = require('exceljs');
import path from 'path';

function goodRow(rowValues) {
    if(!rowValues.length) return false
    return true
}

function processRow(row) {
    return {
        id: row[2],
        status: row[3],
        level: row[4],
        department: row[5],
        province: row[6],
        district: row[7],
        entity: row[8],
        snipCode: row[9],
        name: row[10].slice(0, 30) + "...",
        tipology: row[11],
        investment:  new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(row[12]),
        ciprlMax: (row[13] === "No corresponde")? "No corresponde": new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(row[13]) 
    }
    
}

export default async function handler(req, res) {
    const rows = []
    const xlsxDirectory = path.join(process.cwd(), 'xlsx');
    const workbookReader = new ExcelJS.stream.xlsx.WorkbookReader(xlsxDirectory + '/projects.xlsx', 'utf8');
    for await (const worksheetReader of workbookReader) {
        for await (const row of worksheetReader) {
            if(row.number > 11) {
                goodRow(row.values) && rows.push(processRow(row.values))
            } else continue
            
        }
    }

    res.status(200).json({ workbook: rows })
}