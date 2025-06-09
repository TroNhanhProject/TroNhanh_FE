import { Button, Typography } from "antd";
import { Link } from "react-router-dom";

const Home = () => (
  <div style={{ textAlign: "center", padding: 40 }}>
    <Typography.Title>Find Your Next Apartment in London</Typography.Title>
    <Link to="/listings">
      <Button type="primary" size="large">
        Browse Listings
      </Button>
    </Link>
  </div>
);

export default Home;
