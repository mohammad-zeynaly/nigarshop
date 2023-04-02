import Home from "./components/Home/Home";

let routes = [
    {path: '/',element: <Home />},
    {path:'/productdetails/:productId',element:<h1>Product Details</h1>}
]


export default routes;