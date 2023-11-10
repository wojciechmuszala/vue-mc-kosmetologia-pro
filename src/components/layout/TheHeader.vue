<template>
  <header class="container">
    <nav class="nav">
      <router-link class="logo" to="/">
         <img
          src="../../assets/images/mini-logo.png"
          alt="Logo MC Kosmetologia profesjonalna" />
      </router-link>
      <div
        :class="['burger', { hiden: menuMobileIsOpen }]"
        @click="toggleMobileMenu">
        <div class="wrapper">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul :class="['menu', { open: menuMobileIsOpen }]">
        <li class="close" @click="toggleMobileMenu">×</li>
        <li>
          <router-link to="/o-nas">O nas</router-link>
        </li>
        <li>
          <router-link to="/oferta">Oferta</router-link>
        </li>
        <li>
          <router-link to="/cennik">Cennik</router-link>
        </li>
        <li>
          <router-link to="/kontakt">Kontakt</router-link>
        </li>
        <li class="sign-up">
          <router-link to="/zapisz-sie">Zapisz się</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuMobileIsOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.menuMobileIsOpen = !this.menuMobileIsOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: rgba($color: white, $alpha: 0.9);
  z-index: 1;
  position: sticky;
  top: 0;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 32px;
}

.logo {
  display: block;
  max-width: 40px;

  img {
    width: 100%;
  }
}

.burger {
  padding: 10px;
  opacity: 1;
  transition: all 0.3s ease;
  cursor: pointer;

  &.hiden {
    opacity: 0;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 8px;
    width: 20px;
  }

  span {
    width: 100%;
    height: 1px;
    background-color: black;
  }
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  position: fixed;
  top: 0;
  right: -100%;
  width: 240px;
  height: 100vh;
  background-color: rgba($color: white, $alpha: 0.9);
  padding: 20px;
  transition: all 0.4s linear;

  &.open {
    right: 0;
  }

  li {
    &.close {
      position: absolute;
      top: 0;
      right: 0;
      padding: 20px;
      margin-top: 12px;
      font-size: 3.2rem;
      line-height: 16px;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      padding: 4px 8px;
      transition: all 0.3s ease;
      display: block;
      font-size: 2.4rem;
      width: max-content;
      position: relative;
      &::before{
         display: block;
          content: "•";
          position: absolute;
          top: 50%;
          left: 5px;
          transform: translateY(-60%);
          font-size: 40px;
          opacity: 0;
          transition: all 0.3s ease;
      }

      &.active {
        padding-left: 30px;
        pointer-events: none;

        &::before {
         opacity: 1;
        }
      }
    }
  }
}

@media screen and (min-width: 767px) {
  header {
    position: sticky;
    top: 0;
    background-color: rgba($color: white, $alpha: 0.9);
  }
  .nav {
    margin-bottom: 0;
    padding-inline: 0;
  }
  .burger {
    display: none;
  }

  .logo {
    max-width: 60px;
  }
  .menu {
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    width: auto;
    height: auto;
    background-color: transparent;
    gap: 0 16px;

    li {
      &.close {
        display: none;
      }

      a {
        position: relative;
        font-size: 1.6rem;

        &::before {
          content: "";
          width: 0;
          height: 1px;
          bottom: 0;
          top: unset;
          transform: translateY(5px);
          left: 0;
          background-color: black;
          opacity: 1;
        }
        &.active {
          padding-left: 8px;

          &::before {
            width: 100%;
          }

          &:hover {
            transform: none;
          }
        }


        &:hover {
          transform: translateY(-3px);
        }
      }
    }
  }
}
</style>
