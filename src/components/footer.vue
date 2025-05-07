<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="footer">
        <div class="links">
            <RouterLink to="#" class="link">关于我们</RouterLink>
            <RouterLink to="#" class="link">友情链接</RouterLink>
            <RouterLink to="#" class="link">联系我们</RouterLink>
        </div>
        <div class="copyright">
            <span>© 汴京灯笼张， 2024, 版权所有</span>
        </div>
    </div>
</template>
<style scoped>
    .footer{
        width: 100%;
        background-color: var(--base-red);
        height: 150px;
    }
    .links{
        display: flex;
        padding-top: 40px;
        width: 80%;
        justify-content: space-around;
    }
    .link{
        height: 50px;
        line-height: 50px;
        display: inline-block;
        text-decoration: none;
        color: black;
        font-size: large;
    }
    .copyright{
        margin-top: 15px;
        float: right;
        margin-right: 20px;
    }
</style>