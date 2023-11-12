<template lang="html">
    <div class="nav-bar">
        <div>VUE</div>
        <div class="nav-btns">
            <my-btn
            @click="$router.push('/')"
            >Home</my-btn>
            <my-btn
            @click="$router.push('/posts')"
            style="margin-left: 4px;"
            >Posts</my-btn>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .nav-bar {
        display: flex;
        align-items: center;
        background-color: teal;
        height: 60px;
        padding: 10px;
    }

    .nav-btns {
        margin-left: auto;
    }
</style>