Ext.define('Tunes.view.main.MainController', {
    extend: 'Tunes.view.main.BaseController',
    alias: 'controller.main-main',
    uses: ['Tunes.view.Preview'],

	onShowPreview: function(view, record) {
	    Ext.create('Tunes.view.Preview', {
	        title: record.data.title + ', provided courtesy of iTunes',
	        data: record.data
	    });
	}
    
});
