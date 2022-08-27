<template>
  <section class="py-10 md:py-16">
    <div class="container max-w-screen-xl mx-auto px-4">
      <h1 class="dark:text-gray-100 font-medium text-gray-700 text-3xl md:text-4xl mb-5">Experiencia</h1>
      <p class="font-normal text-gray-500 text-xs md:text-base mb-10">
        Um pouco da minha historia
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardExperience title="2022 - 2026" description="
        Faculdade
        " />
        <CardExperience title="2022" description="
        Voltei a trabalhar na JL
        " />
        <CardExperience title="2021" description="
        Estudando pro vestibular
        " />
        <CardExperience title="2020 - 2021" description="Jl primeira vez" />

        <CardExperience title="2019 - 2020" description="UAI tec primeira oportunidae" />
      </div>
    </div>
  </section>
</template>

<script>
import CardExperience from './CardExperience.vue';
export default {
  name: 'ExperienceSection',
  components: { CardExperience }
}
</script>
