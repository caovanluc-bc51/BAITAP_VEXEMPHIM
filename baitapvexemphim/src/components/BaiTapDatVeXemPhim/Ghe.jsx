import React, { Component } from "react";
import { connect } from "react-redux";

class Ghe extends Component {
  renderTable = () => {
    // console.log(this.props.element.danhSachGhe[0]);
    if (this.props.element.hang !== "") {
      return (
        <tr>
          <td className="rowNumber">{this.props.element.hang}</td>
          <td>
            <button
              className={`ghe ${
                this.props.element.danhSachGhe[0].dangChon && "btn-success"
              } ${this.props.element.danhSachGhe[0].daDat && "btn-warning"}`}
              onClick={() =>
                this.props.dispatch({
                  type: "DAT_GHE",
                  payload: this.props.element.danhSachGhe[0],
                })
              }
            >
              {this.props.element.danhSachGhe[0].soGhe}
            </button>
          </td>
          <td>
            <button
              className={`ghe ${
                this.props.element.danhSachGhe[1].dangChon && "btn-success"
              } ${this.props.element.danhSachGhe[1].daDat && "btn-warning"}`}
              onClick={() =>
                this.props.dispatch({
                  type: "DAT_GHE",
                  payload: this.props.element.danhSachGhe[1],
                })
              }
            >
              {this.props.element.danhSachGhe[1].soGhe}
            </button>
          </td>
          <td>
            <button
              className={`ghe ${
                this.props.element.danhSachGhe[2].dangChon && "btn-success"
              } ${this.props.element.danhSachGhe[2].daDat && "btn-warning"}`}
              onClick={() =>
                this.props.dispatch({
                  type: "DAT_GHE",
                  payload: this.props.element.danhSachGhe[2],
                })
              }
            >
              {this.props.element.danhSachGhe[2].soGhe}
            </button>
          </td>
          <td>
            <button
              className={`ghe ${
                this.props.element.danhSachGhe[3].dangChon && "btn-success"
              } ${this.props.element.danhSachGhe[3].daDat && "btn-warning"}`}
              onClick={() =>
                this.props.dispatch({
                  type: "DAT_GHE",
                  payload: this.props.element.danhSachGhe[3],
                })
              }
            >
              {this.props.element.danhSachGhe[3].soGhe}
            </button>
          </td>
          <td>
            <button
              className={`ghe ${
                this.props.element.danhSachGhe[4].dangChon && "btn-success"
              } ${this.props.element.danhSachGhe[4].daDat && "btn-warning"}`}
              onClick={() =>
                this.props.dispatch({
                  type: "DAT_GHE",
                  payload: this.props.element.danhSachGhe[4],
                })
              }
            >
              {this.props.element.danhSachGhe[4].soGhe}
            </button>
          </td>
          <td>
            <button
              className={`ghe ${
                this.props.element.danhSachGhe[5].dangChon && "btn-success"
              } ${this.props.element.danhSachGhe[5].daDat && "btn-warning"}`}
              onClick={() =>
                this.props.dispatch({
                  type: "DAT_GHE",
                  payload: this.props.element.danhSachGhe[5],
                })
              }
            >
              {this.props.element.danhSachGhe[5].soGhe}
            </button>
          </td>
          <td>
            <button
              className={`ghe ${
                this.props.element.danhSachGhe[6].dangChon && "btn-success"
              } ${this.props.element.danhSachGhe[6].daDat && "btn-warning"}`}
              onClick={() =>
                this.props.dispatch({
                  type: "DAT_GHE",
                  payload: this.props.element.danhSachGhe[6],
                })
              }
            >
              {this.props.element.danhSachGhe[6].soGhe}
            </button>
          </td>
          <td>
            <button
              className={`ghe ${
                this.props.element.danhSachGhe[7].dangChon && "btn-success"
              } ${this.props.element.danhSachGhe[7].daDat && "btn-warning"}`}
              onClick={() =>
                this.props.dispatch({
                  type: "DAT_GHE",
                  payload: this.props.element.danhSachGhe[7],
                })
              }
            >
              {this.props.element.danhSachGhe[7].soGhe}
            </button>
          </td>
          <td>
            <button
              className={`ghe ${
                this.props.element.danhSachGhe[8].dangChon && "btn-success"
              } ${this.props.element.danhSachGhe[8].daDat && "btn-warning"}`}
              onClick={() =>
                this.props.dispatch({
                  type: "DAT_GHE",
                  payload: this.props.element.danhSachGhe[8],
                })
              }
            >
              {this.props.element.danhSachGhe[8].soGhe}
            </button>
          </td>
          <td>
            <button
              className={`ghe ${
                this.props.element.danhSachGhe[9].dangChon && "btn-success"
              } ${this.props.element.danhSachGhe[9].daDat && "btn-warning"}`}
              onClick={() =>
                this.props.dispatch({
                  type: "DAT_GHE",
                  payload: this.props.element.danhSachGhe[9],
                })
              }
            >
              {this.props.element.danhSachGhe[9].soGhe}
            </button>
          </td>
          <td>
            <button
              disabled={this.props.element.danhSachGhe[10].daDat}
              className={`ghe ${
                this.props.element.danhSachGhe[10].dangChon && "btn-success"
              } ${this.props.element.danhSachGhe[10].daDat && "btn-warning"}`}
              onClick={() =>
                this.props.dispatch({
                  type: "DAT_GHE",
                  payload: this.props.element.danhSachGhe[10],
                })
              }
            >
              {this.props.element.danhSachGhe[10].soGhe}
            </button>
          </td>
          <td>
            <button
              disabled={this.props.element.danhSachGhe[11].daDat}
              className={`ghe ${
                this.props.element.danhSachGhe[11].dangChon && "btn-success"
              } ${this.props.element.danhSachGhe[11].daDat && "btn-warning"}`}
              onClick={() =>
                this.props.dispatch({
                  type: "DAT_GHE",
                  payload: this.props.element.danhSachGhe[11],
                })
              }
            >
              {this.props.element.danhSachGhe[11].soGhe}
            </button>
          </td>
        </tr>
      );
    }
  };
  render() {
    return <>{this.renderTable()}</>;
  }
}
export default connect()(Ghe);
