const sentenceTag = document.querySelector(`input[type="text"]`)
const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")
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

// When the typesize slider changes, update the text next to it AND
// Change the outputTag's font size
typesizeTag.addEventListener("input", function () {
    outputTag.style.fontSize = this.value + "px"
    typesizeOutput.innerHTML = this.value + "px"
})