<template>
  <div class="filters__item">
    <ul class="filters__select">
      <li class="filters__select-item">
        <div class="filters__select-value" @click="isDropdown=!isDropdown">
          <span>{{ !inputsFilters.status? "Select status..." : inputsFilters.status }}</span>
          <img class="filters__select-icon" :class="{drop: isDropdown}" src="/img/arrow-drop-down.svg" alt="arrow">
        </div>
        <ul class="filters__sub-list" :class="{hide: !isDropdown}" @click="isDropdown = false">
          <li 
            class="filters__sub-list-item" 
            :class="{active: inputsFilters.status==='All'}"
            @click="inputsFilters.status = 'All'"
          >All</li>
          <li 
            class="filters__sub-list-item" 
            :class="{active: inputsFilters.status==='alive'}"
            @click="inputsFilters.status = 'alive'"
          >alive</li>
          <li 
            class="filters__sub-list-item"
            :class="{active: inputsFilters.status==='dead'}" 
            @click="inputsFilters.status = 'dead'"
          >dead</li>
          <li 
            class="filters__sub-list-item"
            :class="{active: inputsFilters.status==='unknown'}" 
            @click="inputsFilters.status = 'unknown'"
          >unknown</li>
        </ul>
      </li>
    </ul>
  </div>  
</template>

<script setup>
  const props =  defineProps({
    inputsFilters:{}
  })
  const isDropdown = ref(false);
</script>

<style lang="scss" scoped>
  .filters {
    &__select {
        width: 100%;
    }
    &__select-item {
        color: rgba(0, 0, 0, 0.6);
    }
    &__select-value {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: inherit;
        width: 100%;
        cursor: pointer;
    }
    &__select-icon {
        margin-right: -10px;
        transition: transform ease-in-out 0.3s;
        &.drop {
          transform: rotate(180deg);
        }
    }
    &__sub-list {
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        background-color: #fff;
        border: 1px solid #caced1;
        padding: 10px;
        transition: transform ease-in-out 0.3s;
        border-radius: 4px;
        &.hide {
          transform: scaleY(0);
        }
    }
    &__sub-list-item {
        padding: 5px;
        cursor: pointer;
        &:hover {
          background-color: #f2f2f2;
        }
        &.active {
          background-color: #f2f2f2;
        }
    }
  }
</style>