import wepy from 'wepy'

export default class commonMixin extends wepy.mixin {
  data = {
    tabs: {
      all: '全部',
      good: '精华',
      share: '分享',
      ask: '问答',
      job: '招聘'
    }
  }
}
