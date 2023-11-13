<template>
  <footer>
    <section class="footer">
      <div class="container">
        <a href="/">
          <h2 class="company-name">
            <span class="big"> Kosmetologia profesjonalna</span>
            <span class="small">Martyna Cieślicka</span>
          </h2>
        </a>
        <ul class="social-media">
          <li class="img-hold">
            <img src="" alt="" />
          </li>
        </ul>
      </div>
    </section>
    <section class="sub-footer">
      <div class="container">
        &copy; <span id="mojciech-dev">mojciech.dev</span>. All rights reserved.
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
  padding: 60px;
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

    .img-hold {
      img {
      }
    }
  }
}

.sub-footer {
  padding: 20px 60px;
  background-color: #444;
  font-weight: 300;
  letter-spacing: 2px;
  font-size: 1.2rem;
  color: #b4b4b4;

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

    .social-media {
      .img-hold {
        img {
        }
      }
    }
  }

  .sub-footer {
  }
}
</style>
