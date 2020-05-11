import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import * as MenuActions from '../actions/menu.actions';
import { BackendService } from 'src/app/services/backend.service';

@Injectable()
export class MenuEffects {
    menuList$ = createEffect(() => this.actions$.pipe(
        ofType(MenuActions.GetMenu),
        exhaustMap(action => this.backendService.getMenuList().pipe(
            map(data => MenuActions.GetMenuSuccess({ payload: data })),
            catchError(error => of(MenuActions.GetMenuFailure()))
        ))
    ));

    constructor(private actions$: Actions, private backendService: BackendService) { }
}
