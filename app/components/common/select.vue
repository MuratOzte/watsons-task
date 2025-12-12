<template>
    <div :class="['select-field', wrapperClass, { disabled }]">
        <label v-if="label" class="label" :for="selectId">
            {{ label }} <span v-if="required" class="req">*</span>
        </label>

        <div :class="['select-wrap', size, { error: !!error }]">
            <select
                :id="selectId"
                class="select"
                :name="name"
                :disabled="disabled || loading"
                :value="modelValue"
                @change="onChange"
                @blur="$emit('blur', $event)"
                @focus="$emit('focus', $event)"
            >
                <option
                    v-if="placeholder"
                    value=""
                    disabled
                    :selected="
                        modelValue === '' ||
                        modelValue === null ||
                        modelValue === undefined
                    "
                >
                    {{ placeholder }}
                </option>

                <option
                    v-for="opt in options"
                    :key="getKey(opt)"
                    :value="getValue(opt)"
                    :disabled="!!opt.disabled"
                >
                    {{ getLabel(opt) }}
                </option>
            </select>

            <img
                v-if="!hideChevron"
                class="chevron"
                src="/assets/icons/checkout/down.svg"
                alt="chevron"
            />
        </div>

        <p v-if="error" class="msg error-text">{{ error }}</p>
        <p v-else-if="helper" class="msg helper-text">{{ helper }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: { type: [String, Number, null], default: '' },
    options: { type: Array, default: () => [] },

    label: { type: String, default: '' },
    placeholder: { type: String, default: 'Please select' },

    id: { type: String, default: '' },
    name: { type: String, default: '' },

    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },

    helper: { type: String, default: '' },
    error: { type: String, default: '' },

    size: { type: String, default: 'md' },
    wrapperClass: { type: String, default: '' },

    labelKey: { type: String, default: 'label' },
    valueKey: { type: String, default: 'value' },

    valueAsNumber: { type: Boolean, default: false },

    hideChevron: { type: Boolean, default: false },
    chevronSrc: { type: String, default: '/assets/icons/header/down.svg' },
});

const emit = defineEmits(['update:modelValue', 'change', 'blur', 'focus']);

const selectId = props.id || `select-${Math.random().toString(36).slice(2, 9)}`;

const getLabel = (opt) =>
    typeof opt === 'object' ? opt[props.labelKey] : String(opt);
const getValue = (opt) => (typeof opt === 'object' ? opt[props.valueKey] : opt);
const getKey = (opt) =>
    typeof opt === 'object' ? `${opt[props.valueKey]}` : String(opt);

const onChange = (e) => {
    let val = e.target.value;
    if (props.valueAsNumber) val = val === '' ? '' : Number(val);

    emit('update:modelValue', val);
    emit('change', val);
};
</script>

<style scoped>
.select-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.label {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #2a2a48;
}

.req {
    color: #ff27ad;
}

.select-wrap {
    position: relative;
    display: flex;
    align-items: center;
}

.select {
    width: 100%;
    border: 1px solid #ececec;
    border-radius: 6px;
    padding: 12px 40px 12px 14px; 
    outline: none;
    background: #fff;
    color: #485363;
    appearance: none;
    padding: 16px;

}

.select-wrap.sm .select {
    padding: 10px 38px 10px 12px;
}

.select-wrap.lg .select {
    padding: 14px 44px 14px 16px;
}

.chevron {
    position: absolute;
    right: 14px;
    width: 18px;
    height: 18px;
    pointer-events: none;
    opacity: 0.8;
}

.select-wrap.error .select {
    border-color: #ff3b30;
}

.disabled {
    opacity: 0.6;
}

.msg {
    font-size: 12px;
    line-height: 16px;
    margin: 0;
}

.error-text {
    color: #ff3b30;
}

.helper-text {
    color: #8493a8;
}
</style>
