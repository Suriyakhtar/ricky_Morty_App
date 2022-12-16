import { FC } from "react";
import { Divider, Layout } from "antd";
import { Header, Footer } from "../../components";
import Wrapper from "./styles";

const { Header: ANtHeader, Content, Footer: AntFooter } = Layout;
interface CustomLayout {
    children: React.ReactNode;
}

const MainLayout: FC<CustomLayout> = ({ children }) => {
    return (
        <Layout style={{ background: "#fff" }}>
            <Wrapper>
                <ANtHeader style={{ background: "#e7e7ef" }}>
                    <Header />
                </ANtHeader>
                <Divider />
                <Content>{children}</Content>
                <Divider />
                <AntFooter>
                    <Footer />
                </AntFooter>
            </Wrapper>
        </Layout>
    );
};

export default MainLayout;
