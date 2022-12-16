import { FC } from 'react'
import {
    useSelector
} from "react-redux"
import { Row, Col } from "antd"
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store'
import { Image, Heading } from './../index';
import { Wrapper } from "./styles"

export const Footer: FC = () => {
    const recentlyVisitedProfiles = useSelector((state: RootState) => state.character.recentlyVisitedProfiles);
    return (
        <Wrapper>
            <Heading level={4} title=" Recently visited profiles:" />
            <Row gutter={[24, 8]}>
                {recentlyVisitedProfiles.slice(0, 10).map((profile, index: number) => {
                    return <Col key={index} style={{
                        margin: "12px 0"
                    }} >
                        <Link to={`/profile/${profile.id}`} >
                            <Image width={30} height={30} image={profile.image} />
                            &nbsp;
                            {profile.label}
                        </Link>
                    </Col>
                })}
            </Row>
        </Wrapper>
    )
}
