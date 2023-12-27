export default () => {
  return {
    "type": "bubble",
    "size": "mega",
    "hero": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "image",
          "url": "https://cultureexpress.taipei/UploadPlugin?file=%2fw6lriPeTD4Ry1335WB016m%2ftqayudKNc%2bxSlT0eOXu3rameBrGTFl%2bflom4bTxZ%2fPeaaJsMzN51rFdvff0uQyPAsKGI2Nddm4Krd5%2fc%2bDo%3d",
          "size": "full",
          "aspectMode": "cover",
          "aspectRatio": "20:13",
          "gravity": "center"
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [],
          "position": "absolute",
          "background": {
            "type": "linearGradient",
            "angle": "0deg",
            "endColor": "#00000000",
            "startColor": "#00000099"
          },
          "width": "100%",
          "height": "50%",
          "offsetBottom": "0px",
          "offsetStart": "0px",
          "offsetEnd": "0px"
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "FUTURE VISION LAB 2023",
              "color": "#ffffff",
              "size": "lg",
              "weight": "bold",
              "wrap": true
            },
            {
              "type": "text",
              "text": "臺灣當代文化實驗場 東草坪",
              "color": "#ffffff",
              "size": "sm"
            }
          ],
          "position": "absolute",
          "offsetBottom": "0px",
          "offsetStart": "0px",
          "offsetEnd": "0px",
          "paddingBottom": "15px",
          "paddingStart": "20px",
          "paddingEnd": "20px"
        },
        {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "展覽",
              "size": "xs",
              "color": "#ffffff"
            }
          ],
          "position": "absolute",
          "width": "53px",
          "height": "25px",
          "backgroundColor": "#000000",
          "cornerRadius": "20px",
          "justifyContent": "center",
          "alignItems": "center",
          "offsetTop": "15px",
          "offsetStart": "15px"
        }
      ],
      "paddingAll": "0px"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "Date",
              "flex": 1,
              "size": "sm",
              "color": "#aaaaaa"
            },
            {
              "type": "text",
              "text": "2023-10-11 → 2023-10-21",
              "flex": 5,
              "size": "sm",
              "color": "#666666",
              "wrap": true
            }
          ],
          "spacing": "sm"
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "Time",
              "flex": 1,
              "size": "sm",
              "color": "#aaaaaa"
            },
            {
              "type": "text",
              "text": "09:00-17:00",
              "flex": 5,
              "size": "sm",
              "color": "#666666",
              "wrap": true
            }
          ],
          "spacing": "sm"
        },
        {
          "type": "box",
          "layout": "baseline",
          "contents": [
            {
              "type": "text",
              "text": "「FUTURE VISION LAB 2023」實驗展演計畫「DOME 2.0」升級計畫，重新打造升級版的戶外穹頂劇場（DOME），延續多元及實驗精神，以數位建築發展更具演算特色之外型，打造接軌國際規格的創作環境，讓觀眾全天候享受更高品質的沉浸式感官內容，感受臺灣的創造力。",
              "wrap": true,
              "color": "#666666",
              "size": "sm"
            }
          ]
        }
      ],
      "margin": "lg",
      "spacing": "sm"
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "button",
          "action": {
            "type": "uri",
            "label": "WEBSITE",
            "uri": "http://linecorp.com/"
          },
          "height": "sm",
          "offsetBottom": "sm"
        }
      ]
    }
  }
}