import React, { Component } from "react";
import { connect } from "react-redux";
import Ghe from "./Ghe";

class DanhSachGhe extends Component {
  renderContent = () => {
    return this.props.danhSachGhe.map((element, index) => {
      return <Ghe key={index} element={element} />;
    });
  };
  render() {
    return (
      <div>
        <h5 className="py-2 bg-warning text-center text-black">MÀN HÌNH</h5>
        <div className="d-flex flex-wrap padding-table">
          <table className="text-center">
            <tr>
              <td className="rowNumber ">{this.props.danhSachGhe[0].hang}</td>
              <td className="rowNumber">
                {this.props.danhSachGhe[0].danhSachGhe[0].soGhe}
              </td>
              <td className="rowNumber">
                {this.props.danhSachGhe[0].danhSachGhe[1].soGhe}
              </td>
              <td className="rowNumber">
                {this.props.danhSachGhe[0].danhSachGhe[2].soGhe}
              </td>
              <td className="rowNumber">
                {this.props.danhSachGhe[0].danhSachGhe[3].soGhe}
              </td>
              <td className="rowNumber">
                {this.props.danhSachGhe[0].danhSachGhe[4].soGhe}
              </td>
              <td className="rowNumber">
                {this.props.danhSachGhe[0].danhSachGhe[5].soGhe}
              </td>
              <td className="rowNumber">
                {this.props.danhSachGhe[0].danhSachGhe[6].soGhe}
              </td>
              <td className="rowNumber">
                {this.props.danhSachGhe[0].danhSachGhe[7].soGhe}
              </td>
              <td className="rowNumber">
                {this.props.danhSachGhe[0].danhSachGhe[8].soGhe}
              </td>
              <td className="rowNumber">
                {this.props.danhSachGhe[0].danhSachGhe[9].soGhe}
              </td>
              <td className="rowNumber">
                {this.props.danhSachGhe[0].danhSachGhe[10].soGhe}
              </td>
              <td className="rowNumber">
                {this.props.danhSachGhe[0].danhSachGhe[11].soGhe}
              </td>
            </tr>
            {this.renderContent()}
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGhe: state.datGheReducer.danhSachGhe,
  };
};
export default connect(mapStateToProps)(DanhSachGhe);
