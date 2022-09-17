import React,{useState} from 'react'
import './Login.css';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import Homepage from './Homepage';
export default function Login() {
  const [toggle, settoggle] = useState(false);

  return (
    <div>
        <div className='shopping-wrapper'>
<img src="/shopping.jpg" style={{width:"100%"}}></img>
<div className='login-page-wrapepr'>
 <div className='d-flex'>
  <div className='mailicon text-secondary'><MailIcon/></div>
  <div className='email text-secondary    '><label >Email</label></div>
  </div> 
  <hr></hr>
  <div className='d-flex'>
  <div className='lock text-secondary'><LockIcon/></div>
  <div className='password text-secondary'><label>Password</label></div>
  </div>   <hr></hr>
  <div className='d-flex' style={{justifyContent:"space-between",fontSize:"10px"}}>
    <div className='d-flex'>
      <div className='text-secondary checkcircle-icon'><CheckCircleIcon/></div>
     <div className='text-secondary'>Remember me</div>
     </div>
    <div className='text-secondary'>Forgot password</div>

  </div>
  <div onClick={() => settoggle(!toggle)} className='login mt-4'>Login</div>
  {toggle &&(<Homepage/>)}
  <div className='d-flex text-secondary 'style={{justifyContent:"center",fontSize:"12px"}}>
  <div>Don't have an account ?</div>
  <div className='sign-up'>Sign up</div>
  </div>
</div>
        </div>
    </div>
  )
}
