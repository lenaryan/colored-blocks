<template>
    <button type="button" :class="classes">{{content}}</button>
</template>

<script>
export default {
    props: ['content', 'classes']
}
</script>