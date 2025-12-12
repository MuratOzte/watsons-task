<template>
    <nav class="breadcrumb" aria-label="Breadcrumb">
        <ol class="list">
            <li
                v-for="(item, i) in items"
                :key="item.key || item.label || i"
                class="item"
            >
                <!-- separator -->
                <span v-if="i !== 0" class="sep"
                    ><img src="assets/icons/common/right.svg" alt="right"
                /></span>

                <!-- last item: text -->
                <span
                    v-if="i === items.length - 1 || !item.to"
                    class="current"
                    aria-current="page"
                >
                    {{ item.label }}
                </span>

                <!-- link item -->
                <NuxtLink v-else class="link" :to="item.to">
                    {{ item.label }}
                </NuxtLink>
            </li>
        </ol>
    </nav>
</template>

<script setup>
const props = defineProps({
    // [{ label: 'Home', to: '/' }, { label: 'Category', to: '/cat' }, { label: 'Product' }]
    items: {
        type: Array,
        required: true,
        default: () => [],
    },
});
</script>

<style scoped>
.breadcrumb {
    width: 100%;
}

.list {
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    padding: 0;
    margin: 0;
}

.item {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #8493a8;
}

.sep {
    color: #8493a8;
    margin: 0 8px;
}

.link {
    text-decoration: none;
    color: #8493a8;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0px;
    vertical-align: middle;
}

.link:hover {
    text-decoration: underline;
}

.current {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #0099a8;
}
</style>
