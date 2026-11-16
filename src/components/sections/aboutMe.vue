<template>
  <section
    id="about-me-section"
    class="common-padding text-ivory relative z-10 overflow-y-clip rounded-b-3xl bg-rich-navy shadow-2xl will-change-auto sm:mt-0"
  >
    <div class="md:column-gap grid grid-cols-12">
      <div class="hide-on-mobile overflow-hidden md:col-span-4">
        <svg
          id="down-arrow-2"
          stroke="currentColor"
          fill="none"
          stroke-width="1.25"
          viewBox="6 6 12 12"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="hide-on-mobile m-0 size-20 -translate-x-full p-0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
      </div>

      <h3
        id="little-bit-about-me"
        v-html="aboutMe"
        class="heading-1-alt lg:heading-1 section-heading col-span-full leading-none font-extrabold uppercase md:col-span-8 md:col-start-6"
      ></h3>
    </div>

    <div class="padding-y md:column-gap mt-6 grid grid-cols-12">
      <div
        class="pointer-events-none col-span-full content-end rounded-lg select-none md:col-span-4 md:block hidden"
      >
        <img
          :src="profile2"
          class="aspect-[1/1.5] rounded-lg object-cover object-top mix-blend-screen brightness-90 grayscale"
          alt="Portrait of Vicente Czar"
        />
      </div>
      <div class="col-span-11 mt-10 md:col-span-8 md:col-start-6">
        <p
          class="heading-4 relative w-full max-w-[40ch] leading-snug font-medium text-balance"
        >
          Senior Full Stack Engineer, UX Architect, and Luxury Brand Builder
          with 8+ years of experience. I created SV ÚNICO, Latin America's first
          supercar configurator, bringing robust engineering to digital
          authority.
        </p>

        <div
          class="text-slate-blue mt-[5%] flex justify-start gap-10 sm:gap-20"
        >
          <p class="heading-6 text-slate-blue/85 text-center text-nowrap">
            ( ABOUT ME )
          </p>
          <p class="heading-6 font-fancy w-full text-balance sm:max-w-[40ch]">
            Digital craftsmanship is the discipline of treating code as fine
            art, backed by real-world traction: 60K+ on Instagram, 58K+ on
            TikTok, and 80K+ on YouTube. <br /><br />
            I bring the same focus to every line of code that earned me a #2
            ranking in Brazil as a multi-category Boxing and Muay Thai champion.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {
    animateSplitText,
    xToZero,
    animateAboutMeSectionLeave,
  } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const profile2 = `${import.meta.env.BASE_URL}${encodeURIComponent('about me.png')}`;
  const aboutMe = ref('Digital Craftsman /');

  // const initialPath = ref(`M0 0H${width.value}  V${height.value} H0 Z`);
  // const targetPath = ref(
  //   `M0 0H${width.value}L${width.value * 0.9} ${height.value}H${width.value * 0.1}L0 0Z`,
  // );

  onBeforeMount(() => {
    aboutMe.value = textSplitterIntoChar(
      'Digital Craftsman/',
      true,
      true,
    );
  });

  onMounted(() => {
    animateSplitText(
      '#little-bit-about-me .letters',
      '#little-bit-about-me',
      1,
      0.01,
      0,
      () => {
        xToZero('#down-arrow-2');
      },
    );

    animateAboutMeSectionLeave('#about-me-section');
  });
</script>
