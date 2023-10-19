import "./styles.css"; // Путь к вашему CSS файлу
import { aboutLife } from "../../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

export const AboutLife = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="aboutLifewrapper">
      <Slider {...settings}>
        {aboutLife.map((section, index) => (
          <div
            className={`section section-${section.title
              .replace(/\s/g, "-")
              .toLowerCase()
              .replace("?", "")}`}
            key={index}
          >
            <h3>{section.title}</h3>
            <p>{section.content}</p>
            {section.title === "Photo" && (
              <NavLink to={"/Photo"}>
                Here are my photos, if you're interested
              </NavLink>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};
