const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

// When use types the sectence tag, update the output tag accordingly
// When ther is no value, display orginal text
sentenceTag.addEventListener("keyup", function () {
    if (this.value) {
        outputTag.value = this.value
    } else {
        outputTag.value = originalText
    }
    
    // outputTag.innerHTML = this.value
})

// When type in output tag update the sentence tag accordingly. 
outputTag.addEventListener("keyup", function () {
    sentenceTag.value = this.value
})