const { Before, Given, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const assert = require('assert');

let instance;
let res;

Before(function () {
    instance = axios.create(this.parameters);
});

Given('realizar requisicao de busca de tendencia {string} {string} {string}', async function (mediaType, timeWindow, language) {
    res = await instance({
        method: 'get',
        url: `/trending/${mediaType}/${timeWindow}?language=${language}`
    });
});

Then('validar o resultado da busca de tendencia {string}', function (mediaType) {
    assert.equal(res.status, 200);
    for(var i = 0; i < res.data.results.length; i++){
        assert.equal(res.data.results[i].media_type, mediaType);
    }
});