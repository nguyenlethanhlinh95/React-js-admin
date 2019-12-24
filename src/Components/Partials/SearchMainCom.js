import React, { Component } from 'react'

export default class SearchMainCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue : ''
        }
    }
    

    showButton = () => { 
        if (!this.props.isShowBtn){
            return(
                <div className="btn btn-block btn-outline-info" onClick = { () => this.props.ketnoi() }>Thêm mới</div>
            )
        }else{
            return (
                <div className="btn btn-block btn-outline-secondary" onClick = { () => this.props.ketnoi() }>Đóng lại</div>
            )
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
    }

    render() {
        return (
           <div className="search_wap">
                <nav className="navbar-light m-3 ml-0">
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <input onChange= {this.handleChange}  className="form-control" type="search" placeholder="Nhập từ khóa" aria-label="Search" />
                    <button 
                        onClick={ () => this.props.checkConnectProps(this.state.tempValue)}
                        className="btn btn btn-info my-2 my-sm-0" 
                        type="submit">Tìm</button>
                </form>
                </nav>

                {this.showButton()}
            </div>
        )
    }
}
