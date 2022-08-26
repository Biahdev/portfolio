<template>
  <section class="py-10 md:py-16">
    <div class="container max-w-screen-xl mx-auto px-4">
      <h1 class="font-medium dark:text-gray-100 text-gray-700 text-3xl md:text-4xl mb-5">
        Oque estou estudando?
      </h1>

      <p class="font-normal dark:text-gray-400 text-gray-500 text-xs md:text-base mb-10">
        <a href="">
          <span class="font-semibold text-gray-500 text-md relative z-10">
            Lista completa
          </span>
        </a>
      </p>

      <div class="flex flex-col sm:flex-row justify-between">
        <div class="space-y-6 md:space-y-14 mb-14 md:mb-0">
          <StudyTitleItem title="Nome" />

          <StudyNameItem description="Laravel 1" />
          <StudyNameItem description="Laravel 2" />
          <StudyNameItem description="Laravel 3" />
        </div>

        <div class="space-y-6 md:space-y-14 mb-14 md:mb-0">
          <StudyTitleItem title="Instituição" />

          <StudyItem description="Alura" />
          <StudyItem description="Alura" />
          <StudyItem description="Alura" />
        </div>

        <div class="space-y-6 md:space-y-14 mb-14 md:mb-0">
          <StudyTitleItem title="Status" />

          <StudyItem description="Andamento" />
          <StudyItem description="Completo" />
          <StudyItem description="Completo" />
        </div>

        <div class="space-y-6 md:space-y-14">
          <StudyTitleItem title="Data" />

          <StudyItem description="19/2022" />
          <StudyItem description="10/2021" />
          <StudyItem description="31/2019" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StudyTitleItem from './StudyTitleItem.vue';
import StudyItem from './StudyItem.vue';
import StudyNameItem from './StudyNameItem.vue';

export default {
  name: "StudySection",
  components: {
    StudyTitleItem,
    StudyItem,
    StudyNameItem
  }
}
</script>
