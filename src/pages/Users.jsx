import React from "react";
import Layout from "./Layout";
import Table from "./Table";
const Users = () => {
  const DataTable = {
    name: "Users",
    data: [{ fname: "Mina", lname: "Makar", birthYear: 1987}],
    columns:[
        { title: "First Name", field: "fname" },
        { title: "Last Name", field: "lname" },
        { title: "Date of Birth", field: "birthYear", type: "numeric" },
      ]
  };
  return (
    <Layout>
      <Table {...DataTable} ></Table>
    </Layout>
  );
};

export default Users;
