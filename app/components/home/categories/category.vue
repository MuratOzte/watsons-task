<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Personal Care',
    },
    description: {
        type: String,
        default: 'Lorem ipsum dolor sit amet consectetu elit aliquam',
    },
    buttonText: {
        type: String,
        default: 'Browse',
    },
    // Bu, tam URL veya import ile resolve edilmiş bir string olacak
    backgroundImage: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div
        class="category"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
        <div class="inner-box">
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
            <button>{{ buttonText }}</button>
        </div>
    </div>
</template>

<style scoped>
.category {
    padding: 64px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 1px 8px 0px #0000000a;
    border: 1px solid #ececec80;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.inner-box {
    background-color: #ffffffe5;
    width: 232px;
    gap: 8px;
    opacity: 1;
    border-radius: 6px;
    padding: 16px;
    text-align: center;
    transition: background-color 0.3s ease; 
}

.category:hover .inner-box {
    background-color: #ffffff;
}
h1 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 8px;
    color: #2a2a48;
}
p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #485363;
}
button {
    background-color: #0099a8;
    color: white;
    border: none;
    padding: 0 16px;
    border-radius: 4px;
    height: 32px;
    margin-top: 8px;
    cursor: pointer;
}
.category:hover {
    box-shadow: 0px -6px 30px 0px #0000000f;
    transition: all 0.3s ease;
}
button:hover {
    background-color: #138a96;
    transition: all 0.3s ease;
}
@media (max-width: 960px) {
    .category {
        padding: 40px;
    }
}
</style>
