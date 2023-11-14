<template>
  <footer>
    <section class="footer">
      <div class="container">
        <div class="wrapper">
          <a class="company-name-link" href="/">
            <h2 class="company-name">
              <span class="big"> Kosmetologia profesjonalna</span>
              <span class="small">Martyna Cieślicka</span>
            </h2>
          </a>
          <ul class="social-media">
            <li class="img-hold">
              <a href="https://www.instagram.com/mc.kosmetologiapro/">
                <img
                  src="../../assets/images/social-media/instagram.svg"
                  alt="Instagram" />
              </a>
            </li>
            <li class="img-hold">
              <a href="https://www.facebook.com/mc.kosmetologiapro/">
                <img
                  src="../../assets/images/social-media/facebook.svg"
                  alt="Facebook" />
              </a>
            </li>
            <li class="img-hold">
              <a aria-label="Chat on WhatsApp" href="https://wa.me/48573778596">
                <img
                  src="../../assets/images/social-media/whatsapp.svg"
                  alt="WhatsApp" />
              </a>
            </li>
            <li class="img-hold">
              <a
                href="https://mckosmetologiaprofesjonalnamartynacieslicka.booksy.com">
                <img
                  src="../../assets/images/social-media/booksy.svg"
                  alt="Booksy" />
              </a>
            </li>
            <li class="img-hold">
              <a href="https://maps.app.goo.gl/u4zXbfY7THJnCAKu6">
                <img
                  src="../../assets/images/social-media/pin.svg"
                  alt="Pinezka" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="sub-footer">
      <div class="container">
        <div class="wrapper">
          &copy; <span id="mojciech-dev">mojciech.dev</span>. All rights
          reserved.
        </div>
      </div>
    </section>
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
footer {
  margin-top: 100px;
  color: white;
}
.footer {
  background-color: #555;
  padding: 40px 0;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  a {
    text-decoration: none;
  }
  .company-name {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    color: white;
    font-weight: 300;
    letter-spacing: 1.5px;
    margin-bottom: 40px;
    .big {
      font-size: 12px;
      padding-bottom: 8px;
    }

    .small {
      font-size: 8px;
      letter-spacing: 4px;
    }
  }

  .social-media {
    display: flex;
    gap: 15px;
    width: max-content;

    li {
      width: 38px;
      a {
        padding: 5px;
        display: block;
        width: 100%;
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.2);
        }
      }
    }

    .img-hold {
      img {
        max-height: 25px;
        filter: invert(1);
      }
    }
  }
}

.sub-footer {
  padding: 20px 0;
  background-color: #444;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 1rem;
  color: #b4b4b4;

  margin-left: auto;

  #mojciech-dev {
    font-family: "Roboto Mono", monospace;
    letter-spacing: 1px;
  }
}

@media screen and (min-width: 767px) {
  .footer {
    .wrapper {
      justify-content: space-between;
      flex-direction: row;
    }

    .company-name {
      margin-bottom: 0;
    }

    .social-media {
      .img-hold {
        img {
        }
      }
    }
  }

  .sub-footer {
    .wrapper {
      width: max-content;
      margin: auto;
    }
  }
}
</style>
