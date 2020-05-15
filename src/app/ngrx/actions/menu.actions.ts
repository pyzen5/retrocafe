import { createAction, props } from '@ngrx/store';
import { IMenuState } from '../state/menu.state';
import { Dish } from 'src/app/models/dish';

export const GetProfile = createAction('[Profile] Get Profile');
export const GetMenu = createAction('[Menu] Get Menu');
export const GetMenuSuccess = createAction('[Menu] Get Menu Success', props<{ payload: IMenuState[] }>());
export const GetMenuFailure = createAction('[Menu] Get Menu Failure');
export const SetMenu = createAction('[Menu] Set Profile', props<{ payload: IMenuState[] }>());
export const DeleteDish = createAction('[Menu] Delete Dish', props<{payload: Dish}>());
