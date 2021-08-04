<template>
    <div>
        {{contact.name}} - {{contact.phone}}
    </div>
</template>

<script>
export default {
    props: ['contact'],
    data(){
        return {

        }
    }
}
</script>