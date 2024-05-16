<template>
    <section class="header">
        <input type="text" placeholder="Фильтр по имени">
        <input type="text" placeholder="Фильтр по статусу">
        <button>Применить</button>
    </section>
    <section class="card">
        <div class="card__net">
            <div v-for="character in charactersData" :key="character.id" class="card__net__cycle">
                <CardComp :characterData="character"/>
            </div>
        </div>
    </section>
</template>

<script setup>
    import {ref, onMounted, computed} from "vue"
    import {useCounterStore} from "../stores/counter.js"
    import CardComp from '../components/CardComp.vue'

    const store = useCounterStore()
    const charactersData = computed(() => store.characters)
    const getCharacters = () => {
        store.gettingCharactersAction()
    }
    onMounted(() => {
        getCharacters()
    })
</script>

<style scoped lang="scss">
    .header {
        width: 1500px;
        height: 50px;
        display: flex;
        align-items: center;
        background-color: white;
        margin: 10px;
        border-radius: 10px;
    }

    .card__net {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        border-radius: 0.5rem;
        margin: 0.75rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

        &__cycle {
            border-radius: 10px;
            background: rgb(60, 62, 68);
        }
    }


    .head__box {
        width: 100%;
        height: 100%;
        background: rgb(39, 43, 51);
    }
</style>
