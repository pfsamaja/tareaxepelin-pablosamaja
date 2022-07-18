import {
    Card,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material"
import EditableLabel from "../../EditableLabel"
import { useAppSelector } from "../../../hooks/storeHooks"
import { updateTasa } from "../../../services/googleService"

const GoogleTable = () => {
    const { isLoading, googleRows }= useAppSelector((s) => s.googleReducer)

    return (
        <Card>
            <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id OP</TableCell>
                  <TableCell>Tasa</TableCell>
                  <TableCell>Email</TableCell>
        
                </TableRow>
              </TableHead>
              <TableBody>
                {googleRows?.length ? (
                    googleRows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>
                                {row.idOp}
                            </TableCell>
                            <TableCell>
                                <EditableLabel
                                    label="tasa"
                                    value={row.tasa}
                                    id="tasa"
                                    onSubmit={async (value) => {
                                        await updateTasa(row.id,value)
                                       
                                    }}
                                    />
                         </TableCell>
                         <TableCell>
                                {row.email}
                         </TableCell>
                      </TableRow>
                    ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={0}>No hay filas</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
    )
}
export default GoogleTable;