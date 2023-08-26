import React, { Component } from "react";
import "./style.css";
import DanhSachGhe from "./DanhSachGhe";
import ChiTiet from "./ChiTiet";
export default class BaiTapDatVeXemPhim extends Component {
  render() {
    return (
      <div className="mx-auto">
        <h1 className="text-danger text-center py-3">ĐẶT VÉ XEM PHIM</h1>
        <div className="row">
          <div className="col-6">
            <DanhSachGhe />
          </div>
          <div className="col-6">
            <ChiTiet />
          </div>
        </div>
      </div>
    );
  }
}
