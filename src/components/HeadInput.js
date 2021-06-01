import React from 'react'
import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import Store from '../store'
import { Input, Label, Form } from 'semantic-ui-react'

export const HeadInput = () => {
    const OwnStore = useContext(Store)
    const [incomeValue, setIncomeValue] = useState('')
    function subAndSearh() {
        OwnStore.handleSubmit(incomeValue)
        OwnStore.fetchCurency()
    }
    return (
        <div>
            <Form onSubmit={subAndSearh}>
                <Input
                    labelPosition='right'
                    type='text'
                    placeholder=' '
                    onChange={(event) => { setIncomeValue(event.target.value) }}
                >
                    <Label basic>Br</Label>
                    <input />
                    <Label>.00</Label>
                </Input>
            </Form>


        </div>
    )
}
export default observer(HeadInput)