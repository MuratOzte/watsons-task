<template>
    <div class="footer-wrapper">
        <footer>
            <LayoutFooterColumn
                title="Corporate"
                :items="[
                    { label: 'About us', to: '#' },
                    { label: 'Press', to: '#' },
                    { label: 'Human resources', to: '#' },
                    { label: 'News from us', to: '#' },
                ]"
            />

            <LayoutFooterColumn
                title="Shopping"
                :items="[
                    { label: 'Order and Payment', to: '#' },
                    { label: 'Cancellation and Refund', to: '#' },
                    { label: 'Delivery Conditions', to: '#' },
                    { label: 'Secure Shopping', to: '#' },
                ]"
            />

            <LayoutFooterColumn
                title="Legal"
                :items="[
                    { label: 'Terms of Use', to: '#' },
                    { label: 'Privacy Policy', to: '#' },
                    { label: 'Membership Agreement', to: '#' },
                    { label: 'Distance Selling Contract', to: '#' },
                ]"
            />

            <LayoutFooterColumn
                title="Help Center"
                :items="[
                    { label: 'FAQ', to: '#' },
                    { label: 'Contact Center', to: '#' },
                ]"
            />

            <div class="contact-us col">
                <!-- desktop title -->
                <h5 class="desktop">Contact Us</h5>

                <button
                    class="acc-header mobile"
                    type="button"
                    @click="toggleContact"
                >
                    <span class="acc-title">Contact Us</span>
                    <img
                        class="chevron"
                        :class="{ open: isContactOpen }"
                        src="/assets/icons/footer/down.svg"
                        alt="toggle"
                    />
                </button>

                <Transition name="acc">
                    <div v-show="isContactOpen || !isMobile" class="acc-body">
                        <div class="row">
                            <img
                                src="/assets/icons/location.svg"
                                alt="location"
                            />
                            <p class="location">
                                Saray Mah. Site Yolu Cad. Anel İş Merkezi,
                                D:No:5/4, 34768 Ümraniye/İstanbul
                            </p>
                        </div>

                        <div class="row">
                            <img src="/assets/icons/phone.svg" alt="phone" />
                            <a href="tel:08507559987">0850 755 9987</a>
                        </div>

                        <div class="row">
                            <img src="/assets/icons/email.svg" alt="mail" />
                            <a href="mailto:info@watsons.com.tr"
                                >info@watsons.com.tr</a
                            >
                        </div>
                    </div>
                </Transition>
            </div>
        </footer>

        <div class="bottom">
            <p class="copyright">
                © Watsons 2021 all rıghts reserved | a member of ck hutchıson
                holdıngs
            </p>
            <p class="mobile-copyright">
                © Watsons 2021 all rıghts reserved <br />
                a member of ck hutchıson holdıngs
            </p>

            <div class="social-media-icons">
                <NuxtLink to="#"
                    ><img src="/assets/icons/footer/facebook.svg" alt="facebook"
                /></NuxtLink>
                <NuxtLink to="#"
                    ><img src="/assets/icons/footer/twiter.svg" alt="twiter"
                /></NuxtLink>
                <NuxtLink to="#"
                    ><img src="/assets/icons/footer/instagram.svg" alt="instagram"
                /></NuxtLink>
                <NuxtLink to="#"
                    ><img src="/assets/icons/footer/youtube.svg" alt="youtube"
                /></NuxtLink>
                <NuxtLink to="#"
                    ><img src="/assets/icons/footer/pinterest.svg" alt="pinterest"
                /></NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isContactOpen = ref(false);
const isMobile = ref(false);

const check = () => {
    isMobile.value = window.matchMedia('(max-width: 1000px)').matches;
    if (!isMobile.value) isContactOpen.value = false;
};

const toggleContact = () => {
    if (!isMobile.value) return;
    isContactOpen.value = !isContactOpen.value;
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
footer {
    display: flex;
    justify-content: space-between;
    padding: 48px 140px;
    gap: 40px;
}

h5 {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #2a2a48;
}

p {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #485363;
}

a {
    text-decoration: none;
    font-family: Roboto;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #485363;
}

.row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-top: 16px;
}

.location {
    flex: 1;
    max-width: 280px;
    white-space: normal;
    overflow-wrap: anywhere;
}

.bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 140px;
    margin: 16px;
}

.copyright {
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0px;
    text-transform: uppercase;
    color: #8493a8;
}

.mobile-copyright {
    font-weight: 500;
    font-size: 10px;
    display: none;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;
    text-transform: uppercase;
}

.social-media-icons {
    display: flex;
    gap: 24px;
}

.col {
    width: 100%;
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
    padding-bottom: 8px;
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
    footer {
        flex-direction: column;
        padding: 0 16px;
        gap: 0;
        border-top: 1px solid #ececec;
    }

    footer > * {
        border-bottom: 1px solid #ececec;
    }

    .desktop {
        display: none;
    }
    .mobile {
        display: flex;
    }

    .bottom {
        flex-direction: column-reverse;
        gap: 16px;
        padding: 16px;
    }

    .copyright {
        display: none;
    }
    .mobile-copyright {
        display: flex;
    }
    .social-media-icons {
        gap: 24px;
        width: 32px;
        height: 32px;
        justify-content: center;
    }
}
</style>
