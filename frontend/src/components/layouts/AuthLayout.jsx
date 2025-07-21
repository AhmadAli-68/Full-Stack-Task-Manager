import React from 'react'
import LOGIN_IMG from "../../assets/login-img.jpg";

const AuthLayout = ({ children }) => {
    return (
        <div className='flex'>
            <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
                <h2 className='text-lg font-medium text-black'>Task Manager</h2>
                {children}
            </div>


            <img src={LOGIN_IMG} className='hidden md:flex w-[45vw] h-screen items-center justify-center bg-blue-200 bg-cover bg-no-repeat bg-center overflow-hidden p-8' />
        </div>
    )
}

export default AuthLayout
