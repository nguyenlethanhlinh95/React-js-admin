import React, { Component } from 'react'

export default class TableMainCom extends Component {
    render() {
        var dataRow =  this.props.dataUserProps.map((row, index)=>{
          return (
              <tr className="text-center" key={row.id}>
                <th scope="row" >{index+1}</th>
                <td>{row.name}</td>
                <td>{row.tel}</td>
                <td>{row.permission}</td>
                <td className="text-center">
                  <div className="btn-group" role="group" aria-label>
                    <button type="button" className="btn btn-warning btn-sm">Sửa</button>
                    <button type="button" className="btn btn-danger btn-sm">Xóa</button>
                  </div>
                </td>
              </tr>
          );
          });
        return (
            <table className="table table-reponsive table-bordered table-hover table-sm table-light">
        <thead>
          <tr>
            <th scope="col" className="text-center">STT</th>
            <th scope="col" className="text-center">Tên</th>
            <th scope="col" className="text-center">Điện thoại</th>
            <th scope="col" className="text-center">Quyền</th>
            <th scope="col" className="text-center">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {dataRow}
          
        </tbody>
      </table>
        )
    }
}
