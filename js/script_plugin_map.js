$(document).ready(function ($) {
    // เพิ่มแผนที่ 
    /* var map = L.map('map', {
        center: [16.45423958666, 102.66451734152011],
        zoom: 10,
        zoomControl: false 
      }); */

    //เลือกเบสแมพ
     new L.basemapsSwitcher([
        {
          layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map), //แผนที่ตั้งต้น
          icon: './img/street1.PNG',
          name: 'ค่าเริ่มต้น',
        },
        {
          layer: L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            attribution: '© OpenStreetMap contributors',
          }), 
          icon: './img/sat1.png',
          name: 'ดาวเทียม' 
        },
        {
          layer: L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',{
            attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          }),
          icon: './img/stadia1.PNG',
          name: 'สเตเดีย'
        },
      ], { position: 'bottomleft' }).addTo(map);

  
    // เครื่องมือวัด
      var measureOptions = {
        position: 'bottomright',
        primaryLengthUnit: 'meters',
        secondaryLengthUnit: 'kilometers',
        primaryAreaUnit: 'sqmeters',
        secondaryAreaUnit: undefined,
        activeColor: '#0091ff',
        completedColor: '#0091ff'
    }
      measureControl = L.control.measure(measureOptions);
      measureControl.addTo(map);


/* ________________________________________________________________________________________________________________________________ */

    // ข้อมูลต่างๆ

      // test geojson 
      var amphoe = new L.GeoJSON.AJAX("data/amphoe.geojson",{
        color : "#1E8449 "/* ,  
            onEachFeature : function(feature,layer){
                layer.bindPopup("<b>หมู่ที่ "+feature.properties.VILL_CODE +
                "</b><br><br>Area : "+feature.properties.AREA +
                "<br> Perimeter : "+feature.properties.PERIMETER
                );
                layer.bindTooltip("<b>หมู่ที่ : " + feature.properties.VILL_CODE);
            } */
        }); 

      // geoserver
/*         const thailand = L.tileLayer.wms('http://localhost:8080/geoserver/webpage_data/wms', {
          color : "#1E8449 ",
          layers: '	webpage_data:forestconserve_kk', // ชื่อเลเยอร์ใน Geoserver
          format: 'image/png',
          transparent: true,
          attribution: 'Map data &copy; Geoserver'

      }); */

      // ฟังก์ชัน เปิดปิดcheckbox
        function toggleVillageLayer() {
          const checkbox = document.getElementById('kk_checkbox');
          if (checkbox.checked) {
            amphoe.addTo(map); // กดละเพิ่ม Layer 
          } else {
              map.removeLayer(amphoe); // กดละลบ Layer 
          }
      };
      document.getElementById('kk_checkbox').addEventListener('change', toggleVillageLayer);
});