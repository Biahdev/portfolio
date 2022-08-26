<template>
  <section class="py-10 md:py-16">
    <div class="container max-w-screen-xl mx-auto px-4">
      <div class="flex flex-col lg:flex-row justify-between">
        <div class="mb-10 lg:mb-0">
          <h1 class="dark:text-gray-100 font-medium text-gray-700 text-3xl md:text-4xl mb-5">Projetos</h1>
          <div class="mt-10 mr-20">
            <img src="https://placekitten.com/500/500" class="w-full" alt="">
          </div>
        </div>
        <div class="space-y-24 mt-16">
          <ProjectItem title="To-do" number="1">
            aaaaa dasd asd Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br> Soluta dolor possimus
            corrupti laboriosam, dicta illum.br Cumque ducimus ex <br> error, reiciendis at quidem, officia eligendi
            voluptatibus ad corporis
            id quis dolores.
          </ProjectItem>
          <ProjectItem title="Xadrez" number="2">
            aaaaa dasd asd Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br> Soluta dolor possimus
            corrupti laboriosam, dicta illum.br Cumque ducimus ex <br> error, reiciendis at quidem, officia eligendi
            voluptatibus ad corporis
            id quis dolores.
          </ProjectItem>
          <ProjectItem title="Calculadora" number="3">
            aaaaa dasd asd Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br> Soluta dolor possimus
            corrupti laboriosam, dicta illum.br Cumque ducimus ex <br> error, reiciendis at quidem, officia eligendi
            voluptatibus ad corporis
            id quis dolores.
          </ProjectItem>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectItem from './ProjectItem.vue';
export default {
  name: "ProjectItems",
  components: { ProjectItem }
}
</script>

<style>
</style>