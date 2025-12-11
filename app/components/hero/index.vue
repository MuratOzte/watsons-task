<template>
    <div class="hero">
        <button class="left-button" @click="prevSlide" :disabled="isFirstSlide">
            <img src="/assets/images/hero/left.svg" alt="hero-left-button" />
        </button>

        <button class="right-button" @click="nextSlide" :disabled="isLastSlide" >
            <img src="/assets/images/hero/right.svg" alt="hero-right-button" />
        </button>

        <Transition
            :name="direction === 'next' ? 'slide-left' : 'slide-right'"
            mode="out-in"
        >
            <HeroBanner
                :key="currentSlide.id"
                :caps-title="currentSlide.capsTitle"
                :title="currentSlide.title"
                :paragraph="currentSlide.paragraph"
                :image-src="heroImage"
                image-alt="product-hero"
                :button-text="currentSlide.buttonText"
                :active-index="currentIndex"
                :total-slides="slides.length"
            />
        </Transition>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import heroImage from '~/assets/images/hero/right-part.png';

const slides = [
    {
        id: 1,
        capsTitle: 'Naturals By Watsons',
        title: 'The New 2021 collection',
        paragraph:
            'Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.',
        buttonText: 'Shop Now',
    },
    {
        id: 2,
        capsTitle: 'Hair Care',
        title: 'Shine & Smooth Hair',
        paragraph:
            'Formulated to make your hair shine and stay smooth all day long. Perfect for everyday care.',
        buttonText: 'Discover',
    },
    {
        id: 3,
        capsTitle: 'Skin Essentials',
        title: 'Feel Fresh Everyday',
        paragraph:
            'Gentle formulas that keep your skin hydrated and refreshed from morning to night.',
        buttonText: 'View More',
    },
];

const currentIndex = ref(0);
const direction = ref('next');
const currentSlide = computed(() => slides[currentIndex.value]);

const isFirstSlide = computed(() => currentIndex.value === 0);
const isLastSlide = computed(() => currentIndex.value === slides.length - 1);

const nextSlide = () => {
    if (!isLastSlide.value) {
        direction.value = 'next';
        currentIndex.value++;
    }
};

const prevSlide = () => {
    if (!isFirstSlide.value) {
        direction.value = 'prev';
        currentIndex.value--;
    }
};

</script>

<style scoped>
button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}
button:disabled img{
    opacity: 0.5;
}

.hero {
    background: linear-gradient(0deg, #f2f0ff, #f2f0ff),
        linear-gradient(
            87.81deg,
            #f2f0ff 35.04%,
            rgba(255, 255, 255, 0.67) 53.63%,
            rgba(252, 252, 255, 0.96) 64.78%,
            #f2f0ff 90.91%
        );
    width: 100%;
    height: 400px;
    position: relative;
    overflow: hidden;
}

.right-button {
    position: absolute;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
}
.left-button {
    position: absolute;
    left: 28px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.3s ease;
}

.slide-left-enter-from {
    transform: translateX(100%);
    opacity: 0;
}
.slide-left-enter-to {
    transform: translateX(0%);
    opacity: 1;
}
.slide-left-leave-from {
    transform: translateX(0%);
    opacity: 1;
}
.slide-left-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.slide-right-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}
.slide-right-enter-to {
    transform: translateX(0%);
    opacity: 1;
}
.slide-right-leave-from {
    transform: translateX(0%);
    opacity: 1;
}
.slide-right-leave-to {
    transform: translateX(100%);
    opacity: 0;
}
</style>
