<script setup lang="ts">
import Header from './components/header.vue';
import Nvi from './components/nvi.vue';
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="container">
        <Header></Header>
        <Nvi></Nvi>
        <RouterView></RouterView>
    </div>
</template>

<style >
    .container{
        width: 100vw;
        margin: 0 atuo;
    }
    body{
        margin: 0;
    }
    /*将搜索框右侧按钮背景色设为红色*/
    .input > .el-input-group__append{
        background-color: var(--base-red) !important;
    }
    .search > span{
        color: black;
    }
    
</style>
