import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        loading: null,
        characters: [],
    }),
    actions: {
        gettingCharactersAction() {
            this.loading = true;
            console.log(123)
            return fetch('https://rickandmortyapi.com/api/character?pages', {
                method: "GET"
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Ошибка при получении данных');
                    }
                    return response.json();
                })
                .then(responseJson => {
                    this.characters = responseJson.results
                    console.log(this.characters)
                    this.loading = false;
                    return responseJson
                })
                .catch(error => {
                    console.error('Произошла ошибка:', error);
                    this.loading = false;
                });
        }
    }
})
