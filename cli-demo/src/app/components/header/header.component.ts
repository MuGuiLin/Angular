import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menu: Array<string> = ['首页', '关于', '新闻', '招聘', '合作'];

  public list: any[] = ['abc', 123, true, undefined, null];

  private logo: string = '../../../assets/hx_tip_icon_1@1x.png';

  protected user: object = { name: '沐枫', avatar: '../../../assets/hx_icon@1x.png'}

  constructor() { }

  ngOnInit() {
    console.log('header组件初始化！')
  }

  ngOnDestroy(): void {
    //在实例销毁之前调用一次。
    //将“ implements OnDestroy”添加到类中。
    console.warn('+++++++++++ 08、生命周期钩子，ngOnDestroy()，在实例销毁之前调用一次');
  }

}
