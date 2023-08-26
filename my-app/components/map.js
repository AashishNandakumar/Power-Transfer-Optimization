import { useEffect, useState, useRef } from "react";
import L from "leaflet";
import styles from "../styles/Mapi.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
// import NoSSRLeafletComponents from "react-leaflet";

// const NoSSRLeafletComponents = dynamic(() => import("react-leaflet"), {
//   ssr: false,
// });

function Section4() {
  const [visibleVertices, setVisibleVertices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [animationState, setAnimationState] = useState("stopped");
  const animationRef = useRef(null);

  const minCostSpanningTree = {
    vertices: [
      {
        v1: 1,
        v2: 2,
        weight: 8.4,
      },
      {
        v1: 2,
        v2: 1,
        weight: 8.4,
      },
      {
        v1: 26,
        v2: 2,
        weight: 146,
      },
      {
        v1: 27,
        v2: 26,
        weight: 124,
      },
      {
        v1: 4,
        v2: 1,
        weight: 178,
      },
      {
        v1: 6,
        v2: 4,
        weight: 64.5,
      },
      {
        v1: 5,
        v2: 6,
        weight: 69.3,
      },
      {
        v1: 3,
        v2: 5,
        weight: 108,
      },
      {
        v1: 8,
        v2: 5,
        weight: 113,
      },
      {
        v1: 10,
        v2: 8,
        weight: 19.1,
      },
      {
        v1: 7,
        v2: 10,
        weight: 53.7,
      },
      {
        v1: 13,
        v2: 7,
        weight: 42.3,
      },
      {
        v1: 12,
        v2: 13,
        weight: 40.7,
      },
      {
        v1: 15,
        v2: 12,
        weight: 47.6,
      },
      {
        v1: 14,
        v2: 12,
        weight: 77.6,
      },
      {
        v1: 11,
        v2: 14,
        weight: 81.1,
      },
      {
        v1: 18,
        v2: 14,
        weight: 82.6,
      },
      {
        v1: 19,
        v2: 18,
        weight: 23.8,
      },
      {
        v1: 20,
        v2: 19,
        weight: 20.2,
      },
      {
        v1: 21,
        v2: 20,
        weight: 18.1,
      },
      {
        v1: 22,
        v2: 20,
        weight: 26.2,
      },
      {
        v1: 25,
        v2: 19,
        weight: 37.1,
      },
      {
        v1: 23,
        v2: 25,
        weight: 17.7,
      },
      {
        v1: 17,
        v2: 23,
        weight: 53.2,
      },
      {
        v1: 31,
        v2: 22,
        weight: 60.7,
      },
      {
        v1: 24,
        v2: 17,
        weight: 91.4,
      },
      {
        v1: 16,
        v2: 15,
        weight: 92.9,
      },
      {
        v1: 30,
        v2: 16,
        weight: 46.7,
      },
      {
        v1: 9,
        v2: 3,
        weight: 136,
      },
      {
        v1: 28,
        v2: 8,
        weight: 137,
      },
      {
        v1: 29,
        v2: 30,
        weight: 176,
      },
    ],
  };

  const latitudeLongitude = [
    {
      id: 1,
      name: "Surana Power",
      lat: 16.310049528750326,
      long: 77.36253665057218,
    },
    {
      id: 2,
      name: "Shaktinagar",
      lat: 16.368104765138312,
      long: 77.33650899932061,
    },
    {
      id: 3,
      name: "Narendra",
      lat: 15.510257811785682,
      long: 74.97544515706917,
    },
    {
      id: 4,
      name: "BTPS Kudatini",
      lat: 15.196762978597203,
      long: 76.75960063705651,
    },
    {
      id: 5,
      name: "KEB substation Dhoni",
      lat: 15.328687953097775,
      long: 75.73970568123993,
    },
    {
      id: 6,
      name: "Ginigera",
      lat: 15.35041735745149,
      long: 76.24962643961952,
    },
    {
      id: 7,
      name: "Jagalur",
      lat: 14.519945806534292,
      long: 76.337728358308,
    },
    {
      id: 8,
      name: "Harihar",
      lat: 14.519204534933772,
      long: 75.80126760388853,
    },
    {
      id: 9,
      name: "Kaiga",
      lat: 14.866486875679744,
      long: 74.43930383203528,
    },
    {
      id: 10,
      name: "KEB power station jayanagara davengere",
      lat: 14.434533948326287,
      long: 75.92443579841937,
    },
    {
      id: 11,
      name: "YN Hosakote",
      lat: 14.280020640375861,
      long: 77.17470641324077,
    },
    {
      id: 12,
      name: "Hiriyur",
      lat: 13.951207060625672,
      long: 76.61508828147656,
    },
    {
      id: 13,
      name: "Chitradurga",
      lat: 14.228295038423436,
      long: 76.39835837485425,
    },
    {
      id: 14,
      name: "Madhugiri tumkur",
      lat: 13.663418167437968,
      long: 77.20749378048494,
    },
    {
      id: 15,
      name: "Huliyar",
      lat: 13.583736945698659,
      long: 76.53898819372223,
    },
    {
      id: 16,
      name: "Shantigrama",
      lat: 12.984433584469777,
      long: 76.21813423506623,
    },
    {
      id: 17,
      name: "Huliyurdurga",
      lat: 12.825735715873353,
      long: 77.03707694142491,
    },
    {
      id: 18,
      name: "Yantaganahalli",
      lat: 13.06267451021587,
      long: 77.34570448856192,
    },
    {
      id: 19,
      name: "Peenya",
      lat: 13.028037244260748,
      long: 77.51796549098016,
    },
    {
      id: 20,
      name: "Yelahanka",
      lat: 13.114424278099737,
      long: 77.60631420551705,
    },
    {
      id: 21,
      name: "Bial",
      lat: 13.195572335093118,
      long: 77.70626345844279,
    },
    {
      id: 22,
      name: "Hoodi",
      lat: 12.995451334474401,
      long: 77.71131695284706,
    },
    {
      id: 23,
      name: "Bidadi",
      lat: 12.797029133057132,
      long: 77.38345809925671,
    },
    {
      id: 24,
      name: "Bastipura",
      lat: 12.371942031203291,
      long: 76.56402327574645,
    },
    {
      id: 25,
      name: "Somannahali",
      lat: 12.784177217806327,
      long: 77.50712587961809,
    },
    {
      id: 26,
      name: "Gulbarga",
      lat: 17.33815655256924,
      long: 76.83570336281481,
    },
    {
      id: 27,
      name: "Kudagi",
      lat: 17.172589919220922,
      long: 75.82269464832945,
    },
    {
      id: 28,
      name: "Talaguppa",
      lat: 14.215084510380908,
      long: 74.90534165696621,
    },
    {
      id: 29,
      name: "Nandikur",
      lat: 13.13980903697847,
      long: 74.80176119098982,
    },
    {
      id: 30,
      name: "Hebanahalli",
      lat: 12.991756074382769,
      long: 75.84979820640842,
    },
    {
      id: 31,
      name: "Sugaturu",
      lat: 13.209886671422357,
      long: 78.09963942105632,
    },
  ];

  // // Define a custom marker icon
  // const powerGridIcon = L.divIcon({
  //   className: "power-grid-icon", // Define a CSS class for styling
  //   html: `<div class="${styles["power-grid-icon"]}"></div>`, // Use string interpolation to include the CSS class
  //   iconSize: [32, 32], // Set the size of the icon
  // });

  const getVertexNameById = (id) => {
    const vertex = latitudeLongitude.find((item) => item.id === id);
    return vertex ? vertex.name : "";
  };

  const customIcon = L.icon({
    // Other icon options like iconUrl, iconSize, etc.
    iconSize: [52, 52], // Set the size of the icon as needed
    shadowSize: null, // Remove the shadow
    iconUrl: "https://cdn-icons-png.flaticon.com/128/10213/10213879.png", // Provide the URL to your marker icon image
  });

  // useEffect(() => {
  //   let totalWeight = visibleVertices.reduce(
  //     (sum, vertex) => sum + vertex.weight,
  //     0
  //   );
  //   // console.log("Total Weight of Minimum Cost Spanning Tree:", totalWeight);
  // }, [animationState]);

  const startAnimation = () => {
    if (
      animationState === "stopped" &&
      visibleVertices.length === 0 // Only start if no vertices are visible
    ) {
      setAnimationState("running");
      let currentIndex = 0;
      animationRef.current = setInterval(() => {
        const vertex = minCostSpanningTree.vertices[currentIndex];
        const v1Data = latitudeLongitude.find((item) => item.id === vertex.v1);
        const v2Data = latitudeLongitude.find((item) => item.id === vertex.v2);

        if (v1Data && v2Data) {
          setVisibleVertices((prevState) => [
            ...prevState,
            {
              v1: vertex.v1,
              v2: vertex.v2,
              weight: vertex.weight,
              lat1: v1Data.lat,
              long1: v1Data.long,
              lat2: v2Data.lat,
              long2: v2Data.long,
            },
          ]);
          currentIndex++;
        } else {
          clearInterval(animationRef.current);
          setAnimationState("stopped");
        }

        // Stop the animation when all vertices are shown
        if (currentIndex >= minCostSpanningTree.vertices.length) {
          clearInterval(animationRef.current);
          setAnimationState("stopped");
        }
      }, 2000);
    }
  };

  return (
    <>
      <MapContainer
        center={[15.137079772609734, 76.91002058872876]}
        style={{ width: "100%", height: "100%" }}
        zoom={8}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Add Markers for each vertex */}
        {visibleVertices.map((vertex, index) => (
          <Marker
            key={index}
            position={[vertex.lat1, vertex.long1]}
            icon={customIcon}
          >
            <Popup>{`${getVertexNameById(vertex.v1)} -> ${getVertexNameById(
              vertex.v2
            )}, Distance: ${vertex.weight} kms`}</Popup>
          </Marker>
        ))}

        {/* Add Polyline connecting vertices */}
        {visibleVertices.map((vertex, index) => (
          <Polyline
            key={index}
            positions={[
              [vertex.lat1, vertex.long1],
              [vertex.lat2, vertex.long2],
            ]}
            color="#d92981"
          />
        ))}
      </MapContainer>

      <div className={styles.buttonDiv}>
        {animationState === "stopped" && (
          <button className={styles.buttonStart} onClick={startAnimation}>
            Start
          </button>
        )}
      </div>
    </>
  );
}

export default Section4;
