<template>
    <div>
        <p class="w-100 text-center">Loggin out... Please Wait!</p>
    </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
    async mounted() {
        await Cookie.set('access_token', null)
        location.href = "/"            
    }
}
</script>

<style>

</style>