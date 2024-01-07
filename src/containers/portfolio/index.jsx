import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from '../../images/img1.png';
import ImageTwo from '../../images/img2.jpg';
import ImageThree from '../../images/img3.png';
import ImageFour from '../../images/img4.jpg';
import ImageFive from '../../images/img5.png';
import ImageSix from '../../images/img6.jpg';
import { BsInfoCircleFill } from 'react-icons/bs';
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 1,
    name: "Solvitude",
    link: "https://solvitude.vercel.app/",
    image: ImageOne,
    Tech:" React JS",
    description: "A landing page for AWS service website which show about,contact,servive page,it include filter services accordingly",
  },
  {
    id: 2,
    name: "Manage Contact",
    link: "https://manage-contact.vercel.app/",
    image: ImageTwo,
    Tech:" React JS",
    description: "Manage Contact App include adding contact details like name and email and also store on Local Storage and can also delete contact details",
  },
  {
    id: 3,
    name: "Department website",
    link: "https://shrishti20706.github.io/department-webpage/",
    image: ImageThree,
    Tech:"HTML,CSS,Javascript",
    description: "A webpage of CSIT department displaying all the information related to department along with subscription form",
  },
  {
    id: 4,
    name: "TextCraft",
    link: "https://text-craft-mu.vercel.app",
    image: ImageFour,
    Tech:" React JS",
    description: "Text manipulation tool for text-editing tasks like remove extra space,convert to lowercase or uppercase etc.",
  },
  {
    id: 5,
    name: "RPA Project-Curriculum Vitae Colander:",
    link: "",
    Tech:"RPA using Uipath",
    image: ImageFive,
    description: "The aim of this project is to sort the resumes domain wise for easy screening of the candidates suited.",
  },
  {
    id: 6,
    name: "Telephone Directory",
    link: "https://github.com/Shrishti20706/TelephoneDirectory",
    Tech:" C++",
    image: ImageSix,
    description: "The telephone book that permits you to perform the basic phone book operations like storing, showing, deleting, and looking contacts.",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
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

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Projects"
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
          {portfolioData
            .filter((item) => filteredvalue === 1 || item.id === filteredvalue)
            .map((item, index) => (
              <div
                className="portfolio__content__cards__item"
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img alt={item.name} src={item.image} />
                  </a>
                </div>
                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <button>Visit</button>
                        </a>
                        <h2><b>Description: </b>{item.description}</h2>
                        <h2><b>Technology: </b>{item.Tech}</h2>
                      
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
