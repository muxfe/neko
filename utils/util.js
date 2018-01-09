/** 工具 */
const MilliSecondsOfOneday = 24 * 60 * 60 * 1000
const NumberOfChinese = ['今天', '昨天', '前天', '三', '四', '五', '六', '七', '八', '九', '十']

const isDate = date => date instanceof Date

const formatPostDate = param => {
  let date = param
  if (!isDate(param)) {
    date = new Date(param)
  }

  const now = new Date().getTime()
  const timestamp = date.getTime()
  const daysOfDelta = parseInt((now - timestamp) / MilliSecondsOfOneday)
  if (daysOfDelta < 3) {
    return NumberOfChinese[daysOfDelta]
  } else if (daysOfDelta < NumberOfChinese.length) {
    return `${NumberOfChinese[daysOfDelta]}天前`
  } else {
    return `${daysOfDelta} 天前`
  }
}

module.exports = {
  formatPostDate
}
