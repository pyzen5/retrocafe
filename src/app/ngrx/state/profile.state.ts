export interface IProfileState {
    firstname: string;
    lastname: string;
    email: string;
    mobile: string;
}

export const initialProfileState: IProfileState = {
    firstname: null,
    lastname: null,
    email: null,
    mobile: null
};
