<template>
    <nav class="menu">
        <div class="menu-container">
            <ul class="menu-list">
                <li v-for="item in menuItems" :key="item.to" class="menu-item">
                    <NuxtLink :to="item.to" class="menu-link">
                        {{ item.label }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
const menuItems = [
    { to: '/campaings', label: 'Campaings' },
    { to: '/personal-care', label: 'Personal Care' },
    { to: '/skin-care', label: 'Skin Care' },
    { to: '/make-up', label: 'Make Up' },
    { to: '/mother-baby', label: 'Mother & Baby' },
    { to: '/men-care', label: 'Men Care' },
    { to: '/healty-life', label: 'Healty Life' },
    { to: '/brands', label: 'Brands' },
];
</script>

<style>
.menu {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu-container {
    width: 80%;
}

.menu-list {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
}

.menu-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    height: 40px;
    font-size: 14px;
    color: #2A2A48;
    line-height: 16px;
}
@media (max-width: 960px) {
    .menu{
        display: none;
    }
}
</style>
