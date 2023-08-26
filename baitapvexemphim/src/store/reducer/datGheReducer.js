import data from "../../data/danhSachGhe.json";
const DEFAULT_STATE = { danhSachGhe: data };
export const datGheReducer = (state = DEFAULT_STATE, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "DAT_GHE": {
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
      }
    }
  }
  return { ...state };
};
