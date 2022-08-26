<template>
  <div class="bg-gray-50 px-8 py-10 rounded-md">
    <h4 class="font-medium text-gray-700 text-lg mb-4">
      {{ title }}
    </h4>

    <p class="font-normal text-gray-500 text-md mb-4">
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