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
    margin: 40px 0px;
    flex: 1;
    position: relative;
}
.container {
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: start;
}

img {
    height: 184px;
    background-color: #ececec29;
}
.price {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}
.title {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}

.button-panel {
    background-color: #000000cc;
    position: absolute;
    width: 100%;
    bottom: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    visibility: hidden;
    transform: translateY(8px);
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
}

.divider {
    height: 32px;
    width: 0.5px;
    margin: 0 24px;
    background-color: #ececec;
    opacity: 0.2;
}

.row {
    padding: 16px;
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
</style>
