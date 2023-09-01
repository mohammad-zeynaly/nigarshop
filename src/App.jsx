import { useState, useRef, useEffect } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import supabase from "./config/supabaseClient";
import Header from "./components/Header/Header";
import routes from "./routes";
import Footer from "./components/Footer/Footer";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import { shopContext } from "./contexts/shopContext";
import { ShopContextProvider } from "./contexts/shopContext";
import ToastBox from "./components/Toast/Toast";
import "./styles/app.css";

function App() {
  const routers = useRoutes(routes);
  const location = useLocation();
  const overlayRef = useRef();

  // states
  const [userCart, setUserCart] = useState([]);
  const [statusMenu, setStatusMenu] = useState(false);
  const [productData, setProductData] = useState();

  useEffect(() => {
    overlayRef.current.addEventListener("click", () => {
      setStatusMenu(false);
    });
  }, [overlayRef]);

  useEffect(() => {
    fetchGetRequest();
  }, []);

  const fetchGetRequest = async () => {
    const { data, error } = await supabase.from("products").select();
    if (data) {
      console.log("datas", data);
      setProductData(data);
    } else {
      console.log("error => ", error);
    }
  };

  useEffect(() => {
    console.log("productData=> ", productData);
  }, [productData]);

  return (
    <ShopContextProvider
      allStates={{
        productData,
        userCart,
        setUserCart,
        statusMenu,
        setStatusMenu,
      }}
    >
      <div
        className={`font-iranSansMedium ${
          location.pathname === "/search" ? "bg-white" : "bg-[#EEEEEE]"
        } overflow-x-hidden`}
      >
        <div ref={overlayRef} className={statusMenu ? "overlay" : ""}></div>
        {location.pathname === "/myAccount" ||
        location.pathname === "/search" ? (
          ""
        ) : (
          <Header />
        )}
        {routers}

        {location.pathname === "/myAccount" ||
        location.pathname === "/search" ? (
          ""
        ) : (
          <Footer />
        )}
        <BottomMenu />
      </div>
      <ToastBox />
    </ShopContextProvider>
  );
}

export default App;
