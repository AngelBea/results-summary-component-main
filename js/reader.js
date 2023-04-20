fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        const results =[...data].map(it => Object.assign(new Result, it))
        const scoreMean = results.reduce((acc, it) => acc + it.score, 0)
        console.log(scoreMean)
        document.querySelector(".result-mean").textContent = (scoreMean / results.length)  | 0
        const resultsContainer = document.querySelector(".result-bars-container")
        results.forEach(result => result.appendTo(resultsContainer))
    })
    .catch(error => console.error(error))

class Result{
    constructor(){
        this.category
        this.score
        this.icon
    }

    appendTo(container){
        const div = document.createElement("div")
        div.className = `${this.category.toLowerCase()} score-container`

        const spanCategory = document.createElement("span")
        spanCategory.className = `name`
        spanCategory.textContent = this.category

        const spanScore = document.createElement("span")
        spanScore.className = `score`
        spanScore.textContent = this.score+''

        const spanHundred = document.createElement("span")
        spanHundred.className = "score-hundred"
        spanHundred.textContent = "/  100"

        const img = document.createElement("img")
        img.src = this.icon
        img.className = `icon-image`

        div.append(img)
        div.append(spanCategory)
        div.append(spanScore)
        div.append(spanHundred)

        container.append(div)
    }
}