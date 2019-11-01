import React from "react";
import Layout from "./Layout";
import Table from "../Views/Table";
import { getModelConfig } from "../Helper/table";
const MODEL_NAME = "Users";
const Users = () => {
  const config = getModelConfig(MODEL_NAME);
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    async function fetch() {
      //  await //TODO call here
      setData([
        { username: "Mina", email: "mina@yahoo.com"  , id:0},
        { username: "Micho", email: "micho@yahoo.com" , id:1},
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
