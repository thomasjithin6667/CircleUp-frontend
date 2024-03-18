import { Link } from 'react-router-dom';
import './otpPage.css'
function OtpPage() {
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
        

          <form action="" method="post">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs ">
          <div className="w-16 h-16">
            <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-green-700" type="text" name="" id="" />
          </div>
          <div className="w-16 h-16">
            <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-green-700" type="text" name="" id="" />
          </div>
          <div className="w-16 h-16">
            <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-green-700" type="text" name="" id="" />
          </div>
          <div className="w-16 h-16">
            <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-green-700" type="text" name="" id="" />
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