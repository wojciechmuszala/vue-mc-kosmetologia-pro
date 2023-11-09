<template>
  <footer class="container">
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
  </footer>
</template>

<script></script>

<style lang="scss" scoped>
footer {
  background-color: #555;
  padding: 60px;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;

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
</style>
