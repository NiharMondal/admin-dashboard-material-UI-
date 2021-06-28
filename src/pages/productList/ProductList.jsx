import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import React, { useState } from "react";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import "./ProductList.css";
const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productList_item">
            <img className="productList_img" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 230 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "price",
      headerName: "Price",
      width: 190,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <React.Fragment>
            <Link to={"/product/" + params.row.id}>
              <button className="productList_edit">Edit</button>
            </Link>
            <DeleteOutline
              onClick={() => handleDelete(params.row.id)}
              className="productList_delete"
            />
          </React.Fragment>
        );
      },
    },
  ];
  return (
    <div className="product_list">
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

export default ProductList;
