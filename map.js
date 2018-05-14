var map;
var tokyo;
var osaka;

function initMap() {
  'use strict';

  tokyo = new google.maps.LatLng(35.681167, 139.767052);
  var opts = {
    zoom: 11,
    center: tokyo
  };

  map = new google.maps.Map(document.getElementById('target'), opts);

  map.addListener('click', function(e) {
    this.panTo(e.latLng);
  });

  var icons = {
    red: {
      icon: {
        url: 'image/redMarker.png',
        scaledSize: new google.maps.Size(40, 40)
      }
    },
    black: {
      icon: {
        url: 'image/blackMarker.png',
        scaledSize: new google.maps.Size(40, 40)
      }
    }
  };

  var features = [
    {
      name: '日本橋',
      sentence: 'ただの駅じゃない！',
      link: 'index.html',
      message: '日本橋へGo',
      position: new google.maps.LatLng(35.682503, 139.773659),
      type: 'black'
    }, {
      name: '皇居',
      sentence: 'やんごとないです！',
      link: 'index.html',
      message: '皇居へGo',
      position: new google.maps.LatLng(35.683823, 139.753815),
      type: 'red'
    }, {
      name: '浅草寺',
      sentence: '外国人だけじゃない！',
      link: 'index.html',
      message: '浅草寺へGo',
      position: new google.maps.LatLng(35.714765, 139.796655),
      type: 'red'
    }, {
      name: 'ジブリ館',
      sentence: '名作を感じよう！',
      link: 'index.html',
      message: 'ジブリ館へGo',
      position: new google.maps.LatLng(35.696238, 139.570432),
      type: 'black'
    }, {
      name: 'USJ(ﾕﾆﾊﾞｰｻﾙｽﾀｼﾞｵｼﾞｬﾊﾟﾝ)',
      sentence: '一日中楽しい！',
      link: 'index.html',
      message: 'USJへGo',
      position: new google.maps.LatLng(34.665442, 135.432338),
      type: 'red'
    }, {
      name: '大阪城',
      sentence: '歴史あり、猫もあり',
      link: 'index.html',
      message: '大阪城へGo',
      position: new google.maps.LatLng(34.687315, 135.526201),
      type: 'red'
    }
  ];


  features.forEach(function(feature) {
    var marker = new google.maps.Marker( {
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
    google.maps.event.addListener(marker, 'click', function(event) {
      new google.maps.InfoWindow( {
        content: '<h3>' + feature.name + '</h3>' + '<p>' + feature.sentence + '</p>' + '<a style="text-decoration: none; color: #fff; background-color: #999; display:  inline-block; padding: 5px 20px;" href="' + feature.link + '">' + feature.message + '</a>'
      }).open(map, marker);
    });
  });
}

function setTokyo() {
  map.setCenter(new google.maps.LatLng(35.681167, 139.767052));
  map.setZoom(11);
}
function setOsaka() {
  map.setCenter(new google.maps.LatLng(34.67477, 135.500396));
  map.setZoom(13);
}
