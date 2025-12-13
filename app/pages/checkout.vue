<template>
    <LayoutHeader />
    <CheckoutTitle />
    <div class="container">
        <div class="inner-container">
            <CheckoutShippingDetails />
            <CheckoutPaymentDetails />
        </div>
        <CheckoutSummary />
    </div>
    <LayoutFooter />
</template>

<style scoped>
.container {
    width: 100%;
    max-width: 1140px; 
    margin: 32px auto;
    padding: 0 24px;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: minmax(0, 1fr) 360px;
    gap: 32px;
    align-items: start;
}

.inner-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    min-width: 0;
}

.container > * {
    min-width: 0; 
}

@media (max-width: 960px) {
    .container {
        max-width: none;
        grid-template-columns: 1fr;
        gap: 24px;
        padding: 0 12px;
        margin: 32px auto;
        overflow-x: clip; 
    }

    .inner-container {
        order: 2;
    }

    .container > :last-child {
        order: 1;
    }
}
</style>
