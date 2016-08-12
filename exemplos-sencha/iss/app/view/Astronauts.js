Ext.define('ISS.view.Astronauts', {
    extend: 'Ext.dataview.List',
    xtype: 'issastronauts',
    requires:[],
    cls: 'astronauts',
    itemCls: 'astronaut',
    itemTpl:[
        '<tpl if="thumbnail"><img src="{thumbnail}"></img></tpl>',
        '{name}'
    ]
});