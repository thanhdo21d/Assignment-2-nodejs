import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return <>
        <div className="mx-auto">
            <header className='bg-red-500 py-2 px-6'>
                <div className="container mx-auto flex items-center gap-10">
                    <img className='w-[80px] cursor-pointer' src="/logo.png" alt="" />
                    <input className='w-[1000px] h-[30px] rounded-lg px-6' type="text" placeholder='Search' />
                </div>
            </header>
            {/* Content */}
            <Outlet />
            <footer className=' bg-red-700 text-white text-base px-[70px]'>
                <div className="footer-head grid grid-cols-4 gap-4 text-start p-8">
                    <div className="row-1 ">
                        <h3 className=''>Tìm Cửa Hàng</h3>
                        <div className=" ">
                            <span className='block'>Tìm cửa hàng gần nhất</span>
                            <span className='block'>Mua hàng từ xa</span>
                            <span className='block'>Gặp trực tiếp cửa hàng gần nhất </span>
                            <span className='block'>Phương thức thanh toán</span>
                            <div className="image_bank grid grid-cols-4 gap-1">
                                <img className='w-[50px] h-[50px] border-2 border-slate-500 rounded-md' src="../../../public/ag_bank.png" alt="" />
                                <img className='w-[50px] h-[50px] border-2 border-slate-500 rounded-md' src="../../../public/bidv_bank.jpg" alt="" />
                                <img className='w-[50px] h-[50px] border-2 border-slate-500 rounded-md' src="../../../public/tc_bank.png" alt="" />
                                <img className='w-[50px] h-[50px] border-2 border-slate-500 rounded-md' src="../../../public/vc_bank.jpg" alt="" />

                            </div>
                        </div>

                    </div>
                    <div className="row-2">
                        <h3 className=' text-xl'></h3>
                        <div className=" ">
                            <span className='block'>
                                <span>Gọi mua hàng:</span>
                                <span>1800.2044</span>
                                <span>(8h00 - 22h00)</span>
                            </span>
                            <span className='block'>
                                <span>Gọi khiếu nại:</span>
                                <span>1800.2063</span>
                                <span>(8h00 - 21h30)</span>
                            </span>
                            <span className='block'>
                                <span>Gọi bảo hành:</span>
                                <span>1800.2064</span>
                                <span>(8h00 - 21h00)</span>
                            </span>
                            <span>Đối tác dịch vụ bảo hành</span>
                            <span>Điện Thoại - Máy tính</span>
                            <span className='block'>Trung tâm bảo hành uỷ quyền Apple</span>
                            <img className='w-[270px] h-[35px]' src="../../../public/dt_vui.png" alt="" />
                        </div>

                    </div>
                    <div className="row-3">
                        <div className=" ">
                            <span className='block'>Mua hàng và thanh toán Online</span>
                            <span className='block'>Mua hàng trả góp Online</span>
                            <span className='block'>Tra thông tin đơn hàng</span>
                            <span className='block'>Tra điểm Smember</span>
                            <span className='block'>Tra thông tin bảo hành</span>
                            <span className='block'>Tra cứu hoá đơn VAT điện tử</span>
                            <span className='block'>Trung tâm bảo hành chính hãng</span>
                            <span className='block'>Quy định về việc sao lưu dữ liệu</span>
                        </div>

                    </div>
                    <div className="row-4">
                        <h3 className=' text-xl'></h3>
                        <div className=" ">
                            <span className='block'>Quy chế hoạt động</span>
                            <span className='block'>Chính sách Bảo hành</span>
                            <span className='block'>Liên hệ hợp tác kinh doanh</span>
                            <span className='block'>Khách hàng doanh nghiệp (B2B)</span>
                            <span className='block'>Ưu đãi thanh toán</span>
                            <span className='block'>Tuyển dụng</span>
                        </div>
                    </div>

                </div>
                <div className="footer-main"></div>
            </footer>

        </div>




    </>
}

export default UserLayout