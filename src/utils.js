/*
 * Utils类
 * @Author: kdylan
 * @Date: 2018-03-01 16:17:59
 * @Last Modified by: kdylan
 * @Last Modified time: 2018-03-05 14:35:58
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
  },

  /**
   * 显示成功提示
   * @param {String} title 提示内容
   */
  showSuccess (title = '操作成功') {
    wepy.showToast({
      title: title,
      icon: 'success'
    })
  },

  /**
   * 显示错误提醒
   * @param {String} title 标题
   * @param {String} content 内容
   */
  showError (title, content) {
    if (arguments.length === 1) {
      content = title
      title = '错误'
    }
    return wepy.showModal({
      title,
      content,
      showCancel: false
    })
  },

  /**
   * 将数据保存到本地
   * @param {String} key 指定key
   * @param {String/Object} data 数据内容
   */
  setStorage (key, data) {
    return wepy.setStorage({
      key,
      data
    })
  },

  /**
   * 获取本地保存的数据
   * @param {String} key 指定key
   */
  getStorage (key) {
    return wepy.getStorage({ key })
  },

  /**
   * 删除本地保存的数据
   * @param {String} key 指定key
   */
  removeStorage (key) {
    return wepy.removeStorage({ key })
  }
}
