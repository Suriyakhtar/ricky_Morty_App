import { Image as ImageAnt } from 'antd';

const Image: React.FC<any> = ({ image, width, height }) => {
    return (
        <ImageAnt
            width={width}
            height={height}
            src={image}
        />
    )
}

export default Image
