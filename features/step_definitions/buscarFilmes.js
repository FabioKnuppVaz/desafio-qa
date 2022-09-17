const { Before, Given, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const assert = require('assert');

let instance;
let res;

Before(function () {
    instance = axios.create(this.parameters);
});

Given('realizar requisicao de busca de filme {int} {string} {string}', async (page, title, language) => {
    res = await instance({
        method: 'get',
        url: `/search/movie?language=${language}&query=${title}&page=${page}`
    });
});

Then('validar o resultado da busca de filme {int} {int} {int} {int} {string}', (page, pages, results, id, title ) => {
    assert.equal(res.status, 200);
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