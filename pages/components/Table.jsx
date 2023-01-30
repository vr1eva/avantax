import React, { useState, useEffect} from 'react';
import styles from "./Table.module.scss";
import arrowDown from "../assets/arrow-down.svg"

export default function Table({ data = [] }) {
  const [dropdown, setDropdown] = useState('department');
  const [selectedOption, setSelectedOption] = useState('');
  const [firstOption, setFirstOption] = useState('');
  const headers = [
    {text: "Nº", key: "id"},
    {text: "Estado", key: "status"},
    {text: "Nivel", key: "level"},
    {text: "Departamento", key: "department"},
    {text: "Provincia", key: "province"},
    {text: "Distrito", key: "district" },
    {text: "Entidad Pública", key: "entity"},
    {text:"Código SNIP", key: "snipCode"},
    {text: "Nombre del proyecto", key: "name" },
    {text: "Tipologia", key: "tipology"},
    {text:"Monto de inversión referencial (en S/. M)", key: "investment"},
    {text: "Tope CIPRL 2022", key: "ciprlMax"}
  ]

  const headerRow = headers.map((header, index) => {
    return (
      <th className={`${styles.tableHeader} `} key={index} onClick={() => setDropdown(header.key)}>{header.text}</th>
    );
  });

  const rows = data.filter((row) => {
    return row[dropdown] === selectedOption;
  }).map((row, index) => {
    const rowData = headers.map((header, index) => {
      return (
        <td className={styles.tableData} key={index}><span>{row[header.key]}</span></td>
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
      <option className={styles.option} key={index}>{value}</option>
    );
  });

  const dropdownMenu = (
    <>
    <div className={styles.dropdownMenu}>
      <p className={styles.filterLabel}><b>Selecciona</b> una cabecera y <b>filtra</b> por categoría</p>
      <select style={{backgroundImage: `url(${arrowDown.src})`}} className={styles.select} onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
        <option hidden={dropdownOptions.length > 0 ? true : false}>Filtrar resultados</option>
        {dropdownOptions}
      </select>
    </div>
    </>
  );

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
    <table cellPadding={0} className={styles.table}>
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
      {dropdownMenu}
    <div className={styles.tableContainer}>
      {table}
    </div>
    </>
  );

}
