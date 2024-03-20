import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import './otpPage.css'
import { postOTP } from '../../../services/api/user/apiMethods';

function OtpPage() {

  const [otp1, setOtp1] = useState<string>('');
  const [otp2, setOtp2] = useState<string>('');
  const [otp3, setOtp3] = useState<string>('');
  const [otp4, setOtp4] = useState<string>('');
  const navigate = useNavigate();
  const otp1Ref = useRef<HTMLInputElement>(null);
  const otp2Ref = useRef<HTMLInputElement>(null);
  const otp3Ref = useRef<HTMLInputElement>(null);
  const otp4Ref = useRef<HTMLInputElement>(null);

  const handleOtpChange = (
    otp: string,
    setOtp: React.Dispatch<React.SetStateAction<string>>,
    prevRef: React.RefObject<HTMLInputElement> | null,
    nextRef: React.RefObject<HTMLInputElement> | null
  ) => {
    const regex = /^[0-9\b]+$/;
    if (otp === '' || regex.test(otp)) {
      setOtp(otp);
      if (otp === '' && prevRef && prevRef.current) {
        prevRef.current.focus();
      } else if (otp.length === 1 && nextRef && nextRef.current) {
        nextRef.current.focus();
      }
    }
  };



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otp = otp1 + otp2 + otp3 + otp4;
    console.log(otp);
    
  
    postOTP(otp).then((response:any) => {
      const data = response.data
      if(response.status === 200) {
       toast.success(data.message)
        navigate('/home');
      } else {

        console.log(response.message);
        toast.error(data.message)
      }
    }).catch((error) => {
      console.log(error?.message)
    })
  };
  
  return (
    
    <div className="flex h-screen">
      <div id='otp' className="hidden login lg:flex items-center justify-center flex-1 bg-white text-black" >


      </div>

      <div className="w-full  lg:w-1/2 flex items-center justify-center">
        <div className='logo'>   <img src="https://i.postimg.cc/YC7Hwhxb/Screenshot-2024-03-04-151411.png" alt="" /></div>
        
        <div className="max-w-md w-full p-6" >
          <p className="title text-4xl font-black  mb-2 text-black ">OTP verification.</p>
          <h1 className="text-sm  mb-6 text-gray-500 ">We sent a code to samplemail@gmail.com</h1>
          <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
    
          </div>
          <div className="mt-4 text-xs text-gray-600 text-center">
     
          </div>
        

          <form  onSubmit={handleSubmit} method="post">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs ">
          <div className="w-16 h-16">
            <input
             ref={otp1Ref}
             type="text"
             value={otp1}
             onChange={(e) => handleOtpChange(e.target.value, setOtp1, null, otp2Ref)}
             maxLength={1} className= "w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-green-700"  />
          </div>
          <div className="w-16 h-16">
            <input
            ref={otp2Ref}
            type="text"
            value={otp2}
            onChange={(e) => handleOtpChange(e.target.value, setOtp2, otp1Ref, otp3Ref)}
            maxLength={1} 
            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-green-700"  />
          </div>
          <div className="w-16 h-16">
            <input
             ref={otp3Ref}
             type="text"
             value={otp3}
             onChange={(e) => handleOtpChange(e.target.value, setOtp3, otp2Ref, otp4Ref)}
             maxLength={1} 
            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-green-700"  />
          </div>
          <div className="w-16 h-16">
            <input
            ref={otp4Ref}
            type="text"
            value={otp4}
            onChange={(e) => handleOtpChange(e.target.value, setOtp4, otp3Ref, null)}
            maxLength={1}
             className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-green-700" />
          </div>
        </div>

        <div className='flex justify-between  items-center '>
              <div className='flex gap-2  items-center'>
    
<p className='text-xs text-grey-600'>Expires in</p>
              </div>
           
            <p className='text-xs text-red-600'>Resent OTP</p>
          </div>
            <div>
              <button type="submit" className="w-full text-sm bg-green-600 text-white p-3 mt-5 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Verify Account</button>
            </div>
      </div>
    </form>
       
          <div className="mt-4 text-xs text-gray-600 text-center">
            <p>didn't Recive an OTP?  <Link className="font-semibold text-green-600 hover:underline" to="/">Click here</Link> </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtpPage