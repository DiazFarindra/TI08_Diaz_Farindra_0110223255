void async function () {
    const components = document.querySelectorAll('component')

    for (const component of components) {
        const content = component.getAttribute('id')
        component.outerHTML = await (await fetch(`./components/${content}.html`)).text()
    }
} ()
