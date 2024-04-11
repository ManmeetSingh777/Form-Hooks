import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import {useForm} from 'react-hook-form'



function App() {

  const {register,handleSubmit, formState:{errors}}=useForm();
  const [field,setField] = useState();
  const[submitted,setSubmit]=useState(false)
  const doneSubmit=(data)=>{
    setField(data)
    setSubmit(true)
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit(doneSubmit)}>
        {submitted?<div className="successs-message">Registartion Successful!</div>:null}
  
   
    <input 
    type="text" 
    placeholder='first name' 
    className='form-field'
    {...register('firstName',{required:"First Name is required!"})}/>

    <span>{errors.firstName?.message}</span>
    
    
    <input 
    type="text" 
    placeholder='last name' 
    className='form-field'
    {...register('lastName',{required:"Last Name is required!"})}/>

<span>{errors.lastName?.message}</span>

    
   
     
  
  
    <input 
    type="Password" 
    placeholder='Password'
    className='form-field'
    {...register('Password',{required:"Password is required!",
  minLength:{value:4,message:"Password must be more than 4 characters"},
  maxLength:{value:20,message:"Password cannot be more than 20 characters"}})}
    />

<span>{errors.Password?.message}</span>
   
    
    <input 
    type="email" 
    placeholder='current mail' 
    className='form-field'
    {...register('email',{required:"Email is required!"})}
    />
     <span>{errors.email?.message}</span>
    
  
    <button type ="submit">Register</button>
  </form>
    </>
  )
}

export default App
