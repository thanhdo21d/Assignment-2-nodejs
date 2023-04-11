
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useEffect, useState } from "react"
import axios from 'axios';
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
    categoryId: any
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Tên sản phẩm',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Giá Sản Phẩm',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Giảm Giá',
        dataIndex: 'original_price',
        key: 'original_price',
    },
    // {
    //     title: 'Ảnh',
    //     dataIndex: 'image',
    //     key: 'image',
    // },

    {
        title: 'Action',
        key: 'action',

        render: (record) => {


            const handleDelete = async (categoryId: any) => {
                try {
                    const response = await axios.delete(`http://localhost:8080/api/product/${categoryId}`);
                    console.log(response.data);
                } catch (error) {
                    console.error(error);
                }
            };

            return (
                <Space size="middle">
                    <Button type="primary" danger onClick={() => handleDelete(record.key)}>xoa</Button>
                    <Button type="primary" danger onClick={() => console.log(record.key)}>update</Button>
                </Space>
            )

        },
    },
];

function ListProduct() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(" http://localhost:8080/api/product");
            console.log(data)
            setProducts(data.product.map((item: any) => {
                return {
                    key: item._id,
                    name: item.name,
                    price: item.price,
                    original_price: item.price,
                    // image: item.image

                }
            }))

        })()
    }, [])
    return (
        <div className="">
            <Table columns={columns} dataSource={products} />
        </div>
    )
}

export default ListProduct
