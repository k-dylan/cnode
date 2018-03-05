/*
 * API请求模块
 * @Author: kdylan
 * @Date: 2018-03-01 17:12:05
 * @Last Modified by: kdylan
 * @Last Modified time: 2018-03-05 17:10:17
 */

import wepy from 'wepy'
import utils from './utils.js'
export default {
  /**
   * 登录
   * @param {String} accesstoken token
   */
  login (accesstoken) {
    let userinfo = null
    return wepy.request({
      url: 'accesstoken',
      method: 'POST',
      data: { accesstoken }
    }).then(({data}) => {
      if (!data.success) throw new Error('登录失败')
      userinfo = data
      // 登录成功，保存token
      return utils.setStorage('token', accesstoken)
    })
    .then(() => {
      return userinfo
    })
    .catch(() => {
      utils.hideLoading()
      utils.showError('登录失败', '登录失败，请重试')
    })
  },

  /**
   * 获取用户详情
   * @param {String} loginname 用户登录名
   */
  getUserDetails (loginname) {
    return wepy.request(`user/${loginname}`)
  },

  /**
   * 获取用户收藏的主题
   * @param {String} loginname 用户登录名
   */
  getUserCollect (loginname) {
    return wepy.request(`topic_collect/${loginname}`)
  }
}
