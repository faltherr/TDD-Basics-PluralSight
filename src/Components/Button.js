import React, {Component} from 'react'
import '../button.css'

export default class Button extends Component{
    render(){
        return(
                <button value={this.props.location} onClick={this.props.handleClick} className='location-button'>{this.props.location ? this.props.location : 'All Locations'}</button>
        )
    }
}