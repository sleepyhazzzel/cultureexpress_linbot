import imagemap from "../templates/imagemap.js"

export default async (event) => {
  try {
    await event.reply([imagemap(), '點選上方分隔，可獲得更多資訊！'])

  } catch (error) {
    console.error(error)
  }
}
