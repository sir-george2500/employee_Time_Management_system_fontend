import TextInput from './TextInput';
import { mdiAccount , mdiEye, mdiLock } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react'

const AdminForm = ({name, text, value, errorMessage, onChange,formik }) => {
  return (
    <>
    <h1 className='mb-4 font-bold'>Login as Admin</h1>
    <div>
    <TextInput
    name={name}
    label={"username *"}
    placeholder='username'
    leftIcon={mdiAccount}
    value={value}
    onChange={onChange}

    />

    <TextInput
    name={name}
    label={"Password *"}
    placeholder='password'
    leftIcon={mdiLock}
    rightIcon={mdiEye}
    value={value}
    onChange={onChange}
    type="password"
    /> 
    <div class="flex mt-4 justify-center">
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-40">Login</button>
    </div>


    </div>
    </>
  )
}

export default AdminForm
