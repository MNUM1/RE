var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Dpartement_1 = new ol.format.GeoJSON();
var features_Dpartement_1 = format_Dpartement_1.readFeatures(json_Dpartement_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dpartement_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartement_1.addFeatures(features_Dpartement_1);
var lyr_Dpartement_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dpartement_1, 
                style: style_Dpartement_1,
                interactive: true,
                title: '<img src="styles/legend/Dpartement_1.png" /> Département'
            });
var format_Circonscriptionadministrativedebassin_2 = new ol.format.GeoJSON();
var features_Circonscriptionadministrativedebassin_2 = format_Circonscriptionadministrativedebassin_2.readFeatures(json_Circonscriptionadministrativedebassin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Circonscriptionadministrativedebassin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Circonscriptionadministrativedebassin_2.addFeatures(features_Circonscriptionadministrativedebassin_2);
var lyr_Circonscriptionadministrativedebassin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Circonscriptionadministrativedebassin_2, 
                style: style_Circonscriptionadministrativedebassin_2,
                interactive: true,
                title: '<img src="styles/legend/Circonscriptionadministrativedebassin_2.png" /> Circonscription administrative de bassin'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_3_0.png" /> Eau Métropole Boues<br />\
    <img src="styles/legend/_3_1.png" /> Eau Métropole Assainissement-Potable-Pluvial<br />\
    <img src="styles/legend/_3_2.png" /> Eau Outre-mer Assainissement-Potable-Pluvial-Boues<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Dpartement_1.setVisible(true);lyr_Circonscriptionadministrativedebassin_2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Dpartement_1,lyr_Circonscriptionadministrativedebassin_2,lyr__3];
lyr_Dpartement_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'CHF_DEP': 'CHF_DEP', 'NOM_DEP_M': 'NOM_DEP_M', 'NOM_DEP': 'NOM_DEP', });
lyr_Circonscriptionadministrativedebassin_2.set('fieldAliases', {'fid': 'fid', 'NumCircAdm': 'NumCircAdm', 'NomCircAdm': 'NomCircAdm', 'VersionRef': 'VersionRef', 'SourceRefe': 'SourceRefe', 'StCircAdmi': 'StCircAdmi', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'insee_com': 'insee_com', 'nom_com_m': 'nom_com_m', 'nom_com': 'nom_com', 'Sous-mesure': 'Sous-mesure', 'INSEE_old': 'INSEE_old', 'INSEE': 'INSEE', });
lyr_Dpartement_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'CHF_DEP': 'TextEdit', 'NOM_DEP_M': 'TextEdit', 'NOM_DEP': 'TextEdit', });
lyr_Circonscriptionadministrativedebassin_2.set('fieldImages', {'fid': 'TextEdit', 'NumCircAdm': 'TextEdit', 'NomCircAdm': 'TextEdit', 'VersionRef': 'TextEdit', 'SourceRefe': 'TextEdit', 'StCircAdmi': 'TextEdit', });
lyr__3.set('fieldImages', {'fid': 'TextEdit', 'insee_com': 'TextEdit', 'nom_com_m': 'TextEdit', 'nom_com': 'TextEdit', 'Sous-mesure': 'TextEdit', 'INSEE_old': 'TextEdit', 'INSEE': 'TextEdit', });
lyr_Dpartement_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'INSEE_DEP': 'header label', 'INSEE_REG': 'no label', 'CHF_DEP': 'no label', 'NOM_DEP_M': 'no label', 'NOM_DEP': 'no label', });
lyr_Circonscriptionadministrativedebassin_2.set('fieldLabels', {'fid': 'no label', 'NumCircAdm': 'no label', 'NomCircAdm': 'header label', 'VersionRef': 'no label', 'SourceRefe': 'no label', 'StCircAdmi': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', 'insee_com': 'no label', 'nom_com_m': 'no label', 'nom_com': 'no label', 'Sous-mesure': 'no label', 'INSEE_old': 'no label', 'INSEE': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});