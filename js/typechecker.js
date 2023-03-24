const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector(`span.fontweight-output`)

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const colorTags = document.querySelectorAll("div.colors div")

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
    // Changes the CSS
    outputTag.style.fontSize = this.value + "px"
    // Changes the HTML
    typesizeOutput.innerHTML = this.value + "px"
})

fontweightTag.addEventListener("input", function () {
    outputTag.style.fontWeight = this.value
    fontweightOutput.innerHTML = this.value
})

lineheightTag.addEventListener("input", function () {
    outputTag.style.lineHeight = this.value
    lineheightOutput.innerHTML = this.value
})

// When italic checkbox is activated, update the font style to either 
// Normal or italix if it's checked or not

italicTag.addEventListener("change", function () {
    if (this.checked) {
        outputTag.style.fontStyle = "italic"
    } else {
        outputTag.style.fontStyle = "normal"
    }
})


// When selection for typeface is changed, update the font family. 
typefaceTag.addEventListener("input", function () {
    outputTag.style.fontFamily = this.value 
})


// Go through all color tags
// When one is clicked, change background color and text color and display that the tag is selected
colorTags.forEach(tag => {

    tag.addEventListener("click", function () {
        outputTag.style.backgroundColor = this.style.backgroundColor
        outputTag.style.color = this.style.color

        // Reset the classes
        colorTags.forEach(tag => {
            tag.classList.remove("selected")
        })

        this.classList.add("selected")
    })

})