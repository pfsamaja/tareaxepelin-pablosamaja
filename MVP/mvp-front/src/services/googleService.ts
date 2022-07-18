import axios from "./client";
import store from "../store";
import { GoogleActions } from "../reducers/GoogleReducer";
const API_URL = process.env.REACT_APP_API_URL;


export const getSheets = async (sheetId: string) => {
    store.dispatch({ type: GoogleActions.RequestRows, payload: {} });
    const { data:  values  } = await axios.get<Row[]>(`${API_URL}google/${sheetId}`);
    store.dispatch({
        type: GoogleActions.ReceiveRows,
        payload: values,
      });
      store.dispatch({
        type: GoogleActions.AddId,
        payload: sheetId,
      });
}
export const updateTasa = async (rowId: number, tasa: string) => {
    const sheetId = store.getState().googleReducer.sheetId; 
    const dataToSend = {
        rowId,
        tasa,
        sheetId,
    }
    const { data:  values  } = await axios.patch<Row>(`${API_URL}google/update`, dataToSend);
    store.dispatch({
        type: GoogleActions.AddRow,
        payload: values,
      });
}
