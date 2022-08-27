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
            É um sistema de gestão de tarefas simples e eficiente feito com  Vue.js, Vuex.js e Laravel <br>   usando o
            padrão apiRest com crud completo.
            <a class="font-semibold text-gray-500 text-md relative z-10" href="">Código fonte</a> e o
            <a class="font-semibold text-gray-500 text-md relative z-10" href="">Demo</a>
          </ProjectItem>
          <ProjectItem title="Xadrez" number="2">
            É um jogo de xadrez via linha de comando, feito para praticar conceitos de POO e o  básico do java.
            <a class="font-semibold text-gray-500 text-md relative z-10" href="">Código fonte</a>

          </ProjectItem>
          <ProjectItem title="Calculadora" number="3">
            Uma calculadora com as principais operações e DarkMode feito a partir HTML, CSS, JavaScript Vannila.
            <a class="font-semibold text-gray-500 text-md relative z-10" href="https://github.com/BiahDev/calculator">Código fonte</a> e o
            <a class="font-semibold text-gray-500 text-md relative z-10" href="https://biahdev.github.io/calculator/">Demo</a>
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