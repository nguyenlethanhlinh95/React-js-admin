import React, { Component } from 'react'

export default class SidebarAddNewUserCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBtnAddNew : 0,

            id: '',
            name: '',
            tel: '',
            permission: ''
        }
    }
    

    EventAddNew = () => {
        this.setState({
            isBtnAddNew: !this.state.isBtnAddNew
        });
    }

    DisplayButton = () => {
        if (this.state.isBtnAddNew){
            return (
                <div className="btn btn-block btn-outline-info" onClick={ this.EventAddNew }>Thêm mới</div>
            )
        }
        else{
            return (
                <div className="btn btn-block btn-outline-secondary" onClick={ this.EventAddNew }>Đóng lại</div>
            )
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
    	const value = e.target.value;

        this.setState({
            [e.target.name]: e.target.value
        });
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permission = this.state.permission       
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    DisplayFormAddNewUser = () => {
        if (this.props.isShowForm){
            return (
                <div className="col">
                    <div className="card-group text-left mt-2">
                        <form onSubmit={this.handleSubmit}>
                            <div className="card">    
                                <div className="card-header">Thêm mới user vào hệ thống</div>                      
                                <div className="card-body">
                                    <div className="form-group">
                                        <input type="text" onChange={this.handleChange} name="name" className="form-control" placeholder="Tên User" aria-describedby="helpId" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" onChange={this.handleChange} name="tel" className="form-control" placeholder="Điện thoại " aria-describedby="helpId" />
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" name="permission" onChange={this.handleChange}>
                                            <option value={0} selected>Chọn quyền mặc định</option>
                                            <option value={1}>Adminstrator</option>
                                            <option value={2}>Modrator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <button type="reset"
                                            onClick={ () => this.props.addUser(this.state.name, this.state.tel, this.state.permission) }
                                            className="btn btn-block btn-outline-info">Thêm mới</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                
            );
        }
    }

    render() {
        return (
            <div>
                {/* Display Button */}
                {/* { this.DisplayButton() } */}
                
                {/* Display Form add New */}
                { this.DisplayFormAddNewUser() }              
            </div>
            
        )
    }
}
