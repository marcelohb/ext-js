Ext.define('ISS.model.Pass', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.Field'],
    fields: [{
        name: 'risetime',
        type: 'date',
        dateFormat: 'U'
    }],
    proxy: {
        type: 'jsonp',
        url: 'http://api.open-notify.org/iss-pass.json',
        reader: {
            rootProperty: 'response'
        }
    }
});