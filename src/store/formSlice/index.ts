import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    phone: '',
    checked: false,
    active: false,
};

const pattern = /^(?:\+7|8)?(?:\d{10})$/;

const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
            state.active = state.name && state.phone && state.checked && pattern.test(state.phone);
        },
        setPhone: (state, action) => {
            state.phone = action.payload;
            state.active = state.name && state.phone && state.checked && pattern.test(state.phone);
        },
        setChecked: (state, action) => {
            state.checked = action.payload;
            state.active = state.name && state.phone && state.checked && pattern.test(state.phone);
        },
        setActive: (state, action) => {
            state.active = action.payload;
        },
    },
});

export const { setName, setPhone, setChecked, setActive } = formSlice.actions;
export default formSlice.reducer;
