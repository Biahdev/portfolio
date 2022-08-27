<template>
  <section class="py-10 md:py-16">
    <div class="container max-w-screen-xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardAboutMe title="Eu"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores illum quod quas ratione beatae error ipsa.">

          <i class="dark:text-gray-100 fa-solid fa-user"></i>

        </CardAboutMe>
        <CardAboutMe title="Stack"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores illum quod quas ratione beatae error ipsa.">
          <i class="dark:text-gray-100 fa-solid fa-code"></i>
        </CardAboutMe>
        <CardAboutMe title="Procuro"
          description="No momento estou a procura de uma oportunidade para trabalhar como junior Laravel e vue ou estagio  Java">
         <i class="dark:text-gray-100 fa-solid fa-briefcase"></i>
        </CardAboutMe>
      </div>
    </div>
  </section>
</template>

<script>
import CardAboutMe from './CardAboutMe.vue';
export default {
  name: 'AboutMeSection',
  components: { CardAboutMe }
}
</script>