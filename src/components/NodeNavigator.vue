<template>
  <div class="hero-body">
    <div v-if="currentNode" class="container has-text-centered">
      <h1 class="title" v-text="currentNode.title"></h1>
      <h2 class="subtitle" v-text="currentNode.subtitle"></h2>
      <div class="paths buttons section is-centered">
        <button
          v-for="path of currentNode.paths"
          :key="path.id"
          class="path button is-link is-rounded"
          @click="handlePathClick(path)"
        >
          <span v-text="path.title"></span>
        </button>
      </div>
    </div>
    <div v-else class="container has-text-centered">
      <h1 class="title">404 Node not found</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NodeNavigator",
  props: {
    version: String,
    node: String
  },
  computed: {
    ...mapGetters(["nodeById"]),
    currentNode() {
      return this.nodeById(this.version, this.node);
    }
  },
  methods: {
    handlePathClick(path) {
      this.$router.push(`/${this.version}/${path.id}`);
    }
  }
};
</script>
