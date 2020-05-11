import { IProfileState, initialProfileState} from './profile.state';

export interface IAppState {
    profile: IProfileState;
}

export const initialAppState: IAppState = {
    profile: initialProfileState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
