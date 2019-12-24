import React, { Component } from 'react'

export default class SidebarAddNewUserCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBtnAddNew : 0
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

    DisplayFormAddNewUser = () => {
        if (this.props.isShowForm){
            return (
                <div className="col">
                <div className="card-group text-left mt-2">
                    <div className="card">    
                    <div className="card-header">Thêm mới user vào hệ thống</div>                      
                    <div className="card-body">
                        <div className="form-group">
                            <input type="text" name id className="form-control" placeholder="Tên User" aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <input type="text" name id className="form-control" placeholder="Điện thoại " aria-describedby="helpId" />
                        </div>
                        <div className="form-group">
                            <select className="custom-select" name id>
                                <option selected>Chọn quyền mặc định</option>
                                <option value={1}>Adminstrator</option>
                                <option value={2}>Modrator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                    </div>
                    </div>
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
