import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';

@Component({
  selector: 'wxy-content-top',
  styleUrls: ['./wxyContentTop.scss'],
  templateUrl: './wxyContentTop.html',
})
export class WxyContentTop {

  public activePageTitle:string = '';

  constructor(private _state:GlobalState) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });
  }
}
