import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../../contexts/shopContext";
import ProductDetailsItem from "./ProductDetailsItem";

function ProductDetails() {
  const params = useParams();
  const { productData } = useContext(shopContext);
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    if (productData) {
      const mainProduct = productData.find(
        (product) => product.id === +params.productId
      );

      setProductDetail(mainProduct);
    }
  }, [productData, params]);

  return (
    <>
      {productDetail && (
        <section className="product-details">
          <div className="container">
            <ProductDetailsItem productDetail={productDetail} />

            <div className="bg-white p-4 my-8 rounded-[20px] text-[#666]">
              <h3 className="text-lg">توضیحات محصول</h3>
              <span className="mt-4 text-[15px] ">
                {" "}
                نقد و بررسی تخصصی محصولات مختلف در این بخش
              </span>
              <p className="my-2 text-sm leading-7">
                به نظر می‌رسد سال ۲۰۱۸ برای سامسونگ سال خوبی باشد این شرکت
                کره‌ای با تولید گوشی‌های جدید کار خود در سال جدید شروع کرده است
                و اخیرا دو گوشی جدید دیگر از سامسونگ معرفی شد که S9 وS9 Plus نام
                دارند. گوشی موبایل S9 Plus و صفحه‌نمایش آن طراحی زیبایی دارد و
                باز هم می‌توان تمایل به صفحه‌نمایش بدون حاشیه را در این تولید
                جدید مشاهده کرد. این گوشی فریمی آلومینیومی دارد و پشت و جلوی آن
                از شیشه ساخته شده است و جلوه‌ی زیبایی به گوشی داده است. روکش
                محافظ شیشه‌های پشت و جلوی این گوشی Corning Gorilla Glass 5 است.
                این گوشی گواهینامه IP68 دارد، یعنی تا ۳۰ دقیقه و تا عمق ۱.۵متری
                در برابر آب مقاوم است و گردوغبار هم نمی‌تواند آن را از کار
                بیندازد. این گوشی دارای حسگر عنبیه چشم است که با سرعت بسیار خوبی
                عکس‌العمل نشان می‌دهد و در کنار حسگر اثرانگشت یکی دیگر از
                راه‌های امن ورود به محیط کاربری S9 Plus است. صفحه‌نمایش
                استفاده‌شده در این گوشی ۶.۲ اینچ با رزولوشن QHD+ یعنی ۱۴۴۰x۲۹۶۰
                است که با استفاده از فناوری Super AMOLED و پنل OLED تصاویر شفاف
                و بی‌نظیری را به نمایش می‌گذارد. این صفحه‌نمایش در هر اینچ ۵۳۱
                پیکسل را نشان می‌دهد که این یعنی جزئیات و وضوح تصویر عالی است.
                همچنین روکش این نمایشگر لایه‌ی محافظ Corning Gorilla Glass 5 است
                که از خط‌وخش و ضربه جلوگیری می‌کند. تراشه‌ی این محصول، Exynos
                9810 بوده و به همراه ۶ گیگابایت رم عرضه می‌شود. این تراشه یکی از
                قوی‌ترین تراشه‌های موجود در حال حاضر است و برای انجام بازی‌های
                سنگین و بازکردن چندین برنامه به صورت هم‌زمان و تماشای ویدئو
                کاملا مناسب است و کم نمی‌آورد. تراشه‌ی گرافیکی Mali-G72 MP18 هم
                برای پخش ویدئو و بازی مناسب است. این گوشی با ۶۴ گیگابایت حافظه‌ی
                داخلی عرضه خواهد شد و با استفاده از یک کارت حافظه‌ی جانبی تا ۴۰۰
                گیگابایت می‌توانید این میزان را افزایش دهید. حال درباره‌ی دوربین
                صحبت می‌کنیم. دوربین اصلی S9 Plus از دو سنسور ۱۲مگاپیکسلی تشکیل
                شده و به فلش LED مجهز شده است. این دوربین امکانات و ویژگی‌های
                بی‌نظیری هم در عکاسی و هم در فیلم‌برداری دارد که از مهم‌ترین آن
                می‌توان به قابلیت عکاسی و فیلمبرداری همزمان با کیفیت 4K برای
                فیلم و ۹ مگاپیکسل برای عکس اشاره کرد. همچنین دریچه‌ی دیافراگم
                f/1.5-2.4 باعث می‌شود تصاویر با روشنایی خوبی ثبت شوند و کیفیت
                عکس‌های گرفته شده بسیار خوب باشد. دوربین سلفی سنسور ۸ مگاپیکسلی
                دارد و می‌تواند عکس‌های واید بگیرد و قابلیت عکاسی HDR به صورت
                اتوماتیک هم یکی دیگر از ویژگی‌های دوربین سلفی است. این دستگاه در
                ۴ رنگ آبی، خاکستری، بنفش و مشکی عرضه می‌شود. پشتیبانی از فناوری
                شارژ سریع نسخه ۲.۰، درگاه USB Type-C و حسگر اثرانگشت در پشت گوشی
                هم از دیگر ویژگی‌های این تازه‌وارد است. سامسونگ با S9 و S9 Plus
                سال جدید میلادی را آغاز کرد و سایر رقبا باید به فکر تولید و
                طراحی گوشی‌های جدید باشند.
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductDetails;
