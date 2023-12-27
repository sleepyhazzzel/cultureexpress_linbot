import culture_express_json from "../data/culture_express.json" assert { type: 'json' }
import { distance } from './distance.js'
import multi_cards from '../templates/multi_cards.js'

export default async (event) => {
  try {
    // 抓抓現在日期
    const now = new Date()
    const year = now.getFullYear()
    const month = (now.getMonth() + 1).toString().padStart(2, "0")
    const date = now.getDate().toString().padStart(2, "0")

    const data = culture_express_json
    const nearBy = []

    data.forEach((item, index) => {
      if (item.ImageFile !== null && item.Latitude !== 0 && item.Longitude !== 0) {

        let start = item.StartDate.split(" ")[0].split("-")
        let end = item.EndDate.split(" ")[0].split("-")

        if (year <= end[0] && month <= end[1] && date <= end[2] &&
          year >= start[0] && month >= start[1] && date >= start[2]) {
          const howLong = distance(
            event.message.latitude,
            event.message.longitude,
            item.Latitude,
            item.Longitude,
            'K'
          )
          if (howLong < 2) {
            nearBy.push({
              item,
              distance: howLong,
              index
            })
          }
        }
      }
    })

    nearBy.sort((a, b) => {
      return a.distance - b.distance
    })

    if (nearBy.length > 6) {
      nearBy.slice(0, 6)
    }

    const cards = []

    nearBy.forEach((nearbyItem) => {
      const item = nearbyItem.item
      const howLong = nearbyItem.distance
      const index = nearbyItem.index

      const card = multi_cards()
      // 大圖
      card.hero.contents[0].url = item.ImageFile
      // 類別
      card.hero.contents[1].contents[0].text = item.Category
      // 按鈕寬度
      let wordsTotal = item.Category.length
      if (wordsTotal === 2) {
        card.hero.contents[1].width = "50px"
      } else if (wordsTotal === 4) {
        card.hero.contents[1].width = "70px"
      } else if (wordsTotal === 5) {
        card.hero.contents[1].width = "90px"
      }
      // 名稱
      card.body.contents[0].text = item.Caption
      // 地點
      // 距離
      let dis = howLong.toFixed(1)
      console.log(dis)
      card.body.contents[1].text = `${item.Venue}\r\n(距離${dis}公里)`
      // JSON index      
      card.footer.contents[0].action.data = `${index}`

      cards.push(card)
    })

    if (cards.length !== 0) {
      console.log('卡片收到')
      await event.reply({
        type: 'flex',
        altText: '附近展演',
        contents: {
          type: 'carousel',
          contents: cards
        }
      })
    } else {
      console.log('附近沒有')
      event.reply({
        type: 'text',
        text: '附近 2 公里內沒有展演活動'
      })
    }



  } catch (error) {
    console.log(error)
  }
}