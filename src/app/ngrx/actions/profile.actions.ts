import { createAction, props } from '@ngrx/store';
import { IProfile } from '../../models/profile.interface';

export const GetProfile = createAction('[Profile] Get Profile');
export const SetProfile = createAction('[Profile] Set Profile', props<{ payload: IProfile }>());
// export const SetProfileData = createAction('[Profile] Set Profile', props<{payload: IProfile}>());
