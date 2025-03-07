
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SKU {
  id: string;
  name: string;
  price: number;
  cost: number;
}

const initialSKUs: SKU[] = [
  { id: "SKU001", name: "Cotton Polo Shirt", price: 139.99, cost: 10.78 },
  { id: "SKU002", name: "Tassel Fringe Handbag", price: 134.99, cost: 20.79 },
  { id: "SKU003", name: "Minimalist Leather Watch", price: 49.99, cost: 49.89 },
  { id: "SKU004", name: "Foldable Travel Hat", price: 194.99, cost: 56.16 },
  { id: "SKU005", name: "Striped Cotton Socks", price: 9.99, cost: 6.91 },
  { id: "SKU006", name: "Sherpa Lined Hooded Coat", price: 174.99, cost: 128.09 },
  { id: "SKU007", name: "Fleece-Lined Parka", price: 59.99, cost: 17.40 },
  { id: "SKU008", name: "Perforated Leather Belt", price: 44.99, cost: 4.50 },
  { id: "SKU009", name: "Yoga Leggings", price: 164.99, cost: 172.58 },
  { id: "SKU010", name: "Graphic Print T-Shirt", price: 109.99, cost: 53.35 },
  { id: "SKU011", name: "Luxury Silk Tie", price: 54.99, cost: 20.95 },
  { id: "SKU012", name: "Silk Embroidered Kimono", price: 74.99, cost: 12.30 },
  { id: "SKU013", name: "Formal Velvet Blazer", price: 194.99, cost: 189.14 },
];

interface SKUState {
  skus: SKU[];
}

const initialState: SKUState = {
  skus: initialSKUs,
};

const skuSlice = createSlice({
    name: "sku",
    initialState,
    reducers: {

      addSKU: (state, action: PayloadAction<SKU>) => {
        state.skus.push(action.payload);
      },
      removeSKU: (state, action: PayloadAction<string>) => {
        state.skus = state.skus.filter(sku => sku.id !== action.payload);
      },
      updateSKU: (state, action: PayloadAction<SKU>) => {
        const index = state.skus.findIndex(sku => sku.id === action.payload.id);
        if (index !== -1) {
          state.skus[index] = action.payload;
        }
      },
    },
  });
  
  export const { addSKU, removeSKU, updateSKU } = skuSlice.actions;
  export default skuSlice.reducer;
  