import {WrapPage} from 'common-mpvue'
import App from './index'

new WrapPage(App)

export default {
  config: {
    navigationBarTitleText: '我的关注'
    // navigationBarTextStyle: '#fff',
    // navigationBarBackgroundColor: '#fff'
  }
}
