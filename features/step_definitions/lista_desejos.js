const { Given, When, Then } = require('@cucumber/cucumber');
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
let list_id;

Given('realizar requisicao para criar uma lista', async function () {
    res = await instance({
        method: 'post',
        url: `/list`,
        data: {
            "name": "teste",
            "description": "teste",
            "language": "pt-BR"
        }
    });

    list_id = res.data.list_id;
});

Then('validar o resultado da criacao da lista', function () {
    assert.equal(res.data.status_code, 1);
    assert.equal(res.data.status_message, 'The item/record was created successfully.');
    assert.equal(res.data.success, true);
    assert.notEqual(res.data.list_id, null);
});

Given('realizar requisicao para ver os detalhes da lista', async function () {
    res = await instance({
        method: 'get',
        url: `/list/${list_id}?language=pt-BR`
    });
});

Then('validar o resultado dos detalhes da lista', function () {
    assert.equal(res.data.created_by, 'FabioVaz');
    assert.equal(res.data.description, 'teste');
    assert.equal(res.data.favorite_count, 0);
    assert.notEqual(res.data.id, null);
    assert.notEqual(res.data.items, null);
    assert.equal(res.data.item_count, 0);
    assert.equal(res.data.iso_639_1, 'pt');
    assert.equal(res.data.name, 'teste');
    assert.equal(res.data.poster_path, null);
});

When('realizar requisicao para adicionar filme na lista', async function () {
    res = await instance({
        method: 'post',
        url: `/list/${list_id}/add_item`,
        data: {
            "media_id": 18
        }
    });
});

Then('validar o resultado do filme adicionado na lista', function () {
    assert.equal(res.data.success, true);
    assert.equal(res.data.status_code, 12);
    assert.equal(res.data.status_message, 'The item/record was updated successfully.');
});

When('realizar requisicao para ver o status de um filme na lista', async function () {
    res = await instance({
        method: 'get',
        url: `/list/${list_id}/item_status?movie_id=18`
    });
});

Then('validar o resultado do status de um filme na lista', function () {
    assert.equal(res.data.id, null);
    assert.equal(res.data.item_present, true);
});

Given('realizar requisicao para remover filme da lista', async function () {
    res = await instance({
        method: 'post',
        url: `/list/${list_id}/remove_item`,
        data: {
            "media_id": 18
        }
    });
});

Then('validar o resultado do filme removido da lista', function () {
    assert.equal(res.data.success, true);
    assert.equal(res.data.status_code, 13);
    assert.equal(res.data.status_message, 'The item/record was deleted successfully.');
});

When('realizar requisicao para limpar lista', async function () {
    res = await instance({
        method: 'post',
        url: `/list/${list_id}/clear?confirm=true`
    });
});

Then('validar o resultado da limpeza da lista', function () {
    assert.equal(res.data.success, true);
    assert.equal(res.data.status_code, 12);
    assert.equal(res.data.status_message, 'The item/record was updated successfully.');
});

When('realizar requisicao para deletar uma lista', async function () {
    res = await instance({
        method: 'delete',
        url: `/list/${list_id}`
    })
    .catch(function (error) {
    })
});

Then('validar o resultado da delecao da lista', function () {
    assert.notStrictEqual(res, undefined, "API está retornando erro 500");
});