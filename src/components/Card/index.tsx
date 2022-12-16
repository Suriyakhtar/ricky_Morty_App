import { FC } from 'react'
import { Card as AntCard, Typography, Badge, Row, Col } from 'antd';
import { ICard } from '../../types/Character';
import { Link } from "react-router-dom"
import Wrapper from './styles';
import { PresetStatusColorType } from 'antd/es/_util/colors';
const { Title } = Typography;

export const Card: FC<ICard> = ({ name, image, id, status }) => {

	let statusColor = {
		'Alive': "success",
		'Dead': "error",
		'unknown': "default",
	}

	return (
		<Wrapper >
			<AntCard
				hoverable
				style={{ width: 275, height: 400 }}
				cover={<img alt="example" src={image} />}
			>
				<Row data-testid="card-test">
					<Col>
						<Title level={5} >{name}</Title>
					</Col>
					<Col>
						<Badge status={statusColor[status] as PresetStatusColorType} />
					</Col>
				</Row>
				<Link to={`/profile/${id}`} target="_self">
					View Profile
				</Link>
			</AntCard>
		</Wrapper>
	)
}
