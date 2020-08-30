<template>
    <section class="slider">
        <div class="slider__wrapper">
            <ul class="slider__slides">
                <Slide v-for="feature in features"
                :feature="feature" :key="feature.id" />
            </ul>
        </div>
        <ul class="slider__dots">
            <li class="slider__dot">
                <button class="slider__btn slider__btn--0 slider__btn--active" @click="move(0)"></button>
            </li>
            <li class="slider__dot">
                <button class="slider__btn slider__btn--1" @click="move(1)"></button>
            </li>
            <li class="slider__dot slider__dot--mob">
                <button class="slider__btn slider__btn--2" @click="move(2)"></button>
            </li>
            <li class="slider__dot slider__dot--mob">
                <button class="slider__btn slider__btn--3" @click="move(3)"></button>
            </li>
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
    },
    methods: {
        move: function(num) {
            document.querySelectorAll('.slider__btn--active').forEach(item => item.classList.remove('slider__btn--active'));
            document.querySelector('.slider__btn--' + num).classList.add('slider__btn--active');
            let percents;

            //getting translate percents in style attribute
            let sliderStyle = document.querySelector('.slider__slides').getAttribute('style');
            if (sliderStyle == null) {
                percents = 0;
            } else {
                percents = Math.abs(parseInt(document.querySelector('.slider__slides').getAttribute('style').slice(22,-3)));
            }

            //setting up new translate depending on stating point (percents)
            //and finishing point (num * 100)
            //and do nothing if they are equal
            if (percents < (num * 100)) {
                for (let px = percents; px <= (num * 100); px++) {
                    document.querySelector('.slider__slides').style.transform = 'translateX(' + -px + '%)';
                }
            } else if (percents > (num * 100)) {
                for (let px = percents; px >= (num * 100); px--) {
                    document.querySelector('.slider__slides').style.transform = 'translateX(' + -px + '%)';
                }
            }
        }
    }
}
</script>