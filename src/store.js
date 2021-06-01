import { makeAutoObservable, runInAction } from "mobx"
import { createContext } from 'react'

class Store {
    view = 1
    input = 'random input'
    pre = 'you input:'
    country = ''
    curencyData = []

    constructor() {
        //со значением автообсервбл не нужно расставлять декораторы (@action, @observeble, @computed,@reaction) теперь mobx распознает значения автоматически
        makeAutoObservable(this)
    }
    handleSubmit = (incomeValue) => {
        console.log(incomeValue)
        parseInt(incomeValue)
        this.view = incomeValue
    }



    async fetchCurency() {
        const response = await fetch(`https://www.nbrb.by/api/exrates/rates?periodicity=0`)
        const data = await response.json()
        runInAction(() => {
            this.curencyData = data
            console.log(data)
        })
    }


}
//чтобы испоьзовать данные из стора в реакт компонентах нужно обернуть стор в реакт контекст
export default createContext(new Store())
