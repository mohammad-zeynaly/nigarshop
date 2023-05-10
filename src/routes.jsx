import Home from "./pages/Home/Home";
import ProductCategory from "./pages/ProductCategory/ProductCategory";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import MyAccount from "./pages/MyAccount/MyAccount";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Search from "./pages/Search/Search"
import NotFound from "./pages/NotFound/NotFound";
import AllProducts from "./pages/AllProducts/AllProducts";


let routes = [ 
    
    {path: 'https://mohammad-zeynali.github.io/nigarshop/',element: <Home />},
    {path:'https://mohammad-zeynali.github.io/nigarshop/productCategory/:productType',element:<ProductCategory />},
    {path:'https://mohammad-zeynali.github.io/nigarshop/productDetails/:productId',element: <ProductDetails/>},
    {path:'https://mohammad-zeynali.github.io/nigarshop/myAccount',element: <MyAccount/>},
    {path:'https://mohammad-zeynali.github.io/nigarshop/shoppingCart',element:<ShoppingCart/>},
    {path:"https://mohammad-zeynali.github.io/nigarshop/search",element:<Search/>},
    {path:"https://mohammad-zeynali.github.io/nigarshop/allProduct" , element: <AllProducts />},
    {path:'*',element:<NotFound/>},

]


export default routes;