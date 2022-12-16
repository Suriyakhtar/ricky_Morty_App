import { FC, useEffect, useState } from "react"
import { Col, Row, Input, AutoComplete } from 'antd';
import type { SelectProps } from 'antd/es/select';

import {
    Link,
    useNavigate
} from "react-router-dom"
import Wrapper from './styles';
import { useQuery } from "../../containers/HomePage";
import { Heading } from "../index";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const { Search } = Input;

const searchResult = (query: string[]) =>
    query.map((item: string, index: number) => {
        return {
            key: index + 2,
            value: item,
            label: (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <span>
                        {item}
                    </span>
                </div>
            ),
        };
    });

export const Header: FC = () => {
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState("")
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);
    const characters = useSelector((state: RootState) => state.character.character)
    const charNames = characters.map((item) => item.name)
    const query = useQuery()

    const handleSearch = (value: string) => {
        const keyword = value.toLowerCase();
        const filteredChars = charNames.filter(function (user) {
            user = user.toLowerCase();
            return user.indexOf(keyword) > -1;
        });
        console.log(filteredChars, "filteredChars")
        setOptions(value ? searchResult(filteredChars) : []);
    }
    useEffect(() => {
        setSearchInput(query.get("q") ?? "");
    }, [query])

    return (
        <Wrapper>
            <Row>
                <Col span={6} offset={1}>
                    <Link to="/" >
                        <Heading level={4} title="Rick and Morty" /></Link>
                </Col>
                <Col span={8} offset={8}>
                    <AutoComplete
                        style={{ width: 650 }}
                        dropdownMatchSelectWidth={252}
                        options={options}
                        value={searchInput}
                        onSearch={(value) => handleSearch(value)}
                        onSelect={(value) => {
                            setSearchInput(value)
                            navigate(`/search?q=${value}`)
                        }}
                    >
                        <Search

                            placeholder="Search Character..."
                            value={searchInput}
                            enterButton
                            size="large"
                            onChange={(e) => {
                                setSearchInput(e.target.value)
                            }}
                            onSearch={(value: string) => {
                                navigate(`/search?q=${value}`)
                            }}
                        />
                    </AutoComplete>
                </Col>
            </Row>
        </Wrapper>
    )
}
