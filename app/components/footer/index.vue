<template>
    <footer>
        <FooterColumn
            title="Corporate"
            :items="[
                { label: 'About us', to: '#' },
                { label: 'Press', to: '#' },
                { label: 'Human resources', to: '#' },
                { label: 'News from us', to: '#' },
            ]"
        />
        <FooterColumn
            title="Shopping"
            :items="[
                { label: 'Order and Payment', to: '#' },
                { label: 'Cancellation and Refund', to: '#' },
                { label: 'Delivery Conditions', to: '#' },
                { label: 'Secure Shopping', to: '#' },
            ]"
        />
        <FooterColumn
            title="Legal"
            :items="[
                { label: 'Terms of Use', to: '#' },
                { label: 'Privacy Policy', to: '#' },
                { label: 'Membership Agreement', to: '#' },
                { label: 'Distance Selling Contract', to: '#' },
            ]"
        />
        <FooterColumn
            title="Help Center"
            :items="[
                { label: 'FAQ', to: '#' },
                { label: 'Contact Center', to: '#' },
            ]"
        />
        <div class="contact-us">
            <h5>Contact Us</h5>
            <div class="row">
                <img src="/assets/icons/location.svg" alt="location" />
                <p>
                    Saray Mah. Site Yolu Cad. Anel İş Merkezi, D:No:5/4, 34768
                    Ümraniye/İstanbul
                </p>
            </div>
            <div class="row">
                <img src="/assets/icons/phone.svg" alt="location" />
                <a href="tel:08507559987">0850 755 9987</a>
            </div>
            <div class="row">
                <img src="/assets/icons/location.svg" alt="location" />
                <a href="mailto:info@watsons.com.tr">info@watsons.com.tr</a>
            </div>
        </div>
    </footer>
    <div class="bottom" >
        <p class="copyright">
            © Watsons 2021 all rıghts reserved | a member of ck hutchıson
            holdıngs
        </p>
        <div class="social-media-icons" >
            <NuxtLink to="#" >
                <img src="/assets/icons/facebook.svg" alt="facebook" />
            </NuxtLink>
            <NuxtLink to="#" >
                <img src="/assets/icons/twiter.svg" alt="twiter" />
            </NuxtLink>
            <NuxtLink to="#" >
                <img src="/assets/icons/instagram.svg" alt="instagram" />
            </NuxtLink>
            <NuxtLink to="#" >
                <img src="/assets/icons/youtube.svg" alt="youtube" />
            </NuxtLink>
            <NuxtLink to="#" >
                <img src="/assets/icons/pinterest.svg" alt="pinterest" />
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
footer {
    display: flex;
    justify-content: space-between;
    padding: 48px 140px;
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
    align-items: center;
    gap: 8px;
    margin-top: 16px;
}
.copyright {
    font-weight: 500;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0px;
    text-transform: uppercase;
    color: #8493a8;
}
.social-media-icons{
    display: flex;
    gap: 24px;
}
.bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 140px;

}
</style>
