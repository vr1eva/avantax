"use client"

import React, { useState, useEffect } from 'react';
import arrowDown from "@/assets/arrow-down.svg"
import { headers } from "@/assets/constants"
import { TableProps, WorkbookRowFilter } from "@/types"

export default function Table({ data }: TableProps) {
    const [dropdown, setDropdown] = useState('department');
    const [selectedOption, setSelectedOption] = useState('');
    const [firstOption, setFirstOption] = useState('');
    const classNames = {
        table: ``,
        tableHeader: ``,
        tableData: ``,
        tableRow: ``,
        tableContainer: ``,
        option: ``,
        dropdownMenu: ``,
        select: ``,
    }
    const headerRow = headers.map((header, index) => {
        return (
            <th className={`${classNames.tableHeader} `} key={index} onClick={() => setDropdown(header.key)}>{header.text}</th>
        );
    });

    const rows = data.filter((row) => {
        return row[dropdown as WorkbookRowFilter] === selectedOption;
    }).map((row, index) => {
        const rowData = headers.map((header, index) => {
            return (
                <td className={classNames.tableData} key={index}><span>{row[header.key as WorkbookRowFilter]}</span></td>
            );
        });

        return (
            <tr className={classNames.tableRow} key={index}>{rowData}</tr>
        );
    });

    const dropdownOptions = data.map((row, index) => row[dropdown as WorkbookRowFilter]).filter((value, index, self) => {
        return self.indexOf(value) === index;
    }).map((value, index) => {
        return (
            <option className={classNames.option} key={index}>{value}</option>
        );
    });



    useEffect(() => {
        if (dropdownOptions.length > 0) {
            setFirstOption(dropdownOptions[0].props.children);
        }
    }, [dropdownOptions]);

    useEffect(() => {
        if (firstOption !== '') {
            setSelectedOption(firstOption);
        }
    }, [firstOption]);

    const table = (
        <table cellPadding={0} className={classNames.table}>
            <thead>
                <tr>{headerRow}</tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );

    return (
        <>
            <DropdownMenu options={dropdownOptions} />
            <div className={classNames.tableContainer}>
                {table}
            </div>
        </>
    );

}

function DropdownMenu({ options }: DropdownMenuProps) {
    const classNames = {
        filterLabel: ``,
        dropdownMenu: ``,
        select: ``

    }

    return (
        < div className={classNames.dropdownMenu} >
            <p className={classNames.filterLabel}><b>Selecciona</b> una cabecera y <b>filtra</b> por categoría</p>
            <select style={{ backgroundImage: `url(${arrowDown.src})` }} className={classNames.select} onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
                <option hidden={options.length > 0 ? true : false}>Filtrar resultados</option>
                {options}
            </select>
        </div >
    )
}
