Ext.define('ISS.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',    
    requires: ['ISS.view.Map', 'ISS.view.Passes', 'ISS.view.Astronauts', 'ISS.view.main.MainController', 'ISS.view.main.MainModel'],

    controller: 'mainC',
    viewModel: 'mainVM',

    tabBarPosition: 'bottom',

    items: [{
        xtype: 'issmap',
        title: 'Map',
        iconCls: 'x-fa fa-crosshairs',
        bind: {
            coordinate: '{coordinate}'
        }

    }, {
        xtype: 'isspasses',

        title: 'Passes',
        iconCls: 'x-fa fa-list-ul',
        bind: {
            store: '{passes}'
        }

    }, {
        xtype: 'issastronauts',

        title: 'Astronauts',
        iconCls: 'x-fa fa-users',
        bind: {
            store: '{astronauts}'
        }

    }]
});