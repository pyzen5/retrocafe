import { createReducer, on, Action } from '@ngrx/store';
import { IMenuState, initialMenuState } from '../state/menu.state';
import * as MenuActions from '../actions/menu.actions';

const menuReducer = createReducer(
    initialMenuState,
    on(MenuActions.SetMenu, (state, { payload }) => (payload))
);

export function MenuReducer(state: IMenuState[] | undefined, action: Action) {
    return menuReducer(state, action);
}
