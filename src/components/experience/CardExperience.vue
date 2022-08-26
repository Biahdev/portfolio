<template>
  <div class="dark:bg-mydark-900 bg-gray-100 px-8 py-10 rounded-md shadow-md">
    <h4 class="font-medium dark:text-gray-100 text-gray-700 text-lg mb-4">
      {{ title }}
    </h4>

    <p class="dark:text-gray-400 font-normal text-gray-500 text-md mb-4">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CardPortfolio',
  props: {
    title: String,
    description: String,
    link: String
  }
}
</script>

<style>
</style>