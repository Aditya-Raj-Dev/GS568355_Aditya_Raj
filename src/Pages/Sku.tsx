import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { SKU, addSKU, removeSKU } from "../store/GS_SKU/SkuSlice";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Box, Flex } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Sku: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const skus = useSelector((state: RootState) => state.sku.skus);
  const RiDeleteBin6LineIcon = RiDeleteBin6Line as React.ElementType;

  const columnDefs: ColDef<SKU>[] = [
    {
      headerName: "",
      cellRenderer: (params: any) => (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          <RiDeleteBin6LineIcon
            onClick={() => dispatch(removeSKU(params.data.id))}
            style={{ cursor: "pointer", fontSize: "20px", marginTop: "10px" }}
          />
        </div>
      ),
      width: 80,
      suppressMovable: true,
    },
    {
      headerName: "Name",
      field: "name",
      flex: 1,
      minWidth: 200,
      cellStyle: { fontWeight: "500" },
    },
    {
      headerName: "Price",
      field: "price",
      width: 120,
      cellStyle: { fontWeight: "500" },
      valueFormatter: (params) => `$${params.value.toFixed(2)}`,
    },
    {
      headerName: "Cost",
      field: "cost",
      width: 120,
      cellStyle: { fontWeight: "500" },
      valueFormatter: (params) => `$${params.value.toFixed(2)}`,
    },
  ];

  // Handler to add a new SKU
  const handleAddSKU = () => {
    const newId = `SKU${(skus.length + 1).toString().padStart(3, "0")}`;
    dispatch(
      addSKU({
        id: newId,
        name: "New Product",
        price: 0.0,
        cost: 0.0,
      })
    );
  };

  return (
    <Box style={{ width: "100%", height: "600px", padding: "10px" }}>
      <div 
        className="ag-theme-alpine"
        style={{ 
          width: "100%", 
          height: "calc(100% - 50px)",
          border: "1px solid #e2e8f0",
          borderRadius: "8px",
          textAlign: "left",
        }}
      >
        <AgGridReact<SKU>
          rowData={skus}
          columnDefs={columnDefs}
          animateRows={true}
          defaultColDef={{
            headerClass: "custom-header-style",
            cellStyle: { 
              borderRight: "1px solid #e2e8f0",
              display: "flex",
            },
          }}
          gridOptions={{
            headerHeight: 48,
            rowHeight: 48,
          }}
        />
      </div>
      <Flex>
        <button
          style={{
            backgroundColor: "#FF9671",
            color: "#FFF",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "14px",
            marginTop: "10px",
          }}
          onClick={handleAddSKU}
        >
          NEW SKU
        </button>
      </Flex>
      {/* Add custom styles for header */}
      <style>
        {`
          .ag-theme-alpine .ag-header {
            border-bottom: 2px solid #e2e8f0 !important;
          }
          .ag-theme-alpine .ag-header-cell {
            background-color: #f7fafc !important;
            font-weight: 600 !important;
            color: #2d3748 !important;
            border-right: 1px solid #e2e8f0 !important;
          }
          .ag-theme-alpine .ag-row:hover {
            background-color: #f7fafc !important;
          }
        `}
      </style>
    </Box>
  );
};

export default Sku;