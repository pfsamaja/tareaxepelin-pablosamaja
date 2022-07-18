import { GoogleSpreadsheetRow } from "google-spreadsheet";
import { sendEmail } from "./xapierService";

const { GoogleSpreadsheet } = require('google-spreadsheet');


export const sheetService =async (sheetId: string) => {
 
    try {
        const doc = new GoogleSpreadsheet(sheetId);
        
  
        await doc.useServiceAccountAuth({
       
          client_email: "test-621@xepelin-pablosamaja.iam.gserviceaccount.com",
          private_key:   "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCwCW6OFkIb1eUs\nAuELItPmPcrKFUfc+V3sJXggE6e3rZVEcYQPYTcFl5nOOYG3ZCIoTqWePA5Awj8D\nG4o1YSf6JNUwvSYER2OETJip5VttTx1EfUHKSfDveELeCjsCcDcYvIe13q/4lgjw\npigxfV1PYefj154tufna6C7moaZgEsh8qE1DEJcyEJsrycb4trQWrroCqI5L6j5V\nsAWFi3BtYKCzzU+OFByqTEc3baKPjC57Ft1BNCjTzVpXutATePvgMULfvyacJ2Ql\n5s2YGDBfKuxe2SdDEjiGgqITn0onvmYf9MSQEGB2AjNj/ofVUcR7WetHZDym2PFC\n2DFl4vUFAgMBAAECggEAJLZm2defBGaco4vbKqMiDZmz9eavxNA1zAa5cXkf6IDZ\nSTuiVsHHw5ENGNLp8Fj//ad/R0uPjmZkVU3USlMfjv3I/1/nMou/36rIyN/mLBsM\nh8jWpG08w/hw+5UnHthPyUciR2XwjZeeuC9y4PVb9S7+OUhxuugXCVYUV/F8/Pp8\nTqepyoaSb9v/VGshtQrKyOqt3uAh5g47J2h7Pa+qjjKoCaDTuIfkSEVC4BEVQ77W\nMAX6hq8X8Idfa3eabjmgsyiA1rvp2he8TBvSgFS1JJsM6COOcQxu1cBFKp8g2ye5\nhprl6RWFzm+2l9OxiT+H8RWEk79jI6CiCVhetbPPiQKBgQD2kiGi28i3jfOZKicF\nIiYpVvF+rtZN/tK/UYEs7mVCfOorQB68QkWyj67JtbL98TGXAva7YgLVJuFZBVRh\nccxoIlAuqqNrc28BQ1xv0HioM2Fkn+4i/08knMauzPhoi/VYnHgKvIexkgfUcCv4\nHgNDvC4u+VhF7jLHwrA3UAgCXQKBgQC2xMo1NHRFBQnsQesqdj/Hz25c3hepBeG4\n8kFxP3q5IEqDZouTez0NfnhKEA+Rq+YLS30AIYhrikirUgQGhdcFbcaOl0mUwKwX\niUGG8PYnrl20brrefkSqPjcCaEf5xRfmIb/pMND9Ej3FZFbFb3czO/iYJ759AeEP\nl6oSQV/iyQKBgEeKWLYO/Oq9BgvPniiwItBlyIXQJp/UqsMV29v0g27KHYtU/FX1\nCJHpfHZMANYLUC8Xjg0KP/YmZMXWdQgc44jnQ8p2ehnoETIVoFFU9F0hI0X13TtM\nRmNCFaeMExsKWLJQG8hJsTlFPH5X2XoRAzN4+xFoCUOo/BTXmRdDYj+FAoGAeEwO\ny/Y6kTM/1MGOh+RNFrbxbS7BY/77E0Bg0ql1nWQjp1lXhTsYdElJ43WuybLbN5P4\nMp3frOjX6+uPurtdS7V1e2UYiVBH9TXia28ule+uvZQka02w5F0O2AbLWRrhIBgW\nuOXoqKnY/pOMiWdUjeRrO7rtJlqWSC0LQ/jDpAECgYEAmjbCfkQy7IRw++QkPFqF\njQbMB2v/vwznXR7Qr+V+6ehePDpsFN9nqByu6n0Fk5us0ES5g9kQoB4fBqpdH3i9\n3iAP5VR8SuW0Rmq8RH4RpArFxAUwVm4x7RrqomcHttoxI9q7mVKtXkvluubCCf4n\nGBQC6fgkAP16Y+Ztj0O5Z8Y=\n-----END PRIVATE KEY-----\n",
          
        });
        
        await doc.loadInfo(); // loads document properties and worksheets
        const sheet = doc.sheetsByIndex[0];
        const rows = await sheet.getRows() as GoogleSpreadsheetRow[];

        const data = []
        for (let i = 0; i < rows.length; i++) {
            
            data[i] = {
                "id": i,
                "idOp": rows[i]._rawData[0],
                "tasa": rows[i]._rawData[1],
                "email": rows[i]._rawData[2],
            };
        }

    return data;
}
catch (error) {
    return error
}

}
export const updateTasa = async (rowId: number, tasa: string, sheetId:string ) =>{
   try {
    const doc = new GoogleSpreadsheet(sheetId);
 

    await doc.useServiceAccountAuth({
   
      client_email: "test-621@xepelin-pablosamaja.iam.gserviceaccount.com",
      private_key:   "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCwCW6OFkIb1eUs\nAuELItPmPcrKFUfc+V3sJXggE6e3rZVEcYQPYTcFl5nOOYG3ZCIoTqWePA5Awj8D\nG4o1YSf6JNUwvSYER2OETJip5VttTx1EfUHKSfDveELeCjsCcDcYvIe13q/4lgjw\npigxfV1PYefj154tufna6C7moaZgEsh8qE1DEJcyEJsrycb4trQWrroCqI5L6j5V\nsAWFi3BtYKCzzU+OFByqTEc3baKPjC57Ft1BNCjTzVpXutATePvgMULfvyacJ2Ql\n5s2YGDBfKuxe2SdDEjiGgqITn0onvmYf9MSQEGB2AjNj/ofVUcR7WetHZDym2PFC\n2DFl4vUFAgMBAAECggEAJLZm2defBGaco4vbKqMiDZmz9eavxNA1zAa5cXkf6IDZ\nSTuiVsHHw5ENGNLp8Fj//ad/R0uPjmZkVU3USlMfjv3I/1/nMou/36rIyN/mLBsM\nh8jWpG08w/hw+5UnHthPyUciR2XwjZeeuC9y4PVb9S7+OUhxuugXCVYUV/F8/Pp8\nTqepyoaSb9v/VGshtQrKyOqt3uAh5g47J2h7Pa+qjjKoCaDTuIfkSEVC4BEVQ77W\nMAX6hq8X8Idfa3eabjmgsyiA1rvp2he8TBvSgFS1JJsM6COOcQxu1cBFKp8g2ye5\nhprl6RWFzm+2l9OxiT+H8RWEk79jI6CiCVhetbPPiQKBgQD2kiGi28i3jfOZKicF\nIiYpVvF+rtZN/tK/UYEs7mVCfOorQB68QkWyj67JtbL98TGXAva7YgLVJuFZBVRh\nccxoIlAuqqNrc28BQ1xv0HioM2Fkn+4i/08knMauzPhoi/VYnHgKvIexkgfUcCv4\nHgNDvC4u+VhF7jLHwrA3UAgCXQKBgQC2xMo1NHRFBQnsQesqdj/Hz25c3hepBeG4\n8kFxP3q5IEqDZouTez0NfnhKEA+Rq+YLS30AIYhrikirUgQGhdcFbcaOl0mUwKwX\niUGG8PYnrl20brrefkSqPjcCaEf5xRfmIb/pMND9Ej3FZFbFb3czO/iYJ759AeEP\nl6oSQV/iyQKBgEeKWLYO/Oq9BgvPniiwItBlyIXQJp/UqsMV29v0g27KHYtU/FX1\nCJHpfHZMANYLUC8Xjg0KP/YmZMXWdQgc44jnQ8p2ehnoETIVoFFU9F0hI0X13TtM\nRmNCFaeMExsKWLJQG8hJsTlFPH5X2XoRAzN4+xFoCUOo/BTXmRdDYj+FAoGAeEwO\ny/Y6kTM/1MGOh+RNFrbxbS7BY/77E0Bg0ql1nWQjp1lXhTsYdElJ43WuybLbN5P4\nMp3frOjX6+uPurtdS7V1e2UYiVBH9TXia28ule+uvZQka02w5F0O2AbLWRrhIBgW\nuOXoqKnY/pOMiWdUjeRrO7rtJlqWSC0LQ/jDpAECgYEAmjbCfkQy7IRw++QkPFqF\njQbMB2v/vwznXR7Qr+V+6ehePDpsFN9nqByu6n0Fk5us0ES5g9kQoB4fBqpdH3i9\n3iAP5VR8SuW0Rmq8RH4RpArFxAUwVm4x7RrqomcHttoxI9q7mVKtXkvluubCCf4n\nGBQC6fgkAP16Y+Ztj0O5Z8Y=\n-----END PRIVATE KEY-----\n",
      
    });
    
    await doc.loadInfo(); // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows() as GoogleSpreadsheetRow[];
    rows[rowId]._rawData[1]=tasa;
    await rows[rowId].save();
    await sendEmail(rows[rowId]._rawData[0],tasa,rows[rowId]._rawData[2])
    return {
        "id": rowId,
        "idOp": rows[rowId]._rawData[0],
        "tasa": tasa,
        "email": rows[rowId]._rawData[2],
    }

   } catch (error) {
    return error
   }

}

