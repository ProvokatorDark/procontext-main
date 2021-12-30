<template>
  <div class="input-control">

    <input
        type="checkbox"
        class="input-control__checkbox"
        @click="changeListStatus"
        v-model="item.isActive"
    >

    <div class="input-control__name">{{ item.name }}</div>

    <input
        type="number"
        class="input-control__quantity"
        v-model.number="dataItem.quantity"
    >

    <input
        type="color"
        class="input-control__color"
        v-model="dataItem.color"
    >

  </div>
</template>

<script>
export default {
  name: 'InputControl',
  data() {
    return {
      dataItem: {}
    }
  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    changeListStatus() {
      this.item.isActive = !this.item.isActive;
      this.$emit('itemChanged');
    },
    getData(){
      this.dataItem = this.item
    },
    updateData(){
      this.$store.commit('updateItemQuantity',this.dataItem)
    }
  },
  watch: {
    'dataItem.quantity'(val) {
      console.log(val)
      if (val<0){
        this.dataItem.quantity=0
      }
      this.updateData();
    },
  },
  created() {
    this.getData();
  },
}
</script>

<style lang="scss">
.input-control {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;

  &__checkbox {
    margin-right: 8px;
  }

  &__name {
  }

  &__quantity {
    margin-left: auto;
    margin-right: 10px;
    width: 50px;
    background-color: #2f2e2e;
    color: #fafafa;


    &:focus,
    &:active {
      outline: none;
    }
  }

  &__color {
    width: 55px;
    height: 25px;
    background: none;
    border: none;
  }
}
</style>
