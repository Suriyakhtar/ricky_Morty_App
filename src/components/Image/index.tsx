import { Image as ImageAnt } from 'antd';

interface IProps {
    image: string | undefined
    width: number | string
    height: number | string
}

export const Image: React.FC<IProps> = ({ image, width, height }) => {
    return (
        <ImageAnt
            width={width}
            height={height}
            src={image}
        />
    )
}