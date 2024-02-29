<template>
    <div :class="['sticky', 'top-0', 'transition']">
        <nav :class="['landing_nav', 'bg-purple-600', 'text-white', 'w-full', 'px-10', 'flex', 'items-center', 'justify-between', scrollX >= 5 ? 'backdrop-blur-sm' : '']">
            <div class="site_brand_logo">
                <img :src="logo" alt="logo" class="w-16 object-cover">
            </div>
            <div>
                <ul class="flex gap-7">
                    <li v-for="(item, index) in menus" :key="index" class="list-none font-semibold tracking-wide text-[1.2rem]">{{ item.name }} {{ scrollY }}</li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import logo from "@/assets/images/moon_fast_wind.png";
import { useWindowSize } from "@/components/hooks/useWindowSize"
import { useScrollSize } from "@/components/hooks/useScrollSize"
export default {
    name: "landing_navbar",
  setup() {
    // Call useWindowSize to get screenWidth and screenHeight
    const { screenWidth, screenHeight } = useWindowSize();
    const { scrollX, scrollY } = useScrollSize();

    // Return the properties here
    return {
      screenWidth,
      screenHeight,
      scrollX,
      scrollY,
      logo,
      menus: [{ name: 'Home' }, { name: "About" }, { name: "Contact" }]
    };
  }
}
</script>

<style>

</style>