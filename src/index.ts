import "./index.css"
import { contentFetcher } from "./contentLoader"

(() => {
    console.log("Script Init")
    const body = document.querySelector("body")
    const homeButton = body?.querySelector("#home")
    const menuButton = body?.querySelector("#menu")
    const reserveButton = body?.querySelector("#reserve")

    let contentDiv = body?.querySelector("#content")
    if (contentDiv !=  null || contentDiv != undefined) {
        contentDiv.appendChild(contentFetcher("home"))
    }

    function feedContent(this: HTMLElement, event: Event) {
        console.log("Got click on button:", this.id, "with event", event.type)
        if (contentDiv != undefined) {
            contentDiv.innerHTML = ""
            console.log("Appending child to contentdiv", this.id)
            contentDiv.appendChild(contentFetcher(this.id))
        }
    }

    // add event listeners
    homeButton?.addEventListener("click", feedContent)
    menuButton?.addEventListener("click", feedContent)
    reserveButton?.addEventListener("click", feedContent)

})()
