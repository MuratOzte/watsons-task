<template>
    <div class="products">
        <div class="container">
            <div class="title-section">
                <div class="divider"></div>
                <h1 class="title">Featured products</h1>
                <div class="divider"></div>
            </div>

            <div class="products-section">
                <ProductsProduct
                    v-for="product in products"
                    :key="product.id"
                    :image="product.thumbnail"
                    :price="product.price"
                    :title="product.title"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const products = ref([]);

onMounted(async () => {
    try {
        const res = await fetch('https://dummyjson.com/products?limit=4');
        const data = await res.json();
        // data.products içinden 4 ürün geliyor
        products.value = data.products;
    } catch (e) {
        console.error('Products fetch error:', e);
    }
});
</script>

<style scoped>
.products {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
}
.container {
    width: 80%;
    display: flex;
    flex-direction: column;
}
.divider {
    height: 1px;
    flex: 1;
    background-color: #0099a81a;
}
.title-section {
    width: 100%;
    display: flex;
    align-items: center;
}
.title {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #0099a8;
    margin: 0 32px;
}

.products-section {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 40px;
    margin-top: 32px;
}

@media (max-width: 1024px) {
    .products-section {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .products-section {
        grid-template-columns: 1fr;
    }
}
</style>
