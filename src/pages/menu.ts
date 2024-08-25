import { Dish, CuisineSection } from "./utils"

export default function menuContent(): HTMLElement {
    let menuSection = document.createElement("div")
    menuSection.classList.add("menuSection")

    let sectionHeading = document.createElement("h1")
    sectionHeading.textContent = "Regional Taste: Must try menu items"

    // create starters section
    let starters = new CuisineSection("Starters")
    starters.addDish(
        new Dish(
            "Paddu",
            "Paddu is an Indian dish made by steaming batter using a mould.",
            156.50
        )
    )

    // create mainCourse section
    let mainCourse = new CuisineSection("Main Course")
    mainCourse.addDish(
        new Dish(
            "Pappu / Andhra Dal",
            "Pappu is an Indian lentil soup made with seasoning of spices and tamarind",
            278.00
        )
    )

    // create mainCourse section
    let desserts = new CuisineSection("Desserts")
    desserts.addDish(
        new Dish(
            "Payasam",
            "Payasam is a pudding or porridge popular in the Indian subcontinent, usually made by boiling milk, sugar or jaggery, and rice. It can be additionally flavoured with dried fruits, nuts, cardamom and saffron. Instead of rice, it may contain cracked wheat, vermicelli, or tapioca.",
            116.00
        )
    )

    menuSection.append(
        sectionHeading,
        starters.getCuisineSectionHTML(),
        mainCourse.getCuisineSectionHTML(),
        desserts.getCuisineSectionHTML()
    )

    return menuSection
}
