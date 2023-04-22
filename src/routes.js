import Home from "./pages/Home/Home";
import ProductCategory from "./pages/ProductCategory/ProductCategory";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import MyAccount from "./pages/MyAccount/MyAccount";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Search from "./pages/Search/Search"
import NotFound from "./pages/NotFound/NotFound";
import AllProducts from "./pages/AllProducts/AllProducts";


let routes = [
    
    {path: '/',element: <Home />},
    {path:'/productCategory/:productType',element:<ProductCategory />},
    {path:'/productDetails/:productId',element: <ProductDetails/>},
    {path:'/myAccount',element: <MyAccount/>},
    {path:'/shoppingCart',element:<ShoppingCart/>},
    {path:"/search",element:<Search/>},
    {path:"/allProduct" , element: <AllProducts />},
    {path:'*',element:<NotFound/>},

]


export default routes;