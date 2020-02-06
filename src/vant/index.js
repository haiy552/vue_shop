import Vue from 'vue'

// 底部导航
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
Vue.use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon);

// 字体
import { Icon } from 'vant';
Vue.use(Icon);

// 标签页
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

// 复选框
import { Checkbox } from 'vant';
Vue.use(Checkbox);

//步进器
import { Stepper } from 'vant';
Vue.use(Stepper);

//提示
import { Notify } from 'vant';
Vue.use(Notify);

