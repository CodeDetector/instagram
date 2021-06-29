import { ApplicationActionTypes } from './Application.types'

const initialState = {
    isOverlayVisible:false,
    recordingAddr:null,
    biometric_authentication:false
}

export const ApplicationReducer = ( state = initialState,action)=>{
    // console.log("Reducer state = ",action.payload)
    switch(action.type)
    {
        case ApplicationActionTypes.SHOW_OVERLAY:return(
            {
                ...state,
                isOverlayVisible : action.payload
            }
        )
        case ApplicationActionTypes.ADD_RECORDING:return({
            ...state,
            recordingAddr:action.payload
        })

        case ApplicationActionTypes.BIOMETRIC_AUTHENTICATION:return({
            ...state,
            biometric_authentication:action.payload
        })
        default:return({...state})
    }
}