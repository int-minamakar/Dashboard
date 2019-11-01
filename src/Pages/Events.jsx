import React from "react";
import Layout from "./Layout";
import Table from "../Views/Table";
import { getModelConfig } from "../Helper/table";
const MODEL_NAME = "Events";
const Users = () => {
  const config = getModelConfig(MODEL_NAME);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    async function fetch() {
      //  await //TODO call here
      setData([
        { title: "Test Title", description: "mina@yahoo.com"  , id:0 , startdate:"2007-10-11"},
        { title: "Micho", description: "micho@yahoo.com"  , id:1 , startdate:"2007-10-11"},
      ])
    }
    fetch();
  },[]);
  return (
    <Layout>
      <Table data={data} config={config}></Table>
    </Layout>
  );
};

export default Users;
