import React from 'react';
import './UserList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {
  const [data, setData] = useState(userRows);
  
  const handleDelete = (id) => {
    setData(data.filter(item=>item.id !==id))
  }
  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userList_user">
            <img className="userList_img" src={params.row.avator} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 230 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "transaction",
      headerName: "Transactions",
      width: 190,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <Link to={"/user/" + params.row.id}>
              <button
                className="userList_edit">Edit
              </button>
            </Link>
            <DeleteOutline
              onClick={()=>handleDelete(params.row.id)}
              className="userList_delete" />
          </React.Fragment>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;