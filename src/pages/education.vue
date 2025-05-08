<script setup lang="ts">
import {ref,onMounted} from 'vue';
import { RouterLink } from 'vue-router';
import Video from '@/components/video.vue';
import DataBase from '@/components/dataBase.vue';
import Community from '@/components/community.vue';
let activePage = ref(1);
</script>
<template>
    <div class="container">
        <div class="switch">
            <button :to="{name:'video'}" :class="['link', activePage === 1 ? 'actived' : '']" @click="activePage = 1" ><span>视频</span></button>
            <button :to="{name:'dataBase'}" :class="['link', activePage === 2 ? 'actived' : '']" @click="activePage = 2"><span>纹样</span></button>
            <button :to="{name:'community'}" :class="['link', activePage === 3 ? 'actived' : '']" @click="activePage = 3"><span>二创</span></button>
        </div>
        <Video v-if="activePage===1" :activePage="activePage"></Video>
        <DataBase v-if="activePage===2" :activePage="activePage"></DataBase>
        <Community v-if="activePage===3" :activePage="activePage"></Community>
    </div>
</template>
<style scoped>
    .switch{
        width: 50%;
        height: 80px;
        padding-left: 50%;
        display: flex;
        justify-content: center;
    }
    .link{
        text-decoration: none;
        font-size: var(--font-size-normal);
        width: 80px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 20px;
        color: black;
        /*向下侵占到下边的组件里面*/
        margin: 100px 10px;
    }
    .actived{
        background-color: var(--base-red);
    }
</style>