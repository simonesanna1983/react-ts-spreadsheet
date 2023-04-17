import * as React from 'react';
import Spreadsheet, { RowComponent } from 'react-spreadsheet';
import './style.css';

export default function App() {
  // const data = [
  //   [{ value: "Vanilla" }, { value: "Chocolate" }],
  //   [{ value: "Strawberry" }, { value: "Cookies" }],
  // ];

  const initialValue = [
    [{ value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }],
    [{ value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }],
    [{ value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }],
    [{ value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }],
    [{ value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }],
    [{ value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }],
    [{ value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }],
    [{ value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }],
    [{ value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }],
    [{ value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }],
  ];

  const newRow = [
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
    { value: '' },
  ];

  const newColumn = { value: '' };

  const [data, setData] = React.useState(initialValue);

  const addRow = () => {
    setData([...data, newRow]);
  };

  //   const addColumn = () => {
  // data[0] = data[0][];
  //     setData());
  //   };

  const toJson = () => {
    console.log(JSON.stringify(data, null, 2));
  };

  const reset = () => {
    setData(initialValue);
  };

  return (
    <div>
      <Spreadsheet data={data} onChange={setData}  />
      <br />
      <button onClick={addRow}>Add Row</button>
      <br /> <br /> <br />
      {/* <button onClick={addColumn}>Add Column</button> */}
      <br /> <br /> <br />
      <button onClick={toJson}>Json</button>
      <br /> <br /> <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}
