import "./styles.css"; // Путь к вашему CSS файлу
import { aboutWork } from "../../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const AboutWork = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="wrapper">
      <div className="respV">
   
      {aboutWork.map((section, index) => (
  <div className={`section-${section.title.replace(/\s/g, '-').toLowerCase().replace('?', '')}`} key={index}>
    <h2>{section.title}</h2>
    <p>{section.content}</p>
  </div>
))}

     
      </div>
      <div className="mobileV">
      <Slider {...settings}>
      {aboutWork.map((section, index) => (
  <div className={`section-${section.title.replace(/\s/g, '-').toLowerCase().replace('?', '')}`} key={index}>
    <h2>{section.title}</h2>
    <p>{section.content}</p>
  </div>
))}

      </Slider>
      </div>
   
    </div>
  );
};
