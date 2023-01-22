import React, { useState } from 'react';
import { DATA } from '../../constants/data.js';
import styles from "./Table.module.scss";

export default function Table({ data = DATA }) {
  const [dropdown, setDropdown] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const headers = Object.keys(data[0]);

  const headerRow = headers.map((header, index) => {
    return (
      <th className={styles.tableHeader} key={index} onClick={() => setDropdown(header)}>{header}</th>
    );
  });

  const rows = data.filter((row) => {
    return row[dropdown] === selectedOption;
  }).map((row, index) => {
    const rowData = headers.map((header, index) => {
      return (
        <td key={index}>{row[header]}</td>
      );
    });

    return (
      <tr key={index}>{rowData}</tr>
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
      <p className={styles.filterLabel}>Selecciona una cabecera y filtra por categoría</p>
      <select className={styles.select} onChange={(e) => setSelectedOption(e.target.value)}>
        <option hidden={dropdownOptions.length > 0 ? true : false}>Filtrar resultados</option>

        {dropdownOptions}
      </select>
    </div>
  );

  const table = (
    <table className={styles.table}>
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
