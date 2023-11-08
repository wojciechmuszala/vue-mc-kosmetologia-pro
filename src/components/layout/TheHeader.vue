<template>
  <nav class="nav main-container">
    <a href="/" class="logo">
      <img
        src="../../assets/images/menu-logo.png"
        alt="Logo MC Kosmetologia profesjonalna" />
    </a>
    <div class="burger" @click="toggleMobileMenu">
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
      <li>
        <router-link to="/zapisz-sie">Zapisz się</router-link>
      </li>
    </ul>
  </nav>
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
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 16px 32px 0;
  background-color: white;
  z-index: 1;
}

.burger {
  cursor: pointer;
  padding: 10px;
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
  display: none;
  flex-direction: column;
  gap: 16px 0;
  position: fixed;
  top: 0;
  right: 0;
  width: 240px;
  display: none;
  background-color: #f5f5f5;
  height: 100vh;
  padding: 20px;

  &.open {
    display: flex;
  }

  li {
    &.close {
      position: absolute;
      top: 0;
      right: 0;
      padding: 20px;
      margin-top: 12px;
      cursor: pointer;
      font-size: 3.2rem;
      line-height: 16px;
    }

    a {
      text-decoration: none;
      padding: 4px 8px;
      transition: all 0.3s ease;
      display: block;
      font-size: 2.4rem;
      width: max-content;

      &.active {
        font-weight: 600;
        padding-left: 20px;
        pointer-events: none;
      }
    }
  }
}

.logo {
  display: block;
  max-width: 60px;

  img {
    width: 100%;
  }
}

@media screen and (min-width: 767px) {
  .nav {
    position: sticky;
    top: 0;
    margin-bottom: 0;
  }
  .burger {
    display: none;
  }
  .menu {
    position: static;
    display: flex;
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
        /* border-bottom: 1px solid transparent; */
        font-size: 1.6rem;

        &::after {
          display: block;
          content: "";
          /* width: 100%; */
          width: 0;
          height: 1px;
          position: absolute;
          bottom: 0;
          transform: translateY(5px);
          left: 0;
          background-color: black;
          transition: all 0.3s ease;
        }
        &.active {
          /* border-color: black; */
          padding-left: 8px;
          font-weight: 400;

          &::after {
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
