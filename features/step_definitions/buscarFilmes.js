const { Given, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const assert = require('assert');

const access_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWM0ZGQ5ODU1ODAyYTY1NGJkNDE5ZWVkMWUzYTUxMSIsInN1YiI6IjYzMjEzYzJmMjcxNjcxMDA5MWNlNGZkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CAmEYps1XJ19aN1HzKujWrdLuarfmVdrnMW6NJBNAUU';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 1000,
    headers: {'Authorization': `Bearer ${access_token}`},
    responseType: 'json',
    responseEncoding: 'utf8'
});

let res;

Given('realizar requisicao de busca de filme {int} {string}', async (page, title) => {
    res = await instance({
        method: 'get',
        url: `/search/movie?language=pt-BR&query=${title}&page=${page}`
    });
});

Then('validar o resultado da busca de filme {int} {int} {int} {int} {string}', (page, pages, results, id, title ) => {
    assert.equal(res.data.page, page);
    assert.equal(res.data.total_pages, pages);
    assert.equal(res.data.total_results, results);

    for(var i = 0; i < res.data.results.length; i++){
        if(res.data.results[i].id == id) {
            assert.equal(res.data.results[i].id, id);
            assert.equal(res.data.results[i].title, title);
        }
    }
});