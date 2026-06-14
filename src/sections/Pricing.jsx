import { FaCheckCircle, FaRegClock } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";

const Pricing = ({ scrollToContact }) => {
  return (
    <section id="pricing">
      <div className="pricing-container">
        <div className="pricing-header animate-bottom" data-delay="300">
          <h1>Cenník</h1>
          <p>
            Vyberte si balíček, ktorý vám najviac vyhovuje a začnite svoju
            transformačnú cestu ešte dnes!
          </p>
        </div>
        <div className="pricing-standard">
          <div className="pricing-title animate-bottom" data-delay="400">
            <FaDumbbell className="price-title-icon" />
            <h2>Standard</h2>
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
                  140<sup>€</sup>
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
            <h2>Delux</h2>
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
                  288<sup>€</sup>
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
            <h2>Extra služby</h2>
          </div>
          <div className="extra-grid">
            <div className="extra-item animate-bottom" data-delay="300">
              <h3>Online Coaching</h3>
              <h4>Vstupná konzultácia a 4x progress check</h4>
              <span className="extra-price">
                60<sup>€</sup>
                <FaRegClock className="price-icon" />
                <span>mesiac</span>
              </span>
            </div>
            <div className="extra-item animate-bottom" data-delay="400">
              <h3>Jedálniček na mieru</h3>
              <h4>Podrobný plán stravovania podľa individuálnych potrieb</h4>
              <span className="extra-price">
                50<sup>€</sup>
                <FaRegClock className="price-icon" />
                <span>mesiac</span>
              </span>
            </div>
            <div className="extra-item animate-bottom" data-delay="500">
              <h3>Odborná konzultácia</h3>
              <h4>Individuálne poradenstvo ohľadom stravovania a tréningu</h4>
              <span className="extra-price">
                14<sup>€</sup>
                <FaRegClock className="price-icon" />
                <span>jednorázovo</span>
              </span>
            </div>
            <div className="extra-item animate-bottom" data-delay="600">
              <h3>Odborný screening</h3>
              <h4>Detailná analýza fyzického stavu a cieľov</h4>
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
