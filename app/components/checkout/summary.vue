<template>
    <div>
        <h1>Shopping cart summary</h1>
        <div class="summary">
            <div class="product">
                <img
                    src="/assets/images/checkout/boom-butter.png"
                    alt="boombutter"
                    class="product-image"
                />
                <div class="right-section">
                    <p class="title">
                        Herbal Science Boom Butter Hair Care Oil 190ml
                    </p>
                    <div class="sum">
                        <p class="price">44,95 TL</p>
                        <div class="buttons">
                            <button>
                                <img
                                    src="/assets/icons/checkout/increment.svg"
                                    alt="increment"
                                />
                            </button>
                            <p class="count">1</p>
                            <button>
                                <img
                                    src="/assets/icons/checkout/decrement.svg"
                                    alt="decrement"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product">
                <img
                    src="/assets/images/checkout/shampoo.png"
                    alt="shampoo"
                    class="product-image"
                />
                <div class="right-section">
                    <p class="title">Ashley Joy Strengthening Shampoo 400ml</p>
                    <div class="sum">
                        <p class="price">29,45 TL</p>
                        <div class="buttons">
                            <button>
                                <img
                                    src="/assets/icons/checkout/increment.svg"
                                    alt="increment"
                                />
                            </button>
                            <p class="count">1</p>
                            <button>
                                <img
                                    src="/assets/icons/checkout/decrement.svg"
                                    alt="decrement"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <input
                type="text"
                placeholder="Discount Code"
                class="discount-code-input"
            />
            <div class="total-section">
                <div class="subtotal">
                    <p class="category">Subtotal</p>
                    <p class="s-price">74,40 TL</p>
                </div>
                <div class="subtotal">
                    <p class="category">Shipping</p>
                    <p class="s-price">10,50 TL</p>
                </div>
                <div class="divider"></div>
                <div class="total">
                    <p class="strong">Total</p>
                    <p class="strong">84,90 TL</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #2a2a48;
    margin-bottom: 36px;
}
.summary {
    box-shadow: 0px 4px 16px 0px #2a2a480a;
    border: 1px solid #ececec;
    padding: 24px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.product {
    border-radius: 4px;
    box-shadow: 0px 1px 2px 0px #37415114;
    display: flex;
    width: 100%;
}
.product-image {
    width: 64px;
    height: 64px;
    padding: 16px;
    background-color: #ececec29;
    border-right: 1px solid #ececec;
}
.right-section {
    display: flex;
    flex-direction: column;
    padding: 8px;
    flex: 1;
}
.sum {
    display: flex;
    justify-content: space-between;
}
.buttons {
    display: flex;
}
.price {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #485363;
}
.title {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #2a2a48;
    margin-bottom: 8px;
    word-break: break-all;
}

.buttons img {
    background-color: #ececec4d;
    border: 1px solid #ececec;
    border-radius: 4px;
    width: 16px;
    height: 16px;
    padding: 4px 6px;
}

.count {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #485363;
    margin: 0 8px;
}

.discount-code-input {
    padding: 12px;
    border: 1px solid #ececec;
    border-radius: 4px;
    outline: none;
}

.discount-code-input::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #2a2a4899;
}
.total-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.subtotal {
    display: flex;
    justify-content: space-between;
}
.category {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #485363;
}
.s-price {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: right;
    vertical-align: middle;
    color: #485363;
}
.divider {
    width: 100%;
    height: 1px;
    background-color: #ececec;
}
.total {
    display: flex;
    justify-content: space-between;
}
.strong {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0px;
    vertical-align: middle;
}
button {
    border: none;
    background-color: transparent;
}
</style>
