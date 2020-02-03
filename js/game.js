'use stict'
var gQuestIdx = 0
var gQuests = [
    { id: 1, opts: ['Zubat!', 'Pikachu!', 'Pidgey!'], correctOptIndex: 1 },
    { id: 2, opts: ['Charmeleon', 'Charizard', 'Charmander'], correctOptIndex: 2 },
    { id: 3, opts: ['Squirtle', 'Caterpie', 'Blastoise'], correctOptIndex: 0 }
]

function init() {
    renderQuest(gQuestIdx)
}

function renderQuest(questIdx) {
    var currQuest = gQuests[questIdx]
    var strHtml = ''
    for (var i = 0; i < currQuest.opts.length; i++) {
        strHtml += `<button class="opt" onclick="onClick(${currQuest.correctOptIndex}, ${i})">
                        ${currQuest.opts[i]}
                    </button>`
    }
    var elQuest = document.querySelector('.quest')
    elQuest.innerHTML = strHtml
    var currentImg = document.querySelector('.card img')
    currentImg.src = `./img/${questIdx + 1}.png`
}

function onClick(questIdx, corrOptIdx) {
    if (corrOptIdx === questIdx) {
        if (gQuestIdx === gQuests.length - 1) {
            getVictoryMsg()
            return
        }
        gQuestIdx++
        renderQuest(gQuestIdx)
    }
}

function getVictoryMsg() {
    var vicMsg = document.querySelector('.msg')
    vicMsg.style.display = 'block'
}

function removeVictoryMsg() {
    var vicMsg = document.querySelector('.msg')
    vicMsg.style.display = 'none'
}

function restartGame() {
    gQuestIdx = 0
    renderQuest(gQuestIdx)
    removeVictoryMsg()
}