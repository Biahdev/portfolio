<template>
  <section class="py-10">
    <div class="container max-w-screen-xl mx-auto px-4">
      <nav class="flex items-center justify-between mb-28">
        <div class="flex">
          <a href="https://www.linkedin.com/in/biahdev/" target=”_blank”
            class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
            <i class=" dark:text-gray-100 fa-brands fa-linkedin text-gray-500 hover:text-gray-800 transition ease-in-out duration-500 text-3xl"></i>
          </a>

          <a href="https://github.com/BiahDev" target=”_blank”
            class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
            <i class=" dark:text-gray-100 fa-brands fa-github text-gray-500 hover:text-gray-800 transition ease-in-out duration-500 text-3xl"></i>
          </a>

          <a href="#"
            class="w-16 h-16 flex items-center justify-center rounded-full hover:bg-gray-200 transition ease-in-out duration-500">
            <i class=" dark:text-gray-100 fa-solid fa-envelope text-gray-500 hover:text-gray-800 transition ease-in-out duration-500 text-3xl"></i>
          </a>

        </div>
        <div class="flex flex-row justify-between align-middle">

          <SwitchDarkModeHeader />
          <BtnHeader title="Meu CV" />

        </div>
      </nav>

      <div class="text-center">
        <div class="flex justify-center mb-16 ">
          <img src="https://placekitten.com/200/200" class="rounded-full" alt="Image">
        </div>

        <h6 class="dark:text-gray-500 font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Ana Beatriz</h6>

        <h1 class="dark:text-gray-100 font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
          Backend Web Developer
        </h1>

        <p class="font-normal dark:text-gray-300 text-gray-600 text-md md:text-xl mb-16">
          I have a passion for software. I enjoy creating tools that make life easier for people.
        </p>
        <BtnHeader title="Entre em contato" link="#contato" />
      </div>

    </div>

  </section>
</template>

<script>
import BtnHeader from './BtnHeader.vue';
import SwitchDarkModeHeader from './SwitchDarkModeHeader.vue';
export default {
  name: "HeaderPortfolio",
  components: { BtnHeader, SwitchDarkModeHeader }
}
</script>

