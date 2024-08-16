export interface IAddress {
    firstLine: string;
    secondLine: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    countryCode: string | null;
    type: string;
}

export interface AddressState {
    addressArr : IAddress[];
}