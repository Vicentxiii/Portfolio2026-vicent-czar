<template>
  <!-- common-padding  -->
  <section
    id="testimonials-section"
    class="common-padding relative mx-auto min-h-svh -translate-y-0 overflow-y-clip py-0 will-change-transform"
  >
    <div
      class="border-satin-gold grid w-full grid-cols-12 border-b-[1px] pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <h3
        class="heading-1 max-sm:heading-2 text-ivory col-span-full leading-none font-bold uppercase will-change-auto"
      >
        Beyond the screen /
      </h3>
      <div
        class="text-slate-blue col-span-full mt-[5%] flex justify-end gap-10 sm:gap-20 lg:col-span-10"
      >
        <p class="heading-6 text-center text-nowrap uppercase">
          ( Reach & Discipline )
        </p>
        <p class="heading-6 font-fancy w-full text-balance sm:max-w-[40ch]">
          Digital craftsmanship is built on trust, consistency, and the
          discipline to deliver at the highest level, online and off.
        </p>
      </div>
    </div>

    <Slider />
  </section>
</template>

<script setup lang="ts">
  // import gsap from 'gsap';
  // import { ScrollTrigger } from 'gsap/all';
  // import { onMounted } from 'vue';
  import { Slider } from '../design';

  // gsap.registerPlugin(ScrollTrigger);

  // const animatePeopleSectionLeave = (id: string) => {
  //   gsap.to(id, {
  //     scrollTrigger: {
  //       trigger: id,
  //       markers: true,
  //       start: 'top 80%',
  //       end: '100% end',
  //     },
  //     duration: 0.7,
  //     y: '0',
  //   });
  // };
  // onMounted(() => {
  //   animatePeopleSectionLeave('#testimonials-section');
  // });
</script>
