import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const {
            isFirst,
            isLoading,
            error,
            users
        } = this.props

        return (
            <div className="row">
                {
                    isFirst ? //是否初次展示
                        <h1>输入关键字,然后搜索</h1> :
                    isLoading ? //是否加载中
                        <h1>Loading</h1> :
                    error ? //是否有错误
                        <h1 style={{color:'red'}}>{error}</h1> :
                        // 正常展示
                    users.map((user) => {
                        // console.log(user)
                        return (
                             <div key={user.id} className="card">
                                <a href={user.html_url} target="_blank">
                                    <img src={user.avatar_url} style={{ width: "100px" }} />
                                </a>
                                <p className="card-text">{user.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
