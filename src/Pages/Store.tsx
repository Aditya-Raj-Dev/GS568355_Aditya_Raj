import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { Store, removeStore, addStore, reOrderStore } from "../store/GS_Store/storeSlice";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Box, Flex } from "@chakra-ui/react";
import { RiDeleteBin6Line } from "react-icons/ri";

const StoreGrid: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const stores = useSelector((state: RootState) => state.store.stores);

    const RiDeleteBin6LineIcon = RiDeleteBin6Line as React.ElementType;

  const columnDefs: ColDef<Store>[] = [
    {
      headerName: "",
      cellRenderer: (params: any) => (
        <div style={{ display: "flex", justifyContent:"center",alignItems:"center", width: "100%",}}>
          <RiDeleteBin6LineIcon
            onClick={() => dispatch(removeStore(params.data.id))}
            style={{ cursor: "pointer", fontSize: "20px",marginTop:"10px" }}
          />
        </div>
      ),
      width: 80,
      suppressMovable: true,
    },
    {
      headerName: "S.No",
      field: "seqNo",
      width: 70,
      cellStyle: { fontWeight: "500" },
    },
    {
      headerName: "Store",
      field: "label",
      flex: 1,
      minWidth: 150,
      cellStyle: { fontWeight: "500", },
    },
    {
      headerName: "City",
      field: "city",
      width: 150,
      cellStyle: { fontWeight: "500" },
    },
    {
      headerName: "State",
      field: "state",
      width: 100,
      cellStyle: { fontWeight: "500" },
    },
   
  ];

  // Handler to add a new store
  const handleAddStore = () => {
    const newSeqNo = stores.length + 1;
    dispatch(
      addStore({
        seqNo: newSeqNo,
        id: `ST${newSeqNo}`,
        label: "New Store",
        city: "New City",
        state: "XX"
      })
    );
  };

  // Handler to reorder after row drag
  const onRowDragEnd = (params: any) => {
    const newOrder: Store[] = [];
    params.api.forEachNode((node: any) => newOrder.push(node.data));
    dispatch(reOrderStore(newOrder));
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
          textAlign:"left",
          
        }}
      >
        <AgGridReact<Store>
          rowData={stores}
          columnDefs={columnDefs}
          rowDragManaged={true}
          animateRows={true}
          onRowDragEnd={onRowDragEnd}
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
          marginTop:"10px",
          
        }}
        onClick={handleAddStore}
      >
        NEW STORE
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

export default StoreGrid;