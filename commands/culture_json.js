import axios from 'axios'
import fs from 'node:fs' // node.js 引入 json 檔案

// 生成json
export default async () => {
    const { data } = await axios.get('https://cultureexpress.taipei/OpenData/Event/C000003')
    // writeFileSync => 寫入檔案
    // (命名檔名, JSON.stringify(data, 取代, 縮排空格數))
    fs.writeFileSync('./data/culture_express.json', JSON.stringify(data, null, 2))
}