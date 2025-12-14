<template>
    <div class="payment">
        <div class="title">
            <img src="/assets/icons/checkout/payment.svg" alt="payment" />
            <h1>Payment details</h1>
        </div>

        <div class="content-grid">
            <div class="form">
                <div class="field">
                    <label for="cardName">Card Holder Name *</label>
                    <input
                        id="cardName"
                        type="text"
                        v-model="cardHolder"
                        placeholder="Full name on card"
                    />
                    <p class="helper">Full name on card</p>
                </div>

                <div class="field">
                    <label for="cardNumber">Card Number *</label>
                    <input
                        id="cardNumber"
                        type="text"
                        inputmode="numeric"
                        autocomplete="cc-number"
                        pattern="[0-9 ]*"
                        maxlength="19"
                        :value="cardNumberDisplay"
                        @input="onCardNumberInput"
                        placeholder="0000 0000 0000 0000"
                    />
                    <p class="helper">Enter digits without spaces</p>
                </div>

                <div class="row-2">
                    <div class="field">
                        <label for="expiry">Expiry Date *</label>
                        <input
                            id="expiry"
                            type="text"
                            inputmode="numeric"
                            autocomplete="cc-exp"
                            pattern="[0-9/ ]*"
                            maxlength="7"
                            :value="expiryDisplay"
                            @input="onExpiryInput"
                            placeholder="MM / YY"
                        />
                    </div>

                    <div class="field">
                        <div class="label-row">
                            <label for="cvv">CVV *</label>
                        </div>

                        <img
                            src="/assets/icons/checkout/help.svg"
                            alt="help"
                            class="help-icon"
                        />

                        <input
                            id="cvv"
                            type="text"
                            inputmode="numeric"
                            autocomplete="cc-csc"
                            pattern="[0-9]*"
                            maxlength="4"
                            :value="cvvRaw"
                            @input="onCvvInput"
                            placeholder="XXX"
                        />
                    </div>
                </div>

                <p class="required">* Required fields</p>

                <button class="pay-btn" type="button" :disabled="isPayDisabled">
                    PAY NOW
                </button>
            </div>

            <div class="parent">
                <div class="preview">
                    <div class="card card--front">
                        <div class="card-top">
                            <img
                                class="chip-img"
                                src="/assets/icons/checkout/chip.svg"
                                alt="chip"
                            />
                        </div>

                        <div class="card-number">{{ previewCardNumber }}</div>

                        <div class="card-bottom">
                            <div class="card-col">
                                <div
                                    :class="isHolderFilled ? 'strong' : 'muted'"
                                >
                                    {{ previewCardHolder }}
                                </div>
                            </div>

                            <div class="card-col right">
                                <div
                                    :class="isExpiryFilled ? 'strong' : 'muted'"
                                >
                                    {{ previewExpiry }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card card--back">
                        <div class="magnetic"></div>
                        <div class="cvv-box">
                            <div class="muted">CVV</div>
                            <div class="strong">{{ previewCvv }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const cardHolder = ref('');
const cardNumberRaw = ref('');
const expiryRaw = ref('');
const cvvRaw = ref('');

const digitsOnly = (s) => (s || '').replace(/\D/g, '');

const formatCardNumber = (digits) => digits.match(/.{1,4}/g)?.join(' ') || '';

const formatExpiry = (digits) => {
    const mm = digits.slice(0, 2);
    const yy = digits.slice(2, 4);
    if (!mm && !yy) return '';
    if (digits.length <= 2) return mm;
    return `${mm} / ${yy}`;
};

const onCardNumberInput = (e) => {
    const digits = digitsOnly(e.target.value).slice(0, 16);
    cardNumberRaw.value = digits;
};

const onExpiryInput = (e) => {
    const digits = digitsOnly(e.target.value).slice(0, 4);
    expiryRaw.value = digits;
};

const onCvvInput = (e) => {
    const digits = digitsOnly(e.target.value).slice(0, 4);
    cvvRaw.value = digits;
};

const cardNumberDisplay = computed(() => formatCardNumber(cardNumberRaw.value));
const expiryDisplay = computed(() => formatExpiry(expiryRaw.value));

const previewCardNumber = computed(() => {
    const digits = cardNumberRaw.value;
    const padded = (digits + '################')
        .slice(0, 16)
        .replace(/#/g, '0');
    return formatCardNumber(padded);
});

const isHolderFilled = computed(
    () => (cardHolder.value || '').trim().length > 0
);
const isExpiryFilled = computed(() => expiryRaw.value.length > 0);

const previewCardHolder = computed(() => {
    const v = (cardHolder.value || '').trim();
    return v.length ? v : 'Card Holder';
});

const previewExpiry = computed(() => {
    const d = expiryRaw.value;
    const mm = d.slice(0, 2);
    const yy = d.slice(2, 4);
    if (!mm && !yy) return 'MM / YY';
    return `${mm || 'MM'} / ${yy || 'YY'}`;
});

const previewCvv = computed(() => {
    if (!cvvRaw.value) return 'XXX';
    return cvvRaw.value;
});

const isPayDisabled = computed(() => {
    const holderOk = (cardHolder.value || '').trim().length > 0;
    const numberOk = cardNumberRaw.value.length === 16;
    const expiryOk = expiryRaw.value.length === 4;
    const cvvOk = cvvRaw.value.length === 3 || cvvRaw.value.length === 4;

    return !(holderOk && numberOk && expiryOk && cvvOk);
});
</script>

<style scoped>
.payment {
    width: 100%;
    margin-top: 32px;
}

.title {
    display: flex;
    align-items: center;
    gap: 16px;
}

.title img {
    background-color: #ececec4d;
    border: 1px solid #ececec;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    padding: 6px;
}

h1 {
    font-family: Roboto;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #2a2a48;
}

.content-grid {
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 8px;
    align-items: start;

    grid-template-areas: 'form preview';
}

.form {
    grid-area: form;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.parent {
    grid-area: preview;
    width: 100%;
    display: flex;
    justify-content: center;
}

.field {
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;
}

label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #2a2a48;
}

.help-icon {
    width: 14px;
    height: 14px;
    position: absolute;
    right: 16px;
    top: 50px;
}

input,
textarea {
    border: 1px solid #ececec;
    border-radius: 4px;
    padding: 16px;
    outline: none;
}

.helper {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0px;
    color: #2a2a4899;
}

.row-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

.required {
    margin: 0;
    font-size: 12px;
    line-height: 16px;
    color: #8493a8;
}

.pay-btn {
    height: 40px;
    border: none;
    border-radius: 4px;
    background: #ff27ad;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
}

.pay-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

.preview {
    position: relative;
    min-height: 260px;
    width: 340px;
    min-height: 280px; 
    margin-top: 64px;
}

.card {
    border: 1px solid #ececec;
    border-radius: 12px;
    background: #fff;
    box-shadow: 0px 1px 8px 0px #0000000a;
    padding: 18px;
}

.card--front {
    position: relative;
    z-index: 2;
    max-width: 280px;
}

.card-top {
    display: flex;
    justify-content: flex-end;
}

.chip-img {
    width: 32px;
    height: 24px;
    display: block;
    background-color: #ffe07d;
}

.card--back {
    position: absolute;
    right: -20px;
    top: 65px;
    width: 260px;
    z-index: 1;
    padding: 0;
    overflow: hidden;
}

.card-number {
    margin-top: 18px;
    font-family: Roboto;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #2a2a48;
}

.card-bottom {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.card-col {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.muted {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0px;
    vertical-align: middle;
    color: #8493a8;
}

.strong {
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    color: #2a2a48;
}

.magnetic {
    height: 44px;
    background: #ececec;
    margin-top: 16px;
}

.cvv-box {
    padding: 18px;
    padding-right: 9px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: flex-end;
}

@media (max-width: 960px) {
    .content-grid {
        grid-template-columns: 1fr;
        gap: 12px;
        grid-template-areas:
            'preview'
            'form';
    }

    .preview {
        min-height: 240px;
        position: relative;
        display: flex;
        justify-content: center;
        width: 40%;
        margin: 0;
    }

    .row-2 {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .card--front {
        width: 100%;
        max-width: 340px;
        position: absolute;
    }

    .card--back {
        position: absolute;
        width: 240px;
        right: -100px;
    }

    .title {
        background-color: #ececec4d;
        padding: 20px 12px;
        width: 100vw;
        margin-left: -12px;
        margin-right: -12px;
    }
}

@media (max-width: 640px) {
    .preview {
        width: 60%;
        margin-left: -48px;
    }

    .card--back {
        position: absolute;
        width: 240px;
        right: -80px;
    }

    .card-number {
        font-size: 16px;
    }
}
</style>
