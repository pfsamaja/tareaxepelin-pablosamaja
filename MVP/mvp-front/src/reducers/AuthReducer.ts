interface State {
  token: string;
  
}

const initialState: State = {
  token: "",
};

export enum AuthActions {
  SetToken = "SET_TOKEN",
  DelToken = "DEL_TOKEN",

}
// el initial state se pone para empezar los estados, las acciones son lo que modifican los estados
const reducer = (
  state: State = initialState,
  { type, payload }: { type: AuthActions; payload: any }
): State => {
  switch (type) {
    case AuthActions.SetToken:
      return { ...state, token: payload };

   case AuthActions.DelToken:
      return { ...state, token: "" };
    default:
      return state;
  }
};

export default reducer;
