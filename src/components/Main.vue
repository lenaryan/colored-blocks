<template>
    <main class="main">
        <div class="wrapper main__wrapper">
            <h1>Features</h1>
            <p class="main-text">Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>

            <Slider />
        </div>
    </main>
</template>

<script>
import Slider from '@/components/Slider';
export default {
    name: 'app',
    components: {
        Slider
    }
}
</script>