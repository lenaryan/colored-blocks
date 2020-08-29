<template>
    <li class="slide slider__slide">
        <span class="slide__num">{{feature.id}}</span>
        <h2 class="slide__title">{{feature.title}}</h2>
        <p class="slide__text">{{feature.text}}</p>
        <a href="#" class="slide__link">Learn more
            <picture>
                <source srcset="@/images/arrow-link.svg">
                <img src="@/images/arrow-link.png" alt="Learn more" class="slide__link-icon">
            </picture>
        </a>
    </li>
</template>

<script>
export default {
    props: ['feature']
}
</script>