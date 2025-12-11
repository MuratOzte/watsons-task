<template>
    <div>
        <h5>{{ title }}</h5>
        <ul>
            <li
                v-for="item in items"
                :key="item.label"
                class="item"
            >
                <!-- Icon (isteğe bağlı) -->
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
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    // [{ label: 'About us', to: '#', icon: 'fa-solid fa-angle-right' }, ...]
    items: {
        type: Array,
        default: () => [],
    },
});
</script>

<style scoped>
h5 {
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
</style>
