<template>
    <div class="product">
        <img :src="image" :alt="title" />

        <div class="button-panel">
            <div class="row">
                <img src="/assets/icons/eye.svg" alt="view" />
                <button>Quick View</button>
            </div>
            <div class="divider"></div>
            <div class="row">
                <img src="/assets/icons/add-cart.svg" alt="basket" />
                <button>Add</button>
            </div>
        </div>

        <div class="container">
            <p class="price">{{ price }} TL</p>
            <p class="title">{{ title }}</p>
        </div>

        <div class="mobile-button-container">
            <div class="h-divider"></div>
            <button class="mobile-button">
                <img src="/assets/icons/add-cart.svg" alt="basket" />Add
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        required: true,
    },
    price: {
        type: [Number],
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.product {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    border: 1px solid #ececec80;
    box-shadow: 0px 1px 8px 0px #0000000a;
    flex: 1;
    position: relative;
}

.container {
    padding: 32px;
    height: 128px;
    display: flex;
    flex-direction: column;
    align-items: start;
    z-index: 5;
    padding: auto;
}

img {
    height: 184px;
    background-color: #ececec29;
}

.price {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 8px;
    color: #2a2a48;
}

.title {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #485363;
}

.button-panel {
    background-color: #000000cc;
    position: absolute;
    width: 100%;

    left: 0;
    right: 0;
    bottom: 184px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    opacity: 0;
    visibility: hidden;
    transform: translateY(5px);
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
}

.divider {
    height: 32px;
    width: 0.5px;
    background-color: #ececec;
    opacity: 0.2;
}

.h-divider {
    width: 100%;
    height: 1px;
    background-color: #ececec;
}

.row {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.row img {
    width: 16px;
    height: 14px;
    background-color: transparent;
}

button {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0px;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
}

.product:hover .button-panel {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.mobile-button-container {
    display: none;
}

@media (max-width: 960px) {
    .button-panel {
        display: none;
    }

    .container {
        padding: 16px;
    }

    .product {
        margin: 16px 0;
        display: flex;
        height: 400px;
        justify-content: space-between;
    }

    .mobile-button-container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .mobile-button {
        padding: 0 16px;
        border-radius: 4px;
        background-color: #ff27ad;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        height: 32px;
        margin: 16px;
    }

    .mobile-button img {
        width: 16px;
        height: 16px;
        display: flex;
        background-color: transparent;
    }
}
</style>
