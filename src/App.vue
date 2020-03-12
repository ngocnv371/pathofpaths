<template>
  <section id="app" class="hero is-primary is-fullheight">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/pathofpaths">
              <img src="./assets/logo.png" /> <span class="subtitle" style="padding-left: 10px">Path of Paths</span>
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <VersionSelector />
              <a class="navbar-item" href="https://ngocnv371.github.io">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <router-view></router-view>

    <div class="hero-foot">
      <section class="section has-text-centered">
        <p>
          Path of Paths by <a href="https://ngocnv371.github.io">Ngoc Ngo</a>
        </p>
      </section>
    </div>
  </section>
</template>

<script>
import VersionSelector from "./components/VersionSelector.vue";

export default {
  name: "App",
  components: {
    VersionSelector
  }
};
</script>
