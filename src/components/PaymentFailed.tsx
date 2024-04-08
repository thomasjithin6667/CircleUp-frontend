import animationData from '../assets/failed_Animation - 1712510380921.json';
import Lottie from 'lottie-react';
import { Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { initiateCheckout } from '../services/api/user/apiMethods';


function PaymentFailed() {
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      const sessionId = localStorage.getItem('sessionId');
      if (sessionId) {
        triggerApiFunction(sessionId);
      } else {
        navigate('/premium/plans');
      }
    }, 2000); 

    return () => {
      clearTimeout(timeout); 
      localStorage.removeItem('sessionId');
     
    };
  }, [navigate]); 

  const triggerApiFunction = (sessionId:any) => {
    console.log('Triggering API function with sessionId:', sessionId);

    setIsSuccess(true)
  };

  const selectUser = (state: any) => state.auth.user || "";
  const user = useSelector(selectUser) || "";
  const userId = user._id || "";
  const [loading, setLoading] = useState(false);
const makePayment=async()=>{
  const stripe =await loadStripe("pk_test_51P2lOoSGck1zxwUlgof9TiU1LL1UbU9UwOQvfYzGOvhJUUGL467yRorloU9iiia4QPj45N34VPsSXodvwmiitfGw00KIwbAsdM")
     
  try {
      setLoading(true);

      initiateCheckout({userId}).then((response: any) => {
        const stripeId = response.data.id;
        localStorage.setItem('sessionId', stripeId);
        setLoading(false);
        const result=stripe?.redirectToCheckout({
          sessionId:stripeId
        })
        console.log(result);
      
      })

      .catch((error) => {
        console.log(error?.message);
      });
    } catch (error) {
      console.log(error);
    }


}

  return (
    <>
      {isSuccess ? (
        <div className="success rounded-2xl  bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8 flex flex-col items-center">
            <p className="text-base font-semibold text-red-600">Payment Unsuccessful</p>
        <div style={{width:"228px"}} className=' flex justify-center'>
        <Lottie animationData={animationData} loop={false} />
        </div>
              
           
            <a  onClick={makePayment} className=" block w-full rounded-md bg-white border px-3 py-3 text-center text-sm font-semibold text-red-600 shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
             
            {loading&&(
      <Spinner className="me-2" color="failure" aria-label="Medium sized spinner example" size="md" />
     )}
              Try again
            </a>
            <p className="mt-6 text-xs leading-5 text-gray-600">
              Invoices and receipts available for easy company reimbursement
            </p>
          </div>
        </div>
      ) : (
        <div className="loading rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-600 animate-pulse">Payment Processing</p>
            <div className='flex justify-center items-center mt-5' >
            <p className="mt-6 flex items-baseline justify-center gap-x-2" >
              <span className="text-5xl font-bold tracking-tight text-gray-900">₹ 249</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">/mo</span>
            </p>

            </div>
        
            <button
              disabled={true}
              className="mt-10 block w-full rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Spinner color="success" aria-label="Medium sized spinner example" size="md" /> Get access
            </button>
            <p className="mt-6 text-xs leading-5 text-gray-600">
              Invoices and receipts available for easy company reimbursement
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentFailed;
