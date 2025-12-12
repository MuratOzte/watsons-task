<template>
    <div class="banner">
        <div class="container">
            <div class="text-section">
                <h3 class="caps-title">
                    {{ capsTitle }}
                </h3>
                <h1 class="title">
                    {{ title }}
                </h1>
                <p class="paragraph">
                    {{ paragraph }}
                </p>
                <button class="shop-btn">Shop Now</button>
                <div class="progress-bar">
                    <div
                        v-for="n in totalSlides"
                        :key="n"
                        :class="['progress', { active: n - 1 === activeIndex }]"
                        role="button"
                        tabindex="0"
                        @click="emit('goTo', n - 1)"
                        @keydown.enter="emit('goTo', n - 1)"
                        @keydown.space.prevent="emit('goTo', n - 1)"
                    ></div>
                </div>
            </div>

            <div class="img-section">
                <img :src="imageSrc" :alt="imageAlt" class="right-part-image" />
            </div>
            <div class="img-section-mobile">
                <img :src="imageSrc" :alt="imageAlt" class="right-part-image" />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    capsTitle: {
        type: String,
        default: 'Naturals By Watsons',
    },
    title: {
        type: String,
        required: true,
    },
    paragraph: {
        type: String,
        required: true,
    },
    imageSrc: {
        type: String,
        required: true,
    },
    imageAlt: {
        type: String,
        default: 'product-hero',
    },
    activeIndex: {
        type: Number,
        default: 0,
    },
    totalSlides: {
        type: Number,
        default: 3,
    },
    activeIndex: { type: Number, default: 0 },
    totalSlides: { type: Number, default: 3 },
});

const emit = defineEmits(['goTo']);
</script>

<style scoped>
.banner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.container {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
}
.text-section {
    width: 50%;
    position: relative;
    padding: 0;
}
.img-section {
    width: 50%;
}
.caps-title {
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #8493a8;
    line-height: 16px;
}
.title {
    font-weight: 700;
    font-size: 34px;
    line-height: 48px;
    color: #2a2a48;
}
.paragraph {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #485363;
    margin: 16px 0px;
}
.shop-btn {
    padding: 8px 16px;
    background-color: #ff27ad;
    color: white;
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 16px;
    font-size: 14px;
    cursor: pointer;
}
.shop-btn:hover {
    background-color: #f1129c;
    transition: all 0.2s ease;
}
.progress-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 40px;
}
.progress {
    background-color: #8493a866;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    cursor: pointer;
}
.progress.active {
    background-color: #505357;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    cursor: pointer;
}
.right-part-image {
    width: 100%;
    height: 100%;
    object-fit: fill;
}
.img-section-mobile {
    display: none;
}
@media (max-width: 960px) {
    .container {
        flex-direction: column-reverse;
        width: 100%;
    }
    .img-section {
        display: none;
    }
    .img-section-mobile {
        display: flex;
        width: 90%;
    }
    .img-section-mobile img {
        margin: 16px;
    }
    .text-section {
        width: 90%;
        margin: 16px;
        box-sizing: content-box;
    }
    .caps-title {
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0px;
        vertical-align: middle;
        text-transform: uppercase;
    }
    .title {
        font-family: Rubik;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.2px;
        vertical-align: middle;
    }
    .paragraph {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0px;
        vertical-align: middle;
    }
    .shop-btn {
        width: 100%;
    }
    .progress-bar {
        justify-content: center;
    }
}
</style>
