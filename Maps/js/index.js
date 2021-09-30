function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
     center: { lat: 4.570868, lng: -74.297333},
     zoom: 7,
    });
    const deckOverlay = new deck.GoogleMapsOverlay({
      layers: [
        new deck.GeoJsonLayer({
          id: "Circles",
          data: objectData,
          filled: true,
          pointRadiusMinPixels: 2,
          pointRadiusMaxPixels: 200,
          opacity: 0.4,
          pointRadiusScale: 0.3,
          getRadius: (f) => Math.pow(10, f.properties.radius),
          getFillColor: (f) => f.properties.color,
          getLineColor: (f) => f.properties.lineColor,
          lineWidthMinPixels: 2,
          autoHighlight: true,
          transitions: {
            getRadius: {
              type: "spring",
              stiffness: 0.1,
              damping: 0.15,
              enter: (_) => [0],
              duration: 10000,
            },
          },
        }),

        new deck.GeoJsonLayer({
            id: "Lines",
            data: objectDataLines,
            filled: true,
            pointRadiusMinPixels: 2,
            pointRadiusMaxPixels: 200,
            opacity: 0.4,
            pointRadiusScale: 0.3,
            getRadius: (f) => Math.pow(10, f.properties.radius),
            getFillColor: (f) => f.properties.color,
            getLineColor: (f) => f.properties.lineColor,
            lineWidthMinPixels: 2,
            autoHighlight: true,
          }),
      ],
    });
  
    deckOverlay.setMap(map);
  }