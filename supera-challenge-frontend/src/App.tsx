import {ColumnsType} from "antd/es/table";
import {TableType} from "./types/TableType.ts";
import Center from "./components/Center.tsx";

function App() {
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
     <div className="main">
        <Center />
     </div>
  )
}

export default App
