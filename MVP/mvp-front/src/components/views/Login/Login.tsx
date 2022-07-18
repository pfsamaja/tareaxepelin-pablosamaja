import { Card, TextField, Button } from "@mui/material";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Routes } from "../../../config/Routes";
import { useAppSelector } from "../../../hooks/storeHooks";
import { useForm } from "../../../hooks/useForm";
import { login } from "../../../services/authService";

const Login: React.FC = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const loggedIn = useAppSelector((s) => !!s.authReducer.token);
  const [values, , handleChange] = useForm(initialValues);
  const [loading, setloading] = useState(false);

  if (loggedIn) {
    return <Navigate to={Routes.Table} />;
  }

  return (
    <div className="ml-5 mr-5 h-screen flex justify-center items-center">
      <Card>
        <div className="flex justify-center">
        <img src="xepelin-logo.jpeg" ></img>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setloading(true);
            login(values.email, values.password).finally(() =>
              setloading(false)
            );
          }}
          className="flex flex-col justify-center gap-2 mt-2 p-2"
        >
          <TextField
            onChange={handleChange}
            id="email"
            name="email"
            label="Email"
          ></TextField>
          <TextField
            onChange={handleChange}
            id="password"
            name="password"
            label="Contraseña"
            type="password"
          ></TextField>
          {loading ? (
            <div className="text-center">Cargando</div>
          ) : (
            <Button type="submit" variant="contained">
              Login
            </Button>
          )}
        </form>
      </Card>
    </div>
  );
};

export default Login;
