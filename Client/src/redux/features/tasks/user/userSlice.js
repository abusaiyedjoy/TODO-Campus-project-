import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name: "Abu Saiyed Joy",
    email: "abusaiyedjoy1@gmail.com",
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducer: {
        
    }
});


export default userSlice.reducer;