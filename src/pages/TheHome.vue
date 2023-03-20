<template>
        <div class="hero">
            <div class="quote">
                <h1>{{ $t('homePage.caption') }}</h1>
                <v-btn class="btn" @click="$router.push('/login')" color="black">{{ $t('venuesPage.bookNow') }}</v-btn>
            </div>
            <div class="picture">
                <div class="pic1 pic">
                    <v-img aspect-ratio="16/9" width="300" src="https://cdn.dribbble.com/users/2014642/screenshots/5965790/media/e6870ad0db59476a9138b4679e1614ee.png?compress=1&resize=400x300"
                        cover></v-img>
                </div>
                <div class="pic2 pic">
                    <v-img aspect-ratio="16/9" width="300" src="https://cdn.dribbble.com/users/2014642/screenshots/5977218/media/7d662cde09b75c4d8732f08e76d008df.png?compress=1&resize=1000x750&vertical=top"
                        cover></v-img>
                </div>
                <div class="pic3 pic">
                    <v-img aspect-ratio="16/9" width="300" src="https://cdn.dribbble.com/users/2014642/screenshots/5965866/media/dd2984e5f2a5a54a59085af2952e97d1.png?compress=1&resize=1000x750&vertical=top"
                        cover></v-img>
                </div>
                <div class="pic4 pic">
                    <v-img aspect-ratio="16/9" width="300" src="https://cdn.dribbble.com/users/2014642/screenshots/5973085/media/b024dadd6a8fd8c2fd7266da6b679f21.png?compress=1&resize=1000x750&vertical=top"
                        cover></v-img>
                </div>
            </div>
        </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&display=swap');
.hero{
    height: 90vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
}
.quote{
    justify-self: center;
    align-self: center;
    margin: 3rem;
    font-size: 1.5rem
}
h1{
    margin-bottom: 2rem;
    font-family: 'IBM Plex Mono', monospace;
}
.btn{
    margin-bottom: 5rem;
    height: 3rem;
}
.pic{
    position: absolute;
}
.pic1{
    right: 5rem;
    top:23rem;
}
.pic3{
    right: 25rem;
    top: 29rem;
}
.pic2{
    top:14rem;
    right: 25rem;
}
.pic4{
    top:8rem;
    right: 5rem;
}
</style>