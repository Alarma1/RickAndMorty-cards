import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        url: 'https://rickandmortyapi.com/api',
        loading: null,
        data:[],
        characters: [],
    }),
    actions: {
        gettingCharactersAction(obj) {
            let urlForDownload = this.url + `/character/?page=${obj.page}`
            if (obj.name !== '' && obj.name !== undefined) {
                urlForDownload += `&name=${obj.name}`
            }
            if (obj.status !== '' && obj.status !== undefined) {
                urlForDownload += `&status=${obj.status}`
            }
            this.loading = true;
            return fetch(urlForDownload, {
                method: "GET"
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Ошибка при получении данных');
                    }
                    return response.json();
                })
                .then(responseJson => {
                    this.data = responseJson
                    this.characters = responseJson.results
                    this.loading = false;
                    return responseJson
                })
                .catch(error => {
                    console.error('Произошла ошибка:', error);
                    this.loading = false;
                });
        },
    }
})
