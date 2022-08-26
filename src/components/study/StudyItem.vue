<template>
  <p class="font-normal text-gray-400 text-base">{{ description }}</p>
</template>

<script>
export default {
  name: 'StudyItem',
  props: {
    description: String,
  }
}
</script>
