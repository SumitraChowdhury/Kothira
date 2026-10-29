import { createSlice } from '@reduxjs/toolkit'

export const activeuserSlice = createSlice({
    name: "active",
    initialState: {
        value: localStorage.getItem("userinfo")
            ?
            JSON.parse(localStorage.getItem("userinfo"))
            : null
    },
    reducers: {
        activeuserinfo: (state, action) => {
            state.value = action.payload


        },


    }
})
export const { activeuserinfo } = activeuserSlice.actions
export default activeuserSlice.reducer