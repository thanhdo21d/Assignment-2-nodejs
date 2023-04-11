import { useForm } from 'react-hook-form'
import axios from 'axios';
import React from 'react'
import { signup } from '../api/product';
import { useNavigate } from 'react-router-dom';
function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm<{ name: string, email: string, password: string, confirmPassword: string }>()
    const onSubmit = async (data: { name: string, email: string, password: string, confirmPassword: string }) => {
        const response = await axios.post(" http://localhost:8080/api/signup", data)
        console.log(response)

    }
    const navigate = useNavigate()
    return (
        <div className='mx-auto  w-[600px] h-[600px] bg-slate-200 text-center'>
            <div className="flex">
                <div className="form w-[400px] bg-slate-200">
                    <form className='py-[50px]' onSubmit={handleSubmit(onSubmit)} >
                        <div className="m-[20px]">
                            <div className=" text-start pl-[38px] mb-[10px]">
                                <label htmlFor="">Name:</label>
                            </div>
                            <input {...register('name')} className='h-[30px] w-[300px] border-[1px] border-slate-500 rounded-lg' type="text" />
                            <p className=" text-red-600 text-[10px]">
                                {errors.name && errors.name.message}
                            </p>
                        </div>
                        <div className="m-[20px]">
                            <div className=" text-start pl-[38px] mb-[10px]">
                                <label htmlFor="">Email:</label>
                            </div>

                            <input {...register('email')} className='h-[30px] w-[300px] border-[1px] border-slate-500 rounded-lg' type="email" />
                            <p className=" text-red-600 text-[10px]">
                                {errors.email && errors.email.message}
                            </p>
                        </div>
                        <div className="mb-[30px]">
                            <div className=" text-start pl-[60px] mb-[10px]">
                                <label htmlFor="">Password:</label>
                            </div>
                            <input  {...register('password')} className='h-[30px] w-[300px] border-[1px] border-slate-500 rounded-lg' type="password" />
                            <p className=" text-red-600 text-[10px]">
                                {errors.password && errors.password.message}
                            </p>
                        </div>
                        <div className="mb-[30px]">
                            <div className=" text-start pl-[60px] mb-[10px]">
                                <label htmlFor="">confirmPassword:</label>
                            </div>
                            <input {...register('confirmPassword')} className='h-[30px] w-[300px] border-[1px] border-slate-500 rounded-lg' type="password" />
                            <p className=" text-red-600 text-[10px]">
                                {errors.confirmPassword && errors.confirmPassword.message}
                            </p>
                        </div>


                        <button className='h-[35px] w-[300px] bg-red-500 border-[1px] rounded-lg' onClick={() => { navigate("/signin") }}>submit</button>
                    </form>
                </div>
                <div className="logo h-[400px]">
                    <img className='w-[100px] h-[100px] mt-[180px]' src="../../public/logo.png" alt="" />
                </div>

            </div>
            <div className=" text-start pl-[130px]">
                <h3>hoặc đăng nhập bằng</h3>
                <div className=" flex gap-14">
                    <img className='w-[50px] h-[50px] rounded-full' src="../../public/facebook.png" alt="" />
                    <img className='w-[50px] h-[50px] rounded-full' src="../../public/gogle.png" alt="" />
                </div>

            </div>

        </div >
    )
}

export default Signup
