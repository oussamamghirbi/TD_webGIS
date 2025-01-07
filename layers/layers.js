var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Region_HDF_R32_1 = new ol.format.GeoJSON();
var features_Region_HDF_R32_1 = format_Region_HDF_R32_1.readFeatures(json_Region_HDF_R32_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region_HDF_R32_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region_HDF_R32_1.addFeatures(features_Region_HDF_R32_1);
var lyr_Region_HDF_R32_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region_HDF_R32_1, 
                style: style_Region_HDF_R32_1,
                popuplayertitle: 'Region_HDF_R32',
                interactive: true,
                title: '<img src="styles/legend/Region_HDF_R32_1.png" /> Region_HDF_R32'
            });
var format_Reseau_BIO_LIDL_2 = new ol.format.GeoJSON();
var features_Reseau_BIO_LIDL_2 = format_Reseau_BIO_LIDL_2.readFeatures(json_Reseau_BIO_LIDL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reseau_BIO_LIDL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reseau_BIO_LIDL_2.addFeatures(features_Reseau_BIO_LIDL_2);
cluster_Reseau_BIO_LIDL_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Reseau_BIO_LIDL_2
});
var lyr_Reseau_BIO_LIDL_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Reseau_BIO_LIDL_2, 
                style: style_Reseau_BIO_LIDL_2,
                popuplayertitle: 'Reseau_BIO_LIDL',
                interactive: true,
                title: '<img src="styles/legend/Reseau_BIO_LIDL_2.png" /> Reseau_BIO_LIDL'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Region_HDF_R32_1.setVisible(true);lyr_Reseau_BIO_LIDL_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Region_HDF_R32_1,lyr_Reseau_BIO_LIDL_2];
lyr_Region_HDF_R32_1.set('fieldAliases', {'ID': 'ID', 'INSEE_REG': 'INSEE_REG', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_Reseau_BIO_LIDL_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'brand': 'brand', 'address': 'address', 'com_insee': 'com_insee', 'com_nom': 'com_nom', });
lyr_Region_HDF_R32_1.set('fieldImages', {'ID': 'TextEdit', 'INSEE_REG': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_Reseau_BIO_LIDL_2.set('fieldImages', {'osm_id': '', 'name': '', 'brand': '', 'address': '', 'com_insee': '', 'com_nom': '', });
lyr_Region_HDF_R32_1.set('fieldLabels', {'ID': 'no label', 'INSEE_REG': 'no label', 'NOM': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'ID_AUT_ADM': 'no label', });
lyr_Reseau_BIO_LIDL_2.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'brand': 'no label', 'address': 'no label', 'com_insee': 'no label', 'com_nom': 'no label', });
lyr_Reseau_BIO_LIDL_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});