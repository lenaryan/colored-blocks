<template>
    <footer>
        <a href="/"><img src="" alt="Logo"></a>
        <BottomMenu />
        <Form />
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