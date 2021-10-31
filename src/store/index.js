import { createStore } from "vuex";
import data from "@/hotels";

export default createStore({
  state: {
    hotels: data,
  },
  mutations: {},
  actions: {},
  modules: {},
});
