import React, { Component } from 'react'

export default class Search extends Component {
    // 状态
    state = {
        keyWord: '' //输入的内容
    }

    saveKeyWord = (event) =>{
        // 获取用户输入的内容
        const {target:{value:keyWord}} = event
        this.setState({keyWord})
    }

    handleSearch = () =>{
        // 获取用户输入
        alert(this.state.keyWord)
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input onChange={this.saveKeyWord} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        )
    }
}
