import axios from "axios";

export const sendEmail = async (idOp: string, tasa:string,email:string) => {
const body = {
    "idOp": idOp,
    "tasa": tasa,
    "email": email
}
const { data:  values  } = await axios.post(`https://hooks.zapier.com/hooks/catch/6872019/oahrt5g/`, body)
return values
}
