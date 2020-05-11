import { IProfileState, initialProfileState} from './profile.state';
import { IMenuState, initialMenuState } from './menu.state';

export interface IAppState {
    profile: IProfileState;
    menu: IMenuState[];
}

export const initialAppState: IAppState = {
    profile: initialProfileState,
    menu: initialMenuState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
