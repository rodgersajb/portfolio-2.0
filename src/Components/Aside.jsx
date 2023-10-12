import "../Aside.css";

import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Home from "./Home";

import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faUser,
  faDesktop,
  faBriefcase,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
library.add(faBars, faHouse, faUser, faDesktop, faBriefcase, faAddressBook);

const Aside = () => {
  // useState to keep track of which tab is currently opened
  const [activeTab, setActiveTab] = useState("");
  

  // onclick function with tracked passed as parameter

  const handleTabClick = (tracked) => {
    setActiveTab(tracked);
  };

  return (
    <div className="flex">
      <aside>
        <div className="bars">
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </div>
        <nav>
          <ul>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-house" 
              onClick={(() => setActiveTab('home'))}/>
            </li>
            <li>
              <FontAwesomeIcon
                icon="fa-solid fa-user"
                onClick={() => handleTabClick("aboutMe")}
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon="fa-solid fa-desktop"
                onClick={() => handleTabClick("projects")}
              />
            </li>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-briefcase" />
            </li>
            <li>
              <FontAwesomeIcon icon="fa-solid fa-address-book" />
            </li>
          </ul>
        </nav>
      </aside>
      <section>
        {/* Apply slide-in classes based on activeTab and prevTab */}
        <div>
          {activeTab === "" ? <Home/> : null}
        </div>
        <div
          className={`content ${
            activeTab === "home" ? "slide-in-left" : "slide-in-right"
          }`}
        >
          {activeTab === "home" ? <Home /> : null}
        </div>
        <div
          className={`content ${
            activeTab === "aboutMe" ? "slide-in-left" : "slide-in-right"
          }`}
        >
          {activeTab === "aboutMe" ? <AboutMe /> : null}
        </div>
        <div
          className={`content ${
            activeTab === "projects" ? "slide-in-left" : "slide-in-right"
          }`}
        >
          {activeTab === "projects" ? <Projects /> : null}
        </div>
      </section>
    </div>
  );
};

export default Aside;
