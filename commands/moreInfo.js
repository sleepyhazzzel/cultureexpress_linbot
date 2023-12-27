import more_info from "../templates/more_info.js"
import culture_express_json from "../data/culture_express.json" assert { type: 'json' }
import fs from 'node:fs'

export default async (event, index) => {
  try {
    console.log("moreinfo收到")
    const template = more_info()
    const data = culture_express_json

    // 大圖
    template.hero.contents[0].url = data[index].ImageFile
    // 標題
    template.hero.contents[2].contents[0].text = data[index].Caption
    // 地點
    template.hero.contents[2].contents[1].text = data[index].Venue
    // 展覽、講座、表演、活動...
    template.hero.contents[3].contents[0].text = data[index].Category
    // 按鈕寬度
    let wordsTotal = data[index].Category.length
    if (wordsTotal === 2) {
      template.hero.contents[3].width = "50px"
    } else if (wordsTotal === 4) {
      template.hero.contents[3].width = "70px"
    } else if (wordsTotal === 5) {
      template.hero.contents[3].width = "90px"
    }

    const startDate = data[index].StartDate.split(" ")[0]
    const startTime = data[index].StartDate.split(" ")[1]
    const endDate = data[index].EndDate.split(" ")[0]
    const endTime = data[index].EndDate.split(" ")[1]
    // 日期
    template.body.contents[0].contents[1].text = `${startDate} → ${endDate}`
    // 時間
    template.body.contents[1].contents[1].text = `${startTime} → ${endTime}`
    // 簡介
    template.body.contents[2].contents[0].text = data[index].Introduction
    // 網站
    template.footer.contents[0].action.uri = data[index].WebsiteLink

    // 生成暫時 JSON
    await fs.writeFileSync('./temperary/more_info.json', JSON.stringify(template, null, 2))

    let reply = [{
      type: 'flex',
      altText: '更多資訊',
      contents: template
    }, {
      type: 'location',
      title: `${data[index].Venue}`,
      address: `${data[index].City}${data[index].Area}`,
      latitude: `${data[index].Latitude}`,
      longitude: `${data[index].Longitude}`
    }]

    if (data[index].Latitude === 0 || data[index].Longitude === 0) {
      reply.splice(1, 1)
    }

    await event.reply(reply)

  } catch (error) {
    console.log(error)
  }
}