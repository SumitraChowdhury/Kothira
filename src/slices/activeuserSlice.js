import { createSlice } from '@reduxjs/toolkit'

export const activeuserSlice = createSlice({

    name: "active", 
    initialState : {
        value: 0
    },
  reducers: {
    activeuserinfo: (state,action) => {
      console.log(state.value);
      console.log(action.value);
      
    },
  }
})

export const { activeuserinfo } = activeuserSlice.actions


export default activeuserSlice.reducer