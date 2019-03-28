var map;
var center = { lat: 33.8361, lng: -81.1637 };
let locations = [
  {
    location: { lat: 26.136426, lng: -80.211402 },
    name: "Extra Space | Plantation, FL",
    description: `<strong>Sq Ft: </strong>10000<br/>
    <strong>Total Units: </strong>200
      `,
    pics: [`plantation.jpg`]
  },
  {
    location: { lat: 39.864653, lng: -75.34641 },
    name: "Extra Space | Crum Lynne, PA",
    description: `<strong>Sq Ft: </strong>10000<br/>
    <strong>Total Units: </strong>200
      `,
    pics: [`crumLynne.jpg`]
  },
  {
    location: { lat: 42.305542, lng: -71.109942 },
    name: "Extra Space | Jamaica Plain, MA",
    description: `<strong>Sq Ft: </strong>10000<br/>
    <strong>Total Units: </strong>200
      `,
    pics: [`jamaicaPlain.jpg`]
  },
  {
    location: { lat: 26.050405, lng: -80.251054 },
    name: "CubeSmart | Davie,FL",
    description: `<strong>Sq Ft: </strong>10000<br/>
    <strong>Total Units: </strong>200
      `,
    pics: [`davieFL.jpg`]
  },
  {
    location: { lat: 27.345016, lng: -80.327999 },
    name: "End User? | Port St. Lucie",
    description: `<strong>Sq Ft: </strong>10000<br/>
    <strong>Total Units: </strong>200
      `,
    pics: [`stLucie.jpg`]
  }
];

var mapOptions = {
  zoom: 5,
  center: center,
  disableDefaultUI: true,
  // gestureHandling: "greedy",
  styles: [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36
        },
        {
          color: "#000000"
        },
        {
          lightness: 40
        }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#000000"
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 17
        },
        {
          weight: 1.2
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#ff9494"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#F7EE24"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#F7EE24"
        },
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#F7EE24"
        }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "administrative.province",
      elementType: "labels.text.fill",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#F7EE24"
        }
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#c4c4c4"
        }
      ]
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#e5c163"
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 21
        },
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "poi.business",
      elementType: "geometry",
      stylers: [
        {
          visibility: "on"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#e5c163"
        },
        {
          lightness: "0"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ffffff"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#e5c163"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 18
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#575757"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ffffff"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#2c2c2c"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#999999"
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 19
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 17
        }
      ]
    }
  ]
};
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  function createInfoWindows(name, description, pics) {
    // console.log(pics);
    return (this[name] = new google.maps.InfoWindow({
      content: getContent(name, description, pics)
    }));
  }

  function createMarkers(location, title, name) {
    this[name] = new google.maps.Marker({
      position: location,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: "./assets/images/flag.png",
      title: title
    });
    return this[name];
  }

  const windows = locations.map(each => {
    return createInfoWindows(each.name, each.description, each.pics);
  });

  setTimeout(() => {
    let all = locations.map(one => {
      return createMarkers(one.location, one.name, one.name);
    }, 1000);

    var mcOptions = {
      //imagePath: 'https://googlemaps.github.io/js-marker-clusterer/images/m',
      styles: [
        {
          url: "https://googlemaps.github.io/js-marker-clusterer/images/m2.png",
          width: 50,
          height: 50,
          textSize: 10
          //color: #00FF00,
        }
      ]
    };
    var markerCluster = new MarkerClusterer(map, all, mcOptions);

    all.map((each, i) => {
      return each.addListener("click", function() {
        for (var j = 0; j < windows.length; j++) {
          windows[j].close();
        }
        windows[i].open(map, each);
      });
    });
  }, 1500);

  google.maps.event.addListener(map, "click", function(event) {
    for (var i = 0; i < windows.length; i++) {
      windows[i].close();
    }
  });
}

function getContent(name, description, pics) {
  let img = pics.map(pic => {
    return `<img src="./assets/images/${pic}">`;
  });

  var contentString = `<div id="content">
    <div id="siteNotice">
    </div>
    <h1 id="firstHeading" class="firstHeading">${name}</h1>
    <div id="bodyContent">
    <p>${description}</p>
    <div>
      ${img
        .toString()
        .split(",")
        .join("")}
    </div>
    </div>
    </div>`;
  return contentString;
}
