<template>
    <div class="shipping">
        <div class="title">
            <img src="/assets/icons/checkout/shipping.svg" alt="shipping" />
            <h1>Shipping Details</h1>
        </div>

        <div class="fields-grid">
            <div class="field">
                <label for="fname">First Name *</label>
                <input id="fname" type="text" name="fname" />
            </div>

            <div class="field">
                <label for="lname">Last Name *</label>
                <input id="lname" type="text" name="lname" />
            </div>

            <div class="field">
                <label for="email">Email Address *</label>
                <input id="email" type="email" name="email" />
            </div>

            <div class="field">
                <label for="phone">Phone Number</label>
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    maxlength="13"
                    autocomplete="off"
                    placeholder="+90 (5__)___ __ __"
                />
            </div>

            <div class="field">
                <CommonSelect
                    v-model="city"
                    label="City *"
                    placeholder="Please select"
                    :options="cityOptions"
                />
            </div>

            <div class="field">
                <CommonSelect
                    v-model="district"
                    label="District *"
                    placeholder="Please select"
                    :options="districtOptions"
                    :disabled="!city"
                />
            </div>

            <div class="field field--full">
                <label for="address">Address *</label>
                <textarea
                    id="address"
                    name="address"
                    rows="4"
                    placeholder="Enter neighborhood, street, avenue and other information"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const city = ref('');
const district = ref('');

const cityOptions = [
    { label: 'İstanbul', value: 'istanbul' },
    { label: 'Amsterdam', value: 'amsterdam' },
];

const districtMap = {
    istanbul: [
        { label: 'Kadıköy', value: 'kadikoy' },
        { label: 'Ümraniye', value: 'umraniye' },
    ],
    amsterdam: [
        { label: 'Çankaya', value: 'cankaya' },
        { label: 'Keçiören', value: 'kecioren' },
    ],
};

const districtOptions = computed(() => districtMap[city.value] || []);

watch(city, () => {
    district.value = '';
});
</script>

<style scoped>
.title {
    display: flex;
    align-items: center;
    gap: 16px;
}

.title img {
    background-color: #ececec4d;
    border: 1px solid #ececec;
    border-radius: 4px;
    width: 32px;
    height: 32px;
    padding: 16px;
}

h1 {
    font-family: Roboto;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #2a2a48;
}

.fields-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    margin-top: 16px;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 0;
}

label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0px;
    color: #2a2a48;
}

input,
textarea {
    box-sizing: border-box;
    border: 1px solid #ececec;
    border-radius: 4px;
    padding: 16px;
    outline: none;
}

textarea {
    resize: vertical;
}

.field--full {
    grid-column: 1 / -1;
}

@media (max-width: 960px) {
    .fields-grid {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .field--full {
        grid-column: auto;
    }
    .title {
        background-color: #ececec4d;
        padding: 20px 12px;
        width: 100vw;
        margin-left: -12px;
        margin-right: -12px;
    }
}
</style>
