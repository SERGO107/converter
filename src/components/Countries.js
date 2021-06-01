import { observer } from 'mobx-react-lite'
import React from 'react'
import { useContext } from 'react'
import Store from '../store'
import { Table } from 'semantic-ui-react'

export const Countries = () => {
    const OwnStore = useContext(Store)
    const data = OwnStore.curencyData  

    return (
        <div>
            <Table >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Валюта</Table.HeaderCell>
                        <Table.HeaderCell>Наименование</Table.HeaderCell>
                        <Table.HeaderCell>Итого</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body >
                    {data.map(item => (
                        <Table.Row key={item.Cur_ID}>
                            <Table.Cell>{item.Cur_Abbreviation}</Table.Cell>
                            <Table.Cell>{item.Cur_Name}</Table.Cell>
                            <Table.Cell>{OwnStore.view / item.Cur_OfficialRate}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
export default observer(Countries)
