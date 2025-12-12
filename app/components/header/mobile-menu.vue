<!-- components/HeaderMobileMenu.vue -->
<template>
    <Teleport to="body">
        <div
            class="mmenu"
            :class="{ 'menu--open': isOpen }"
            role="dialog"
            :aria-modal="isOpen ? 'true' : 'false'"
            aria-label="Mobile menu"
        >
            <header class="header">
                <button
                    class="iconBtn"
                    type="button"
                    aria-label="Close menu"
                    @click="close"
                >
                    <img
                        src="/assets/icons/mobile-menu/close.svg"
                        alt="close"
                    />
                </button>
                <div class="title">Menu</div>
            </header>

            <Transition name="slide" mode="out-in">
                <main v-if="activeIndex === null" key="main" class="body">
                    <nav class="section" aria-label="Categories">
                        <button
                            v-for="(item, i) in menu"
                            :key="item.label + i"
                            class="row"
                            type="button"
                            @click="openItem(i)"
                        >
                            <p class="rowText-top">{{ item.label }}</p>
                            <img
                                src="/assets/icons/mobile-menu/left.svg"
                                alt=""
                                class="left-button"
                                aria-hidden="true"
                            />
                        </button>
                    </nav>

                    <div class="divider" />

                    <nav class="bottom-section" aria-label="Account">
                        <button
                            v-for="(a, i) in account"
                            :key="a.label + i"
                            class="row row--withIcon"
                            type="button"
                            @click="onAccountClick(a)"
                        >
                            <p class="rowText">{{ a.label }}</p>
                            <img
                                :src="a.icon"
                                alt=""
                                class="icon"
                                aria-hidden="true"
                            />
                        </button>
                    </nav>
                </main>

                <main v-else key="submenu" class="body">
                    <div class="subHeader">
                        <button
                            class="iconBtn"
                            type="button"
                            aria-label="Back"
                            @click="activeIndex = null"
                        >
                            <img
                                src="/assets/icons/mobile-menu/left.svg"
                                alt=""
                                aria-hidden="true"
                            />
                        </button>
                        <div class="subTitle">{{ activeItem?.label }}</div>
                        <div class="spacer" />
                    </div>

                    <nav class="bottom-section" aria-label="Sub categories">
                        <button
                            v-for="(child, i) in activeItem?.children || []"
                            :key="child.label + i"
                            class="row"
                            type="button"
                            @click="go(child.to)"
                        >
                            <span class="rowText rowText--child">{{
                                child.label
                            }}</span>
                        </button>
                    </nav>
                </main>
            </Transition>
        </div>
    </Teleport>
</template>

<script setup>
const emit = defineEmits(['close']);
const router = useRouter();

import accountIcon from '~/assets/icons/mobile-menu/profile.svg';
import help from '~/assets/icons/mobile-menu/help.svg';
import logOut from '~/assets/icons/mobile-menu/log-out.svg';
import order from '~/assets/icons/mobile-menu/order.svg';

const isOpen = ref(true);
const activeIndex = ref(null);

const menu = [
    { label: 'Campaigns', children: [] },
    {
        label: 'Personal Care',
        children: [
            { label: 'Deodorant', to: '/personal-care/deodorant' },
            { label: 'Body Care', to: '/personal-care/body-care' },
            { label: 'Hair Care', to: '/personal-care/hair-care' },
            { label: 'Oral Care', to: '/personal-care/oral-care' },
            { label: 'Men Care', to: '/personal-care/men-care' },
        ],
    },
    {
        label: 'Skin Care',
        children: [
            { label: 'Facial Treatment', to: '/skin-care/facial-treatment' },
            { label: 'Cleanser', to: '/skin-care/cleanser' },
            { label: 'Toner', to: '/skin-care/toner' },
            { label: 'Serum', to: '/skin-care/serum' },
            { label: 'Moisturizer', to: '/skin-care/moisturizer' },
            { label: 'Sunscreen', to: '/skin-care/sunscreen' },
            { label: 'Mask & Peeling', to: '/skin-care/mask-peeling' },
            { label: 'Hand and Face Care', to: '/skin-care/hand-face-care' },
            { label: 'Natural Skin Products', to: '/skin-care/natural' },
        ],
    },
    {
        label: 'Make - up',
        children: [
            { label: 'Foundation', to: '/make-up/foundation' },
            { label: 'Concealer', to: '/make-up/concealer' },
            { label: 'Powder', to: '/make-up/powder' },
            { label: 'Blush & Bronzer', to: '/make-up/blush-bronzer' },
            { label: 'Mascara', to: '/make-up/mascara' },
            { label: 'Eyeliner', to: '/make-up/eyeliner' },
            { label: 'Lipstick', to: '/make-up/lipstick' },
            { label: 'Nail', to: '/make-up/nail' },
        ],
    },
    {
        label: 'Mother & Baby',
        children: [
            { label: 'Baby Care', to: '/mother-baby/baby-care' },
            { label: 'Diaper', to: '/mother-baby/diaper' },
            { label: 'Baby Food', to: '/mother-baby/baby-food' },
            { label: 'Maternity', to: '/mother-baby/maternity' },
        ],
    },
    {
        label: 'Healthy Life',
        children: [
            { label: 'Vitamins', to: '/healthy-life/vitamins' },
            { label: 'Dermocosmetic', to: '/healthy-life/dermocosmetic' },
            { label: 'Personal Hygiene', to: '/healthy-life/personal-hygiene' },
            { label: 'Sports Nutrition', to: '/healthy-life/sports-nutrition' },
        ],
    },
    {
        label: 'Brands',
        children: [
            { label: 'New Brands', to: '/brands/new' },
            { label: 'Top Brands', to: '/brands/top' },
            { label: 'A-Z Brand List', to: '/brands/a-z' },
        ],
    },
];

