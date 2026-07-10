import aboutImg from "/assets/images/about/about-img.webp";
import aboutImgMobile from "/assets/images/about/about-img-mobile.webp";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about-container">
          <div className="about-left">
            <picture aria-hidden="true">
              <source media="(max-width: 600px)" srcSet={aboutImgMobile} />
              <img src={aboutImg} width="2400" height="1600" alt="" />
            </picture>
          </div>
          <div className="about-right animate-right" data-delay="500">
            <h2>O mne</h2>
            <h3>Simona Lackovičová</h3>
            <h4>Osobná trénerka</h4>
            <div className="about-right-text">
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
            <div className="about-right-socials">
              <a
                href="https://www.facebook.com/profile.php?id=100004710452990"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="social-icon" />
              </a>

              <a
                href="https://www.instagram.com/s.lackovic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="social-icon" />
              </a>
              <a
                href="https://www.threads.com/@s.lackovic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
              >
                <FaThreads className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
