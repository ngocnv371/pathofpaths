<template>
  <div class="navbar-item has-dropdown is-hoverable version-selector">
    <a class="navbar-link">
      Version
    </a>

    <div class="navbar-dropdown">
      <a class="navbar-item" v-for="v of versions" :key="v" :href="`/pathofpaths/${v}`">
        {{ v }}
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["versions"])
  }
};
</script>

<style>
a.version-selector.navbar-item.has-dropdown:hover .navbar-dropdown {
	border-top-color: transparent !important;
}
.version-selector.navbar-item.has-dropdown .navbar-dropdown,
.version-selector.navbar-item.has-dropdown .navbar-item,
.version-selector.navbar-item.has-dropdown .navbar-link {
	background-color: hsl(171, 100%, 41%) !important;
}
.version-selector.navbar-item.has-dropdown:hover .navbar-dropdown,
.version-selector.navbar-item.has-dropdown:hover .navbar-item,
.version-selector.navbar-item.has-dropdown:hover .navbar-link {
	background-color: hsl(171, 100%, 38%) !important;
}
</style>