<template>
    <!-- <RouterLink to="/">posts</RouterLink> -->
    <!-- <RouterLink to="/home">home</RouterLink> -->
    <NavBar/>
    <RouterView></RouterView>
    
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
    components: {
        NavBar
    }
}
</script>
<style>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
</style>