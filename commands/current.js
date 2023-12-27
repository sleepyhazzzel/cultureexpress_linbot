import culture_express_json from "../data/culture_express.json" assert { type: 'json' }
import multi_cards from "../templates/multi_cards.js"
import fs from 'node:fs'

export default async (event, type) => {
  try {
    const data = culture_express_json

    // 抓抓現在日期
    const now = new Date()
    const year = now.getFullYear()
    const month = (now.getMonth() + 1).toString().padStart(2, "0")
    const day = now.getDate().toString().padStart(2, "0")
    const date = new Date(`${year}-${month}-${day}`)

    // 定義各類別資料
    const img_url = []
    const title = []
    const place = []
    const currentIndex = []

    // data 跑迴圈
    data.forEach((item, index) => {
      let category = item.Category
      if (category.includes(type)) {

        // 如果沒有圖片檔案，跳過這個迴圈
        if (item.ImageFile !== null) {

          let start = new Date(item.StartDate.split(" ")[0])
          let end = new Date(item.EndDate.split(" ")[0])

          // 如果現在的日期在展覽期間
          if (date < end && date > start) {

            // 檔案 push 進陣列
            img_url.push(item.ImageFile)
            title.push(item.Caption)
            place.push(item.Venue)
            currentIndex.push(index) // 在 JSON 的 index
          }
        }
      }
    })
    let total = currentIndex.length
    console.log('total:', total)

    let numbers = new Set()
    let num_arr = []
    if (total >= 6) {
      // 隨機找五個數字當作 index，提取陣列中的資料
      while (numbers.size < 6) {
        let number = Math.floor(Math.random() * total)
        numbers.add(number)
      }
      num_arr = Array.from(numbers)
      console.log('num_arr:', num_arr)
    }
    else if (total > 0 && total < 6) {
      // 如果小於五個直接轉換成相應長度的陣列
      num_arr = Array.from({ length: total }, (_, index) => index)
      console.log('num_arr:', num_arr)
    }
    else {
      await event.reply(`目前沒有${type}`)
    }

    const cards = []
    // 生成多張卡片
    num_arr.forEach((item) => {
      const card = multi_cards()
      // 大圖
      card.hero.contents[0].url = img_url[item]
      // 類別
      card.hero.contents[1].contents[0].text = type
      // 按鈕寬度
      let wordsTotal = type.length
      if (wordsTotal === 2) {
        card.hero.contents[1].width = "50px"
      } else if (wordsTotal === 4) {
        card.hero.contents[1].width = "70px"
      } else if (wordsTotal === 5) {
        card.hero.contents[1].width = "90px"
      }
      // 名稱
      card.body.contents[0].text = title[item]
      // 地點
      card.body.contents[1].text = place[item]

      // JSON index      
      card.footer.contents[0].action.data = `${currentIndex[item]}`

      cards.push(card)
    })
    console.log(currentIndex)

    fs.writeFileSync('./temperary/multi_cards_C.json', JSON.stringify(cards, null, 2))

    await event.reply({
      type: 'flex',
      altText: `${type}資訊`,
      contents: {
        type: 'carousel',
        contents: cards
      }
    })

  } catch (error) {
    console.log(error)
  }
}