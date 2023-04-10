import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

type Props = {}

const Signin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<{ email: string, password: string }>();
    const onHandleSubmit = async (data: { email: string, password: string }) => {
        try {
            const response = await axios.post(" http://localhost:8080/api/signin", data)
            console.log(response)
            localStorage.setItem("token", JSON.stringify(response.data.accessToken))
        } catch (error) {
            console.log(error);
        }
    }
    console.log(errors);
    return (
        <div className='mx-auto  w-[600px] h-[450px] bg-slate-200 text-center'>
            <div className="flex">
                <div className="form w-[400px] bg-slate-200">
                    <form className='py-[50px]' onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="m-[20px]">
                            <div className=" text-start pl-[38px] mb-[10px]">
                                <label htmlFor="">Email:</label>
                            </div>

                            <input className='h-[30px] w-[300px] border-[1px] border-slate-500 rounded-lg' type="email" {...register("email")} />
                        </div>
                        <div className="mb-[30px]">
                            <div className=" text-start pl-[60px] mb-[10px]">
                                <label htmlFor="">Password:</label>
                            </div>
                            <input className='h-[30px] w-[300px] border-[1px] border-slate-500 rounded-lg' type="password" {...register("password")} />
                        </div>

                        <button className='h-[35px] w-[300px] bg-red-500 border-[1px] rounded-lg'>submit</button>
                    </form>
                </div>
                <div className="logo h-[400px]">
                    <img className='w-[100px] h-[100px] mt-[80px]' src="../../public/logo.png" alt="" />
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

export default Signin