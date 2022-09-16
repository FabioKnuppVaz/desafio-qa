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

Given('realizar requisicao de busca de tendencia {string} {string}', async function (mediaType, timeWindow) {
    res = await instance({
        method: 'get',
        url: `/trending/${mediaType}/${timeWindow}?language=pt-BR`
    });
});

Then('validar o resultado da busca de tendencia {string}', function (mediaType) {
    for(var i = 0; i < res.data.results.length; i++){
        assert.equal(res.data.results[i].media_type, mediaType);
    }
});