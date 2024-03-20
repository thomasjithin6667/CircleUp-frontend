import { userUrls } from "../endPoints";
import { apiCall } from "./apiCalls";
import { FormValues } from "../../../utils/validation/signupValidation";


export const postRegister = (userData:FormValues) => {
    return new Promise((resolve, reject) => {
        try {
            apiCall("post", userUrls.register, userData).then((response)=>{
                resolve(response);
                console.log("apiMethods"+response);
                
            })
        } catch (error) {
            resolve({status:500, message: "Somethings wrong."})
        }
    })
}

export const postOTP = (otp:{ otp: string })=>{
return new Promise((resolve,reject)=>{
    try {
        apiCall("post", userUrls.registerOtp, otp).then((response)=>{
            resolve(response);
            console.log("apiMethods"+response);
            
        })
        
    } catch (error) {
        resolve({status:500, message: "Somethings wrong."})
        
    }
})
}