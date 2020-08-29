<template>
    <section class="slider">
        <ul class="slider__wrapper">
            <Slide />
            <Slide />
            <Slide />
            <Slide />
        </ul>
    </section>
</template>

<script>
import Slide from '@/components/Slide';
export default {
    name: 'app',
    components: {
        Slide
    }
}
</script>