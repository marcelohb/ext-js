Ext.define('Tunes.view.View', {
    extend: 'Ext.dataview.List',
    xtype: 'tunesview',
    itemCls: 'video',
    itemTpl: [
        '<img src="{image}" style="width: 90px;">',
        '<div style="left: 110px;font-size: 1.1em;">',
        '<p><b>{title}</b><br>{artist}</p>',
        '</div>'
    ],
    grouped: true
});