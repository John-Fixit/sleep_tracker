<template>
    <LandingNavbarVue />
  <main>
    <div
      class="landing_bg h-full md:h-[50vh] lg:h-[70vh] grid grid-cols-1 md:grid-cols-3 bg-no-repeat bg-cover flex items-center px-[1rem] md:px-[2rem] lg:px-[10rem] justify-between"
    >
      <div class="col-span-2 md:order-none pt-4">
        <h1
          class="text-white text-[4rem] md:text-[8rem] font-extrabold leading-[5.5rem] md:leading-[10rem]"
        >
          Sleep Tracker.
        </h1>
      </div>
      <div class="bg-no-repeat bg-cover text-white order-1 md:order-none">
        <img :src="landing_img" alt="sleep_tracker image" class="h-fit" />
      </div>
    </div>
    <div class="bg-[#C9D7F2] md:min-h-[50vh] lg:min-h-[30vh] rounded-t-[2rem] md:rounded-none px-10 py-5 flex flex-col space-y-10">
      <div class="flex gap-1 items-center">
        <img :src="moon_fast_wind" alt="" class="object-cover h-20" />
        <span class="text-gray text-[1.5rem]">Goodnight</span>
      </div>
      <div>
          <h3 class="text-[2rem] font-extrabold">
            Your <span class="text-[#501E8F]">Sleep</span> {{ `\u{1F634}` }} makes you stronger
          </h3>
          <p class="text-[24px] font-medium text-gray">
            Get a good sleep to become more energetic, energetic and moving
          </p>
      </div>
      <div class="flex flex-col items-center mt-7">
          <button class="bg-[#4B005A] text-white px-10 py-4 text-lg rounded-full mx-auto border-none">
            Go Sleep {{ `\u{1F634}` }} 
          </button>
          <button class="text-[#4B005A] px-10 py-4 text-[1.5rem] rounded-full mx-auto border-none">
            Sign Up
          </button>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas magni iure quisquam numquam explicabo unde perferendis, provident ipsa veniam? Qui provident quisquam molestiae facere officiis quasi, minus nostrum accusantium excepturi!
        Itaque quo et consequatur aspernatur voluptates pariatur dolorem ut sunt accusantium sit? Laudantium, voluptatibus voluptatem corrupti sapiente aspernatur eaque culpa voluptate labore temporibus ex tenetur dicta ipsam inventore adipisci repellendus?
        Nostrum mollitia eius, fuga cupiditate at magnam debitis totam quos ad explicabo aut odit aliquid nulla magni repellendus modi rerum illum eveniet, natus dolorem sunt nihil rem minus. Dolor, voluptatibus.
        Ducimus facilis quasi ullam fugit. Vel voluptatibus repudiandae corrupti temporibus, harum illo fugiat iusto nobis, at modi velit quas. Odio, quasi vitae eius corrupti ad dolores aspernatur delectus perspiciatis eos?
      </div>
    </div>
  </main>
</template>

<script>
import landing_img from '@/assets/images/header_img.png'
import moon_fast_wind from '@/assets/images/moon_fast_wind.png'
import LandingNavbarVue from '@/components/LandingNavbar.vue'
export default {
  name: 'SplashView',
  components: {
    LandingNavbarVue
  },
  data() {
    return {
      landing_img,
      moon_fast_wind
    }
  }
}
</script>

<style scoped>
.landing_bg {
  background-image: url('../assets/images/header_bg.png');
}
.landing_img {
  background-image: url('../assets/images/header_img.png');
}
</style>
