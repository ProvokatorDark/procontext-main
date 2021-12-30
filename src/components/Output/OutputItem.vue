<template>
  <div class="result-item">

    <div class="result-item__name">{{ item.name }}</div>

    <template
        v-for="(list, i) in item.items"
    >
      <div class="result-item__list"
        v-if="list.quantity && list.isActive"
        :key="i"
      >
        <div class="result-item__list--rick-roll"></div>
        <div class="result-item__list-item"
          v-for="(cube, j) in list.quantity"
          :key="j"
          :style="{ 'background-color': list.color }"
          @click="list.quantity--"
        />

      </div>
    </template>

  </div>
</template>

<script>
export default {
  name: 'OutputItem',
  components: {
  },
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
  .result-item {
    background-color: #3f2f1b;

    &__name {
      padding: 8px;
      background-color: #231a0f;
    }

    &__list {
      display: flex;
      flex-flow: row wrap;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 8px 8px 0 8px;

      &:last-child {
        padding-bottom: 8px;
      }
    }

    &__list-item {
      width: 16px;
      height: 16px;
      margin: 0 2px 2px 0;
      cursor: pointer;

      &:last-child {
        margin: 0;
      }
    }
  }
</style>
