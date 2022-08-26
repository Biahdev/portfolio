<template>
  <a :href="link"
    class="shadow-lg px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-300 hover:text-gray-700 transition ease-linear duration-500 dark:bg-gray-100 dark:text-mydark-800">
    {{ title }}
  </a>
</template>

<script>
export default {
  name: 'BtnHeader',
  props: {
    link: String,
    title: String,
  }

}
</script>

<style>
</style>