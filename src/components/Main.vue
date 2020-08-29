<template>
    <main class="main">
        <div class="wrapper main__wrapper">
            <h1>Features</h1>
            <p class="main-text">Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>

            <Slider :features="features" />
        </div>
    </main>
</template>

<script>
import Slider from '@/components/Slider';
export default {
    name: 'app',
    components: {
        Slider
    },
    data() {
        return {
            features: [
                {id: 1, title: 'First Feature', text: 'Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the trees and how the ground was covered with beautiful flowers.'},
                {id: 2, title: 'Second Feature', text: 'Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods.'},
                {id: 3, title: 'Third Feature', text: 'Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the trees and how the ground was covered with beautiful flowers.'},
                {id: 4, title: 'Fourth Feature', text: 'Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods.'}
            ]
        }
    }
}
</script>