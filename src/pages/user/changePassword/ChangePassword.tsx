import './changePassword.css'

function ChangePassword() {
  return (
     
   
    <div className="flex h-screen">
      <div id='login' className="hidden login lg:flex items-center justify-center flex-1 bg-white text-black" >


      </div>

      <div className="w-full  lg:w-1/2 flex items-center justify-center">
        <div className='logo'>   <img src="https://i.postimg.cc/YC7Hwhxb/Screenshot-2024-03-04-151411.png" alt="" /></div>
        
        <div className="max-w-md w-full p-6" >
          <p className="title text-4xl font-black  mb-2 text-black ">Set new password.</p>
          <h1 className="text-sm  mb-6 text-gray-500 ">Please use a strong password</h1>

          <form action="#" method="POST" className="space-y-4">
          
            <div>
              
              <input type="text" id="email" placeholder='Password' name="email" className="mt-5 text-xs p-3 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-green-600 transition-colors duration-300" />
            </div>
            <div>
          
              <input type="password" placeholder='Confirm Password' id="password" name="password" className="mt-1 text-xs p-3 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-green-600 transition-colors duration-300" />
            </div>

            <div>
              <button type="submit" className="w-full text-sm bg-green-600 text-white p-3 mt-5 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Reset Password</button>
            </div>
          </form>
       
  
        </div>
      </div>
    </div>
  )
}

export default ChangePassword