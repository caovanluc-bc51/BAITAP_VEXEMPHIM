import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../../store/actions/datGheAction";

class ChiTiet extends Component {
  renderContent = () => {
    const numberFormat = new Intl.NumberFormat("VN-vn");
    return this.props.danhSachGhe.map((element) => {
      // eslint-disable-next-line array-callback-return
      return element.danhSachGhe.map((ghe) => {
        return (
          <tr className="text-center text-primary font-weight-bold">
            <td>{ghe.soGhe}</td>
            <td>{numberFormat.format(ghe.gia)} vnđ</td>
            <td>
              <span
                className="cursor-pointer text-danger"
                onClick={() =>
                  this.props.dispatch(datGheAction(ghe))
                }
              >
                X
              </span>
            </td>
          </tr>
        );
      });
    });
  };
  tongTien = () => {
    const numberFormat = new Intl.NumberFormat("VN-vn");
    const tong = this.props.danhSachGhe.map((element) => {
      // eslint-disable-next-line array-callback-return
      return element.danhSachGhe.map((ghe) => {
        if (ghe.dangChon === true) {
          return ghe;
        }
      });
    });
    return numberFormat.format(
      (tong[1].length +
        tong[2].length +
        tong[3].length +
        tong[4].length +
        tong[5].length +
        tong[6].length +
        tong[7].length +
        tong[8].length +
        tong[9].length +
        tong[10].length) *
        75000
    );
  };

  render() {
    return (
      <div>
        <h5 className="text-warning">DANH SÁCH GHẾ BẠN CHỌN</h5>
        <div className="hang">
          <div className="box orange"></div>
          <span>Ghế Đã Đặt</span>
        </div>
        <div className="hang">
          <div className="box green"></div>
          <span>Ghế Đang Chọn</span>
        </div>
        <div className="hang">
          <div className="box gray"></div>
          <span>Ghế Chưa Đặt</span>
        </div>
        <table className="table table-bordered">
          <thead className="text-center">
            <th>Số Ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </thead>
          <tbody>{this.renderContent()}</tbody>
          <tfoot>
            <tr className="text-center text-danger font-weight-bold">
              <td>Tổng tiền</td>
              <td>{this.tongTien()} vnđ</td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.datGheReducer.danhSachGhe.map((element) => ({
      ...element,
      danhSachGhe: element.danhSachGhe.filter((hangGhe) => hangGhe.dangChon),
    })),
  };
};
export default connect(mapStateToProps)(ChiTiet);
