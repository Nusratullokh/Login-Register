// import axios from '../../../api';

// import { useState, useEffect } from 'react';

// import { Table } from 'antd';

// const Products = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios('/product/all');
//         setProducts(response.data.payload);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const columns = [
//     {
//       title: 'ID',
//       dataIndex: 'id',
//       key: 'id',
//       render: (text, record, index) => index + 1,
//     },
//     {
//       title: 'Image',
//       dataIndex: 'product_images',
//       key: 'product_images',
//       render: (images) => <img src={images[0]} alt="" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />,
//     },
//     {
//       title: 'Name',
//       dataIndex: 'product_name',
//       key: 'product_name',
//     },
//     {
//       title: 'Price',
//       dataIndex: 'original_price',
//       key: 'original_price',
//       render: (text) => `${text}$`,
//     },
//     {
//       title: 'Category',
//       dataIndex: 'product_type',
//       key: 'product_type',
//     },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 h-full">
//       <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
//       <Table
//         columns={columns}
//         dataSource={products}
//         rowKey="_id"
//         pagination={false}
//         scroll={{ y: 400 }}
//       />
//     </div>
//   );
// };

// export default Products;

import { useOutletContext } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { Table } from 'antd';
const { Column } = Table;

const Products = () => {
  const [data, loading] = useFetch('/product/all');
  const { termSearch } = useOutletContext();
  
  const filteredData = data?.filter((product) => {
    return (
      product.product_name.toLowerCase().includes(termSearch.toLowerCase()) ||
      product.category.toLowerCase().includes(termSearch.toLowerCase()) ||
      product.description.toLowerCase().includes(termSearch.toLowerCase())
    );
  });

  return (
    <Table loading={loading} dataSource={filteredData} rowKey="_id">
      <Column
        title="Image"
        dataIndex="product_images"
        key="product_images"
        render={(images) => (
          <img
            src={images[0]}
            alt="Product"
            style={{ width: 50, height: 50, objectFit: 'contain' }}
          />
        )}
      />
      <Column title="Name" dataIndex="product_name" key="product_name" />
      <Column
        title="Original Price"
        dataIndex="original_price"
        key="original_price"
        render={(price) => `$${price}`}
      />
      <Column
        title="Sale Price"
        dataIndex="sale_price"
        key="sale_price"
        render={(price) => `$${price}`}
      />
      <Column
        title="Category"
        dataIndex="category"
        key="category"
      />
      <Column
        title="In Stock"
        dataIndex="number_in_stock"
        key="number_in_stock"
      />
         <Column
      title="product type"
      dataIndex="product_type"
      key="product_type"
    />    <Column
      title="product type"
      dataIndex="product_type"
      key="product_type"
    />
      <Column className='max-w-[350px]' title="Description" dataIndex="description" key="description" />
   
    </Table>
  );
};

export default Products;
