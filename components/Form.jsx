import TextInput from './TextInput';
import { mdiAccount , mdiSend } from '@mdi/js';
import Icon from '@mdi/react';

const Form = ({gobacktoMenu , text}) =>(
    <>
    <div className='flex'>
     <TextInput 
      placeholder="Please enter your name"
      leftIcon={mdiAccount}
     />
     <button   className='mt-0.8 ml-2'>
     <Icon 
     path={mdiSend} 
     size={1} 
     color='#D1D5DB'     
     />
     </button>
    
    </div>
    <p>Leave {text} | Go back to <button onClick={gobacktoMenu}>menu</button></p>
    </>
    
    );

export default Form