import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix for default marker icons not showing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapView = () => {
  const londonCenter = [51.5074, -0.1278];

  // Sau nay them toa do cho cac riel property (fix cung)
  const properties = [
    { id: 1, position: [51.515, -0.1], title: "Property 1", price: 3490 },
    { id: 2, position: [51.505, -0.13], title: "Property 2", price: 3990 },
    { id: 3, position: [51.51, -0.12], title: "Property 3", price: 3490 },
  ];

  return (
    <MapContainer
      center={londonCenter}
      zoom={13}
      scrollWheelZoom
      style={{ height: "100%", minHeight: 600 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {properties.map((property) => (
        <Marker key={property.id} position={property.position}>
          <Popup>
            <strong>{property.title}</strong>
            <br />
            from £{property.price} /month
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
