<template>
    <LayoutHeader />
    <CheckoutTitle />
    <div class="container">
        <div class="inner-container">
            <CheckoutShippingDetails />
            <CheckoutPaymentDetails />
        </div>
    </div>
    <LayoutFooter />
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 32px 0;
}
.inner-container {
    width: 80%;
}
</style>
