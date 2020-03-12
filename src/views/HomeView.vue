<template>
  <NodeNavigator :version="version" :node="node" />
</template>

<script>
import NodeNavigator from "../components/NodeNavigator.vue";
import { mapGetters } from 'vuex';
export default {
  components: {
    NodeNavigator
  },
  props: {
    version: String,
    node: String
  },
  created() {
    if (!this.version) {
      this.$router.push(`/${this.defaultVersion}/${this.defaultNode}`);
      return;
    }
    if (!this.node) {
      this.$router.push(`/${this.version}/${this.defaultNode}`);
      return;
    }
  },
  computed: {
    ...mapGetters(['defaultNode', 'defaultVersion'])
  }
};
</script>
