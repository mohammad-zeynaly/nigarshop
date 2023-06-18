import { useState, useEffect, useContext } from "react";
import { shopContext } from "../../contexts/shopContext";
import AdsItem from "./AdsItem";

function Ads() {
  const { productData } = useContext(shopContext);
  const [adsItems, setAdsItems] = useState([]);

  useEffect(() => {
    if (productData) {
      const filterAds = productData.filter(
        (discount) => discount.categories === "adsItems"
      );
      setAdsItems(filterAds);
    }
  }, [productData]);

  return (
    <section className="ads mt-10">
      <div className="container">
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {adsItems.map((item) => (
            <AdsItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ads;
