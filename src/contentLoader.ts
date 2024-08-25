import homeContent from "./pages/home";
import menuContent from "./pages/menu";
import reserveContent from "./pages/reservation";

export function contentFetcher(page: string): HTMLElement {
    console.log("Inside contentFetcher with trigger: ", page)
    switch (page) {
        case "menu":
            console.log("Rendering menu page")
            return menuContent()
        case "reserve":
            console.log("Rendering reservation page")
            return reserveContent()
        case "home":
        default:
            console.log("Rendering Home page")
            return homeContent()
    }
}
