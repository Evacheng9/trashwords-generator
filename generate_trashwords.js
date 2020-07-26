// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generateTrashwords function
function generateTrashwords(options) {
  // define things user might want
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    design: ['畫一張圖', '改個 logo ', '順便幫忙設計一下', '隨便換個設計'],
    innovator: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  //generating trash words
  let trashWords = []
  if (Object.keys(options).length === 1) {
    if (options.engineer === 'engineer') {
      trashWords += sample(task.engineer)
    } else if (options.design === 'design') {
      trashWords += sample(task.design)
    } else if (options.innovator === 'innovator') {
      trashWords += sample(task.innovator)
    }
    trashWords += sample(phrase)
  } else if (Object.keys(options).length === 0) {
    // error notice if trashWords is empty
    trashWords = ['請選擇講幹話的對象:P']
  } else {
    // error notice if trashWords is more than one
    trashWords = ['一次選一個']
  }

  // return the generated trash words
  console.log(trashWords)
  return trashWords.toString()
}

// export generatePassword function for other files to use
module.exports = generateTrashwords
