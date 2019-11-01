import React from "react";
import MUIDataTable from "mui-datatables";
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import { GREEN } from '../Conestants/color'
const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}))

const Table = ({ data, config }) => {
  const classes = useStyles2()
  const options = {
    expandableRowsOnClick: true,
    onCellClick: console.log("on click"),
    filter: false,
    print: false,
    download: false,
    onRowsDelete: deletedRows => {
      console.log('should delete')
    },
    customToolbar: () => {
      return (
        <React.Fragment>
          <Fab
            color="primary"
            aria-label="add"
            className={classes.fab}
            onClick={()=>console.log("click here")}
            size="small"
            style={{ backgroundColor: GREEN }}
          >
            <AddIcon />
          </Fab>
        </React.Fragment>
      )
    },
    textLabels: {
      toolbar: {
        viewColumns: 'Sort by',
      },
      viewColumns: {
        title: 'Sort by',
        titleAria: 'Sort by',
      },
    },
  }
  console.log(config);
  const columns = config.feilds.filter(feild=> feild.show);

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
