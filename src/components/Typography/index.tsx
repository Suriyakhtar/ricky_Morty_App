import { Typography as TypographyAnt } from 'antd';

const { Text } = TypographyAnt;
interface IProps {
    title: string | undefined
}
export const Typography: React.FC<IProps> = ({ title }) => {
    return (
        <Text style={{ fontSize: "16px" }}>{title}</Text>
    )
}

