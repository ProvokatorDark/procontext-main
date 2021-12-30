<template>
  <div
    class="input-item"
    :class="{ 'input-item--active': isActive }"
  >
    <div
      class="input-item-head"
      @click="isActive = !isActive"
    >

      <div class="input-item-head__arrow">
        <div></div><div></div>
      </div>

      <div class="input-item-head__checkbox">
        <input
          type="checkbox"
          v-model="item.isActive"
          @click.stop="changeListStatus"
        >
      </div>

      <div class="input-item-head__name">{{ item.name }}</div>
    </div>

    <div class="input-item__body">
      <InputControl
        v-for="(control, i) in item.items"
        :key="i"
        :item="control"
        @itemChanged="updateListStatus"
      />
    </div>
  </div>
</template>
<script>
import InputControl from '@/components/Input/InputControl.vue';

export default {
  name: 'InputItem',
  components: {
    InputControl
  },
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    changeListStatus() {
      if (this.item.isActive) {
        this.item.isActive = false;
        this.item.items.forEach(item => {
          item.isActive = false;
        });
      } else {
        this.item.isActive = true;
        this.item.items.forEach(item => {
          item.isActive = true;
        });
      }
    },
    updateListStatus() {
      const filteredArray = this.item.items.filter(el => {
        return el.isActive === true
      });

      if (filteredArray.length) {
        this.item.isActive = true;
      } else {
        this.item.isActive = false;
      }
    }
  }
}
</script>

<style lang="scss">
  .input-item {

    &__body {
      display: none;
      padding: 8px 8px 8px 64px;
      background-color: #3f2f1b;
    }

    &--active {
      .input-item-head {
        .input-item-head__arrow {
          div {
            top: 6px;
          }

          div:first-child {
            transform: rotate(-45deg);
          }

          div:last-child {
            transform: rotate(45deg);
          }
        }
      }

      .input-item__body {
        display: block;
      }
    }
  }

  .input-item-head {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    padding: 8px;
    background-color: #231a0f;
    cursor: pointer;

    &__arrow {
      width: 16px;
      height: 16px;
      margin-right: 8px;
      position: relative;

      div {
        width: 65%;
        height: 2px;
        background: #969595;
        position: absolute;
        top: 6px;
        left: 0;
      }

      div:first-child {
        transform: rotate(45deg);
      }

      div:last-child {
        left: auto;
        right: 0;
        transform: rotate(-45deg);
      }
    }

    &__checkbox {
      margin-right: 16px;
    }

    &__name {
    }

    &:hover {
      background-color: #0b6b14;
    }
  }
</style>
