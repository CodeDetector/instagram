import {ApplicationActionTypes} from './Application.types'

export const overlayVisibility = (isVisible)=>({
    type:ApplicationActionTypes.SHOW_OVERLAY,
    payload:isVisible
})
export const addRecording = ( address ) =>({
    type:ApplicationActionTypes.ADD_RECORDING,
    payload:address
})
export const biometricAuthentication = () =>({
    type:ApplicationActionTypes.BIOMETRIC_AUTHENTICATION,
    payload:true
})