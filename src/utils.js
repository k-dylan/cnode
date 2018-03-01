/*
 * Utils类
 * @Author: kdylan
 * @Date: 2018-03-01 16:17:59
 * @Last Modified by: kdylan
 * @Last Modified time: 2018-03-01 16:24:59
 */

import wepy from 'wepy'

export default {
  /**
   * 显示loading
   * @param {String} title 提示内容
   */
  showLoading (title = '加载中') {
    wepy.showLoading({ title })
  },
  /**
   * 隐藏loading
   */
  hideLoading () {
    wepy.hideLoading()
  }
}
