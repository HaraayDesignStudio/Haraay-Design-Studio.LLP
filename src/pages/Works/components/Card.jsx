import { useEffect } from "react";
import styles from "./style.module.css";
import Serene from "../../../assets/images/sereneskin.png";
import RadMedia from "../../../assets/images/radmedia.png";
import BakerStreet from "../../../assets/images/bakerstreet.png";
import AthmaBodhana from "../../../assets/images/Atmabodh.png";
import Culinary from "../../../assets/images/Culinary .jpg";
import Stone from "../../../assets/images/stone.png";
import Toot from "../../../assets/images/TOOT.png";
import Hathkari from "../../../assets/images/hathkari.png";
import CreamForest from "../../../assets/images/creameforest.png";
import PawPet from "../../../assets/casestudies/pawpets/m016t0119_c_branding_mockup_27may22.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Card() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles.container}>
      <div data-aos="fade-up" className={styles.singlecard}>
        <div className={styles.text}>
          <p>Serene Skin</p>
          <p>Branding | Website</p>
        </div>
        <img src={Serene} alt="SereneSkin" />
        <a href="/works/sereneskin">
          <button className={styles.casebutton}>View Case Study</button>
        </a>
      </div>
      <div data-aos="fade-up" className={styles.doublecard}>
        <div className={styles.case}>
          <div className={styles.text}>
            <p>Baker’s Street</p>
            <p>Branding | Website</p>
          </div>
          <img src={BakerStreet} alt="SereneSkin" />
          <a href="/works/bakerstreet">
            <button className={styles.casebutton}>View Case Study</button>
          </a>
        </div>
        <div className={styles.case}>
          <div className={styles.text}>
            <p style={{ color: "white" }}>RAD Media</p>
            <p style={{ color: "white" }}>Branding | Website</p>
          </div>
          <img src={RadMedia} alt="SereneSkin" />
          <a href="/works/radmedia">
            <button
              className={styles.casebutton}
              style={{ border: "2px solid white", color: "white" }}
            >
              View Case Study
            </button>
          </a>
        </div>
      </div>
      <div data-aos="fade-up" className={styles.doublecard}>
        <div className={styles.case}>
          <div className={styles.text}>
            <p>Atmabodh</p>
            <p>Branding | Website</p>
          </div>
          <img src={AthmaBodhana} alt="SereneSkin" />
          <a href="/works/atmabodh">
            <button className={styles.casebutton}>View Case Study</button>
          </a>
        </div>
        <div className={styles.case}>
          <div className={styles.text}>
            <p>Culinary</p>
            <p>Branding</p>
          </div>
          <img src={Culinary} alt="SereneSkin" />
          <a href="/works/culinary">
            <button className={styles.casebutton}>View Case Study</button>
          </a>
        </div>
      </div>
      <div data-aos="fade-up" className={styles.thirdcard}>
        <div className={styles.casestudy}>
          <div className={styles.text}>
            <p>PawPet</p>
            <p>Branding</p>
          </div>
          <img src={PawPet} alt="SereneSkin" />
          <a href="/works/pawpet">
            <button className={styles.casebutton}>View Case Study</button>
          </a>
        </div>
        <div className={styles.casestudy}>
          <div className={styles.text}>
            <p>The Stone</p>
            <p>Branding | Website</p>
          </div>
          <img src={Stone} alt="SereneSkin" />
          <a href="/works/thestone">
            <button className={styles.casebutton}>View Case Study</button>
          </a>
        </div>
        <div className={styles.casestudy}>
          <div className={styles.text}>
            <p>Toot</p>
            <p>Branding | Website</p>
          </div>
          <img src={Toot} alt="toot" />
          <a href="/works/toot">
            <button className={styles.casebutton}>View Case Study</button>
          </a>
        </div>
      </div>
      <div data-aos="fade-up" className={styles.doublecard}>
        <div className={styles.case}>
          <div className={styles.text}>
            <p>Hathkari & Co</p>
            <p>Branding | Website</p>
          </div>
          <img src={Hathkari} alt="hathkari" />
          <a href="/works/hathkari">
            <button className={styles.casebutton}>View Case Study</button>
          </a>
        </div>
        <div className={styles.case}>
          <div className={styles.text}>
            <p>Creamforest</p>
            <p>Branding | Website</p>
          </div>
          <img src={CreamForest} alt="creamforest" />
          <a href="/works/creamforest">
            <button className={styles.casebutton}>View Case Study</button>
          </a>
        </div>
      </div>
    </div>
  );
}
