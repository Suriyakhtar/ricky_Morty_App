import { Typography as TypographyAnt } from 'antd';

const { Text } = TypographyAnt;
const Typography: React.FC<any> = ({ title }) => {
    return (
        <Text style={{ fontSize: "16px" }}>{title}</Text>
    )
}

export default Typography
