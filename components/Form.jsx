import TextInput from './TextInput';
import { mdiAccount , mdiSend } from '@mdi/js';
import Icon from '@mdi/react';
import { useRouter } from 'next/navigation';

const Form = ({  gobacktoMenu , name ,text, value , onChange, errorMessage}) =>{

    const router = useRouter();

    const handleNavigation =() =>{
        return router.push("users/table");
    }


    return (
       <>
      <div className='flex'>
        <TextInput
          name={name}
          placeholder='Please enter your name'
          leftIcon={mdiAccount}
          value={value}
          onChange={onChange}
        />
       
        <button type='submit' className='mt-0.8 ml-2'>
          <Icon path={mdiSend} size={1} color='#D1D5DB' />
        </button>
      </div>
      <select
          className='text-slate-950  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500'
        >
          <option value='1'>Staff</option>
          <option value='2'>Students</option>
          <option value='3'>Other</option>
        </select>
      <p className='text-red-500'>{errorMessage}</p>
      <p className='mt-2'>
        Leave {text} | Go back to{' '}
        <button className='text-green-200 hover:text-lg' onClick={gobacktoMenu}>
          menu
        </button>
      </p>
      <p className='mt-2'>
        Check the{' '}
        <button
          className='text-green-200 hover:text-lg mb-5'
          onClick={handleNavigation}
        >
          List
        </button>
      </p>
    </>
    
    )
};

export default Form