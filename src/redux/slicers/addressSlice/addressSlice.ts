import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddressState, IAddress } from './type';

const addressArr : IAddress[] = [
    {
        firstLine: '1 abc street',
        secondLine: '5th cross',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '132435',
        country: 'India',
        countryCode: null,
        type: 'home',
    },
    {
        firstLine: '2 abc street',
        secondLine: '6th cross',
        city: 'Delhi',
        state: 'Delhi',
        pincode: '110001',
        country: 'India',
        countryCode: null,
        type: 'office',
    },
    {
        firstLine: '3 abc street',
        secondLine: '7th cross',
        city: 'Bangalore',
        state: 'Karnataka',
        pincode: '560001',
        country: 'India',
        countryCode: null,
        type: 'home',
    },
];


const initialState: AddressState = {
    addressArr : addressArr,
};

const addressSlice = createSlice({
    name: 'addresss',
    initialState,
    reducers: {
        addAddress: (state, action: PayloadAction<IAddress>) => {
            state.addressArr.push(action.payload);
        },
        removeAddress: (state, action: PayloadAction<string>) => {
            state.addressArr = state.addressArr.filter(
                address => address.firstLine !== action.payload
            );
        },
    },
});

export const { addAddress, removeAddress } = addressSlice.actions;
export default addressSlice.reducer;
