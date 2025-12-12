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
    max-width: 1140px; /* tasarımdaki gibi ortala */
    margin: 32px auto;
    padding: 0 24px;

    display: grid;
    grid-template-columns: minmax(0, 1fr) 360px; /* sol + sağ */
    gap: 32px;
    align-items: start;
}

.inner-container {
    display: flex;
    flex-direction: column;
    gap: 32px; /* shipping - payment arası */
}

/* mobil */
@media (max-width: 960px) {
    .container {
        grid-template-columns: 1fr;
        gap: 24px;
        padding: 0 12px;
    }
}
</style>
