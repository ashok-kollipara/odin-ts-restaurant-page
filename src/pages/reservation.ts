export default function reserveContent(): HTMLElement {
    let bookingSection = document.createElement("div")
    bookingSection.classList.add("bookingSection")

    let sectionHeading = document.createElement("h1")
    sectionHeading.textContent = "Regional Taste: Reservations"

    let bookingDetails = document.createElement("div")
    bookingDetails.innerHTML = `
    <h3>Timings</h3>
    <ul>
        <li><b>Monday to Friday: </b>8AM to 11PM</li>
        <li><b>Saturday, Sunday: </b>7AM to 11:30PM</li>
    </ul>

    <h3>Contact Details</h3>
    <ul>
        <li><b>Telephone: </b>080-2345-0987</li>
        <li><b>Email: </b>enquiry@regional-taste.com</li>
        <li><b>We always welcome walk-ins</b></li>
    </ul>

    <h3>Location: </h3>
    <ul style="list-style-type: none">
        <li><b>Regional Taste</b></li>
        <li><b>6th Main, 100FT Road</b></li>
        <li><b>Defence Colony, Bangalore - 08</b></li>
    </ul>
    `

    bookingSection.append(
        sectionHeading,
        bookingDetails
    )

    return bookingSection
}
