<template>
    <div class="newsletter">
        <div class="container">
            <div class="left-side">
                <h1>Sign up to our newsletter</h1>
                <p>Be the first to hear about the latest offers.</p>
            </div>
            <div class="right-side">
                <input type="email" placeholder="Your email address" />
                <button>Subscribe</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.newsletter {
    background-color: #f2f0ff;
    width: 100%;
    display: flex;
    justify-content: center;
}
.container {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
}
.left-side {
    flex: 1;
}
.right-side {
    flex: 1;
    display: flex;
    justify-content: end;
    gap: 16px;
    height: 48px;
}

h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #2a2a48;
    margin-bottom: 16px;
}
p {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #2a2a4899;
}
input {
    border: 1px solid #ececec;
    border-radius: 4px;
    padding: 16px;
    background-color: #ffffff;
    flex: 1;
}

input::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #2a2a4899;
}
button {
    background-color: #ff27ad;
    border-radius: 4px;
    padding: 0 16px;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;
    vertical-align: middle; 
    text-transform: uppercase;
    color: #FFFFFF;
}
</style>
