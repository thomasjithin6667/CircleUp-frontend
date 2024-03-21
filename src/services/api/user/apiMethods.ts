import { userUrls } from "../endPoints";
import { apiCall } from "./apiCalls";
import { FormValues } from "../../../utils/validation/signupValidation";

//@dec      user Registration
//method    POST

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


//@dec      Verify  Otp
//method    POST

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


//@dec      Resend Otp
//method    POST

export const postResendOTP = (email:{email:string})=>{
    return new Promise((resolve)=>{
        try {
            console.log(email)
            apiCall("post", userUrls.resendOtp, email).then((response)=>{
                
                resolve(response);
                console.log("apiMethods"+response);
            })
            
        } catch (error) {
            resolve({status:500, message: "Somethings wrong."})
            
        }
    })
    }




    
//@dec      Login user
//method    POST

export const postLogin = (userData:{email:string,password:string}) => {
    return new Promise((resolve, reject) => {
        try {
            apiCall('post', userUrls.login, userData).then((response)=>{
                resolve(response);
            }).catch((err)=>{
                reject(err);
            })
        } catch (error) {
            resolve({ status: 500, message:"Somethings wrong." });
        }
    })

}



//@dec      Google signup  user
//method    POST

export const  googleAuthenticate = (userData:{username:string,email:string,imageUrl:string}) => {
    return new Promise((resolve, reject) => {
        try {
            apiCall('post', userUrls.googleAuth, userData).then((response)=>{
                resolve(response);
            }).catch((err)=>{
                reject(err);
            })
        } catch (error) {
            resolve({ status: 500, message:"Somethings wrong." });
        }
    })

}