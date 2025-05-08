<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="niv">
        <RouterLink 
        :to="{
            name:'home'
        }"
        class="link"
        active-class="actived"
        >首页</RouterLink>
        <RouterLink 
        :to="{
            name:'work'
        }"
        class="link"
        active-class="actived"
        >作品展示</RouterLink>
        <RouterLink 
        :to="{
            name:'education'
        }"
        class="link"
        active-class="actived"
        >教育资源</RouterLink>
        <RouterLink 
        :to="{
            name:'explore'
        }"
        class="link"
        active-class="actived"
        >文旅探索</RouterLink>
        <RouterLink 
        :to="{
            name:'market'
        }"
        class="link"
        active-class="actived"
        >文创商城</RouterLink>
    </div>
</template>
<style scoped>
    .niv{
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .link{
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: var(--font-size-normal);
        text-decoration: none;
        color: black;
    }
    .actived{
        color:var(--base-red);
    }
</style>