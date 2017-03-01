import {Injectable} from '@angular/core'

@Injectable()
export class WxyMsgCenterService {

  private _notifications = [
    {
      name: 'Vlad',
      text: '阿猫发表了一篇新文章.',
      time: '1 分钟前'
    },
    {
      name: 'Kostya',
      text: '阿狗更改了他的联络人信息.',
      time: '2 小时前'
    },
    {
      image: 'assets/img/shopping-cart.svg',
      text: '收到信订单.',
      time: '5 小时前'
    },
    {
      name: 'Andrey',
      text: '阿花回复了你的评论.',
      time: '1 天前'
    },
    {
      name: 'Nasta',
      text: '今天是阿草的生日.',
      time: '2 天前'
    },
    {
      image: 'assets/img/comments.svg',
      text: '你的文章有新评论.',
      time: '3 天前'
    },
    {
      name: 'Kostya',
      text: '阿鲁邀请你加入这个项目.',
      time: '1 周前'
    }
  ];

  private _messages = [
    {
      name: 'Nasta',
      text: '在你起床和跑步後，你可以放置Font Awesome圖標只是大約...',
      time: '1 分钟前'
    },
    {
      name: 'Vlad',
      text: '你問，Font Awesome在版本4.2中提供40個閃亮的新圖標。',
      time: '2 小时前'
    },
    {
      name: 'Kostya',
      text: '想要請求新圖標？ 就是這樣。 需要向量或想使用...',
      time: '10 小时前'
    },
    {
      name: 'Andrey',
      text: '通過參與，探索你的激情和發現新的。 伸展你的...',
      time: '1 天前'
    },
    {
      name: 'Nasta',
      text: '了解我們是誰 - 從內而外。 從我們的歷史和文化，到...',
      time: '1 天前'
    },
    {
      name: 'Kostya',
      text: '需要一些支持才能達到你的目標？ 申請各種獎學金...',
      time: '2 天前'
    },
    {
      name: 'Vlad',
      text: '將下拉菜單的觸發器和下拉菜單包含在.dropdown或...中。',
      time: '1 周前'
    }
  ];

  public getMessages():Array<Object> {
    return this._messages;
  }

  public getNotifications():Array<Object> {
    return this._notifications;
  }
}
