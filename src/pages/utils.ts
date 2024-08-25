export class Dish {
    name: string;
    description: string;
    price: number;

    constructor(name: string, description: string, price: number) {
        this.name= name;
        this.description = description;
        this.price = price;
    }

    getDishHTML(): HTMLElement {
        let dishContainer = document.createElement("div")
        dishContainer.classList.add("dish")
        dishContainer.innerHTML = `
        <p style="font-weight: bold">${this.name}</p>
        <p style="font-style: italic">${this.description}</p>
        <p style="font-style: italic; font-weight: 700">Rs.${this.price}</p>
        `
        return dishContainer
    }
}

export class CuisineSection {
    name: string;
    dishes: Dish[];

    constructor(name: string) {
        this.name = name;
        this.dishes = []
    }

    addDish(dish: Dish): void {
        this.dishes.push(dish)
    }

    getCuisineSectionHTML(): HTMLElement {
        let cuisineContainer = document.createElement("div")
        cuisineContainer.classList.add("cuisine")

        let cuisineHeader = document.createElement("h2")
        cuisineHeader.textContent = this.name

        cuisineContainer.appendChild(cuisineHeader)
        this.dishes.forEach((dish) => {
            cuisineContainer.appendChild(dish.getDishHTML())
        })

        return cuisineContainer
    }
}
