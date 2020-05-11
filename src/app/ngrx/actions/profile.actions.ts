import { createAction, props } from '@ngrx/store';
import { IProfileState } from '../state/profile.state';

export const GetProfile = createAction('[Profile] Get Profile');
export const SetProfile = createAction('[Profile] Set Profile', props<{ payload: IProfileState }>());
// export const SetProfileData = createAction('[Profile] Set Profile', props<{payload: IProfile}>());
