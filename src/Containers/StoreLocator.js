import React, {Component} from 'react'
import Header from '../Components/Header'
import Button from '../Components/Button'
import Map from '../Components/Map'

class StoreLocator extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Button/>
                <Button/>
                <Map/>
            </div>
        )
    }
}

export default StoreLocator