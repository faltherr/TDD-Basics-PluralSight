import React, {Component} from 'react'
import Header from '../Components/Header'
import Button from '../Components/Button'
import Map from '../Components/Map'
import mapChooser from '../mapChooser'

class StoreLocator extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentMap : "none.png"
        }
        this.shops = [
            {
            'location': 'Portland',
            'address': '123 Portland Dr'
            },
            {
            'location': 'Astoria',
            'address': '456 Astoria Dr'
            },
            {            
            'location': '',
            'address': ''
            }
        ]
    this.chooseMap = this.chooseMap.bind(this)
    }
    chooseMap(e){

        // Value is defined in the button component
        this.setState({currentMap:mapChooser(e.target.value)})
    }
    render(){
        let storeButtons = this.shops.map((shop,id) => {
            return(
                <Button handleClick={this.chooseMap} key={id} location={shop.location}/>
            )
        })
        return(
            <div>
                <Header/>
                <div>
                    {storeButtons}
                </div>
                <Map imageName={this.state.currentMap} location={this.props.location}/>
            </div>
        )
    }
}

export default StoreLocator