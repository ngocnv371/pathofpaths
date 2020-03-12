import Vue from "vue";
import Vuex from "vuex";
import data from '../data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
    versions() {
      return data.charts.map(c => c.version);
    },
    defaultVersion() {
      return data.charts[data.charts.length - 1].version;
    },
    defaultNode(_, getters) {
      const chart = data.charts.find(c => c.version === getters.defaultVersion);
      return chart.nodes[0].id;
    },
    nodeById() {
      return (version, id) => {
        const chart = data.charts.find(c => c.version === version);
        if (!chart) {
          return null;
        }
        return chart.nodes.find(n => n.id === id);
      }
    }
  },
  mutations: {
  },
  actions: {
  }
});
