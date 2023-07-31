import Link from "next/link";
import { useRouter } from 'next/navigation';



const Menu = ({ goToTimeIn =null, goToTimeOut = null }) => {

  const router = useRouter();

  const handleGoTable = () => {
    router.push('/users/table');
  };
 return (
  <>
    
    <div className='flex'>
      {/* Your Time In button */}
      <button
        type="button"
        className={`text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mt-2`}
        style={{ width: '150px', height: '50px' }} 
        onClick={goToTimeIn}
      >
        Time In
      </button>
    </div>
    <div className='mt-4'>
      {/* Your Time Out button */}
      <button
        type="button"
        className={`text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4`}
        style={{ width: '150px', height: '50px' }} 
        onClick={goToTimeOut}
      >
        Time Out
      </button>
      <p>Check the List <Link href="users/table">List</Link></p>
    </div>
  </>
);

 }

export default Menu;