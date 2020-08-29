<template>
    <form class="form">
        <input type="email" placeholder="Enter your email" class="form__input" />
        <SignUp content="Sign Up Now" classes="sign-up sign-up--yellow sign-up--small form__btn" btn-type="submit" />
    </form>
</template>

<script>
import SignUp from '@/components/SignUp';
export default {
    name: 'app',
    components: {
        SignUp
    }
}
</script>