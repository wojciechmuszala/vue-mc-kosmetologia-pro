<template>
  <section class="company">
    <div class="logo">
      <div class="img-hold">
        <img src="../../../assets/images/home-logo.png" alt="" />
      </div>
    </div>
    <article class="text">
      <p>
        Naszym wspólnym celem jest zapewnienie najlepszych efektów, ktore nie
        tylko podnosza Twoje piekno, ale takze pozostawiaja pozytywne wrażenie w
        naszym ciepłym i przyjaznym gabinecie. Wierzymy, ze dobra energia i
        pozytywna atmosfera sa kluczem do doskonalej pielegnacji.
      </p>
      <p>
        Dlatego zapraszamy Cie do naszego miejsca, gdzie troska o Twoje piekno
        idzie w parze z przyjemnoscią i miłą atmosterą.
      </p>
      <p>Do zobaczenia u nas!</p>
    </article>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.company {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: $color-nude;
  font-size: 1.6rem;
  column-gap: 60px;
  .logo {
    margin-bottom: 60px;
    .img-hold {
      width: 70vw;
      max-width: 200px;
    }
  }
  .text {
    p {
      font-size: 1.6rem;
      margin-bottom: 30px;
      font-weight: 200;
    }
  }
}

@media screen and (min-width: 767px) {
  .company {
    flex-direction: row;
    font-size: 2rem;
    column-gap: 40px;
    padding: 40px;
    .logo {
      margin-bottom: 0;
      .img-hold {
        width: 30vw;
        max-width: 300px;
      }
    }
    .text {
      p {
        font-size: 2.4rem;
      }
    }
  }
}
@media screen and (min-width: 900px) {
  .company {
    padding: 60px;
    column-gap: 60px;
    .logo {
      .img-hold {
        width: 40vw;
      }
    }
  }
}
@media screen and (min-width: 1300px) {
  .company {
    padding: 80px;
    column-gap: 80px;
  }
}
</style>
