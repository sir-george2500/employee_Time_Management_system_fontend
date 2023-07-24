import TextInput from './TextInput';
import { mdiAccount , mdiSend } from '@mdi/js';
import Icon from '@mdi/react';

const Form = ({  gobacktoMenu , name ,text, value , onChange}) =>(
    <>
    <div className='flex'>
     <TextInput 
      name={name}
      placeholder="Please enter your name"
      leftIcon={mdiAccount}
      value = {value}
      onChange ={onChange}
     />
     <button  
    type='submit'
     className='mt-0.8 ml-2'
     >
     <Icon 
     path={mdiSend} 
     size={1} 
     color='#D1D5DB'     
     />
     </button>
    
    </div>
    <p className='mt-2'>Leave {text} | Go back to <button className='text-green-200 hover:text-lg' onClick={gobacktoMenu}>menu</button></p>
    </>
    
    );

export default Form