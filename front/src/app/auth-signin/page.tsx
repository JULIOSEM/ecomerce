import React from 'react'
import LoginComponent from '@/components/Signin/Signin';

export default function AuthSignIn() {
  return (
    <div className='flex flex-col mt-8 md:flex-row md:self-center 
                    min-w-full md:items-center md:justify-evenly'>
       <div className='flex-1 mt-8 md:mt-0'>
        <LoginComponent />
       </div>
    </div>
  );
}