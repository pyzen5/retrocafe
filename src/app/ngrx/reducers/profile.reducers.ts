import { createReducer, on, Action } from '@ngrx/store';
import { IProfileState, initialProfileState } from '../state/profile.state';
import * as ProfileActions from '../actions/profile.actions';

const profileReducer = createReducer(
    initialProfileState,
    on(ProfileActions.SetProfile, (state, { payload }) => ({ ...state, ...payload }))
);

export function ProfileReducer(state: IProfileState | undefined, action: Action) {
    return profileReducer(state, action);
}
