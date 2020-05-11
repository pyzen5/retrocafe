import { createAction, props } from '@ngrx/store';
import { IMenuState } from '../state/menu.state';

export const GetProfile = createAction('[Profile] Get Profile');
export const SetMenu = createAction('[Menu] Set Profile', props<{ payload: IMenuState[] }>());
// export const SetProfileData = createAction('[Profile] Set Profile', props<{payload: IProfile}>());
