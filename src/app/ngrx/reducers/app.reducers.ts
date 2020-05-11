import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { ProfileReducer } from './profile.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    profile: ProfileReducer
};
