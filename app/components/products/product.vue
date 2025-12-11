<template>
    <div class="product">
        <img :src="image" :alt="title" />
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
    title:{
        type:String,
        required:true
    }
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
</style>
