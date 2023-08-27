import { DAT_GHE, PAY_MENT } from "../types/datGheType"

export const datGheAction  = (data) =>{
    return {
        type: DAT_GHE,
        payload: data,
    }
}
export const payMentAction = (data) => {
    return {
        type: PAY_MENT,
        payload: data,
    }
}