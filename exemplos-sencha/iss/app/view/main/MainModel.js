Ext.define('ISS.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mainVM',
    requires: ['ISS.model.Pass','ISS.model.Astronaut'],
    data: {
        name: 'ISS'
    },
    stores: {
        passes: {
            model: 'ISS.model.Pass'
        },
        astronauts: {
            model: 'ISS.model.Astronaut',
            autoLoad: true,
            listeners: {
                load: 'onAstronautsLoad'
            }
        }
    }

});
