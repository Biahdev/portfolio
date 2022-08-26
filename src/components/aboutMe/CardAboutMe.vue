<template>
  <div class="bg-gray-50 px-8 py-10 rounded-md">
    <div class="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
    <slot></slot>
    </div>

    <h4 class="font-medium text-gray-700 text-lg mb-4">{{ title }}</h4>

    <p class="font-normal text-gray-500 text-md">
     {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CardAboutVue',
  props:{
    title:String,
    description:String,
  }

}
</script>

<style>
</style>