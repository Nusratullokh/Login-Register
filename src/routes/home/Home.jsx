// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      
//       <div className="relative flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg max-w-lg z-10 text-center">
//         <h1 className="text-5xl font-bold text-gray-800 mb-4 animate__animated animate__bounceIn animate__delay-1s">Welcome to My Website!</h1>
//         <Link to="/auth">
//           <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transform transition-transform duration-300 ease-in-out hover:scale-105">
//              Login
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch"

const Home = () => {
  const [data, loading] = useFetch('/product/most-popular');
  console.log(data);
  return (
    <div>
      <h1>Papular Product</h1>
      <div className="max-w-[1200px] py-20 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 ">
        {data?.map((product) => (
          <div className="shadow-product-shadow rounded-md" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img className="w-45 h-45 object-contain bg-gray-300 rounded-t-md" title={product.product_name} src={product.product_images[0]} alt={product.product_name} />
            </Link>
            <div className="p-5">
              <p className="font-medium text-slate-800">{product.product_name}</p>
              <p className="line-clamp-2 text-xs text-gray-500 ">{product.description}</p>
              <div className="mt-3 flex justify-between items-center">
                <p>${product.sale_price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home