import React, { useEffect } from "react";
import { Alert, Col, Row, Spin, Card as AntCard } from "antd";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import MainLayout from "../MainLayout";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { characterInitialState, setCharacter, setCharacterLoading, setError, setPagination } from "../../store/character.reducer";
import { RootState } from "../../store/store";
import { Character, CharacterApiPaginationInfo } from "../../types/Character";
import { useLocation } from "react-router-dom";
const { Meta } = AntCard;
export const useQuery = () => {
	const { search } = useLocation();

	return React.useMemo(() => new URLSearchParams(search), [search])
}

const HomePage: React.FC = () => {
	const dispatch = useDispatch();
	const characters = useSelector((state: RootState) => state.character.character)
	const loading = useSelector((state: RootState) => state.character.characterLoading)
	const pagination = useSelector((state: RootState) => state.character.pagination)
	const error = useSelector((state: RootState) => state.character.error)
	const query = useQuery();

	const fetchCharacter = (page = 1) => {
		axios
			.get<{
				results: Character[]
				info: CharacterApiPaginationInfo
			}>("https://rickandmortyapi.com/api/character", {
				params: {
					page: page,
					name: query.get("q")
				},
			})
			.then((response) => {
				dispatch(
					setCharacter(response.data.results)
				)
				dispatch(setCharacterLoading(false))
				dispatch(setPagination(
					response.data.info
				))
				dispatch(
					setError('')
				)
			})
			.catch((error) => {
				dispatch(setCharacterLoading(false))
				dispatch(
					setError(error?.response?.data?.error ?? error.message)
				)
				dispatch(
					setCharacter([])
				)
				dispatch(setPagination(
					characterInitialState.pagination
				))
			});
	};

	useEffect(() => {
		dispatch(setCharacterLoading(true))
		fetchCharacter();
	}, [query]);

	return (
		<MainLayout>
			{
				loading ? <Spin size="large" /> : error ?
					<Alert type="error" message={error} ></Alert> :
					<>
						<Row justify="center" gutter={[8, 24]}>
							{characters?.map((item) => (
								<Col key={item.id} span={24} md={4}>
									<Card {...item} />
								</Col>
							))}
						</Row>
						{pagination.count > 20 && <Row justify="end">
							<Col span={9}>
								<Pagination
									disabled={loading}
									showSizeChanger={false}
									onChange={(page) => {
										fetchCharacter(page);
									}}
									total={pagination.count ?? 0}
									pageSize={20}
								/>
							</Col>
						</Row>}
					</>
			}

		</MainLayout>
	);
};

export default HomePage;
