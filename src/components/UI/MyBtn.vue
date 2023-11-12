<template lang="html">
    <button class="my-btn">
        <slot>
        </slot>
    </button>
</template>
<script>
export default {
    name: 'my-btn',
    props: {
        color: {
            type: String
        }
    }
}
</script>
<style lang="css">
    .my-btn {
        padding: 10px;
        font-weight: bold;
        color: teal;
        border: 2px solid teal;
        background-color: white;
        transition: .3s;
        cursor: pointer;
    }
    .my-btn:hover {
        background-color: teal;
        color: white;
    }
</style>