<template>
    <section class="header">
        <div class="header__filters">
            <input v-model="filterByName" type="text" placeholder="Фильтр по имени" class="header__filters-input">
            <input v-model="filterByStatus" type="text" placeholder="Фильтр по статусу" class="header__filters-input">
            <button @click="applyFilters" class="header__filters-button">Применить</button>
        </div>
        <div class="header__pagination">
            <button @click="getCharacters(pageNavigation - 1)" :disabled="pageNavigation === 1"
                    class="header__pagination-button--prev">Пред.
            </button>
            <button @click="getCharacters(page)" v-for="(page, index) in totalPages" :key="index"
                    class="header__pagination-button">{{page}}
            </button>
            <button @click="getCharacters(pageNavigation + 1)" :disabled="pageNavigation === totalPages"
                    class="header__pagination-button--next">След.
            </button>
        </div>
    </section>
    <section class="cards">
        <div class="cards__grid">
            <div v-for="character in charactersData" :key="character.id" class="cards__item">
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
    const totalPages = ref(0)
    const charactersData = ref([])
    const filterByName = ref('')
    const filterByStatus = ref('')
    const pageNavigation = ref(1)
    let filterByNameLatestData = ''
    let filterByStatusLatestData = ''
    const applyFilters = () => {
        filterByNameLatestData = filterByName.value
        filterByStatusLatestData = filterByStatus.value
        getCharacters(1)
    }
    const getCharacters = (page) => {
        pageNavigation.value = page
        store.gettingCharactersAction({name: filterByNameLatestData, status: filterByStatusLatestData, page: page})
            .then(() => {
                charactersData.value = store.characters
                totalPages.value = store.data.info.pages
            })
    }
    onMounted(() => {
        getCharacters(pageNavigation.value)
    })
</script>

<style scoped lang="scss">
    .header {
        min-height: 50px;
        display: flex;
        align-items: center;
        background-color: white;
        margin: 10px;
        padding: 5px;
        border-radius: 10px;

        &__filters {
            & > * {
                margin-right: 10px; // Отступ справа ко всем прямым вложенным элементам

                &:last-child {
                    margin-right: 30px; // Убирает отступ у последнего элемента
                }
            }
        }

        &__pagination {
            width: 720px;

            & > * {
                &:first-child {
                    margin-right: 5px;
                }

                margin-bottom: 2px;
                margin-right: 2px; // Отступ справа ко всем прямым вложенным элементам

                &:last-child {
                    margin-right: 5px; // Убирает отступ у последнего элемента
                }
            }
        }
    }

    .cards {
        &__grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-column-gap: 20px;
            grid-row-gap: 20px;
            border-radius: 0.5rem;
            margin: 0.75rem;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        }

        &__item {
            border-radius: 10px;
            background: rgb(60, 62, 68);
        }
    }
</style>
