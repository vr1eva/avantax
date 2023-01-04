import React from 'react';

export default function Table(props) {
  const { data } = props;
  const headers = Object.keys(data[0]);

  const headerRow = headers.map((header, index) => {
    return (
      <th key={index}>{header}</th>
    );
  });

  const rows = data.map((row, index) => {
    const rowData = headers.map((header, index) => {
      return (
        <td key={index}>{row[header]}</td>
      );
    });

    return (
      <tr key={index}>{rowData}</tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>{headerRow}</tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}
