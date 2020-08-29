<template>
    <button :class="classes" :type="btnType">{{content}}</button>
</template>

<script>
export default {
    props: ['content', 'classes', 'btnType']
}
</script>