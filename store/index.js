 import Vue from "vue";
 import Vuex from "vuex";
 import product from "./modules/product-module.js";
 import secondModule from "./modules/second-module.js";
 import thirdModule from "./modules/third-module.js";
 Vue.use(Vuex);
 const store = () => {
   return new Vuex.Store({

     modules: {
       product,
       secondModule,
       thirdModule
     }
   })
 }

 export default store;
