import { Typography } from 'antd';
const { Title } = Typography;

const Heading: React.FC<any> = ({ level, title, color }) => {
    return (
        <Title style={{ margin: "10px 0px", color: color }} level={level} >{title}</Title>
    )
}
export default Heading