const account = [
    { label: 'My profile', icon: accountIcon },
    { label: 'Order history', icon: order },
    { label: 'Help center', icon: help },
    { label: 'Log out', action: 'logout', icon: logOut },
];

const activeItem = computed(() => {
    if (activeIndex.value === null) return null;
    const item = menu[activeIndex.value];
    return item && item.children?.length ? item : null;
});

let prevHtmlOverflow = '';
let prevBodyOverflow = '';

function lockScroll() {
    if (!process.client) return;
    prevHtmlOverflow = document.documentElement.style.overflow || '';
    prevBodyOverflow = document.body.style.overflow || '';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
}

function unlockScroll() {
    if (!process.client) return;
    document.documentElement.style.overflow = prevHtmlOverflow;
    document.body.style.overflow = prevBodyOverflow;
}

watch(
    isOpen,
    (v) => {
        if (v) lockScroll();
        else unlockScroll();
    },
    { immediate: true }
);

onBeforeUnmount(() => {
    unlockScroll();
});

function close() {
    activeIndex.value = null;
    isOpen.value = false;
    emit('close');
}

function openItem(index) {
    const item = menu[index];
    if (item?.children?.length) activeIndex.value = index;
}

function onAccountClick(item) {
    if (item.action === 'logout') close();
}

function go(path) {
    if (!path) return;
    router.push(path);
    close();
}
</script>

<style scoped>
.mmenu {
    position: fixed;
    inset: 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);

    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: -1;

    transition: opacity 140ms ease, visibility 0s linear 140ms;
}

.menu--open {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    z-index: 9999;

    transition: opacity 140ms ease, visibility 0s linear 0s;
}

.header {
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f0ff;
}

.title {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #2a2a48;
    flex: 1;
    text-align: right;
    margin-right: 24px;
}

.iconBtn {
    width: 24px;
    height: 24px;
    border: 0;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 24px;
}

.body {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

.section {
    background-color: #fff;
    padding: 0 16px;
}

.bottom-section {
    background-color: #ececec4d;
}

.row {
    width: 100%;
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: space-between;
    padding: 14px 18px;
    cursor: pointer;
}

.row + .row {
    border-top: 1px solid #f0f0f0;
}

.rowText-top {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    flex: 1;
}

.rowText {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: right;
    color: #485363;
    flex: 1;
}

.left-button {
    width: 7px;
    flex: 0 0 auto;
}

.icon {
    width: 20px;
    height: 20px;
    flex: 0 0 20px;
    object-fit: contain;
    display: block;
}

.divider {
    height: 1px;
    background: #eee;
}

.subHeader {
    height: 56px;
    display: grid;
    grid-template-columns: 56px 1fr 56px;
    align-items: center;
    border-bottom: 1px solid #eee;
    background: #fff;
}

.subTitle {
    text-align: center;
    font-weight: 600;
    color: #1f1f1f;
    padding: 0 10px;
}

.spacer {
    width: 56px;
    height: 56px;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 180ms ease, opacity 180ms ease;
}
.slide-enter-from {
    transform: translateX(12px);
    opacity: 0;
}
.slide-leave-to {
    transform: translateX(-12px);
    opacity: 0;
}
</style>
