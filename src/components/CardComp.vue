<template>
    <article class="character-card">
        <div class="character-card__picture">
            <img :src="characterData.image"
                 :alt="characterData.name"
                 class="character-card__img">
        </div>
        <div class="character-card__content">
            <div class="character-card__field-top">
                <h2 class="character-card__name">
                    {{ characterData.name }}
                </h2>
                <p class="character-card__status">
                    <span><ColorBall :status="characterData.status"/></span>
                    {{ characterData.status }} -
                    {{characterData.species }}
                </p>
            </div>
            <div class="character-card__field-average">
                <p class="character-card__title">Last known location:</p>
                <p class="character-card__text">{{ characterData.location.name }}</p>
            </div>
            <div class="character-card__field-bottom">
                <p class="character-card__title">First seen in:</p>
                <p class="character-card__text">{{ characterData.origin.name }}</p>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
    import ColorBall from '../components/ColorBall.vue'

    const props = defineProps({
        characterData: Object,
    })
</script>

<style scoped lang="scss">
    .character-card {
        width: 600px;
        height: 220px;
        display: flex;

        &__picture {
            flex: 1 1 0;
            width: 100%;
        }

        &__img {
            width: 100%;
            height: 100%;
            border-radius: 10px 0 0 10px;
            object-fit: cover;
        }

        &__content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            flex: 2 1 0;
            padding: 0.75rem;
        }

        &__field-top {
            margin-bottom: 10px;
        }

        &__name {
            font-size: 1.5rem;
            font-weight: 800;
            color: rgb(245, 245, 245)
        }

        &__status {
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: 500;
            color: rgb(245, 245, 245);

        }

        &__field-average {
            margin-bottom: 10px;
        }

        &__title {
            margin-bottom: 5px;
            font-size: 16px;
            font-weight: 500;
            color: rgb(158, 158, 158)
        }

        &__text {
            margin-bottom: 5px;
            font-size: 18px;
            font-weight: 400;
            color: rgb(245, 245, 245);
        }

        &__field-bottom {
            margin-bottom: 10px;
        }

        &__title {
            margin-bottom: 5px;
            font-size: 16px;
            font-weight: 500;
            color: rgb(158, 158, 158)
        }

        &__text {
            margin-bottom: 5px;
            font-size: 18px;
            font-weight: 400;
            color: rgb(245, 245, 245);
        }
    }
</style>
