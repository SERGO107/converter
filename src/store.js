import { makeAutoObservable, runInAction } from "mobx"
import { createContext } from 'react'

class Store {
    view = 1
    curencyData = []

    constructor() {       
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
        })
    }


}

export default createContext(new Store())
