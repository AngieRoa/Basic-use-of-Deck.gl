const objectData = { type: "FeatureCollection",
    features: [
      { type: "Feature",
      geometry: {
          type: "Point",
          coordinates: [-74.08175, 4.60971]
          },
          properties: {
            color: [247 , 116 ,7, 200],
            lineColor: [125 , 74 ,17],
            radius: 5.4,
          }
        },
      { type: "Feature",
         geometry: {
           type: "Point",
           coordinates: [-75.56359, 6.25184]
         },
         properties: {
            color: [181 , 247 ,7, 200],
            lineColor: [59 , 158 ,0],
            radius: 5.3,
           }
         },

     { type: "Feature",
         geometry: {
           type: "Point",
           coordinates: [-73.128859, 7.112647]
         },
         properties: {
            color: [33,227,246, 200],
            lineColor: [ 15, 28 , 194],
            radius: 5.3,
           }
         },
       ]
     }


     const objectDataLines = { type: "FeatureCollection",
     features: [
       { type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [-74.08175, 4.60971], [-74.409391, 4.728779], 
              [-74.678656, 4.879311], [-75.027471, 5.215830], 
              [-75.335089, 5.554902], [-75.499884, 6.003051], 
              [-75.56359, 6.25184]
              ]
            },
          properties: {
             lineColor: [125 , 74 ,17],
            }
          },
        { type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [-75.56359, 6.25184], [-75.245579, 6.428380], 
              [-74.716446, 6.603618], [-74.108922, 6.687970], 
              [-73.501399, 6.889058], [-73.128859, 7.112647]
              ]
            },
          properties: {
             lineColor: [59 , 158 ,0],
            }
          },
       { type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [
              [-73.128859, 7.112647], [-73.285826, 6.662017], 
              [-73.370749, 5.947792], [-73.501399, 5.213122], 
              [-73.769232, 4.659920], [-74.08175, 4.60971]
              ]
            },
          properties: {
             lineColor: [15, 28 , 194],
            }
          },
        ]
      }
