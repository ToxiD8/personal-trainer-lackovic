<!DOCTYPE html>
<html lang="sk">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Lackovičová - osobná trénerka</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
    integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT"
    crossorigin="anonymous" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
  <link rel="stylesheet" href="css/reset.css" />
  <link rel="stylesheet" href="css/style.css" />
</head>

<body>
  <div id="progress">
    <i class="fa-solid fa-chevron-up"></i>
  </div>

  <div class="cookies_container" id="cookiesContainer">
    <div class="cookies_window">
      <i class="fa-solid fa-cookie-bite"></i>
      <h2>Táto stránka používa cookies</h2>
    </div>
    <div class="cookies_data">
      <p>
        Súbory cookie používame na zhromažďovanie a analýzu informácií o
        výkone a používaní stránok, na poskytovanie funkcií sociálnych médií a
        na vylepšenie a prispôsobenie obsahu a reklám.
        <a href="cookies.php"> Viac o cookies...</a>
      </p>

      <div></div>
    </div>
    <div class="cookies_buttons">
      <button class="cookies_button" id="acceptBtn">Povoliť</button>
      <button class="cookies_button" id="declineBtn">Zamietnuť</button>
    </div>
  </div>

  <?php include 'header.php'; ?>

  <main id="main-content">
    <section id=" intro">
      <div class="intro_container">
        <img src="img/intro/intro_img.png" alt="background" />
        <div class="intro_text">
          <h1 class="intro_text_primary">Simona Lackovičová</h1>
          <h3 class="intro_text_secondary">Osobná trénerka</h3>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="about-container">
        <div class="about-left hidden-right">
          <h2>O mne</h2>
          <h3>Simona Lackovičová</h3>
          <h4>Osobná trénerka</h4>
          <div class="about-left-text">
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
          <div class="about-left-socials">
            <a
              href="https://www.facebook.com/profile.php?id=100004710452990"
              target="_blank"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/s.lackovic" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
        <img src="img/about/about_img.png" alt="about" />
      </div>
    </section>

    <section id="pricing">
      <h2>Cenník</h2>
      <div class="price_container">
        <div class="standard hidden-left">
          <ul class="price_list">
            <li class="price_header">1 tréning</li>
            <li class="price">14<sup>€</sup><span>/h</span></li>
            <li class="price_desc">
              Prvá konzultácia a osobný screening v cene
            </li>
            <button class="btn">Objednať</button>
          </ul>
          <ul class="price_list">
            <li class="discount_text">Zľava</li>
            <li class="price_header">12 tréningov</li>
            <li class="price">
              <sup class="discount_price">168€ </sup>140<sup>€</sup><span>/12h</span>
            </li>
            <li class="price_desc">
              Prvá konzultácia a osobný screening v cene
            </li>
            <li class="price_desc">Transformačný plán na mieru</li>
            <li class="price_desc">Týždenné kontroly</li>
            <li class="price_desc">Podpora 24/7</li>
            <button class="btn">Objednať</button>
          </ul>
        </div>
        <div class="delux hidden-right">
          <ul class="price_list">
            <li class="price_header">1 tréning</li>
            <li class="price">18<sup>€</sup><span>/h</span></li>
            <li class="price_desc">Prvá konzultácia zadarmo</li>
            <button class="btn">Objednať</button>
          </ul>
          <ul class="price_list">
            <li class="discount_text">Zľava</li>
            <li class="price_header">20 tréningov</li>
            <li class="price">
              <sup class="discount_price">360€ </sup>288<sup>€</sup><span>/20h</span>
            </li>
            <li class="price_desc">Prvá konzultácia zadarmo</li>
            <button class="btn">Objednať</button>
          </ul>
        </div>
        <div class="extra">
          <ul class="price_list">
            <li class="price_item">
              <span class="price_header">Online Coaching (vstupná konzultácia a 4x progress
                check)</span>
              <span class="price">60<sup>€</sup>/mesiac</span>
            </li>
            <hr />
            <li class="price_item">
              <span class="price_header">Jedálniček na mieru</span>
              <span class="price">50<sup>€</sup>/mesiac</span>
            </li>
            <hr />
            <li class="price_item">
              <span class="price_header">Osobná konzultácia</span>
              <span class="price">14<sup>€</sup>/jednorázovo</span>
            </li>
            <hr />
            <li class="price_item">
              <span class="price_header">Osobný screening</span>
              <span class="price">14<sup>€</sup>/jednorázovo</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section id="feedback">
      <h2>Referencie</h2>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="img/feedback/feedback_1.jpg" alt="head" />
            <q>
              <i class="fa-solid fa-quote-left"></i> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiu nt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptat
              <i class="fa-solid fa-quote-right"></i></q>
            <h5>Peter Facenna</h5>
          </div>
          <div class="swiper-slide">
            <img src="img/feedback/feedback_2.jpg" alt="head" />
            <q>
              <i class="fa-solid fa-quote-left"></i> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiu nt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptat
              <i class="fa-solid fa-quote-right"></i></q>
            <h5>Aileen Johnstone</h5>
          </div>
          <div class="swiper-slide">
            <img src="img/feedback/feedback_3.jpg" alt="head" />
            <q>
              <i class="fa-solid fa-quote-left"></i> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiu nt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptat
              <i class="fa-solid fa-quote-right"></i></q>
            <h5>Raymond Karpinski</h5>
          </div>
          <div class="swiper-slide">
            <img src="img/feedback/feedback_4.jpg" alt="head" />
            <q>
              <i class="fa-solid fa-quote-left"></i> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiu nt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptat
              <i class="fa-solid fa-quote-right"></i></q>
            <h5>Gregory Cooper</h5>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="swiper-button swiper-button-prev"></div>
      <div class="swiper-button swiper-button-next"></div>
    </section>

    <section id="faq">
      <h2>Často kladené otázky</h2>
      <div
        class="accordion accordion-flush hidden-left"
        id="accordionExample">
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading1">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-expanded="true"
              aria-controls="collapse1">
              Accordion Item #1
            </button>
          </h3>
          <div
            id="collapse1"
            class="accordion-collapse collapse show"
            aria-labelledby="heading1"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiu nt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptat.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading2">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-expanded="false"
              aria-controls="collapse2">
              Accordion Item #2
            </button>
          </h3>
          <div
            id="collapse2"
            class="accordion-collapse collapse"
            aria-labelledby="heading2"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiu nt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptat.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading3">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse3"
              aria-expanded="false"
              aria-controls="collapse3">
              Accordion Item #3
            </button>
          </h3>
          <div
            id="collapse3"
            class="accordion-collapse collapse"
            aria-labelledby="heading3"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiu nt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptat.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading4">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4"
              aria-expanded="false"
              aria-controls="collapse4">
              Accordion Item #4
            </button>
          </h3>
          <div
            id="collapse4"
            class="accordion-collapse collapse"
            aria-labelledby="heading4"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiu nt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptat.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h3 class="accordion-header" id="heading5">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse5"
              aria-expanded="false"
              aria-controls="collapse5">
              Accordion Item #5
            </button>
          </h3>
          <div
            id="collapse5"
            class="accordion-collapse collapse"
            aria-labelledby="heading5"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiu nt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptat.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="contact-container">
        <div class="contact-left">
          <form id="form" class="hidden-left">
            <div class="contact-left-title">
              <h2>Napíšte mi</h2>
              <hr />
            </div>
            <div class="contact-input-container">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name_input"
                  placeholder="Meno"
                  class="contact-inputs" />
                <p id="name-error-message"></p>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email_input"
                  placeholder="Email"
                  class="contact-inputs" />
                <p id="email-error-message"></p>
              </div>
              <div>
                <textarea
                  name="message"
                  id="message_input"
                  placeholder="Správa"
                  class="contact-inputs"></textarea>
                <p id="message-error-message"></p>
              </div>
            </div>
            <div
              class="g-recaptcha"
              data-size="compact"
              data-sitekey="YOUR_SITE_KEY"></div>
            <button type="submit" id="submitContact" name="submitContact">
              <span>Odoslať</span>
              <i class="fa-regular fa-paper-plane"></i>
            </button>
          </form>
          <h5>Kontaktné údaje:</h5>
          <hr />
          <div class="contact-details">
            <div class="phone">
              <i class="fa-solid fa-phone"></i>
              <p><a href="tel:+421908809710">+421 908 809 710</a></p>
            </div>
            <div class="email">
              <i class="fa-solid fa-at"></i>
              <p>
                <a href="mailto:lackovicovasimon@gmail.com">lackovicovasimon@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
        <div class="contact-right">
          <img src="img/contact/contact_img.png" alt="" />
        </div>
      </div>
    </section>
  </main>

  <?php include 'footer.php'; ?>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script defer src="js/script.js"></script>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</body>

</html>