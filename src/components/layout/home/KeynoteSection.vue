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
  max-height: 500px;

  .text-hold {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
    width: 50%;

    .title {
      width: max-content;
      margin-bottom: 20px;
    }
    p {
      line-height: 24px;
      font-size: 1.6rem;
    }
  }

  .img-hold {
    width: 50%;
    overflow: hidden;
    padding: clamp(50px,8vw,100px);
    
    img {
      object-fit: cover;
      object-position: 0% 50%;
      width: 100%;
      max-height: 100%;
      opacity: 0.8;
    }
  }
}
</style>
