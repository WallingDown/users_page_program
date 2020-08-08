import React, { Component } from 'react'
import axios from 'axios'

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
        // 1、获取用户输入
        const {keyWord} = this.state
        const {updateAppState} = this.props
        // 2、请求之前展示的loading界面
        updateAppState({isLoading:true,isFirst:false})
        // 3、发送请求
        axios.get(`/api/search/users?q=${keyWord}`).then(
            response => {
                updateAppState({users:response.data.items,isLoading:false})
            },
            err => {
                // console.log(err.message)//Network Error
                updateAppState({error:err.message,isLoading:false})
            }
        )
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
