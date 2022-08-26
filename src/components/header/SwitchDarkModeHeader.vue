<template>
  <div v-on:click="changeDarkMode" class="mr-5 self-center">
    <div v-if="darkMode">
      <i class="fa-solid fa-moon text-4xl dark:text-gray-100 text-gray-500"></i>
    </div>
    <div v-else>
      <i class="fa-solid fa-sun text-4xl dark:text-gray-100 text-gray-500" ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwitchDarkModeHeader',
  data() {
    return {
      darkMode: true
    }
  },
  methods: {
    changeDarkMode() {
      const html = document.querySelector('html')
      html.classList.toggle('dark')
      this.darkMode = !this.darkMode
    }
  }

}
</script>

<style>
</style>