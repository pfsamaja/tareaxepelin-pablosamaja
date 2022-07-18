interface State {
    googleRows: Row[];
    isLoading: boolean;
    sheetId: string;
  }
  
  const initialState: State = {
    googleRows: [],
    sheetId: "",
    isLoading: false,
  };
  
  export enum GoogleActions {
    RequestRows = "REQUEST_ROWS",
    ReceiveRows = "RECEIVE_ROwS",
    AddRow = "ADD_ROW",
    AddId = "ADD_ID",

  }

  const reducer = (
    state: State = initialState,
    { type, payload }: { type: GoogleActions; payload: any }
  ): State => {
    switch (type) {
      case GoogleActions.RequestRows: 
        return { ...state, isLoading: true };
      case GoogleActions.ReceiveRows: 
        return { ...state, googleRows: payload, isLoading: false };
    case GoogleActions.AddRow: 
        return { ...state, googleRows: [
            ...state.googleRows.filter((p) => p.id !== payload.id),
            payload,
          ], };
          case GoogleActions.AddId:
            return { ...state, sheetId: payload };
      default:
        return state;
    }
  };
  
  export default reducer;
  