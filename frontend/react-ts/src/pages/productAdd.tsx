import React from 'react'
import { useForm } from 'react-hook-form'

type Props = {}

const ProductAdd = ({ onAdd }: any) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onHandleSubmit = (data: any) => {
        onAdd(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name", { required: true })} />
                {errors.name && <span>this field is required</span>}
                <input type="number" {...register("price")} />
                <button>submit</button>
            </form>


            {/* <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12 ">
                            <img className='w-[400px] h-[300px]' src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/flip4-1.jpeg" alt="" />
                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="" className="space-y-4" onSubmit={handleSubmit(onHandleSubmit)}>
                                <div>

                                    <input
                                        className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                                        type="text" {...register("name", { required: true })}
                                        placeholder="Name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>

                                        <input
                                            className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                                            {...register("price")}
                                            placeholder="price"
                                        />
                                    </div>

                                    <div>

                                        <input
                                            className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                                            {...register("original_price")}
                                            placeholder='original_price'
                                        />
                                    </div>
                                </div>
                                <div>

                                    <input
                                        className="w-full border rounded-lg border-gray-200 p-3 text-sm"
                                        type="text" {...register(" image")}
                                        placeholder='image'

                                    />
                                </div>

                                {/* <div>
                                    <label className="sr-only" htmlFor="message">Message</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Message"
                                        // rows="8"
                                        id="message"
                                    ></textarea>
                                </div> */}

            {/* <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-red-600 px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Thêm Mới
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section> */}

        </div>
    )
}

export default ProductAdd