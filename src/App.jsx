import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
    state = {
        isFirst:true,
        isLoading:false,
        error:"",
        users:[]
    }
     /**
      * 用于更新App的状态
      * @param {*} obj 
      */
    updateAppState = (obj) =>{
        this.setState({...obj})
    }

    render() {
        return (
            <div  className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        )
    }
}
