import { FC, useEffect } from "react"
import MainLayout from "../MainLayout"
import { Row, Col, Alert, Spin } from "antd"
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useParams, Link } from "react-router-dom";
import { Typography, Heading, Image } from "../../components"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { setCharacterLoading, setError, setRecentlyVisitedProfiles, setSingleCharacter } from "../../store/character.reducer";
import { RootState } from "../../store/store";
import { Character } from "../../types/Character";


const Profile: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const singleCharacter = useSelector((state: RootState) => state.character.singleCharacter)
  const loading = useSelector((state: RootState) => state.character.characterLoading)
  const recentlyVisitedProfiles = useSelector((state: RootState) => state.character.recentlyVisitedProfiles)
  const error = useSelector((state: RootState) => state.character.error)

  const fetchCharacter = (charId: string | undefined) => {
    dispatch(setCharacterLoading(true))
    axios
      .get<Character>(`https://rickandmortyapi.com/api/character/${charId}`)
      .then((response) => {
        dispatch(
          setSingleCharacter(response.data)

        )
        dispatch(setCharacterLoading(false))
        const recentVisitList = recentlyVisitedProfiles.filter((item) => item.id !== response.data.id)
        dispatch(
          setRecentlyVisitedProfiles(
            [...recentVisitList, {
              label: response.data.name,
              id: response.data.id,
              image: response.data.image,
            }]
          )
        )

        dispatch(
          setError('')
        )

      }).catch((error) => {
        dispatch(
          setError(
            error?.response?.message ?? error.message
          )
        )
        dispatch(setCharacterLoading(false))
      })
  }

  useEffect(() => {
    fetchCharacter(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainLayout>
      {loading ? <Spin size="large" /> : error ?
        <Alert type="error" message={error} ></Alert> :
        <>

          <Row justify="center" style={{ paddingBottom: '20px' }} >
            <Col span={10} offset={1}>
              <Link to="/" target="_self">
                <ArrowLeftOutlined /> Back to Homepage
              </Link>
            </Col>
          </Row>
          <Row justify={"center"}>
            <Col span={9}>
              <Image width={'100%'} height={400} image={singleCharacter?.image} />
            </Col>
          </Row>
          <Row justify={"center"}>
            <Col span={3}>
              <Heading level={4} title="Name:" />
            </Col>
            <Col span={3} offset={3}>
              <Typography title={singleCharacter?.name} /></Col>
          </Row>
          <Row justify={"center"}>
            <Col span={3}>
              <Heading level={4} title="Status:" />
            </Col>
            <Col span={3} offset={3}>
              <Typography title={singleCharacter?.status} /></Col>
          </Row>
          <Row justify={"center"}>
            <Col span={3}>
              <Heading level={4} title="Species:" />
            </Col>
            <Col span={3} offset={3}>
              <Typography title={singleCharacter?.species} /></Col>
          </Row>
          <Row justify={"center"}>
            <Col span={3}>
              <Heading level={4} title="Gender:" />
            </Col>
            <Col span={3} offset={3}>
              <Typography title={singleCharacter?.gender} /></Col>
          </Row>
          <Row justify={"center"}>
            <Col span={3}>
              <Heading level={4} title="Location name:" />
            </Col>
            <Col span={3} offset={3}>
              <Typography title={singleCharacter?.location?.name} /></Col>
          </Row>
        </>
      }

    </MainLayout >
  )
}

export default Profile