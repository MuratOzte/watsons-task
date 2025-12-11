<template>
    <div class="banner">
        <div class="container">
            <div class="text-section">
                <h3 class="caps-title">Naturals By Watsons</h3>
                <h1 class="title">The New 2021 collection</h1>
                <p class="paragraph">
                    Known as "the miracle plant", Aloe Vera helps to nourish,
                    moisturize and keep the hair looking smooth. Let your hair
                    be flexible and fresh.
                </p>
                <button class="shop-btn">Shop Now</button>
                <div class="progress-bar" >
                    <div class="progress active"></div>
                    <div class="progress"></div>
                    <div class="progress"></div>
                </div>
            </div>
            <div class="img-section">
                <img
                    src="/assets/images/hero/right-part.png"
                    alt="product-hero"
                    class="right-part-image"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.banner {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}
.container {
    width: 80%;
    height: 100%;
}
.text-section {
    width: 50%;
    position: relative;
    padding: 0;
}
.img-section {
    width: 50%;
}
.caps-title {
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #8493a8;
    line-height: 16px;
}
.title {
    font-weight: 700;
    font-size: 34px;
    line-height: 48px;
    color: #2a2a48;
}
.paragraph {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #485363;
}
.shop-btn {
    padding: 8px 16px;
    background-color: #ff27ad;
    color: white;
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 16px;
    font-size: 14px;
    cursor: pointer;
}
.progress-bar{
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 40px;
}

.progress{
    background-color: #8493A866;
    width: 6px;
    height: 6px;
    border-radius: 3px;
    cursor: pointer;
}

.progress.active{
    background-color: #505357;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    cursor: pointer;
}
.right-part-image{
    object-fit: fill;
}
</style>
