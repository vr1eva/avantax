import React, { useState } from 'react';
import { DATA } from '../../constants/data.js';
import styles from "./Table.module.scss";
import arrowDown from "../assets/arrow-down.svg"
import * as fs from "fs";
import { readFile, set_fs } from "xlsx";
import { read, writeFileXLSX } from "xlsx";

export async function getServerSideProps(context) {
  set_fs(fs);

  const workbook = readFile("../assets/projects.xlsx");

  return {
    props: {workbook}, // will be passed to the page component as props
  }
}

export default function Table({ data = DATA , workbook}) {
  const [dropdown, setDropdown] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const headers = Object.keys(data[0]);
  

  const headerRow = headers.map((header, index) => {
    return (
      <th className={`${styles.tableHeader} ${header}`} key={index} onClick={() => setDropdown(header)}>{header}</th>
    );
  });

  const rows = data.filter((row) => {
    return row[dropdown] === selectedOption;
  }).map((row, index) => {
    const rowData = headers.map((header, index) => {
      return (
        <td className={styles.tableData} key={index}><span>{row[header]}</span></td>
      );
    });

    return (
      <tr className={styles.tableRow} key={index}>{rowData}</tr>
    );
  });

  const dropdownOptions = data.map((row, index) => row[dropdown]).filter((value, index, self) => {
    return self.indexOf(value) === index;
  }).map((value, index) => {
    return (
      <option key={index}>{value}</option>
    );
  });

  const dropdownMenu = (
    <div className={styles.dropdownMenu}>
      <p className={styles.filterLabel}><b>Selecciona</b> una cabecera y <b>filtra</b> por categoría</p>
      <select style={{backgroundImage: `url(${arrowDown.src})`}} className={styles.select} onChange={(e) => setSelectedOption(e.target.value)}>
        <option hidden={dropdownOptions.length > 0 ? true : false}>Filtrar resultados</option>
        {dropdownOptions}
      </select>
    </div>
  );

  const table = (
    <table border="" className={styles.table}>
      <thead>
        <tr>{headerRow}</tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );

  return (
    <div className={styles.tableContainer}>
      {dropdownMenu}
      {table}
    </div>
  );

}
