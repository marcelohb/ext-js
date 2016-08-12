/**
 * Created by marcelo.battaglion on 29/07/2016.
 */
Ext.define('CepsBrasil.model.Endereco', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],
    proxy: {
        type: 'jsonp',
        url : 'http://www.viacep.com.br/ws/14010100/json',
        reader: {
            type: 'json'
        }
    }
});