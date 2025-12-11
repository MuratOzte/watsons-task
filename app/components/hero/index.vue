<template>
    <div class="hero">
        <button class="left-button" >
            <img src="/assets/images/hero/left.svg" alt="hero-left-button">
        </button>
        <button class="right-button" >
            <img src="/assets/images/hero/right.svg" alt="hero-right-button">
        </button>
        <HeroBanner />
    </div>
</template>

<script setup></script>

<style scoped>
button{
    background-color: transparent;
    border: none;
    cursor: pointer;
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
}

.right-button{
    position: absolute;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
}
.left-button{
    position: absolute;
    left: 28px;
    top: 50%;
    transform: translateY(-50%);
}
</style>
