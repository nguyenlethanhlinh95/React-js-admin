import React, { Component } from 'react';
import HeaderCom from './Components/Layouts/HeaderCom';
import SearchMainCom from './Components/Partials/SearchMainCom';
import TableMainCom from './Components/Partials/TableMainCom';
import AddNewUserCom from './Components/Layouts/SidebarAddNewUserCom';
import data from './Components/data.json';

// tu dong tang id
const uuidv1 = require('uuid/v1');


export default class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      isButton : false,
      dataUser: data,
      searchText: ''
    }
  }

  getNewUserData = (name,tel, permisson) => {
      var item = {};
      item.name = name;
      item.tel = tel;
      item.permission = permisson;

      var items = this.state.dataUser;
      items.push(item);

      // update state
      this.setState({
        dataUser: items
      });

      console.log(items);

  }

  thongBao = () => {
    this.setState({
      isButton: ! this.state.isButton
    })
  }

  getTextSearch = (dl) => {
      this.setState({
        searchText: dl
      });
  }

  render() {
    var rs = [];
    this.state.dataUser.forEach(element => {
      if (element.name.indexOf(this.state.searchText) !==-1 ){
        rs.push(element);
      }
    });

    return (
      <div>
        <HeaderCom></HeaderCom>
        <div className="wapper_content">
          <div className="container">
            <div className="row">
              {/* search form */}
              <SearchMainCom 
                checkConnectProps= {(dl)=> this.getTextSearch(dl)}
                ketnoi= { ()=> this.thongBao() } 
                isShowBtn= {this.state.isButton}>
              </SearchMainCom>
            </div>

            <div className="row">
              <div className="col">
                {/* table User */}
                <TableMainCom dataUserProps={rs}></TableMainCom>
              </div>

              <AddNewUserCom 
                addUser={(name,tel,perssion)=>this.getNewUserData(name,tel,perssion)}
                isShowForm={this.state.isButton}>
                
                </AddNewUserCom>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
