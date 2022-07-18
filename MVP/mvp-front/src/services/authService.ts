import axios from "axios";
import { AuthActions } from "../reducers/AuthReducer";
import store from "../store";
import client from "./client";
const API_URL = process.env.REACT_APP_API_URL;

export const login = async (name: string, password: string) => {
  const {
    data: { token },
  } = await axios.post<{ token: string }>(`${API_URL}auth/login`, {
    name,
    password,
  });

 
  store.dispatch({ type: AuthActions.SetToken, payload: token });
  localStorage.setItem("token", token);
};

export const initLogin = async () => {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      client.get(`${API_URL}auth/validate`, {
        headers: {
          "x-auth-token": token,
        },
      });
      store.dispatch({ type: AuthActions.SetToken, payload: token });
    } catch (error) {
      localStorage.removeItem("token");
      store.dispatch({ type: AuthActions.SetToken, payload: null });
    }
  }
};
