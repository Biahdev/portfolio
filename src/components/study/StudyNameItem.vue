<template>
  <p class="font-semibold dark:text-gray-100 text-gray-600 text-base">{{ description }}</p>
</template>

<script>
export default {
  name: 'StudyNameItem',
  props: {
    description: String,
  }
}
</script>
