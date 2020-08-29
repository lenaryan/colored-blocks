<template>
    <header class="header">
        <div class="wrapper header__wrapper">
            <a class="header__logo" href="/">
                <picture>
                    <source srcset="@/images/logo-top.svg">
                    <img src="@/images/logo-top.png" alt="Logo">
                </picture>
            </a>
            <TopMenu />
            <SignUp content="Sign Up" classes="sign-up sign-up--purple sign-up--big" />
        </div>
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