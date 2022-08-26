<template>
  <div class="dark:bg-mydark-900 bg-gray-100 px-8 py-10 rounded-md shadow-md">
    <div class=" dark:bg-mydark-800 w-20 py-6 text-gray-700 flex justify-center bg-gray-200 rounded-md mb-4">
    <slot></slot>
    </div>

    <h4 class=" dark:text-gray-100 font-medium text-gray-700 text-lg mb-4">{{ title }}</h4>

    <p class="font-normal text-gray-500 text-md dark:text-zinc-400">
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