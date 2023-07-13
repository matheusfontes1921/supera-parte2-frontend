import {Table} from "antd";
import { Input } from 'antd';
import { Button } from 'antd';
import {ColumnsType} from "antd/es/table";
import {TableType} from "../types/TableType.ts";
import { ContainerButton, ContainerInput, DivContainer, ContainerLabel, ContainerWholeInput, ContainerTable } from "../styles/home.styles.ts";

function Center() {
    const dataSource: TableType[] = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns:ColumnsType<TableType> = [
        {
            title: 'Dados',
            dataIndex: 'dados',
            key: 'dados',
            render: (text) => <a>{text}</a>
        },
        {
            title: 'Valentia',
            dataIndex: 'valentia',
            key: 'valentia',
            render: (text) => <a>{text}</a>
        },
        {
            title: 'Tipo',
            dataIndex: 'tipo',
            key: 'tipo',
            render: (text) => <a>{text}</a>
        },
        {
            title: 'Nome operador transacionado',
            dataIndex: 'operador',
            key: 'operador',
            render: (text) => <a>{text}</a>
        },
    ];

    return (
        <DivContainer>
            <ContainerWholeInput>
                <ContainerInput>
                    <ContainerLabel>Data de início</ContainerLabel>
                    <Input placeholder="Data de início" />
                </ContainerInput>
                <ContainerInput>
                    <ContainerLabel>Data de fim</ContainerLabel>
                    <Input placeholder="Data de fim" />
                </ContainerInput>
                <ContainerInput>
                    <ContainerLabel>Nome do operador</ContainerLabel>
                    <Input placeholder="Nome do operador" />
                </ContainerInput>
            </ContainerWholeInput>
            <ContainerButton>
                <Button>Default Button</Button>
            </ContainerButton>
            <ContainerTable>
                <Table dataSource={dataSource} columns={columns} />
            </ContainerTable>
        </DivContainer>
    )
}

export default Center;
