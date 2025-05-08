<script setup lang="ts">

</script>
<template>
    <div class="container">
        <div class="title">
            <span>纹样数据库</span>
            <span>Pattern database</span>
        </div>
        <div class="content">
            <div class="first">
                <img src="/src/assets/dataBase/图片1.png">
                <img src="/src/assets/dataBase/图片1-底片.png">
                <img src="/src/assets/dataBase/图片2.png">
                <img src="/src/assets/dataBase/图片2-底片.png">
            </div>
            <div class="second">
                <img src="/src/assets/dataBase/图片3.png">
                <img src="/src/assets/dataBase/图片4.png">
                <img src="/src/assets/dataBase/图片5.png">
                <img src="/src/assets/dataBase/图片6.png">
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url("https://fontsapi.zeoseven.com/491/main/result.css");
    .container{
        width: 100%;
    }
    .title{
        width: 30%;
        padding-right: 70%;
    }
    .title > span{
        display: block;
        text-align: center;
        font-family: "平方赖江湖飞扬体";
        font-size: var(--font-size-large);
    }
    .content{
        width: 80%;
        height: auto;
        margin: 0 auto;
    }
    .first{
        width: 80%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 0 auto;
    }
    .first >img{
        width: 40%;
        margin: 10px auto;
        object-fit: cover;
    }
    .second{
        width: 90%;
        display: flex;
        justify-content: space-around;
    }
    .second >img{
        width: 25%;
        margin: 10px auto;
        object-fit: cover;
    }
</style>