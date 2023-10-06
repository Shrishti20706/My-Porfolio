import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from '../../images/img1.jpg'
import ImageTwo from '../../images/img2.jpg'
import ImageThree from '../../images/img3.png'
import ImageFour from '../../images/img4.jpg'
import ImageFive from '../../images/img5.png'
import ImageSix from '../../images/img6.jpg'
import "./styles.scss";
import { useState } from "react";
import { BsInfoCircleFill } from 'react-icons/bs';


const portfolioData = [
  {
    id: 2,
    name: "Restaurant Website",
    image: ImageOne,
    link: "",
  },
  {
    id: 2,
    name: "Weather App",
    link: "",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Department website",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "Todo App",
    image: ImageFour,

    link: "",
  },
  {
    id: 3,
    name: "RPA Project",
    image: ImageFive,
    link: "",
  },
  {
    id: 3,
    name: "Telephone Directory",
    image: ImageSix,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Other",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;