<script setup lang="ts">
import {ref} from 'vue'
class Item {
    avatar:string;
    nickName: string; 
    describe: string; 

    constructor(avatar:string,nickName: string, describe: string) {
        this.avatar=avatar;
        this.nickName = nickName; 
        this.describe = describe; 
    }
}
let messages = ref<Item[]>([]);
let dot = '/src/assets/community/dot.png';
messages.value.push(new Item('/src/assets/community/图片1.png','穿透心灵的冰','原本以为传统纹样很遥远，没想到在这里能这么轻松地进行二创！平台让我对图案结构有了更深的理解。终于不是只会点赞别人作品的菜鸟啦，嘿嘿！'));
messages.value.push(new Item('/src/assets/community/图片2.png','花香般的盛夏','第一次来进行纹样二次创作，真的太神奇了！我根据数据库里的牡丹图案重新进行细节改动，简直美哭～我已经把它用在自己的手账封面上啦！'));
messages.value.push(new Item('/src/assets/community/图片3.png','东篱畔','作为一名插画师，在这个平台发现了好多灵感源泉！真的超好用！'));
</script>
<template>
    <div class="container">
        <div class="title">
            <span>二创社区</span>
            <span>Community</span>
        </div>
        <div class="content">
            <div class="message" v-for="(message,index) in messages" :key="index">
                <div class="user">
                    <img :src="message.avatar" class="avatar"><div class="nickName">{{ message.nickName }}</div>
                </div>
                <div class="words">
                    <img :src="dot" class="dot">
                    <div class="comment">
                        {{ message.describe }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url("https://fontsapi.zeoseven.com/491/main/result.css");
    .container{
        width: 100%;
        height: auto;
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
        display: flex;
        width: 80%;
        margin: 0 auto;
        border-radius: 5px;
        margin-bottom: 5%;
        margin-top: 5%;
    }
    .message{
        background-color: var(--base-red);
        border-radius: 5px;
        border-color: var(--base-gold);
        border-style: solid;
        width: 33%;
        height: auto;
    }
    .avatar{
        display: inline;
        width: 20%;
        border-radius: 50%;
    }
    .dot{
        width: 20%;
        object-fit: cover;
    }
    .user{
        margin-left: 10%;
        width: 90%;
        height: 40%;
        display: flex;
        align-items: center;
        margin-top: 5%;
    }
    .nickName{
        font-size: var(--font-size-large);
        margin-left: 10%;
        overflow: hidden; 
        text-overflow: ellipsis; 
        display: -webkit-box; /* 使用弹性盒子模型 */
        -webkit-line-clamp: 1; /* 限制显示两行 */
        line-clamp: 1; /* Standard property for compatibility */
        -webkit-box-orient: vertical; /* 设置盒子方向为垂直 */
        width: 80%;
        height: auto; /* 自动适应内容高度 */
    }
    .words{
        margin-top: 10%;
        display: flex;
        align-items: center;
        margin-bottom: 10%;
    }
    .comment{
        overflow: hidden; 
        text-overflow: ellipsis; 
        display: -webkit-box; /* 使用弹性盒子模型 */
        -webkit-line-clamp: 2; /* 限制显示两行 */
        line-clamp: 2; /* Standard property for compatibility */
        -webkit-box-orient: vertical; /* 设置盒子方向为垂直 */
        width: 80%;
        height: auto; /* 自动适应内容高度 */
    }
</style>