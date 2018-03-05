import wepy from 'wepy'
import utils from '../utils'
import request from '../request'
import topicItem from '../components/topic-item'

export default class commonMixin extends wepy.mixin {
  data = {
    userData: {}
  }

  components = { topicItem }

  onLoad () {
    if (this.$parent.globalData.userInfo === null) {
      return utils.showError('您还未登录，请登录！').then(() => {
        wepy.navigateBack({delta: 1})
      })
    }
    let loginname = this.$parent.globalData.userInfo.loginname

    utils.showLoading()

    request.getUserDetails(loginname)
      .then(({data}) => {
        this.userData = data.data
        this.$apply()
        utils.hideLoading()
      })
  }
}
