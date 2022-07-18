import { Button, TextField,Card } from "@mui/material";
import { useForm } from "../../../hooks/useForm";
import { useEffect, useState } from "react";
import { getSheets } from "../../../services/googleService";
import { useNavigate } from 'react-router-dom';

import { Routes } from "../../../config/Routes";
const TableView = () => {

    const [loading,setLoading] = useState(false);
    const [link,setLink] = useState("")
    
    const navigate = useNavigate();

    return (
        <div className="ml-5 mr-5 h-screen flex justify-center items-center">
      <Card>
        <div>Ingrese el ID de un link de spreadsheets valido: </div>
        <div>Ejemplo:"1Wr3SotAhBQXB3Au04JvY0Y87kNlsB-rBwjA3SrScBHI" </div>
        <div> para el link https://docs.google.com/spreadsheets/d/1Wr3SotAhBQXB3Au04JvY0Y87kNlsB-rBwjA3SrScBHI/edit#gid=0</div>
        <form 
        onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            const response = await getSheets(link).finally(() => {
            navigate(Routes.LoadedTable)
            setLoading(false);
        })
               
             
            }
            }
        className="flex flex-col justify-center gap-2 mt-2 p-2">
            <TextField
            onChange={
                (e) => {
                    setLink(e.target.value)
                }
            }
                id="link"
                name="link"
                label="Link"
                type="text"
            ></TextField>
            {loading ? (
            <div className="text-center">Cargando</div>
          ) : (
            <Button type="submit" variant="contained">
              Cargar
            </Button>
          )}
        </form>
        </Card>
        
        </div>

    );
    }
export default TableView;