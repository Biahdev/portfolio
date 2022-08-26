<template>
  <div class="flex space-x-6">
    <h1 class="dark:text-gray-100 font-normal text-gray-700 text-3xl md:text-4xl">
      {{ number }}
    </h1>
    <span class="dark:bg-gray-700 w-20 h-0.5 bg-gray-300 mt-5"></span>
    <div>
      <a :href="link">
        <h1 class="dark:text-gray-100 font-normal text-gray-700 text-3xl md:text-4xl mb-5">{{ title }}</h1>
      </a>
      <p class="dark:text-gray-400 font-normal text-gray-500 text-sm md:text-base">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    title: String,
    number: String,
    link: String
  }
}
</script>
