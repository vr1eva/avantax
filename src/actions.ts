import path from 'path';
import ExcelJS from "exceljs"

export async function fetchWorkbook() {
    function processRow(row: string[]) {
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
            investment: new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(row[12]),
            ciprlMax: (row[13] === "No corresponde") ? "No corresponde" : new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(row[13])
        }
    }

    function isAGoodRow(rowValues: string[]) {
        if (!rowValues.length) return false
        return true
    }


    const rows = []
    const xlsxDirectory = path.join(process.cwd(), 'xlsx');
    const workbookReader = new ExcelJS.stream.xlsx.WorkbookReader(xlsxDirectory + '/projects.xlsx', 'utf8');
    for await (const worksheetReader of workbookReader) {
        for await (const row of worksheetReader) {
            if (row.number > 11) {
                isAGoodRow(row.values) && rows.push(processRow(row.values))
            } else continue

        }
    }

    if (!rows.length) return {
        error: "No se pudo extraer el workbook."
    }

    return ({ workbook: rows })
}