<template>
    <swiper :direction="'vertical'" :slidesPerView="1" :spaceBetween="30" :mousewheel="false"
        :pagination="{ clickable: false }" :modules="modules" :loop="true" :effect="'fade'" @swiper="onSwiper"
        class="mySwiper">
        <swiper-slide v-for="(image, index) in images" :key="index">
            <img :src="image" alt="Swiper Slide" class="w-full h-full" />
        </swiper-slide>
        <div
            class="absolute z-10 w-[90%] md:max-w-3xl text-xl text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <slot />
        </div>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref } from 'vue';
import { Mousewheel, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        // Define Swiper modules
        const modules = [Mousewheel, EffectFade];

        // Define images using `ref`
        const images = ref([
            "https://images.unsplash.com/photo-1737079026600-18f07b9dd0a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1735767975829-71496633d499?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://cdn.pixabay.com/photo/2021/10/30/11/01/forest-6754057_1280.jpg",
            "https://images.unsplash.com/photo-1736158064402-5b68c2cbcc77?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://cdn.pixabay.com/photo/2024/02/23/22/20/forest-8592902_1280.jpg",
            "https://images.unsplash.com/photo-1738028449238-fa5ae8c33bce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1737223300170-bf53e8963dc4?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]);

        // Swiper initialization event
        const onSwiper = (swiper) => {

            setInterval(() => {
                swiper.slideNext();
            }, 1000);

            console.log(swiper);
        };

        return { modules, images, onSwiper };
    },
};
</script>

<style>
.mySwiper {
    width: 100%;
    height: 100vh;
}
</style>
