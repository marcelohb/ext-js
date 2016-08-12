/**
 * Created by marcelo.battaglion on 29/07/2016.
 */
Ext.define('CepsBrasil.view.endereco.Endereco', {
    extend: 'Ext.grid.Panel',
    xtype: 'endereco',

    requires: [],

    title: 'Endereço',

    columns: [
        {text: 'UF', dataIndex: 'uf'},
        {text: 'Cidade', dataIndex: 'localidade', flex: 1},
        {text: 'Bairro', dataIndex: 'bairro', flex: 1},
        {text: 'Complemento', dataIndex: 'complemento', flex: 1},
        {text: 'Logradouro', dataIndex: 'logradouro', flex: 1},
        {text: 'IBGE', dataIndex: 'ibge', flex: 1},
        {text: 'GIA', dataIndex: 'gia', flex: 1},
        {text: 'Unidade', dataIndex: 'unidade', flex: 1}
    ]
});