<?php
$isHome = basename($_SERVER['PHP_SELF']) === 'index.php';
?>

<header>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="<?php echo $isHome ? '#logo' : 'index.php#logo'; ?>">
        <img src="img/logo/logo.png" alt="logo" class="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav-underline">
          <li class="nav-item">
            <a
              class="nav-link"
              href="<?php echo $isHome ? '#about' : 'index.php#about'; ?>">O mne</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="<?php echo $isHome ? '#pricing' : 'index.php#pricing'; ?>">Cenník</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="<?php echo $isHome ? '#feedback' : 'index.php#feedback'; ?>">Referencie</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="<?php echo $isHome ? '#faq' : 'index.php#faq'; ?>">Faq</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="<?php echo $isHome ? '#contact' : 'index.php#contact'; ?>">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>