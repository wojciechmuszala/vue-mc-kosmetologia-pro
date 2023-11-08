<template>
  <section class="keynote">
    <div class="text-hold">
      <h3 class="title">Myśl przewodnia</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem
        officia repellendus sit minima porro earum tempora consectetur dolores
        quae, voluptatibus assumenda mollitia facilis eos enim dolorum. Aperiam,
        voluptas at. Quas debitis neque dignissimos sed esse doloremque
        doloribus aperiam molestias! Nulla, sapiente officia? Quisquam quo animi
        quas inventore et quidem provident doloribus perferendis! Nesciunt
        adipisci, laboriosam, deserunt necessitatibus, unde quam quia cum alias
        perferendis natus voluptatum? Vitae nam molestiae tenetur voluptate
        ducimus exercitationem doloremque minus unde eveniet fugit, laudantium,
        nisi dolore rem blanditiis omnis ratione deleniti id veniam ad
        repellendus? Necessitatibus deleniti dolorem esse dolore architecto
        quasi, labore omnis sit?
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
