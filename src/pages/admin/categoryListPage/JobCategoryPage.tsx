import { ShieldAlert, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { addJobCategory,getJobCategory,blockJobCategory} from "../../../services/api/admin/apiMethods";
import { Pagination } from 'flowbite-react'

function JobCategoryPage() {
  const [loading, setLoading] = useState(true);
  const [jobCategories, setjobCategories] = useState<any[]>([]);
  const [jobCategory,setJobCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
 

  useEffect(() => {
    const fetchJobCategory = async () => {
      setLoading(true);
      try {
        const response: any= await getJobCategory(currentPage);
        const { jobCategory: jobCategory, totalPages: fetchedTotalPages } = response.data;
        setjobCategories(jobCategory);
        setTotalPages(fetchedTotalPages);
      } catch (error:any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobCategory();
  }, [currentPage]);


  const handleSubmit = async () => {
    if (jobCategory.trim() === '') {
      toast.error("Provide a Job Category");
      return;
    }
 
    try {
      await addJobCategory({ jobCategory: jobCategory }).then((response:any)=>{
        const jobCategoryData = response.data;
        setjobCategories(jobCategoryData.jobCategory);
        setJobCategory('');
        toast.info("Job Category Added");
      }).catch((error)=>{
        toast.error(error.message)
      })
     
    } catch (error:any) {
      console.log(error.message);
      toast.error("Failed to add hashtag");
    }
  }

  const handlejobCategoryBlock = (jobCategoryId: string,status:string) => {
    try {
      const requestData = { jobCategoryId };
      blockJobCategory(requestData)
        .then((response: any) => {
          const data = response.data;
          if(status=="block"){
            toast.error(data.message);
          }else{
            toast.info(data.message);

          }
            setjobCategories(prevUsers =>
            prevUsers.map(jobCategory => {
              if (jobCategory._id === jobCategoryId) {
                return { ...jobCategory, isBlocked: !jobCategory.isBlocked };
              }
              return jobCategory;
            })
          );
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (err:any) {
      toast.error(err.message);
    }
  }



const onPageChange = (page: number) => {
  setCurrentPage(page);
};


  return (
    <div  className='w-full border-collapse rounded-lg  pe-6 '>

    <div className="w-full border-collapse rounded-lg  overflow-hidden  ms-5"  style={{height:'550px',width:'1200px'}}>
    <table className=" w-full border-collapse bg-white text-left text-sm text-gray-500 mt-5">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-xs text-gray-900">
              Category
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-xs text-gray-900">
              Jobs
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-xs text-gray-900">
              Date
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-xs text-gray-900">
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium flex justify-center text-xs text-gray-900"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100 ">
          {jobCategories.length && jobCategories.map((jobCategory: any) => (
    
        <tr key={jobCategory._id} className="hover:bg-gray-50">
          <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
            <div className="text-xs">
              <div className="font-medium text-gray-700">{jobCategory.jobCategory}</div>
            </div>
          </th>
          <td className="px-6 py-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
              {jobCategory.jobs.length}
            </span>
          </td>
          <td className="px-6 py-4 text-xs">
            {jobCategory.date}
          </td>

          <td className=" text-xs px-6 py-4">{jobCategory.isBlocked?(<span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-1 text-xs font-semibold text-red-600">
            Blocked
                </span>):(<span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
            UnBlocked
                </span>)}</td>

         
          <td className="px-6 py-4">
            <div className="flex justify-end gap-4">
            {jobCategory.isBlocked?(<button style={{width:'110px'}}  type="button"
            onClick={() => handlejobCategoryBlock(jobCategory._id,"unblock")}
className="text-xs  bg-white text-green-600 hover:bg-gray-100 border border-gray-200  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2">
              <ShieldCheck size={18} />UnBlock
</button>):(<button style={{width:'110px'}}  type="button" onClick={() => handlejobCategoryBlock(jobCategory._id,"block")} className="text-xs bg-white text-red-600 hover:bg-gray-100 border border-gray-200  focus:outline-none  font-medium rounded-lg  ps-7 py-2.5 text-center inline-flex items-center  me-2 mb-2">
<ShieldAlert size={18} />  Block
</button>)}

              
              
              
            </div>
          </td>
        </tr>
    ))}
          {/* Additional rows can be added here */}
        </tbody>
      </table>
  
    </div>
        <div className="pagnation flex justify-end mt-5 pe-12">
        <Pagination className='text-xs ' currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
      </div>
      </div>
  
  );
}

export default JobCategoryPage;