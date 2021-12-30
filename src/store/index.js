import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        name: 'List 1',
        isActive: true,
        items: [
          {
            name: 'Item 1',
            isActive: true,
            color: '#b47474',
            quantity: 5
          },
          {
            name: 'Item 2',
            isActive: true,
            color: '#bebe45',
            quantity: 14
          },
          {
            name: 'Item 3',
            isActive: true,
            color: '#9b2c2c',
            quantity: 25
          },
          {
            name: 'Item 4',
            isActive: true,
            color: '#7d9bc7',
            quantity: 1
          }
        ]
      },
      {
        name: 'List 2',
        isActive: false,
        items: [
          {
            name: 'Item 1',
            isActive: false,
            color: '#7c4c0c',
            quantity: 10
          },
          {
            name: 'Item 2',
            isActive: false,
            color: '#66b45a',
            quantity: 8
          },
          {
            name: 'Item 3',
            isActive: false,
            color: '#a65f0e',
            quantity: 22
          },
          {
            name: 'Item 4',
            isActive: false,
            color: '#bac07f',
            quantity: 15
          },
          {
            name: 'Item 5',
            isActive: false,
            color: '#66b45a',
            quantity: 14
          },
          {
            name: 'Item 6',
            isActive: false,
            color: '#FDAB56',
            quantity: 12
          },
          {
            name: 'Item 7',
            isActive: false,
            color: '#e10202',
            quantity: 41
          }
        ]
      },
      {
        name: 'List 3',
        isActive: false,
        items: [
          {
            name: 'Item 1',
            isActive: false,
            color: '#FFFFFF',
            quantity: 25
          },
          {
            name: 'Item 2',
            isActive: false,
            color: '#0000FF',
            quantity: 10
          },
          {
            name: 'Item 3',
            isActive: false,
            color: '#FF0000',
            quantity: 19
          }
        ]
      },
      {
        name: 'List 4',
        isActive: false,
        items: [
          {
            name: 'Item 1',
            isActive: false,
            color: '#020204',
            quantity: 89
          },
          {
            name: 'Item 2',
            isActive: false,
            color: '#2222b4',
            quantity: 187
          },
          {
            name: 'Item 3',
            isActive: false,
            color: '#204829',
            quantity: 194
          },
          {
            name: 'Item 4',
            isActive: false,
            color: '#7c4c0c',
            quantity: 89
          },
          {
            name: 'Item 5',
            isActive: false,
            color: '#7d9bc7',
            quantity: 42
          },
          {
            name: 'Item 6',
            isActive: false,
            color: '#987466',
            quantity: 14
          },
          {
            name: 'Item 7',
            isActive: false,
            color: '#0b6b14',
            quantity: 52
          }
        ]
      }
    ],
    dataItems:{}
  },
  mutations:{
    updateItemQuantity(state, data){
      state.dataItems = data
    }
  },
  getters: {
    getItems(state) {
      return state.items;
    }
  }
})
