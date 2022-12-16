import { Typography } from 'antd';
const { Title } = Typography;

declare const TITLE_ELE_LIST: [1, 2, 3, 4, 5];
interface IProps {
    level?: typeof TITLE_ELE_LIST[number];
    title?: string
    color?: string
}
export const Heading: React.FC<IProps> = ({ level, title, color }) => {
    return (
        <Title style={{ margin: "10px 0px", color: color }} level={level} >{title}</Title>
    )
}
