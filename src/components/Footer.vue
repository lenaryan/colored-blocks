<template>
    <footer class="footer">
        <div class="wrapper footer__wrapper">
            <a href="/">
                <picture>
                    <source srcset="@/images/logo-bottom.svg">
                    <img src="@/images/logo-bottom.png" alt="Logo">
                </picture>
            </a>
            <BottomMenu />
            <Form />
        </div>
    </footer>
</template>

<script>
import BottomMenu from '@/components/BottomMenu';
import Form from '@/components/Form';
export default {
    name: 'app',
    components: {
        BottomMenu,
        Form
    }
}
</script>