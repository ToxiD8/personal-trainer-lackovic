import aboutImg from "/assets/images/about/about_img.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about-container">
          <div className="about-left animate-bottom" data-delay="200">
            <h1>O mne</h1>
            <h2>Simona Lackovičová</h2>
            <h3>Osobná trénerka</h3>
            <div className="about-left-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia
              </p>
            </div>
            <div className="about-left-socials">
              <a
                href="https://www.facebook.com/profile.php?id=100004710452990"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="social-icon" />
              </a>

              <a
                href="https://www.instagram.com/s.lackovic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="social-icon" />
              </a>
            </div>
          </div>
          <div className="about-right">
            <img src={aboutImg} alt="About" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
