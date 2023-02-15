import React, { Fragment } from "react";

function WordLength({ values, currentValue, setCurrentValue }) {
  // const values = props.values;
  const selectOptions = values.map((value) => (
    <option value={value} key={value.toString()}>
      {value}
    </option>
  ));

  return (
    <Fragment>
      {/* <label htmlFor={id}>{label}</label> */}
      <select
        defaultValue={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
      >
        {selectOptions}
      </select>
      <br />
    </Fragment>
  );
}

export default WordLength;
