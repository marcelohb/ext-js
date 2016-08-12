Ext.define('Umbrella.view.main.Main', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'main',
    requires: [
        'Umbrella.view.main.MainController',
        'Umbrella.view.main.MainModel',
        'Umbrella.view.Umbrella',
        'Umbrella.view.Location',
        'Ext.MessageBox'
    ],

    controller: 'main-main',
    viewModel: {
        type: 'main-main'
    },

    items: [{
        xtype: 'umbrella',
        bind: {
            rainy: '{rainy}'
        }
    }, {
        xtype: 'location'
    }]
});