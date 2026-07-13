import { FaCheckCircle, FaRegClock } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";

const Pricing = ({ scrollToContact }) => {
  return (
    <section id="pricing">
      <div className="pricing-container">
        <div className="pricing-header animate-bottom" data-delay="300">
          <h2>Cenník</h2>
          <p>
            Vyberte si balíček, ktorý vám najviac vyhovuje a začnite svoju
            transformačnú cestu ešte dnes!
          </p>
        </div>
        <div className="pricing-standard">
          <div className="pricing-title animate-bottom" data-delay="400">
            <FaDumbbell className="price-title-icon" />
            <h3>Standard</h3>
          </div>
          <div
            className="pricing-grid pricing-top animate-bottom"
            data-delay="500"
          >
            <div className="box pricing-left">
              <div className="title">
                1 tréning<span>(dvojica)</span>
              </div>
              <div className="price">
                <b>
                  15<sup>€</sup>
                </b>
                <FaRegClock className="price-icon" />
                <p>1 hodina</p>
              </div>
              <div className="gradient-line"></div>
              <div className="features">
                <div className="features-title">Obsahuje</div>
                <ul>
                  <li>
                    <FaCheckCircle className="features-icon" /> Prvá konzultácia
                    a osobný screening v cene
                  </li>
                </ul>
              </div>
              <div className="button">
                <button onClick={scrollToContact}>Objednať</button>
              </div>
            </div>
            <div className="box pricing-right">
              <div className="title">
                12 tréningov<span>(dvojica)</span>
              </div>
              <div className="price">
                <b>
                  155<sup>€</sup>
                </b>
                <FaRegClock className="price-icon" />
                <p>12 hodín</p>
              </div>
              <div className="gradient-line"></div>
              <div className="features">
                <div className="features-title">Obsahuje</div>
                <ul>
                  <li>
                    <FaCheckCircle className="features-icon" /> Prvá konzultácia
                    a osobný screening v cene
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Transformačný
                    plán na mieru
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Týždenné
                    kontroly
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Podpora Online
                    Coaching 24/7
                  </li>
                </ul>
              </div>
              <div className="button">
                <button onClick={scrollToContact}>Objednať</button>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-delux">
          <div className="pricing-title animate-bottom" data-delay="300">
            <FaDumbbell className="price-title-icon" />
            <h3>Delux</h3>
          </div>
          <div
            className="pricing-grid pricing-bottom animate-bottom"
            data-delay="400"
          >
            <div className="box pricing-left">
              <div className="title">
                1 tréning<span>(individual)</span>
              </div>
              <div className="price">
                <b>
                  20<sup>€</sup>
                </b>
                <FaRegClock className="price-icon" />
                <p>1 hodina</p>
              </div>
              <div className="gradient-line"></div>
              <div className="features">
                <div className="features-title">Obsahuje</div>
                <ul>
                  <li>
                    <FaCheckCircle className="features-icon" /> Prvá konzultácia
                    a osobný screening v cene
                  </li>
                </ul>
              </div>
              <div className="button">
                <button onClick={scrollToContact}>Objednať</button>
              </div>
            </div>
            <div className="box pricing-right">
              <div className="title">
                20 tréningov<span>(individual)</span>
              </div>
              <div className="price">
                <b>
                  320<sup>€</sup>
                </b>
                <FaRegClock className="price-icon" />
                <p>20 hodín</p>
              </div>
              <div className="gradient-line"></div>
              <div className="features">
                <div className="features-title">Obsahuje</div>
                <ul>
                  <li>
                    <FaCheckCircle className="features-icon" /> Prvá konzultácia
                    a osobný screening v cene
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Transformačný
                    plán na mieru
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Týždenné
                    kontroly
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Podpora Online
                    Coaching 24/7
                  </li>
                </ul>
              </div>
              <div className="button">
                <button onClick={scrollToContact}>Objednať</button>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-extra">
          <div className="pricing-title animate-bottom" data-delay="300">
            <FaDumbbell className="price-title-icon" />
            <h3>Extra služby</h3>
          </div>
          <div className="extra-grid">
            <div className="extra-item animate-bottom" data-delay="300">
              <h4>Online Coaching</h4>
              <h5>Vstupná konzultácia a 4x progress check</h5>
              <span className="extra-price">
                70<sup>€</sup>
                <FaRegClock className="price-icon" />
                <span>mesiac</span>
              </span>
            </div>
            <div className="extra-item animate-bottom" data-delay="400">
              <h4>Jedálniček na mieru</h4>
              <h5>Podrobný plán stravovania podľa individuálnych potrieb</h5>
              <span className="extra-price">
                60<sup>€</sup>
                <FaRegClock className="price-icon" />
                <span>mesiac</span>
              </span>
            </div>
            <div className="extra-item animate-bottom" data-delay="500">
              <h4>Odborná konzultácia</h4>
              <h5>Individuálne poradenstvo ohľadom stravovania a tréningu</h5>
              <span className="extra-price">
                14<sup>€</sup>
                <FaRegClock className="price-icon" />
                <span>jednorázovo</span>
              </span>
            </div>
            <div className="extra-item animate-bottom" data-delay="600">
              <h4>Odborný screening</h4>
              <h5>Detailná analýza fyzického stavu a cieľov</h5>
              <span className="extra-price">
                14<sup>€</sup>
                <FaRegClock className="price-icon" />
                <span>jednorázovo</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
