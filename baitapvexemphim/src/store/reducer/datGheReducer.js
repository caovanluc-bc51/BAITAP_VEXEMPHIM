import data from "../../data/danhSachGhe.json";
import { DAT_GHE, PAY_MENT } from "../types/datGheType";
const DEFAULT_STATE = { danhSachGhe: data };
export const datGheReducer = (state = DEFAULT_STATE, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case DAT_GHE: {
      const data = JSON.parse(JSON.stringify(state.danhSachGhe));
      if (
        action.payload.soGhe === "A1" ||
        action.payload.soGhe === "B1" ||
        action.payload.soGhe === "C1" ||
        action.payload.soGhe === "D1" ||
        action.payload.soGhe === "E1" ||
        action.payload.soGhe === "F1" ||
        action.payload.soGhe === "G1" ||
        action.payload.soGhe === "H1" ||
        action.payload.soGhe === "I1" ||
        action.payload.soGhe === "J1"
      ) {
        const index = data.findIndex(
          (element) => element.danhSachGhe[0].soGhe === action.payload.soGhe
        );
        data[index].danhSachGhe[0].dangChon =
          !data[index].danhSachGhe[0].dangChon;
        state.danhSachGhe = data;
        break;
      } else if (
        action.payload.soGhe === "A2" ||
        action.payload.soGhe === "B2" ||
        action.payload.soGhe === "C2" ||
        action.payload.soGhe === "D2" ||
        action.payload.soGhe === "E2" ||
        action.payload.soGhe === "F2" ||
        action.payload.soGhe === "G2" ||
        action.payload.soGhe === "H2" ||
        action.payload.soGhe === "I2" ||
        action.payload.soGhe === "J2"
      ) {
        const index = data.findIndex(
          (element) => element.danhSachGhe[1].soGhe === action.payload.soGhe
        );
        data[index].danhSachGhe[1].dangChon =
          !data[index].danhSachGhe[1].dangChon;
        state.danhSachGhe = data;
        break;
      } else if (
        action.payload.soGhe === "A3" ||
        action.payload.soGhe === "B3" ||
        action.payload.soGhe === "C3" ||
        action.payload.soGhe === "D3" ||
        action.payload.soGhe === "E3" ||
        action.payload.soGhe === "F3" ||
        action.payload.soGhe === "G3" ||
        action.payload.soGhe === "H3" ||
        action.payload.soGhe === "I3" ||
        action.payload.soGhe === "J3"
      ) {
        const index = data.findIndex(
          (element) => element.danhSachGhe[2].soGhe === action.payload.soGhe
        );
        data[index].danhSachGhe[2].dangChon =
          !data[index].danhSachGhe[2].dangChon;
        state.danhSachGhe = data;
        break;
      } else if (
        action.payload.soGhe === "A4" ||
        action.payload.soGhe === "B4" ||
        action.payload.soGhe === "C4" ||
        action.payload.soGhe === "D4" ||
        action.payload.soGhe === "E4" ||
        action.payload.soGhe === "F4" ||
        action.payload.soGhe === "G4" ||
        action.payload.soGhe === "H4" ||
        action.payload.soGhe === "I4" ||
        action.payload.soGhe === "J4"
      ) {
        const index = data.findIndex(
          (element) => element.danhSachGhe[3].soGhe === action.payload.soGhe
        );
        data[index].danhSachGhe[3].dangChon =
          !data[index].danhSachGhe[3].dangChon;
        state.danhSachGhe = data;
        break;
      } else if (
        action.payload.soGhe === "A5" ||
        action.payload.soGhe === "B5" ||
        action.payload.soGhe === "C5" ||
        action.payload.soGhe === "D5" ||
        action.payload.soGhe === "E5" ||
        action.payload.soGhe === "F5" ||
        action.payload.soGhe === "G5" ||
        action.payload.soGhe === "H5" ||
        action.payload.soGhe === "I5" ||
        action.payload.soGhe === "J5"
      ) {
        const index = data.findIndex(
          (element) => element.danhSachGhe[4].soGhe === action.payload.soGhe
        );
        data[index].danhSachGhe[4].dangChon =
          !data[index].danhSachGhe[4].dangChon;
        state.danhSachGhe = data;
        break;
      } else if (
        action.payload.soGhe === "A6" ||
        action.payload.soGhe === "B6" ||
        action.payload.soGhe === "C6" ||
        action.payload.soGhe === "D6" ||
        action.payload.soGhe === "E6" ||
        action.payload.soGhe === "F6" ||
        action.payload.soGhe === "G6" ||
        action.payload.soGhe === "H6" ||
        action.payload.soGhe === "I6" ||
        action.payload.soGhe === "J6"
      ) {
        const index = data.findIndex(
          (element) => element.danhSachGhe[5].soGhe === action.payload.soGhe
        );
        data[index].danhSachGhe[5].dangChon =
          !data[index].danhSachGhe[5].dangChon;
        state.danhSachGhe = data;
        break;
      } else if (
        action.payload.soGhe === "A7" ||
        action.payload.soGhe === "B7" ||
        action.payload.soGhe === "C7" ||
        action.payload.soGhe === "D7" ||
        action.payload.soGhe === "E7" ||
        action.payload.soGhe === "F7" ||
        action.payload.soGhe === "G7" ||
        action.payload.soGhe === "H7" ||
        action.payload.soGhe === "I7" ||
        action.payload.soGhe === "J7"
      ) {
        const index = data.findIndex(
          (element) => element.danhSachGhe[6].soGhe === action.payload.soGhe
        );
        data[index].danhSachGhe[6].dangChon =
          !data[index].danhSachGhe[6].dangChon;
        state.danhSachGhe = data;
        break;
      } else if (
        action.payload.soGhe === "A8" ||
        action.payload.soGhe === "B8" ||
        action.payload.soGhe === "C8" ||
        action.payload.soGhe === "D8" ||
        action.payload.soGhe === "E8" ||
        action.payload.soGhe === "F8" ||
        action.payload.soGhe === "G8" ||
        action.payload.soGhe === "H8" ||
        action.payload.soGhe === "I8" ||
        action.payload.soGhe === "J8"
      ) {
        const index = data.findIndex(
          (element) => element.danhSachGhe[7].soGhe === action.payload.soGhe
        );
        data[index].danhSachGhe[7].dangChon =
          !data[index].danhSachGhe[7].dangChon;
        state.danhSachGhe = data;
        break;
      } else if (
        action.payload.soGhe === "A9" ||
        action.payload.soGhe === "B9" ||
        action.payload.soGhe === "C9" ||
        action.payload.soGhe === "D9" ||
        action.payload.soGhe === "E9" ||
        action.payload.soGhe === "F9" ||
        action.payload.soGhe === "G9" ||
        action.payload.soGhe === "H9" ||
        action.payload.soGhe === "I9" ||
        action.payload.soGhe === "J9"
      ) {
        const index = data.findIndex(
          (element) => element.danhSachGhe[8].soGhe === action.payload.soGhe
        );
        data[index].danhSachGhe[8].dangChon =
          !data[index].danhSachGhe[8].dangChon;
        state.danhSachGhe = data;
        break;
      } else if (
        action.payload.soGhe === "A10" ||
        action.payload.soGhe === "B10" ||
        action.payload.soGhe === "C10" ||
        action.payload.soGhe === "D10" ||
        action.payload.soGhe === "E10" ||
        action.payload.soGhe === "F10" ||
        action.payload.soGhe === "G10" ||
        action.payload.soGhe === "H10" ||
        action.payload.soGhe === "I10" ||
        action.payload.soGhe === "J10"
      ) {
        const index = data.findIndex(
          (element) => element.danhSachGhe[9].soGhe === action.payload.soGhe
        );
        data[index].danhSachGhe[9].dangChon =
          !data[index].danhSachGhe[9].dangChon;
        state.danhSachGhe = data;
        break;
      } else if (
        action.payload.soGhe === "A11" ||
        action.payload.soGhe === "B11" ||
        action.payload.soGhe === "C11" ||
        action.payload.soGhe === "D11" ||
        action.payload.soGhe === "E11" ||
        action.payload.soGhe === "F11" ||
        action.payload.soGhe === "G11" ||
        action.payload.soGhe === "H11" ||
        action.payload.soGhe === "I11" ||
        action.payload.soGhe === "J11"
      ) {
        const index = data.findIndex(
          (element) => element.danhSachGhe[10].soGhe === action.payload.soGhe
        );
        data[index].danhSachGhe[10].dangChon =
          !data[index].danhSachGhe[10].dangChon;
        state.danhSachGhe = data;
        break;
      } else {
        const index = data.findIndex(
          (element) => element.danhSachGhe[11].soGhe === action.payload.soGhe
        );
        data[index].danhSachGhe[11].dangChon =
          !data[index].danhSachGhe[11].dangChon;
        state.danhSachGhe = data;
        break;
      }
    }
    
    // eslint-disable-next-line no-fallthrough
    case PAY_MENT: {
      const data = JSON.parse(JSON.stringify(state.danhSachGhe));
      if (
        action.payload[1].length !== 0 ||
        action.payload[2].length !== 0 ||
        action.payload[3].length !== 0 ||
        action.payload[4].length !== 0 ||
        action.payload[5].length !== 0 ||
        action.payload[6].length !== 0 ||
        action.payload[7].length !== 0 ||
        action.payload[8].length !== 0 ||
        action.payload[9].length !== 0 ||
        action.payload[10].length !== 0
      ) {
        if (window.confirm("Bạn có muốn thanh toán đặt vé không?")) {
          action.payload.map((element) => {
            return element.map((ghe) => {
              if (
                ghe.soGhe === "A1" ||
                ghe.soGhe === "B1" ||
                ghe.soGhe === "C1" ||
                ghe.soGhe === "D1" ||
                ghe.soGhe === "E1" ||
                ghe.soGhe === "F1" ||
                ghe.soGhe === "G1" ||
                ghe.soGhe === "H1" ||
                ghe.soGhe === "I1" ||
                ghe.soGhe === "J1"
              ) {
                const index = data.findIndex(
                  (element) => element.danhSachGhe[0].soGhe === ghe.soGhe
                );
                data[index].danhSachGhe[0].daDat =
                  !data[index].danhSachGhe[0].daDat;
                data[index].danhSachGhe[0].dangChon =
                  !data[index].danhSachGhe[0].dangChon;
                state.danhSachGhe = data;
              } else if (
                ghe.soGhe === "A2" ||
                ghe.soGhe === "B2" ||
                ghe.soGhe === "C2" ||
                ghe.soGhe === "D2" ||
                ghe.soGhe === "E2" ||
                ghe.soGhe === "F2" ||
                ghe.soGhe === "G2" ||
                ghe.soGhe === "H2" ||
                ghe.soGhe === "I2" ||
                ghe.soGhe === "J2"
              ) {
                const index = data.findIndex(
                  (element) => element.danhSachGhe[1].soGhe === ghe.soGhe
                );
                data[index].danhSachGhe[1].daDat =
                  !data[index].danhSachGhe[1].daDat;
                data[index].danhSachGhe[1].dangChon =
                  !data[index].danhSachGhe[1].dangChon;
                state.danhSachGhe = data;
              } else if (
                ghe.soGhe === "A3" ||
                ghe.soGhe === "B3" ||
                ghe.soGhe === "C3" ||
                ghe.soGhe === "D3" ||
                ghe.soGhe === "E3" ||
                ghe.soGhe === "F3" ||
                ghe.soGhe === "G3" ||
                ghe.soGhe === "H3" ||
                ghe.soGhe === "I3" ||
                ghe.soGhe === "J3"
              ) {
                const index = data.findIndex(
                  (element) => element.danhSachGhe[2].soGhe === ghe.soGhe
                );
                data[index].danhSachGhe[2].daDat =
                  !data[index].danhSachGhe[2].daDat;
                data[index].danhSachGhe[2].dangChon =
                  !data[index].danhSachGhe[2].dangChon;
                state.danhSachGhe = data;
              } else if (
                ghe.soGhe === "A4" ||
                ghe.soGhe === "B4" ||
                ghe.soGhe === "C4" ||
                ghe.soGhe === "D4" ||
                ghe.soGhe === "E4" ||
                ghe.soGhe === "F4" ||
                ghe.soGhe === "G4" ||
                ghe.soGhe === "H4" ||
                ghe.soGhe === "I4" ||
                ghe.soGhe === "J4"
              ) {
                const index = data.findIndex(
                  (element) => element.danhSachGhe[3].soGhe === ghe.soGhe
                );
                data[index].danhSachGhe[3].daDat =
                  !data[index].danhSachGhe[3].daDat;
                data[index].danhSachGhe[3].dangChon =
                  !data[index].danhSachGhe[3].dangChon;
                state.danhSachGhe = data;
              } else if (
                ghe.soGhe === "A5" ||
                ghe.soGhe === "B5" ||
                ghe.soGhe === "C5" ||
                ghe.soGhe === "D5" ||
                ghe.soGhe === "E5" ||
                ghe.soGhe === "F5" ||
                ghe.soGhe === "G5" ||
                ghe.soGhe === "H5" ||
                ghe.soGhe === "I5" ||
                ghe.soGhe === "J5"
              ) {
                const index = data.findIndex(
                  (element) => element.danhSachGhe[4].soGhe === ghe.soGhe
                );
                data[index].danhSachGhe[4].daDat =
                  !data[index].danhSachGhe[4].daDat;
                data[index].danhSachGhe[4].dangChon =
                  !data[index].danhSachGhe[4].dangChon;
                state.danhSachGhe = data;
              } else if (
                ghe.soGhe === "A6" ||
                ghe.soGhe === "B6" ||
                ghe.soGhe === "C6" ||
                ghe.soGhe === "D6" ||
                ghe.soGhe === "E6" ||
                ghe.soGhe === "F6" ||
                ghe.soGhe === "G6" ||
                ghe.soGhe === "H6" ||
                ghe.soGhe === "I6" ||
                ghe.soGhe === "J6"
              ) {
                const index = data.findIndex(
                  (element) => element.danhSachGhe[5].soGhe === ghe.soGhe
                );
                data[index].danhSachGhe[5].daDat =
                  !data[index].danhSachGhe[5].daDat;
                data[index].danhSachGhe[5].dangChon =
                  !data[index].danhSachGhe[5].dangChon;
                state.danhSachGhe = data;
              } else if (
                ghe.soGhe === "A7" ||
                ghe.soGhe === "B7" ||
                ghe.soGhe === "C7" ||
                ghe.soGhe === "D7" ||
                ghe.soGhe === "E7" ||
                ghe.soGhe === "F7" ||
                ghe.soGhe === "G7" ||
                ghe.soGhe === "H7" ||
                ghe.soGhe === "I7" ||
                ghe.soGhe === "J7"
              ) {
                const index = data.findIndex(
                  (element) => element.danhSachGhe[6].soGhe === ghe.soGhe
                );
                data[index].danhSachGhe[6].daDat =
                  !data[index].danhSachGhe[6].daDat;
                data[index].danhSachGhe[6].dangChon =
                  !data[index].danhSachGhe[6].dangChon;
                state.danhSachGhe = data;
              } else if (
                ghe.soGhe === "A8" ||
                ghe.soGhe === "B8" ||
                ghe.soGhe === "C8" ||
                ghe.soGhe === "D8" ||
                ghe.soGhe === "E8" ||
                ghe.soGhe === "F8" ||
                ghe.soGhe === "G8" ||
                ghe.soGhe === "H8" ||
                ghe.soGhe === "I8" ||
                ghe.soGhe === "J8"
              ) {
                const index = data.findIndex(
                  (element) => element.danhSachGhe[7].soGhe === ghe.soGhe
                );
                data[index].danhSachGhe[7].daDat =
                  !data[index].danhSachGhe[7].daDat;
                data[index].danhSachGhe[7].dangChon =
                  !data[index].danhSachGhe[7].dangChon;
                state.danhSachGhe = data;
              } else if (
                ghe.soGhe === "A9" ||
                ghe.soGhe === "B9" ||
                ghe.soGhe === "C9" ||
                ghe.soGhe === "D9" ||
                ghe.soGhe === "E9" ||
                ghe.soGhe === "F9" ||
                ghe.soGhe === "G9" ||
                ghe.soGhe === "H9" ||
                ghe.soGhe === "I9" ||
                ghe.soGhe === "J9"
              ) {
                const index = data.findIndex(
                  (element) => element.danhSachGhe[8].soGhe === ghe.soGhe
                );
                data[index].danhSachGhe[8].daDat =
                  !data[index].danhSachGhe[8].daDat;
                data[index].danhSachGhe[8].dangChon =
                  !data[index].danhSachGhe[8].dangChon;
                state.danhSachGhe = data;
              } else if (
                ghe.soGhe === "A10" ||
                ghe.soGhe === "B10" ||
                ghe.soGhe === "C10" ||
                ghe.soGhe === "D10" ||
                ghe.soGhe === "E10" ||
                ghe.soGhe === "F10" ||
                ghe.soGhe === "G10" ||
                ghe.soGhe === "H10" ||
                ghe.soGhe === "I10" ||
                ghe.soGhe === "J10"
              ) {
                const index = data.findIndex(
                  (element) => element.danhSachGhe[9].soGhe === ghe.soGhe
                );
                data[index].danhSachGhe[9].daDat =
                  !data[index].danhSachGhe[9].daDat;
                data[index].danhSachGhe[9].dangChon =
                  !data[index].danhSachGhe[9].dangChon;
                state.danhSachGhe = data;
              } else if (
                ghe.soGhe === "A11" ||
                ghe.soGhe === "B11" ||
                ghe.soGhe === "C11" ||
                ghe.soGhe === "D11" ||
                ghe.soGhe === "E11" ||
                ghe.soGhe === "F11" ||
                ghe.soGhe === "G11" ||
                ghe.soGhe === "H11" ||
                ghe.soGhe === "I11" ||
                ghe.soGhe === "J11"
              ) {
                const index = data.findIndex(
                  (element) => element.danhSachGhe[10].soGhe === ghe.soGhe
                );
                data[index].danhSachGhe[10].daDat =
                  !data[index].danhSachGhe[10].daDat;
                data[index].danhSachGhe[10].dangChon =
                  !data[index].danhSachGhe[10].dangChon;
                state.danhSachGhe = data;
              } else if (
                ghe.soGhe === "A12" ||
                ghe.soGhe === "B12" ||
                ghe.soGhe === "C12" ||
                ghe.soGhe === "D12" ||
                ghe.soGhe === "E12" ||
                ghe.soGhe === "F12" ||
                ghe.soGhe === "G12" ||
                ghe.soGhe === "H12" ||
                ghe.soGhe === "I12" ||
                ghe.soGhe === "J12"
              ) {
                const index = data.findIndex(
                  (element) => element.danhSachGhe[11].soGhe === ghe.soGhe
                );
                data[index].danhSachGhe[11].daDat =
                  !data[index].danhSachGhe[11].daDat;
                data[index].danhSachGhe[11].dangChon =
                  !data[index].danhSachGhe[11].dangChon;
                state.danhSachGhe = data;
              }
            });
          });
        }
      } else {
        window.confirm("Vui lòng chọn ghế trước khi thanh toán!");
      }
    }
  }
  return { ...state };
};
