export default function homeContent(): HTMLElement {
    let homeSection = document.createElement("div")
    homeSection.classList.add("homeSection")

    let sectionHeading = document.createElement("h1")
    sectionHeading.textContent = "Regional Taste: A Culinary Journey Through South Indian Flavors"

    let caption = document.createElement("h2")
    caption.textContent = "The Birth of a South Indian Culinary Icon"

    let about = document.createElement("div")
    about.classList.add("about")
    about.innerHTML =`
    <p>In 1975, amidst the bustling streets of a vibrant Indian city, a new restaurant emerged that would soon become synonymous with authentic South Indian cuisine. "Regional Taste" opened its doors, promising to bring the rich, diverse flavors of South India to food enthusiasts.</p>
    
    <h3>Humble Beginnings</h3>
    <p>Founded by the passionate culinary expert, Mr. Ramachandran, Regional Taste started as a small, family-run establishment. With just a handful of tables and a menu featuring classic South Indian dishes, the restaurant quickly gained popularity for its authentic flavors and warm hospitality.</p>
    
    <h3>Mastering the Art of South Indian Cuisine</h3>
    <p>From the beginning, Regional Taste set itself apart by focusing exclusively on South Indian cuisine. The restaurant became renowned for its mastery of dishes like:</p>
    <ul>
        <li>Dosa: Crispy, fermented crepes served with various chutneys and sambar</li>
        <li>Idli: Steamed rice cakes, a breakfast staple</li>
        <li>Vada: Savory, deep-fried lentil donuts</li>
        <li>Uttapam: Thick pancakes topped with vegetables</li>
        <li>Kerala-style fish curry: A spicy, coconut-based seafood delicacy</li>
    </ul>
    
    <h3>Expansion and Recognition</h3>
    <p>Throughout the 1980s and 1990s, Regional Taste's reputation grew. The restaurant expanded to accommodate more diners and opened branches in neighboring cities. Food critics praised its commitment to authentic flavors and traditional cooking methods.</p>
    
    <h3>Preserving Tradition in a Changing World</h3>
    <p>As the culinary landscape evolved, Regional Taste remained true to its roots. While many restaurants embraced fusion cuisine, Regional Taste continued to focus on preserving and showcasing traditional South Indian recipes. This dedication to authenticity became its unique selling point.</p>
    
    <h3>Community Engagement and Cultural Ambassador</h3>
    <p>Beyond serving delicious meals, Regional Taste became a cultural ambassador for South Indian cuisine. The restaurant regularly hosted cooking classes, food festivals, and cultural events, educating people about the rich culinary heritage of South India.</p>
    
    <h3>Awards and Accolades</h3>
    <p>Over the years, Regional Taste has received numerous awards for its contribution to South Indian cuisine, including:</p>
    <ul>
        <li>Best South Indian Restaurant (multiple years)</li>
        <li>Cultural Preservation Award</li>
        <li>Excellence in Traditional Cooking Methods</li>
    </ul>
    
    <h3>Looking to the Future</h3>
    <p>Today, nearly five decades after its founding, Regional Taste continues to be a beloved institution. While staying true to its traditional roots, the restaurant has embraced modern practices in hygiene, service, and sustainability.</p>`

    homeSection.append(sectionHeading, caption, about)

    return homeSection
}
