<template>
  <header class="header">
      <div class="container header__inner">
        <NuxtLink to="/">
          <img src="/img/logo.png" alt="logo" class="header__logo">
        </NuxtLink>
        <nav class="header__navbar" :class="{showNav: isShow}" >
          <NuxtLink to="/" class="header__navbar-item" @click="isShow=false">Characters</NuxtLink>
          <NuxtLink to="/episodes" class="header__navbar-item" @click="isShow=false">Episodes</NuxtLink>
        </nav>
        <div class="header__navbar-icons">
          <img @click="isShow=false" class="header__nav-icon" :class="{hide:!isShow}" src="/img/close.svg" alt="icon">
          <img @click="isShow=true" class="header__nav-icon" :class="{hide:isShow}" src="/img/menu.svg" alt="icon">
        </div>
      </div>
    </header>
</template>

<script setup>
const isShow = ref(false);
  
</script>

<style lang="scss" scoped>
  .header {
    height: 60px;
    background: #fff;
    box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 425px) {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 999;
    }
    &__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__logo {
        @media screen and (max-width: 425px) {
            width: 46px;
            height: 49px;
        }
    }
    &__navbar {
        display: flex;
        align-items: center;
        column-gap: 24px;
        background-color: #fff;
        @media screen and (max-width: 425px) {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2;
            flex-direction: column;
            align-items: center;
            gap: 48px;
            padding-top: 120px;
            display: none;
            &.showNav {
            display: flex;
          }
        }
    }
    &__navbar-item {
        font-size: 18px;
        font-weight: 700;
        text-transform: capitalize;
        @media screen and (max-width: 425px) {
            font-size: 24px;
        }
    }
    &__navbar-icons {
        display: none;
        @media screen and (max-width: 425px) {
          display: block;
        }
    }
    &__nav-icon {
      &.hide {
        display: none;
      }
    }
}
</style>