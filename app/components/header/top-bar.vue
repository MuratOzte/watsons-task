<template>
    <div class="top-bar">
        <div class="container">
            <div class="left-buttons">
                <button>
                    <img
                        src="/assets/images/header/stores.svg"
                        alt="Top-bar-stores"
                        width="18"
                        height="14"
                    />
                    Stores
                </button>
                <button>
                    <img
                        src="/assets/images/header/catalog.svg"
                        alt="Top-bar-catalog"
                        width="18"
                        height="14"
                    />
                    Catalog
                </button>
            </div>
            <p class="spot-text">
                Watsons Beauty and Personal Care Awards Nominees!
            </p>
            <div class="call-us">
                <a href="tel:+908501234567"
                    >Call us:(+90) 850 123 45 67<img
                        src="/assets/images/header/phone.svg"
                        alt="phone"
                /></a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.top-bar {
    width: 100%;
    background-color: #505357;
    display: flex;
    justify-content: center;
    padding: 8px 0px;
    gap: 20px;
}
.container {
    width: 80%;
    height: 24px;
    gap: 8px;
    display: flex;
    align-items: center;
}

.left-buttons {
    display: flex;
    gap: 8px;
    flex: 1;
}

.left-buttons button {
    height: 24px;
    background-color: transparent;
    border: none;
    line-height: 24px;
    color: #ffffff;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
}

.spot-text {
    width: fit-content;
    font-weight: 400;
    font-size: 14px;
    color: #ececec80;
}

.call-us {
    flex: 1;
    display: flex;
    color: white;
    align-items: center;
    justify-content: end;
    font-size: 14px;
    gap: 8px;
}
a {
    color: white;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
}

@media (max-width: 960px) {
    .spot-text{
        display: none;
    }
    a{
        font-size: 0;
    }
    .left-buttons{
        gap: 32px;
    }
}


</style>
