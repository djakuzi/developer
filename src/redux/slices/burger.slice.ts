import { createSlice, PayloadAction} from "@reduxjs/toolkit";



export interface BurgerType{
    valid: boolean;

}

const initialState: BurgerType = {
    valid: false,
}

export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers:{
        valid(state, action: PayloadAction<BurgerType>){
            state.valid = !action.payload.valid
        }
    }
})

export default burgerSlice.reducer
export const burgerActions = burgerSlice.actions