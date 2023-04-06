import Home from "./components/Home/Home";
import ProductCategory from "./components/ProductCategory/ProductCategory";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import MyAccount from "./components/MyAccount/MyAccount"
import NotFound from "./components/NotFound/NotFound"


let routes = [
    {path: '/',element: <Home />},
    {path:'/productCategory/:productType',element:<ProductCategory />},
    {path:'/productDetails/:productId',element: <ProductDetails/>},
    {path:'/myAccount',element: <MyAccount/>},
    {path:'*',element:<NotFound/>}

]


export default routes;