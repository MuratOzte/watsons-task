<template>
    <div class="categories">
        <div class="container">
            <div class="title-section">
                <div class="divider"></div>
                <h1 class="title">Featured products</h1>
                <div class="divider"></div>
            </div>
            <div class="categories-section">
                <HomeCategoriesCategory
                    :background-image="personalCare"
                    title="Personal Care"
                />
                <HomeCategoriesCategory
                    :background-image="skinCare"
                    title="Skin Care"
                />
                <HomeCategoriesCategory
                    :background-image="makeUp"
                    title="Make-Up"
                />
                <HomeCategoriesCategory
                    :background-image="motherBaby"
                    title="Mother & Baby"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import makeUp from '~/assets/images/categories/make-up.jpg';
import motherBaby from '~/assets/images/categories/mother-baby.jpg';
import personalCare from '~/assets/images/categories/personal-care.jpg';
import skinCare from '~/assets/images/categories/skin-care.jpg';
</script>

<style scoped>
.categories {
    padding: 40px 0;
    display: flex;
    justify-content: center;
}
.container {
    width: 50%;
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
    justify-content: center;
    margin-bottom: 40px;
}
.title {
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #0099a8;
    margin: 0 32px;
}
.categories-section {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px;
}

@media (max-width: 1200px) {
    .container {
        width: 70%;
    }

    .categories-section {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .container {
        width: 90%;
    }

    .categories-section {
        grid-template-columns: 1fr;
    }
    .title {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0px;
        vertical-align: middle;
    }
}
</style>
