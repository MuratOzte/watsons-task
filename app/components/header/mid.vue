<template>
    <div class="mid">
        <div class="container">
            <img src="/assets/images/header/logo.svg" alt="logo" class="logo" />

            <div class="right-section">
                <div class="search">
                    <img
                        src="/assets/images/header/search.svg"
                        alt="search"
                        class="search-icon"
                    />
                    <input
                        type="text"
                        class="search-input"
                        placeholder="Write the product or category you are looking for"
                    />
                </div>
                <div class="profile-container">
                    <p class="greeting">
                        Hello, <span class="name">Clara Clara</span>
                    </p>
                    <button>
                        <img
                            src="/assets/images/header/avatar.png"
                            alt="avatar-image"
                            class="avatar-icon"
                        />
                    </button>
                    <button>
                        <img src="/assets/images/header/down.svg" alt="menu" />
                    </button>
                </div>
                <div class="divider"></div>
                <button class="cart">
                    <img
                        src="/assets/images/header/basket.svg"
                        alt="cart"
                        class="cart-icon"
                    />
                    <p class="cart-count">2</p>
                </button>
            </div>

            <div class="mobile-section">
                <button @click="toggleMobileSearch">
                    <img src="/assets/icons/search.svg" alt="search" />
                </button>
                <button class="cart">
                    <img
                        src="/assets/images/header/basket.svg"
                        alt="cart"
                        class="cart-icon"
                    />
                    <p class="cart-count">2</p>
                </button>
                <button @click="toggleMenu">
                    <img src="/assets/icons/menu.svg" alt="menu" />
                </button>
            </div>
        </div>

        <Transition name="mobile-search">
            <div v-if="showMobileSearch" class="mobile-search-wrapper">
                <div class="mobile-search">
                    <img
                        src="/assets/images/header/search.svg"
                        alt="search"
                        class="search-icon"
                    />
                    <input
                        type="text"
                        class="search-input"
                        placeholder="Write the product or category you are looking for"
                    />
                </div>
            </div>
        </Transition>

        <Transition name="mobile-menu">
            <div v-if="showMenu" class="mobile-menu-overlay">
                <HeaderMobileMenu @close="showMenu = false" />
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showMobileSearch = ref(false);
const showMenu = ref(false);

const toggleMobileSearch = () => {
    showMobileSearch.value = !showMobileSearch.value;
};

const toggleMenu = () => {
    showMenu.value = !showMenu.value;
    if (showMenu.value) {
        showMobileSearch.value = false;
    }
};

onMounted(() => {
    showMobileSearch.value = false;
    showMenu.value = false;
});
</script>

<style scoped>
button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.mid {
    background-color: #ffffff;
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 80%;
    gap: 20px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
}

.logo {
    width: 146px;
    cursor: pointer;
}

.right-section {
    display: flex;
    align-items: center;
    justify-content: end;
    flex: 1;
}

.search {
    flex: 1;
    height: 42px;
    border-radius: 32px;
    gap: 8px;
    padding: 0 8px;
    background-color: #ececec4d;
    display: flex;
    align-items: center;
    max-width: 560px;
}

.search-icon {
    width: 24px;
    height: 24px;
}

.search-input {
    outline: none;
    border: none;
    width: 100%;
    background-color: transparent;
}

.search-input::placeholder {
    font-size: 14px;
    font-weight: 400;
    color: #8493a8;
}

.greeting {
    font-size: 14px;
    font-weight: 400;
    color: #8493a8;
    padding-left: 24px;
}

.profile-container {
    display: flex;
    align-items: center;
    gap: 16px;
}

.name {
    color: #2a2a48;
    font-weight: 500;
    font-size: 14px;
}

.avatar-icon {
    border-radius: 999px;
    width: 36px;
    height: 36px;
    border: 2px solid #ffffff;
    box-shadow: 0px 2px 16px 0px #2a2a480f;
}

.divider {
    height: 24px;
    width: 0.5px;
    margin: 0 24px;
    background-color: #ececec;
}

.cart {
    position: relative;
}

.cart-icon {
    width: 25px;
}

.cart-count {
    width: 16px;
    height: 16px;
    border: 2px solid #ffffff;
    background-color: #fa4c44;
    color: white;
    position: absolute;
    left: 16px;
    bottom: 4px;
    border-radius: 99px;
    text-align: center;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    cursor: pointer;
}

.mobile-section {
    gap: 24px;
    display: none;
}

.mobile-search-wrapper {
    width: 100%;
    display: none;
    justify-content: center;
    background-color: #ffffff;
}

.mobile-search {
    width: 100%;
    max-width: 100%;
    height: 42px;
    border-radius: 32px;
    gap: 8px;
    padding: 0 16px;
    background-color: #ececec4d;
    display: flex;
    align-items: center;
}

.mobile-menu-overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
}

.mobile-search-enter-active,
.mobile-search-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-search-enter-from,
.mobile-search-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}

.mobile-search-enter-to,
.mobile-search-leave-from {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 960px) {
    .right-section {
        display: none;
    }

    .mobile-section {
        display: flex;
    }

    .container {
        width: 100%;
        justify-content: space-between;
        padding: 0 16px;
        gap: 16px;
    }

    .mid {
        height: auto;
        align-items: flex-start;
        flex-direction: column;
        padding: 16px 0;
    }

    .mobile-search-wrapper {
        display: flex;
        padding: 8px 16px 12px;
        box-sizing: border-box;
        margin-top: 8px;
    }
}


</style>
