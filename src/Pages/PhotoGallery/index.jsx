import "./styles.css"; // Путь к вашему CSS файлу
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Используйте require.context для импорта всех изображений из каталога
const images = require.context("../../images/lifePhoto", false, /\.(jpg|jpeg|png)$/);
const photoArr = images.keys().map((imageName) => images(imageName));

export const PhotoGallery = () => {
  const settings = {
    dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  //arrows: false, // Отключаем стрелки
  //autoplay: true, // Включаем автовоспроизведение
  //autoplaySpeed: 2000, // Интервал автовоспроизведения (в миллисекундах)
  //fade: true, // Переход между слайдами - затухание
  };

  return (
    <div className="full-screen-slider">
      <Slider {...settings}>
        {photoArr.map((img, ind) => (
          <div className="photoWrapper" key={ind}>
            <img src={img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};
