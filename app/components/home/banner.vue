<template>
    <div class="banner">
        <div class="main-box">
            <img
                src="/assets/images/banner/nivea2.png"
                alt="nivea"
                class="nivea2"
            />
            <h1 class="title">
                EN SEVDİĞİNİZ ÜRÜNLER
                <span>TEK TIKLA KAPINIZDA!</span>
            </h1>
            <p class="discount"><span>60%</span> Discount</p>

            <button>Shop Now</button>
            <img
                src="/assets/images/banner/nivea.png"
                class="nivea"
                alt="nivea"
            />
        </div>
    </div>
</template>

<style scoped>
.banner {
    width: 100%;
    height: 400px;
    background-image: linear-gradient(
            0deg,
            rgba(19, 138, 150, 0.3),
            rgba(19, 138, 150, 0.3)
        ),
        linear-gradient(
            88.28deg,
            rgba(16, 160, 174, 0.3) 14.56%,
            rgba(98, 214, 225, 0.3) 56.19%,
            rgba(21, 166, 181, 0.3) 98.69%
        ),
        url('~/assets/images/banner/background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
}
.main-box {
    position: absolute;
    top: 51px;
    left: 50%;
    transform: translateX(-50%);
    padding: 32px;
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    background-color: #ffffff;
}
.title {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0px;
    color: #00106b;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
}

.title span {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0px;
    color: #00106b;
    text-transform: uppercase;
    margin-top: 4px;
}
.discount span {
    color: #00106b;
    font-family: Rubik;
    font-weight: 700;
    font-size: 48px;
    letter-spacing: 0px;
    vertical-align: middle;
}

.discount {
    font-family: Rubik;
    font-weight: 700;
    font-size: 48px;
    letter-spacing: 0px;
    color: #00106b;
    height: fit-content;
    display: flex;
    flex-direction: column;
}

button {
    margin-top: 12px;
    background-color: #0099a8;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    color: white;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
    cursor: pointer;
    z-index: 20;
}

.nivea2 {
    position: absolute;
    width: 519px;
    height: 292px;
    right: 150px;
}

.nivea {
    position: absolute;
    width: 296px;
    height: 294px;
    bottom: -55px;
    left: 250px;
}

@media (max-width: 850px) {
    .nivea2 {
        position: absolute;
        width: 416px;
        height: 232px;
        right: 180px;
        top: 55px;
    }

    .nivea {
        position: absolute;
        width: 240px;
        height: 236px;
        bottom: -20px;
        left: 250px;
    }
}

@media (max-width: 700px) {
    .banner {
        height: 514px;
        overflow: hidden;
    }
    .main-box {
        top: 230px;
    }
    .nivea {
        left: 50%;
        transform: translateX(-50%);
        bottom: 90%;
        width: 250px;
        height: 248px;
    }
    .nivea2 {
        width: 250px;
        height: 140px;
        left: 45%;
        top: 40%;
    }
    .title {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0px;
        vertical-align: middle;
    }
    .title span {
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0px;
        vertical-align: middle;
    }
    .discount span {
        font-family: Rubik;
        font-weight: 700;
        font-size: 34px;
        line-height: 48px;
        letter-spacing: 0px;
        vertical-align: middle;
    }
    .discount {
        font-family: Rubik;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.2px;
        vertical-align: middle;
    }
}
</style>
