import { useParams } from "react-router-dom";
import { Row, Col, Button, DatePicker, Input, Divider } from "antd";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
import { propertySampleData } from "../../seeders/propertySampleData";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertySampleData.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div style={{ padding: "24px" }}>Property not found.</div>;
  }

  return (
    <div>
      {property && (
        <Row gutter={[16, 16]}>
          {/* Left side - Main Image */}
          <Col xs={24} md={16}>
            <img
              src={property.image}
              alt="property main"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Col>

          {/* Right side - Gallery */}
          <Col xs={24} md={8}>
            <Row gutter={[8, 8]}>
              {Array.isArray(property.galleryImages) &&
                property.galleryImages.map((img, index) => (
                  <Col
                    key={index}
                    span={property.galleryImages.length <= 2 ? 24 : 12} // 1x2 if 2 images, 2x2 if 4 images
                  >
                    <img
                      src={img}
                      alt={`property ${index}`}
                      style={{
                        width: "100%",
                        height: "190px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      )}

      {/* Main Content */}
      <Row gutter={32} style={{ marginTop: "24px" }}>
        {/* Left Section */}
        <Col xs={24} md={16}>
          <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>
            {property.title}
          </h1>
          <p style={{ color: "#555", marginBottom: "16px" }}>
            {property.location}
          </p>

          {/* Property Summary */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginBottom: "24px",
              fontSize: "16px",
            }}
          >
            {property.summary.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </div>

          {/* Description */}
          <h2>Description</h2>
          <p style={{ marginBottom: "16px" }}>{property.description}</p>

          <h3>In sed</h3>
          <p style={{ marginBottom: "16px" }}>
            In nullam eget urna suspendisse odio nunc. Eu sodales vestibulum,
            donec rutrum justo, amet porttitor vitae.
          </p>

          <h3>Adipiscing risus, fermentum</h3>
          <p>
            Laoreet risus accumsan pellentesque lacus, in nulla eu elementum.
            Mollis enim fringilla aenean diam tellus diam.
          </p>
        </Col>

        {/* Right Sidebar */}
        <Col xs={24} md={8}>
          <div
            style={{
              padding: "24px",
              backgroundColor: "#f9f9f9",
              borderRadius: "16px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              position: "sticky",
              top: "100px",
            }}
          >
            <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
              £{property.price} / Month
            </h2>

            {/* Move In / Move Out */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              <DatePicker
                placeholder="Move in"
                suffixIcon={<CalendarOutlined />}
                style={{ flex: 1 }}
              />
              <DatePicker
                placeholder="Move out"
                suffixIcon={<CalendarOutlined />}
                style={{ flex: 1 }}
              />
            </div>

            {/* Guests */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <UserOutlined />
              <Input type="number" placeholder="Guests" defaultValue={1} />
            </div>

            {/* Utilities */}
            <p>All utilities are included</p>

            <Divider />

            {/* Costs */}
            <div style={{ fontSize: "16px", marginBottom: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Average monthly rent</span>
                <span>£{(property.price * 0.93).toFixed(2)}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Pay upon booking</span>
                <span>£{(property.price * 0.9998).toFixed(2)}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                }}
              >
                <span>Total costs</span>
                <span>£{(property.price * 1.003).toFixed(2)}</span>
              </div>
            </div>

            {/* Continue button */}
            <Button
              type="primary"
              style={{
                backgroundColor: "#004d47",
                width: "100%",
                borderRadius: "8px",
                marginTop: "16px",
              }}
            >
              Continue booking
            </Button>

            <p
              style={{
                fontSize: "12px",
                marginTop: "8px",
                textAlign: "center",
              }}
            >
              When you book this apartment, your reservation will be confirmed
              instantly.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PropertyDetails;
