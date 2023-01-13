import React, { useState } from 'react';
import { DATA } from './data.js';

export default function Table({ data = DATA }) {
  const [dropdown, setDropdown] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const headers = Object.keys(data[0]);

  const headerRow = headers.map((header, index) => {
    return (
      <th key={index} onClick={() => setDropdown(header)}>{header}</th>
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
    <>
      <p>Filtrando por {dropdown}</p>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        {dropdownOptions}
      </select>
    </>
  );

  const table = (
    <table>
      <thead>
        <tr>{headerRow}</tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );

  return (
    <div>
      {dropdownMenu}
      {table}
    </div>
  );

}
