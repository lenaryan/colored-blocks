<template>
    <header class="header">
        <div class="wrapper header__wrapper">
            <a class="header__logo" href="/">
                <picture>
                    <source srcset="@/images/logo-top.svg">
                    <img src="@/images/logo-top.png" alt="Logo">
                </picture>
            </a>
            <div class="mobile-wrap header__mobile-wrap">
                <TopMenu />
                <SignUp content="Sign Up" classes="sign-up sign-up--purple sign-up--big" btn-type="button" />
            </div>
            <button class="burger header__burger header__menu-btn">
                <picture>
                    <source srcset="@/images/menu-burger.svg">
                    <img src="@/images/menu-burger.png" alt="Open menu">
                </picture>
            </button>
            <button class="cross header__cross header__menu-btn">
                <picture>
                    <source srcset="@/images/menu-cross.svg">
                    <img src="@/images/menu-cross.png" alt="Close menu">
                </picture>
            </button>
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