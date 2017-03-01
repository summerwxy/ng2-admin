import {Component} from '@angular/core';

import {WxyMsgCenterService} from './wxyMsgCenter.service';

@Component({
  selector: 'wxy-msg-center',
  providers: [WxyMsgCenterService],
  styleUrls: ['./wxyMsgCenter.scss'],
  templateUrl: './wxyMsgCenter.html'
})
export class WxyMsgCenter {

  public notifications:Array<Object>;
  public messages:Array<Object>;

  constructor(private _wxyMsgCenterService:WxyMsgCenterService) {
    this.notifications = this._wxyMsgCenterService.getNotifications();
    this.messages = this._wxyMsgCenterService.getMessages();
  }

}
