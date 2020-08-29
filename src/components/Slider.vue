<template>
    <section class="slider">
        <ul class="slider__wrapper">
            <Slide v-for="feature in features"
            :feature="feature" :key="feature.id" />
        </ul>
    </section>
</template>

<script>
import Slide from '@/components/Slide';
export default {
    name: 'app',
    props: ['features'],
    components: {
        Slide
    }
}
</script>