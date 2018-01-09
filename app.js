//app.js
import { formatPostDate } from 'utils/util.js'
import postGroup from 'data/mock.js'

App({
  onLaunch: function () {
    const { globalData } = this
    const posts = []

    postGroup.forEach(it => {
      it.date = formatPostDate(it.date)
      it.posts.forEach(p => {
        p.date = it.date
      })
      posts.push(...it.posts)
    })

    globalData.postGroup = postGroup
    globalData.posts = posts
  },
  globalData: {
    posts: [],
    postGroup: []
  }
})