<template>
  <div id="main-header-wrapper" class="container">
    <div class="Header-title">
      <div class="logo">Portfolio</div>

      <div class="actions">
        <div @click="changeThemeMode">
          <div v-if="themeMode == 'dark'" title="switch to light mood">
            <i class="fa-regular fa-moon"></i>
          </div>
          <div v-else title="switch to dark mood">
            <i class="fa-regular fa-sun"></i>
          </div>

          <div></div>
        </div>
      </div>
    </div>
    <div class="menu">
      <ul>
        <li><a href="#hero-section">Home</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#my-skill">Skill</a></li>
        <li><a href="#my-work">Portfolio</a></li>
        <li><a href="#contact-info">Contact</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const themeMode = ref("dark");
function changeThemeMode() {
  themeMode.value = themeMode.value == "dark" ? "light" : "dark";

  let root = document.querySelector(":root");
  if (themeMode.value == "light") {
    root.style.setProperty("--bg-primary-color", "#efefef");
    root.style.setProperty("--text-primary-color", "#000000");
  } else {
    root.style.setProperty("--bg-primary-color", "#000000");
    root.style.setProperty("--text-primary-color", "#ffffff");
  }
  console.log();
}
</script>

<style lang="scss">
#main-header-wrapper {
  // position: relative;
  text-align: center;
  padding: 0% 1rem;
  .Header-title {
    @media screen and (max-width: 600px) {
      display: flex;
      justify-content: space-between;
    }

    .logo {
      float: left;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 4rem;
      font-family: var(--logo-font-family);
      color: var(--text-primary-color) !important;
    }
    .actions {
      margin-right: 10px;
      float: right;
    }
  }
  .menu {
    display: inline-block;
    @media screen and (max-width: 600px) {
      display: none;
    }
    // position: absolute;
    ul {
      padding: 0%;
      margin: 0%;
      display: flex;
      align-items: center;
      li {
        padding: 0rem 0.5rem;
        list-style: none;
        a {
          padding: 1rem;
          color: var(--text-primary-color);
          font-weight: 700;
          text-decoration: none;
          transition: 0.4s;
          background: linear-gradient(
            0deg,
            var(--theme-primary-color) 1%,
            transparent 48%
          );
          background-size: 102% 200%;
          background-position: top;
          &:hover {
            background-position: bottom;
            color: #fff;
            border-radius: 1rem;
          }
        }
      }
    }
  }
}
</style>
