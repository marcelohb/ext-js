/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('CepsBrasil.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'CepsBrasil.view.endereco.Endereco',
        'CepsBrasil.view.main.List',
        'CepsBrasil.view.main.MainController',
        'CepsBrasil.view.main.MainModel',
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.layout.container.boxOverflow.None',
        'Ext.plugin.Responsive',
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Busca Por Cep',
        iconCls: 'fa-user',
        items: [{
            xtype: 'textfield',
            name: 'cep',
            fieldLabel: 'Digite o CEP'
        }, {
            xtype: 'button',
            name: 'buscar',
            text: 'Buscar'
        },{
            xtype: 'endereco',
            bind: {
                store: '{enderecos}'
            }
        }]
    }, {
        title: 'Busca Por Endereço',
        iconCls: 'fa-users',
        bind: {
            html: '{endereco}'
        }
    }]
});
