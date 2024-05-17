<template>
    <div class="ball"
         :class="{'ball-red': status === 'Dead','ball-green': status === 'Alive','ball-grey': status === 'unknown'}"></div>
</template>

<script setup>
    const props = defineProps({
        status: String,
    })
</script>

<style scoped lang="scss">
    .ball {
        width: 7px;
        height: 7px;
        margin-right: 5px;
        border-radius: 10px;

        &-red {
            background-color: red;
        }

        &-green {
            background: rgb(85, 204, 68);
        }

        &-grey {
            background: rgb(158, 158, 158);
        }
    }

</style>
