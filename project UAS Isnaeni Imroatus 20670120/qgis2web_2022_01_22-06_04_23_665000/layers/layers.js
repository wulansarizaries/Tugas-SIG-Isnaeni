var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Thunderforest Cycle',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://tile.thunderforest.com/cycle/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>,&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_datawisatarembang_0 = new ol.format.GeoJSON();
var features_datawisatarembang_0 = format_datawisatarembang_0.readFeatures(json_datawisatarembang_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_datawisatarembang_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_datawisatarembang_0.addFeatures(features_datawisatarembang_0);var lyr_datawisatarembang_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_datawisatarembang_0, 
                style: style_datawisatarembang_0,
    title: 'data wisata rembang<br />\
    <img src="styles/legend/datawisatarembang_0_0.png" /> 14<br />\
    <img src="styles/legend/datawisatarembang_0_1.png" /> 15<br />\
    <img src="styles/legend/datawisatarembang_0_2.png" /> 16<br />\
    <img src="styles/legend/datawisatarembang_0_3.png" /> 18<br />\
    <img src="styles/legend/datawisatarembang_0_4.png" /> 20<br />\
    <img src="styles/legend/datawisatarembang_0_5.png" /> 21<br />\
    <img src="styles/legend/datawisatarembang_0_6.png" /> 23<br />\
    <img src="styles/legend/datawisatarembang_0_7.png" /> 27<br />\
    <img src="styles/legend/datawisatarembang_0_8.png" /> <br />'
        });

lyr_datawisatarembang_0.setVisible(true);
var layersList = [baseLayer,lyr_datawisatarembang_0];
lyr_datawisatarembang_0.set('fieldAliases', {'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'Total Desa': 'Total Desa', 'Wisata': 'Wisata', 'jml wisata': 'jml wisata', });
lyr_datawisatarembang_0.set('fieldImages', {'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'Total Desa': 'TextEdit', 'Wisata': 'TextEdit', 'jml wisata': 'TextEdit', });
lyr_datawisatarembang_0.set('fieldLabels', {'ID_Kec': 'inline label', 'Kecamatan': 'inline label', 'Total Desa': 'inline label', 'Wisata': 'inline label', 'jml wisata': 'inline label', });
lyr_datawisatarembang_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});