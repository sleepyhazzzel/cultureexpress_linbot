import culture_express_json from "../data/culture_express.json" assert { type: 'json' }

export default async (event) => {
  try {

    await event.reply({
      type: 'text',
      text: '呱呱'
    })

  } catch (error) {
    console.log(error)
  }
}