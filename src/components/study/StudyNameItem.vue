<template>
  <p class="font-semibold text-gray-600 text-base">{{ description }}</p>
</template>

<script>
export default {
  name: 'StudyNameItem',
  props: {
    description: String,
  }
}
</script>
