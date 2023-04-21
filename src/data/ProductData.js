const ProductData = [
  {
    id: 1,
    img: "../assets/images/discount/discount-1.jpg",
    type: "product",
    categories: "discountProduct",
    categoriesPersian: "موبایل",
    name: "گوشی موبایل اپل مدل iPhone 13 Pro ظرفیت 256GB دو سیم کارت",
    price: 12_000_000,
    count: 1,
  },
  {
    id: 2,
    img: "../assets/images/discount/discount-2.jpg",
    type: "product",
    categories: "discountProduct",
    categoriesPersian: "موبایل",
    name: "گوشی موبایل سامسونگ مدل S20 FE 5G رم 8GB حافظه داخلی 128GB دو سیم کارته",
    price: 16_000_000,
    count: 1,
  },
  {
    id: 3,
    img: "../assets/images/discount/discount-3.jpg",
    type: "product",
    categories: "discountProduct",
    categoriesPersian: "موبایل",
    name: "گوشی موبایل سامسونگ Galaxy Z Fold2 رم 12GB حافظه 256GB با قابلیت 4G",
    price: 42_000_000,
    count: 1,
  },
  {
    id: 4,
    img: "../assets/images/discount/discount-4.jpg",
    type: "product",
    categories: "discountProduct",
    categoriesPersian: "موبایل",
    name: "گوشی موبایل اپل مدل iPhone 13 ظرفیت 128GB دو سیم کارت",
    price: 36_000_000,
    count: 1,
  },
  {
    id: 5,
    img: "../assets/images/discount/discount-5.jpg",
    type: "product",
    categories: "discountProduct",
    categoriesPersian: "موبایل",
    name: "گوشی موبایل سامسونگ Galaxy Note 20 Ultra 5G ظرفیت 256 گیگابایت دو سیم کارت",
    price: 33_000_000,
    count: 1,
  },
  { 
    id: 6, 
    img: "../assets/images/ads/ads-1.jpg", 
    categories: "adsItems" 
  },
  {
     id: 7,
      img: "../assets/images/ads/ads-2.jpg",
       categories: "adsItems" 
  },
  {
     id: 8, 
     img: "../assets/images/ads/ads-3.jpg", 
     categories: "adsItems" 
  },
  {
     id: 9, 
     img: "../assets/images/ads/ads-4.jpg", 
     categories: "adsItems" 
  },
  {
    id: 10,
    img: "../assets/images/cosmeticsProduct/cosmeticsProduct-1.jpg",
    type: "product",
    categories: "cosmeticsProduct",
    categoriesPersian: "آرایشی و بهداشتی",
    name: "کرم مرطوب کننده سافت نیوا 300 میلی لیتری (100 میل مجانی)",
    price: 20_000,
    count: 1,
  },
  {
    id: 11,
    img: "../assets/images/cosmeticsProduct/cosmeticsProduct-2.jpg",
    type: "product",
    categories: "cosmeticsProduct",
    categoriesPersian: "آرایشی و بهداشتی",
    name: "کرم مرطوب کننده نئودرم حاوی ویتامین E و B5 مناسب انواع پوست 50 میل",
    price: 40_000,
    count: 1,
  },
  {
    id: 12,
    img: "../assets/images/cosmeticsProduct/cosmeticsProduct-3.jpg",
    type: "product",
    categories: "cosmeticsProduct",
    categoriesPersian: "آرایشی و بهداشتی",
    name: "کرم مرطوب کننده نئودرم حاوی ویتامین E و B5 مناسب انواع پوست 50 میل",
    price: 65_000,
    count: 1,
  },
  {
    id: 13,
    img: "../assets/images/cosmeticsProduct/cosmeticsProduct-4.jpg",
    type: "product",
    categories: "cosmeticsProduct",
    categoriesPersian: "آرایشی و بهداشتی",
    name: "موزن گوش و بینی و ابرو فیلیپس مدل NT1700 سری 1000",
    price: 120_000,
    count: 1,
  },
  {
    id: 14,
    img: "../assets/images/cosmeticsProduct/cosmeticsProduct-5.jpg",
    type: "product",
    categories: "cosmeticsProduct",
    categoriesPersian: "آرایشی و بهداشتی",
    name: "ادو پرفیوم زنانه فراگرنس ورد مدل Diva Glamorous Girl حجم 100 میل",
    price: 320_000,
    count: 1,
  },
  {
    id: 15,
    img: "../assets/images/clothesProduct/clothesProduct-1.png",
    type: "product",
    categories: "clothesProduct",
    categoriesPersian: "مد و پوشاک",
    name: "تی شرت مردانه لووین",
    price: 185_000,
    count: 1,
  },
  {
    id: 16,
    img: "../assets/images/clothesProduct/clothesProduct-2.png",
    type: "product",
    categories: "clothesProduct",
    categoriesPersian: "مد و پوشاک",
    name: "تی شرت مردانه زرد آگرین",
    price: 165_000,
    count: 1,
  },
  {
    id: 17,
    img: "../assets/images/clothesProduct/clothesProduct-3.png",
    type: "product",
    categories: "clothesProduct",
    categoriesPersian: "مد و پوشاک",
    name: "تی شرت آستین کوتاه مردانه بای نت",
    price: 115_000,
    count: 1,
  },
  {
    id: 18,
    img: "../assets/images/clothesProduct/clothesProduct-4.png",
    type: "product",
    categories: "clothesProduct",
    categoriesPersian: "مد و پوشاک",
    name: "تیشرت مردانه سبز زی",
    price: 115_000,
    count: 1,
  },
  {
    id: 19,
    img: "../assets/images/clothesProduct/clothesProduct-5.jpg",
    type: "product",
    categories: "clothesProduct",
    categoriesPersian: "مد و پوشاک",
    name: "ست هدیه مردانه چرما اسپرت کد KDBE01",
    price: 1_650_000,
    count: 1,
  },
  {
     id: 20, 
     img: "../assets/images/brands/brands-1.png", 
     categories: "brands" 
  },
  {
     id: 21, 
     img: "../assets/images/brands/brands-2.png", 
     categories: "brands" 
  },
  {
     id: 22, 
     img: "../assets/images/brands/brands-3.png", 
     categories: "brands" 
  },
  {
     id: 23, 
     img: "../assets/images/brands/brands-4.png", 
     categories: "brands" 
  },
  {
     id: 24, 
     img: "../assets/images/brands/brands-5.png", 
     categories: "brands" 
  },
  {
     id: 25, 
     img: "../assets/images/brands/brands-6.png", 
     categories: "brands" 
  },
  {
     id: 26, 
     img: "../assets/images/brands/brands-7.png", 
     categories: "brands" 
  },
  {
    id: 27,
    img: "../assets/images/toy/toy-1.jpg",
    type: "product",
    categories: "toyProduct",
    categoriesPersian: "کودک و نوزاد",
    name: "پازل 1000 تکه فاکس پازل طرح مدرسه آفتاب کد 62242",
    price: 50_000,
    count: 1,
  },
  {
    id: 28,
    img: "../assets/images/toy/toy-2.jpg",
    type: "product",
    categories: "toyProduct",
    categoriesPersian: "کودک و نوزاد",
    name: "بازی فکری فکرانه مدل کهربا",
    price: 105_000,
    count: 1,
  },
  {
    id: 29,
    img: "../assets/images/toy/toy-3.jpg",
    type: "product",
    categories: "toyProduct",
    categoriesPersian: "کودک و نوزاد",
    name: "ماشین شارژی مدل 5256",
    price: 1_650_000,
    count: 1,
  },
  {
    id: 30,
    img: "../assets/images/toy/toy-4.jpg",
    type: "product",
    categories: "toyProduct",
    categoriesPersian: "کودک و نوزاد",
    name: "ماشین اسباب بازی نیکوتویز مدل اتوبوس مدرسه",
    price: 105_000,
    count: 1,
  },
  {
    id: 31,
    img: "../assets/images/sport/sport-1.png",
    type: "product",
    categories: "sportProduct",
    categoriesPersian: "لوازم ورزشی",
    name: "کفش مخصوص دویدن مردانه ریباک مدل ZQuick TR 3.0 کد M47653",
    price: 150_000,
    count: 1,
  },
  {
    id: 32,
    img: "../assets/images/sport/sport-2.png",
    type: "product",
    categories: "sportProduct",
    categoriesPersian: "لوازم ورزشی",
    name: "کفش مخصوص دویدن مردانه ریباک مدل ZQuick TR 3.0 کد M47653",
    price: 1_235_000,
    count: 1,
  },
  {
    id: 33,
    img: "../assets/images/sport/sport-3.png",
    type: "product",
    categories: "sportProduct",
    categoriesPersian: "لوازم ورزشی",
    name: "کفش مخصوص دویدن مردانه ریباک مدل CN6444",
    price: 550_000,
    count: 1,
  },
  {
    id: 34,
    img: "../assets/images/sport/sport-4.png",
    type: "product",
    categories: "sportProduct",
    categoriesPersian: "لوازم ورزشی",
    name: "کفش مخصوص دویدن مردانه ریباک مدل Pt Prime Runner Fc",
    price: 669_000,
    count: 1,
  },
  {
    id: 35,
    img: "../assets/images/sport/sport-5.jpg",
    type: "product",
    categories: "sportProduct",
    categoriesPersian: "لوازم ورزشی",
    name: "کفش پیاده روی زنانه ریباک مدل Zoku Runner",
    price: 669_000,
    count: 1,
  },
  {
    id: 36,
    img: "../assets/images/sport/sport-6.jpg",
    type: "product",
    categories: "sportProduct",
    categoriesPersian: "لوازم ورزشی",
    name: "کتانی بند کشی زنانه Nebula",
    price: 550_000,
    count: 1,
  },
  {
    id: 37,
    img: "../assets/images/laptop/laptop-1.jpg",
    type: "product",
    categories: "laptopProduct",
    categoriesPersian: "ابزار و اداری",
    name: "لپ تاپ چووی الترابوک 14 اینچ پرو",
    price: 15_000_000,
    count: 1,
  },
  {
    id: 38,
    img: "../assets/images/laptop/laptop-2.jpg",
    type: "product",
    categories: "laptopProduct",
    categoriesPersian: "ابزار و اداری",
    name: "هواوای میت بوک X پرو 13.9 اینچ",
    price: 8_000_000,
    count: 1,
  },
  {
    id: 39,
    img: "../assets/images/laptop/laptop-3.jpg",
    type: "product",
    categories: "laptopProduct",
    categoriesPersian: "ابزار و اداری",
    name: "متابوک هواوای دی رایزن 5",
    price: 7_500_000,
    count: 1,
  },
];

export default ProductData;
