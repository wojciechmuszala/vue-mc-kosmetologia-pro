<template>
  <section class="keynote">
    <div class="text-hold">
      <h3 class="title">Myśl przewodnia</h3>
      <p>
        Troska o swoje ciało to inwestycja w zdrowie i dobre samopoczucie. Nasz gabinet kosmetologiczny dąży do tego, aby każdy klient nie tylko wyglądał, ale przede wszystkim czuł się wyjątkowo, doświadczając pełnej opieki, której organizm naprawdę zasługuje.
      </p>
    </div>
    <div class="img-hold">
      <img src="../../../assets/images/persons/home-person-1.png" alt="" />
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>

  .keynote {
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;
  
    .text-hold {
      justify-content: center;
      padding: 60px 10px 0 10px;
  
  
      .title {
        width: max-content;
        margin: 0 auto 20px;
      }
      p {
        line-height: 24px;
        font-size: 1.6rem;
      }
    }
  
    .img-hold {
      overflow: hidden;
      padding-top: 60px;
      height: 300px;
  
      img {
        object-fit: cover;
        object-position: 0% 50%;
        max-height: 100%;
        opacity: 0.8;
      }
    }
  }

@media screen and (min-width: 900px) {
  .keynote {
    padding-bottom: 0;
    flex-direction: row;
  
    .text-hold {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 50px;
      width: 50%;
  
      .title {
        margin: 0 0 20px;
      }
    }
  
    .img-hold {
      width: 50%;
      padding: clamp(50px,8vw,100px);
      height: 100%;
    }
  }
}
</style>
