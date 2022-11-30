const { Before, Given, When, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const assert = require('assert');

let instance;
let res;
let listId;

Before(function () {
    instance = axios.create(this.parameters);
});

Given('realizar requisicao para criar uma lista', async function (table) {
    res = await instance({
        method: 'post',
        url: `/list`,
        data: table.hashes()[0]
    });

    listId = res.data.list_id;
});

Then('validar o resultado da criacao da lista', function (table) {
    esperado = table.hashes()[0]

    assert.equal(res.status, 201);
    assert.equal(res.data.status_code, esperado.statusCode);
    assert.equal(res.data.status_message, esperado.statusMessage);
    assert.equal(res.data.success, true);
    assert.notEqual(res.data.list_id, null);
});

Given('realizar requisicao para ver os detalhes da lista', async function () {
    res = await instance({
        method: 'get',
        url: `/list/${listId}?language=pt-BR`
    });
});

Then('validar o resultado dos detalhes da lista', function (table) {
    esperado = table.hashes()[0]

    assert.equal(res.status, 200);
    assert.equal(res.data.created_by, esperado.createdBy);
    assert.equal(res.data.description, esperado.description);
    assert.equal(res.data.favorite_count, 0);
    assert.notEqual(res.data.id, null);
    assert.notEqual(res.data.items, null);
    assert.equal(res.data.item_count, 0);
    assert.equal(res.data.iso_639_1, esperado.iso6391);
    assert.equal(res.data.name, esperado.name);
    assert.equal(res.data.poster_path, null);
});

When('realizar requisicao para adicionar filme id {string} na lista', async function (mediaId) {
    data = mediaId == "" ? {} : { "media_id": mediaId }
    
    res = await instance({
        method: 'post',
        url: `/list/${listId}/add_item`,
        data: data,
        validateStatus: function(status) {
            return true;
        },
    });
});

Then('validar o resultado do filme adicionado na lista {string} {string} {string}', function (http, statusCode, statusMessage) {
    assert.equal(res.status, http);
    assert.equal(res.data.status_code, statusCode);
    assert.equal(res.data.status_message, statusMessage);
});

When('realizar requisicao para ver o status de um filme id {string} na lista', async function (mediaId) {
    res = await instance({
        method: 'get',
        url: `/list/${listId}/item_status?movie_id=${mediaId}`,
        validateStatus: function (status) {
            return true;
        },
    });
});

Then('validar o resultado do status de um filme na lista', function () {
    assert.equal(res.status, 200);
    assert.equal(res.data.id, null);
    assert.equal(res.data.item_present, true);
});

Given('realizar requisicao para remover filme id {string} da lista', async function (mediaId) {
    res = await instance({
        method: 'post',
        url: `/list/${listId}/remove_item`,
        data: {
            "media_id": parseInt(mediaId)
        }
    });
});

Then('validar o resultado do filme removido da lista', function (table) {
    esperado = table.hashes()[0]

    assert.equal(res.status, 200);
    assert.equal(res.data.success, true);
    assert.equal(res.data.status_code, esperado.statusCode);
    assert.equal(res.data.status_message, esperado.statusMessage);
});

When('realizar requisicao para limpar lista', async function () {
    res = await instance({
        method: 'post',
        url: `/list/${list_id}/clear?confirm=true`
    });
});

Then('validar o resultado da limpeza da lista', function (table) {
    esperado = table.hashes()[0]

    assert.equal(res.status, 201);
    assert.equal(res.data.success, true);
    assert.equal(res.data.status_code, esperado.statusCode);
    assert.equal(res.data.status_message, esperado.statusMessage);
});

When('realizar requisicao para deletar uma lista', async function () {
    res = await instance({
        method: 'delete',
        url: `/list/${listId}`
    })
        .catch(function (error) {
        })
});

Then('validar o resultado da delecao da lista', function () {
    assert.notStrictEqual(res, undefined, "API está retornando erro 500");
});
