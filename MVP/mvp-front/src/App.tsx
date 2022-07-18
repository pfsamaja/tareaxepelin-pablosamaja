import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes as AppRoutes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { Routes } from "./config/Routes";
import { initLogin } from "./services/authService";
import Login from "./components/views/Login/Login";
import TableView from "./components/views/TableView/TableView";
import GoogleTable from "./components/views/TableView/GoogleTable";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const init = async () => {
      setLoading(true);
      initLogin().finally(() => setLoading(false));
    };
    init();
  }, []);

  return (
    <BrowserRouter>
    <AppRoutes>
    <Route
              path={Routes.Table}
              element={<ProtectedRoute element={<TableView></TableView>}></ProtectedRoute>}
            ></Route>
     <Route
              path={Routes.LoadedTable}
              element={<ProtectedRoute element={<GoogleTable></GoogleTable>}></ProtectedRoute>}
            ></Route>
    

            <Route path={Routes.Login} element={<Login />}></Route>
            
          </AppRoutes>
        
    </BrowserRouter>
  );
}

export default App;
