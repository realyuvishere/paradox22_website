function changeBg(url) {
    const bg = document.getElementById('dynamic_bg')

    bg.style.backgroundImage = `url('/imgs/events-posters/${url}')`
}

window.addEventListener("load", function() {
    const first = document.querySelectorAll('[data-event-tab-content]')[0]
    first.classList.add('active')
})

const tabs = document.querySelectorAll('[data-event-tab-target]')
const tabContents = document.querySelectorAll('[data-event-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        changeBg(tab.dataset.image)
        const target = document.querySelector(`#${tab.dataset.eventTabTarget}`)
        tabContents.forEach(tabContent => tabContent.classList.remove('active'))
        tabs.forEach(tab => tab.classList.remove('active'))
        tab.classList.add('active')
        target.classList.add('active')
    })
})