import axios from "axios"
import * as cheerio from 'cheerio'
import single_card from "../templates/magazine_card.js"

export default async (event) => {
  try {
    const { data } = await axios.get('https://cultureexpress.taipei/Publication/C000007')
    const $ = cheerio.load(data)

    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const tw_year = year - 1911

    const card = single_card()
    let title = ''
    let img_url = ''
    let ebook_url = ''

    $('#mainbody .kf-item').each(function () {
      const text = $(this).find('.kf-text-content .kf-title').text().trim()
      if (text === `文化快遞${tw_year}年${month}月號`) {
        const uri = $(this).find('.kf-img img').attr('src')
        title = text
        img_url = `https://cultureexpress.taipei${uri}`
        ebook_url = `https://cultureexpress.taipei${$(this).attr('href')}`
      }
    })

    // 圖片
    card.body.contents[0].url = img_url
    // 標題
    card.body.contents[1].contents[0].contents[0].text = title
    // 電子書連結
    card.body.contents[1].contents[1].action.uri = ebook_url

    await event.reply({
      type: 'flex',
      altText: '藝文類別',
      contents: card
    })

  } catch (error) {
    console.log(error)
  }

}