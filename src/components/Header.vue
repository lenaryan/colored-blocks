<template>
    <header>
        <a href="/"><img src="" alt="Logo"></a>
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