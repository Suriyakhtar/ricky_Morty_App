import React, { useEffect, FC, useMemo } from "react";
import { Alert, Col, Row, Spin } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom";
import { Pagination, Card } from "../../components";
import MainLayout from "../MainLayout";
import { RootState } from "../../store/store";
import { characterInitialState, setCharacter, setCharacterLoading, setError, setPagination } from "../../store/character.reducer";
import { fetchChar } from "../../utils";


export const useQuery = () => {
	const { search } = useLocation();

	return useMemo(() => new URLSearchParams(search), [search])
}

const HomePage: FC = () => {
	const dispatch = useDispatch();
	const characters = useSelector((state: RootState) => state.character.character)
	const loading = useSelector((state: RootState) => state.character.characterLoading)
	const pagination = useSelector((state: RootState) => state.character.pagination)
	const error = useSelector((state: RootState) => state.character.error)
	const query = useQuery();

	const fetchCharacter = (page = 1) => {
		fetchChar(page, query)
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
		<MainLayout data-testid="home-test-id">
			{
				loading ? <Spin size="large" /> : error ?
					<Alert type="error" message={error} ></Alert> :
					<>
						<Row justify="center" gutter={[8, 24]}>
							{characters?.map((item) => (
								<Col key={item.id} span={24} md={8} xxl={4}>
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
