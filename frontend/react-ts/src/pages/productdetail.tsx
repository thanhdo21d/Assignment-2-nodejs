import { useEffect, useState } from "react"
import { getById } from "../api/product"
import { useParams } from 'react-router-dom'
import { IProduct } from "../interfaces/product"

function ProductDetail() {
    const [product, setProduct] = useState<IProduct>({} as IProduct)
    console.log(product)
    const { id } = useParams()
    const fetchProduct = async () => {
        if (id) {
            const { data } = await getById(id)
            console.log(data)
            setProduct(data.product)
        }

    }
    useEffect(() => {
        fetchProduct()
    }, [])
    return (
        <div className="">

            <div className="mb-[60px] ">
                <div className="menu">
                    <header aria-label="Site Header" className="bg-white border-b-[2px] border-slate-300 ">
                        <div
                            className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
                        >
                            <div className="flex flex-1 items-center justify-end md:justify-between">
                                <nav aria-label="Site Nav" className="hidden md:block">
                                    <ul className="flex items-center gap-6 text-sm">
                                        <li>
                                            <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                                                Trang chủ
                                            </a>
                                        </li>

                                        <li>
                                            <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                                                Điện thoại
                                            </a>
                                        </li>

                                        <li>
                                            <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                                                Samsung
                                            </a>
                                        </li>

                                        <li>
                                            <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                                                Samsung Galaxy A73 (5G) 256GB
                                            </a>
                                        </li>

                                    </ul>
                                </nav>


                            </div>
                        </div>
                    </header>
                </div>
                <div className="content  ">
                    <h1 className="border-b-[1px] border-slate-400  px-[160px] text-start">{product.name}</h1>
                    <div className="product  mx-[70px] flex">
                        <div className="image w-[1100px]">
                            <div className="imane-big ml-8">
                                <img className="w-[300px] h-[300px] cursor-pointer" src={product.image} alt="" />
                            </div>
                            <div className="imane-detail flex gap-6 mt-4">
                                <img className="w-[60px] h-[60px] border-slate-400 rounded-lg border-[1px] hover:border-red-600 hover:rounded-lg hover:border-[1px] cursor-pointer" src={product.image} alt="" />
                                <img className="w-[60px] h-[60px] border-slate-400 rounded-lg border-[1px] hover:border-red-600 hover:rounded-lg hover:border-[1px] cursor-pointer" src={product.image} alt="" />
                                <img className="w-[60px] h-[60px] border-slate-400 rounded-lg border-[1px] hover:border-red-600 hover:rounded-lg hover:border-[1px] cursor-pointer" src={product.image} alt="" />
                                <img className="w-[60px] h-[60px] border-slate-400 rounded-lg border-[1px] hover:border-red-600 hover:rounded-lg hover:border-[1px] cursor-pointer" src={product.image} alt="" />
                                <img className="w-[60px] h-[60px] border-slate-400 rounded-lg border-[1px] hover:border-red-600 hover:rounded-lg hover:border-[1px] cursor-pointer" src={product.image} alt="" />
                            </div>
                        </div>
                        <div className="Purchase pt-4">
                            <div className="mb-[300px]">
                                <div className="price flex gap-4">
                                    <span className="text-red-600 text-base">{product.price} $</span>
                                    <span className="text-slate-500 text-sm">{product.original_price} $</span>
                                </div>
                                <div className="information text-start">
                                    <p> Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
                                </div>
                            </div>

                            <div className="cart_buy flex gap-4 justify-items-center items-center">
                                <button className=" text-white w-[200px] h-[30px] bg-red-600 rounded-lg">Mua Ngay</button>
                                <div className="">
                                    <div className="car_icon rounded-md border-solid border-[1px] p-2 border-rose-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                        </svg>
                                    </div>

                                </div>
                                <div className="tex_cart">
                                    <span>Thêm vào giỏ hàng</span>
                                </div>




                            </div>
                        </div>
                    </div>
                    <div className="text  m-[70px]">
                        <div className="row-1 bg-slate-200 pt-6 pb-2">
                            <div className="title text-center ">
                                <h2 className="text-red-600">ĐẶC ĐIỂM NỔI BẬT</h2>
                            </div>
                            <div className="m-[20px]  text-base text-start">
                                <p>Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
                                <p>Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà</p>
                                <p>Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</p>
                                <p>Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</p>
                            </div>

                        </div>
                        <div className="row-2 m-[20px] text-base text-start">
                            <p>Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!</p>
                        </div>
                        <div className="row-3 m-[20px] text-start">
                            <h3 className="text-lg font-semibold">Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h3>
                            <p>Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc</p>
                        </div>
                        <div className="row-4 m-[20px] text-start">
                            <h3 className=" text-lg font-medium">Thiết kế sang trọng, màn hình Super AMOLED</h3>
                            <p className=" text-base">Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
                        </div>
                        <div className="row-5 text-base  m-[20px] text-start">
                            <p>Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.</p>
                        </div>
                        <div className="row-6 text-base  m-[20px] text-start">
                            <p>Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.</p>
                        </div>
                        <div className="row-6 text-center">
                            <button className="w-[500px] h-[30px] border-slate-800 border-2 rounded-lg">Xem Thêm</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail