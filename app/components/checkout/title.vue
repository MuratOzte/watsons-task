<script setup lang="ts"></script>

<template>
    <div class="title">
        <div class="container">
            <CommonBreadcrumb
                :items="[
                    { label: 'Home', to: '/' },
                    { label: 'Shopping Cart', to: '/personal-care' },
                    { label: 'Checkout' },
                ]"
            />
            <h1>Checkout</h1>
        </div>
    </div>
</template>

<style scoped>
.title {
    height: 128px;
    background-color: #ececec4d;
    width: 100%;
    display: flex;
    justify-content: center;
}
h1 {
    font-family: Rubik;
    font-weight: 500;
    font-size: 34px;
    line-height: 48px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #2A2A48;
    margin-top: 16px;
}
.container {
    width: 80%;
    padding: 24px 0;
}
</style>
