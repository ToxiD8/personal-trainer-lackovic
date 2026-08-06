import { FaCheckCircle, FaRegClock } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";

const Pricing = ({ scrollToContact }) => {
  return (
    <section id="pricing">
      <div className="pricing-container">
        <div className="pricing-header animate-bottom" data-delay="300">
          <h2>Cenník</h2>
          <p>
            Vyber si službu podľa svojich potrieb a cieľov. Na výber máš služby
            Standard, ktoré zahŕňajú tréningy vo dvojici (2:1), alebo Delux, v
            ktorých trénuješ individuálne (1:1)
          </p>
        </div>
        <div className="pricing-standard">
          <div className="pricing-title animate-bottom" data-delay="400">
            <FaDumbbell className="price-title-icon" />
            <h3>Standard</h3>
          </div>
          <div className="pricing-grid pricing-top">
            <div className="box pricing-left animate-bottom" data-delay="500">
              <div className="title">
                1 tréning<span>(vo dvojici)</span>
              </div>
              <div className="price">
                <b>
                  15
                  <sup className="discounted-currency">€</sup>
                </b>
              </div>
              <div className="price-time">
                <FaRegClock className="price-icon" />
                <p>1 hodina</p>
              </div>
              <div className="gradient-line"></div>
              <div className="features">
                <div className="features-title">Obsahuje</div>
                <ul>
                  <li>
                    <FaCheckCircle className="features-icon" /> Prvá konzultácia
                    a osobný screening
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Odborný
                    screening
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Podklady k
                    stravovaciemu systému na mieru
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Support počas
                    celého trvania spolupráce
                  </li>
                </ul>
              </div>
              <div className="button">
                <button onClick={scrollToContact}>Objednať</button>
              </div>
            </div>
            <div className="box pricing-right animate-bottom" data-delay="600">
              <div className="title">
                12 tréningov<span>(vo dvojici)</span>
              </div>
              <div className="price">
                <b>
                  <sup className="initial-price">
                    180
                    <sup className="initial-currency">€</sup>
                  </sup>
                  155
                  <sup className="discounted-currency">€</sup>
                </b>
              </div>
              <div className="price-time">
                <FaRegClock className="price-icon" />
                <p>12 hodín</p>
              </div>
              <div className="gradient-line"></div>
              <div className="features">
                <div className="features-title">Obsahuje</div>
                <ul>
                  <li>
                    <FaCheckCircle className="features-icon" /> Vstupná
                    konzultácia v cene
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Odborný
                    screening v cene
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Podklady k
                    stravovaciemu systému na mieru v cene
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Support počas
                    celého trvania spolupráce
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Pravidelné
                    vyhodnocovanie výsledkov a spätná väzba
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
          <div className="pricing-grid pricing-bottom">
            <div className="box pricing-left animate-bottom" data-delay="400">
              <div className="title">
                1 tréning<span>(individuálny)</span>
              </div>
              <div className="price">
                <b>
                  20
                  <sup className="discounted-currency">€</sup>
                </b>
              </div>
              <div className="price-time">
                <FaRegClock className="price-icon" />
                <p>1 hodina</p>
              </div>
              <div className="gradient-line"></div>
              <div className="features">
                <div className="features-title">Obsahuje</div>
                <ul>
                  <li>
                    <FaCheckCircle className="features-icon" /> Vstupná
                    konzultácia v cene
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Odborný
                    screening v cene
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Podklady k
                    stravovaciemu systému na mieru v cene
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Individuálny
                    systém s maximálnou efektivitou a bezpečnosťou
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Support počas
                    celého trvania spolupráce
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Pravidelné
                    vyhodnocovanie výsledkov a spätná väzba
                  </li>
                </ul>
              </div>
              <div className="button">
                <button onClick={scrollToContact}>Objednať</button>
              </div>
            </div>
            <div className="box pricing-right animate-bottom" data-delay="500">
              <div className="title">
                20 tréningov<span>(individuálny)</span>
              </div>
              <div className="price">
                <b>
                  <sup className="initial-price">
                    400
                    <sup className="initial-currency">€</sup>
                  </sup>
                  320
                  <sup className="discounted-currency">€</sup>
                </b>
              </div>
              <div className="price-time">
                <FaRegClock className="price-icon" />
                <p>20 hodín</p>
              </div>
              <div className="gradient-line"></div>
              <div className="features">
                <div className="features-title">Obsahuje</div>
                <ul>
                  <li>
                    <FaCheckCircle className="features-icon" /> Vstupná
                    konzultácia v cene
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Odborný
                    screening v cene
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Podklady k
                    stravovaciemu systému na mieru v cene
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Individuálny
                    systém s maximálnou efektivitou a bezpečnosťou
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Support počas
                    celého trvania spolupráce
                  </li>
                  <li>
                    <FaCheckCircle className="features-icon" /> Pravidelné
                    vyhodnocovanie výsledkov a spätná väzba
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
            <div className="extra-item animate-bottom" data-delay="400">
              <h4>Online Coaching</h4>
              <ul>
                <li>
                  <FaCheckCircle className="features-icon" /> Vstupná
                  konzultácia a odborná telesná diagnostika v cene
                </li>
                <li>
                  <FaCheckCircle className="features-icon" /> Individuálny
                  tréningový plán na mieru
                </li>
                <li>
                  <FaCheckCircle className="features-icon" /> Pravidelné
                  vyhodnocovanie progresu (4x progress check) a úprava plánu
                </li>
                <li>
                  <FaCheckCircle className="features-icon" /> Neobmedzená online
                  podpora počas celej spolupráce
                </li>
                <li>
                  <FaCheckCircle className="features-icon" /> Edukácia, ktorá
                  vás naučí fungovať samostatne aj do budúcna
                </li>
              </ul>
              <span className="extra-price">
                70<sup>€</sup>
                <FaRegClock className="price-icon" />
                <span>mesiac</span>
              </span>
            </div>
            <div className="extra-item animate-bottom" data-delay="500">
              <h4>Jedálniček na mieru</h4>
              <ul>
                <li>
                  <FaCheckCircle className="features-icon" /> Individuálne
                  nastavený podľa vašich cieľov, parametrov a preferencií
                </li>
                <li>
                  <FaCheckCircle className="features-icon" /> Zohľadnenie
                  zdravotných obmedzení, alergií a intolerancií
                </li>
                <li>
                  <FaCheckCircle className="features-icon" /> Praktické
                  odporúčania a jednoduché recepty
                </li>
                <li>
                  <FaCheckCircle className="features-icon" /> Flexibilný systém
                  bez zbytočných zákazov a extrémov
                </li>
                <li>
                  <FaCheckCircle className="features-icon" /> Výpočet
                  energetického príjmu a makroživín na mieru
                </li>
              </ul>
              <span className="extra-price">
                60<sup>€</sup>
                <FaRegClock className="price-icon" />
                <span>mesiac</span>
              </span>
            </div>
            <div className="extra-item animate-bottom" data-delay="400">
              <h4>Konzultácia</h4>
              <ul>
                <li>
                  <FaCheckCircle className="features-icon" /> Odborné
                  individuálne poradenstvo v oblasti tréningu, stravy a zdravého
                  životného štýlu
                </li>
              </ul>
              <span className="extra-price">
                14<sup>€</sup>
                <FaRegClock className="price-icon" />
                <span>jednorázovo</span>
              </span>
            </div>
            <div className="extra-item animate-bottom" data-delay="500">
              <h4>Screening</h4>
              <ul>
                <li>
                  <FaCheckCircle className="features-icon" /> Detailná analýza
                  fyzického a zdravotného stavu tela, a interpretácia výsledkov
                </li>
              </ul>
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
