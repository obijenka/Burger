const anchors = document.querySelectorAll('.header-nav a')

anchors.forEach(anc => {
    anc.addEventListener('click', function(event) {
        event.preventDefault()

        const id = anc.getAttribute("href")
        const elem = document.querySelector(id)
        
        window.scroll({
            top: elem.offsetTop - 120,
            behavior: 'smooth',
        })
    })
})