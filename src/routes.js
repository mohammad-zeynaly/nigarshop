import Home from "./components/Home/Home";
import ProductCategory from "./components/ProductCategory/ProductCategory"

let routes = [
    {path: '/',element: <Home />},
    {path:'/productCategory/:productType',element:<ProductCategory />},
    // {path:'/productdetails',element: <h2>Product Detail</h2>},
    {path:'/productDetails/:productId',element: <h1 className="my-5 text-center">Product Details </h1>},
]


export default routes;