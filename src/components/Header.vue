<template>
    <header>
        <a href="/">
            <picture>
                <source srcset="@/images/logo-top.svg">
                <img src="@/images/logo-top.png" alt="Logo">
            </picture>
        </a>
        <TopMenu />
        <SignUp />
    </header>
</template>

<script>
import TopMenu from '@/components/TopMenu';
import SignUp from '@/components/SignUp';
export default {
    name: 'app',
    components: {
        TopMenu,
        SignUp
    }
}
</script>