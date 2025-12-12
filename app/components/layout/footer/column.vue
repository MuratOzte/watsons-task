<template>
    <div class="col">
        <h5 class="title desktop">{{ title }}</h5>

        <button class="acc-header mobile" type="button" @click="toggle">
            <span class="acc-title">{{ title }}</span>
            <img
                class="chevron"
                :class="{ open: isOpen }"
                src="/assets/icons/footer/down.svg"
                alt="toggle"
            />
        </button>

        <Transition name="acc">
            <div v-show="isOpen || !isMobile" class="acc-body">
                <ul>
                    <li v-for="item in items" :key="item.label" class="item">
                        <i
                            v-if="item.icon"
                            :class="['icon', item.icon]"
                            aria-hidden="true"
                        ></i>

                        <NuxtLink class="link" :to="item.to">
                            {{ item.label }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    title: { type: String, required: true },
    items: { type: Array, default: () => [] },
});

const isOpen = ref(false);
const isMobile = ref(false);

const check = () => {
    isMobile.value = window.matchMedia('(max-width: 1000px)').matches;
    if (!isMobile.value) isOpen.value = false;
};

const toggle = () => {
    if (!isMobile.value) return;
    isOpen.value = !isOpen.value;
};

onMounted(() => {
    check();
    window.addEventListener('resize', check);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', check);
});
</script>

<style scoped>
.title {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #2a2a48;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 32px;
}

.item {
    display: flex;
    align-items: center;
    gap: 8px;
}

.link {
    text-decoration: none;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #485363;
}

.icon {
    font-size: 12px;
    color: #485363;
}

.acc-header {
    width: 100%;
    background: transparent;
    border: none;
    padding: 16px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}

.acc-title {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #2a2a48;
}

.chevron {
    width: 18px;
    height: 18px;
    transition: transform 0.2s ease;
}

.chevron.open {
    transform: rotate(180deg);
}

.acc-body {
    overflow: hidden;
}

.acc-enter-active,
.acc-leave-active {
    transition: max-height 0.25s ease, opacity 0.25s ease;
    max-height: 500px;
}
.acc-enter-from,
.acc-leave-to {
    max-height: 0;
    opacity: 0;
}

.desktop {
    display: block;
}

.mobile {
    display: none;
}

@media (max-width: 1000px) {
    .desktop {
        display: none;
    }

    .mobile {
        display: flex;
    }

    ul {
        margin-top: 0;
        padding-bottom: 16px;
    }

    .col {
        border-bottom: 1px solid #ececec;
    }
    .acc-title {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0px;
        vertical-align: middle;
        text-transform: uppercase;
        color: #2A2A48;
    }

    a .link {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0px;
        vertical-align: middle;
        color: #485363;
    }
}
</style>
