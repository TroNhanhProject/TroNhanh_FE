import { Layout } from "antd";
import Header from "../../header/cusHeader";
import Footer from "../../footer/customer/CusFooter";

const { Content } = Layout;

const CusLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Content style={{padding: "24px", minHeight: "80vh" }}>
        <div
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default CusLayout;
