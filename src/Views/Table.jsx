import React from "react";
import MUIDataTable from "mui-datatables";

const options = {
  filterType: "checkbox"
};
const Table = ({ data, config }) => {
  console.log(config);
  const columns = config.feilds;

  return (
    <MUIDataTable
      title={config.name}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default Table;
