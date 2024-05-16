<template>
    <article class="characterCard">
        <div class="characterCard__Picture">
            <img :src="characterData.image"
                 alt="Spaceman"
                 class="characterCard__Picture__Img">
        </div>
        <div class="characterCard__Content">
            <div class="characterCard__Content__topField">
                <h2 class="characterCard__Content__topField__Name">
                    {{ characterData.name }}
                </h2>
                <p class="characterCard__Content__topField__Status">
                    <span class="characterCard__Content__topField__Status__Icon"></span>
                    {{ characterData.status }} -
                    {{characterData.species }}
                </p>
            </div>
            <div class="characterCard__Content__averageField">
                <p class="characterCard__Content__averageField__Title">Last known location:</p>
                <p class="characterCard__Content__averageField__Text">{{ characterData.location.name }}</p>
            </div>
            <div class="characterCard__Content__bottomField">
                <p class="characterCard__Content__bottomField__Title">First seen in:</p>
                <p class="characterCard__Content__bottomField__Text">{{ characterData.origin.name }}</p>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
    const props = defineProps({
        characterData: Object,
    })
    // const emit = defineEmits(['btnClick'])
    // const buttonClick = (id: string) => {
    //     emit('btnClick', id)
    // }
</script>

<style scoped lang="scss">
    .characterCard {
        width: 100%;
        height: 220px;
        display: flex;

        &__Picture {
            flex: 2 1 0;
            width: 100%;

            &__Img {
                width: 100%;
                height: 100%;
                border-radius: 10px 0 0 10px;
                object-fit: fill;
            }
        }

        &__Content {
            flex: 2 1 0;
            padding: 0.75rem;

            &__topField {
                margin-bottom: 10px;

                &__Name {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: rgb(245, 245, 245)
                }

                &__Status {
                    display: flex;
                    align-items: center;
                    font-size: 16px;
                    font-weight: 500;
                    color: rgb(245, 245, 245);

                    &__Icon {
                        width: 7px;
                        height: 7px;
                        margin-right: 5px;
                        background-color: red;
                        border-radius: 10px;
                    }
                }
            }

            &__averageField {
                margin-bottom: 10px;

                &__Title {
                    margin-bottom: 5px;
                    font-size: 16px;
                    font-weight: 500;
                    color: rgb(158, 158, 158)
                }

                &__Text {
                    margin-bottom: 5px;
                    font-size: 18px;
                    font-weight: 400;
                    color: rgb(245, 245, 245);
                }
            }
            &__bottomField {
                margin-bottom: 10px;

                &__Title {
                    margin-bottom: 5px;
                    font-size: 16px;
                    font-weight: 500;
                    color: rgb(158, 158, 158)
                }

                &__Text {
                    margin-bottom: 5px;
                    font-size: 18px;
                    font-weight: 400;
                    color: rgb(245, 245, 245);
                }
            }
        }
    }
</style>
