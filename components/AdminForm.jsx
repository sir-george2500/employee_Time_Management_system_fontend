import TextInput from './TextInput';
import { mdiAccount , mdiEye, mdiLock } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react'

const AdminForm = ({name, text, value, errorMessage, onChange,formik }) => {
  return (
    <>
    <TextInput
    name={name}
    placeholder='Please enter your name'
    leftIcon={mdiAccount}
    value={value}
    onChange={onChange}

    />
    <TextInput
    name={name}
    placeholder='Please Enter your password'
    leftIcon={mdiLock}
    rightIcon={mdiEye}
    value={value}
    onChange={onChange}
    />
    </>
  )
}

export default AdminForm