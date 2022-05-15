const tabs = document.querySelectorAll('[data-event-tab-target]')
const tabContents = document.querySelectorAll('[data-event-tab-content]')

tabs.forEach(tab => {
    // console.log(tab.dataset)
    tab.addEventListener('click', () => {
        const target = document.querySelector(`#${tab.dataset.eventTabTarget}`)
        tabContents.forEach(tabContent => tabContent.classList.remove('active'))
        // console.log('removed active')
        tabs.forEach(tab => tab.classList.remove('active'))
        tab.classList.add('active')
        target.classList.add('active')
        // console.log('added active')
    })
})