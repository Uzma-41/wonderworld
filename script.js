/* ============================================
   WanderWorld - Main JavaScript File
   All interactive features powered by vanilla JS
   ============================================ */

// ===== CITY DATA (Mini Database) =====
// All destination information stored as a JavaScript object
const cityData = {
    goa: {
        name: "Goa, India", emoji: "🏖️", tagline: "Sun, Sand & Serenity",
        hero: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=80",
        about: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=800&q=80",
        desc: "Goa is India's smallest state but its biggest party destination! Located on the western coast, this former Portuguese colony is famous for its stunning beaches, vibrant nightlife, historic churches, and delicious seafood cuisine.",
        desc2: "From the lively beaches of North Goa like Baga and Calangute to the serene shores of South Goa like Palolem, there's something for every traveler. The UNESCO-listed churches of Old Goa add a cultural dimension to your beach holiday.",
        places: [
            { name: "Baga Beach", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80", desc: "Famous for water sports, nightlife, and beachside shacks." },
            { name: "Basilica of Bom Jesus", img: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=400&q=80", desc: "UNESCO World Heritage church from 1605 with baroque architecture." },
            { name: "Dudhsagar Falls", img: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&q=80", desc: "Stunning four-tiered waterfall on the Mandovi River, 310m tall." },
            { name: "Fort Aguada", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80", desc: "17th-century Portuguese fort with a lighthouse and ocean views." }
        ],
        food: [
            { name: "Fish Curry Rice", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80", desc: "Signature Goan dish with coconut curry" },
            { name: "Vindaloo", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80", desc: "Spicy Portuguese-influenced meat curry" },
            { name: "Bebinca", img: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80", desc: "Traditional 7-layer coconut pudding" }
        ],
        culture: [
            { title: "Goa Carnival", desc: "3-day festival with parades, music, and dancing. A Portuguese legacy celebrated every February.", tags: ["Festival", "Dance", "Heritage"] },
            { title: "Portuguese Architecture", desc: "450 years of Portuguese rule left gorgeous churches, colorful Latin Quarter houses, and unique Indo-Portuguese cuisine.", tags: ["Architecture", "UNESCO", "History"] }
        ],
        budget: { low: "$20–30/day", mid: "$50–80/day", luxury: "$150+/day" },
        tips: ["Visit during October–March for the best weather", "Rent a scooter to explore — it's the best way around", "Try local feni (cashew liquor) responsibly", "Book beach shacks in advance during peak season", "Carry sunscreen and stay hydrated"],
        gallery: [
            "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
            "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?w=400&q=80",
            "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&q=80",
            "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80",
            "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=400&q=80"
        ],
        weather: { temp: "28°C", desc: "Tropical & Warm", best: "October – March" }
    },
    mumbai: {
        name: "Mumbai, India", emoji: "🌆", tagline: "The City That Never Sleeps",
        hero: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1920&q=80",
        about: "https://images.unsplash.com/photo-1567157577867-05ccb1388e13?w=800&q=80",
        desc: "Mumbai, formerly Bombay, is India's largest city and financial capital. This vibrant metropolis is the heart of Bollywood, home to iconic landmarks, legendary street food, and a spirit that never gives up.",
        desc2: "From the majestic Gateway of India to the glittering Marine Drive, from the bustling markets of Crawford to the serene Elephanta Caves, Mumbai offers an incredible mix of history, culture, and modernity.",
        places: [
            { name: "Gateway of India", img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80", desc: "Iconic arch monument built in 1924, overlooking the Arabian Sea." },
            { name: "Marine Drive", img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e13?w=400&q=80", desc: "3.6km promenade known as the Queen's Necklace at night." },
            { name: "Elephanta Caves", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80", desc: "UNESCO site with ancient Hindu cave temples on an island." },
            { name: "Chhatrapati Shivaji Terminus", img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=400&q=80", desc: "UNESCO-listed Victorian Gothic railway station." }
        ],
        food: [
            { name: "Vada Pav", img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80", desc: "Mumbai's iconic potato fritter burger" },
            { name: "Pav Bhaji", img: "https://images.unsplash.com/photo-1606491956689-2ea866880049?w=400&q=80", desc: "Buttery mashed veggies with toasted bread" },
            { name: "Bhel Puri", img: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80", desc: "Tangy puffed rice chaat snack" }
        ],
        culture: [
            { title: "Ganesh Chaturthi", desc: "Mumbai's biggest festival — 10 days of grand celebrations with massive Ganesha idols, processions, drums, and immersion ceremony.", tags: ["Festival", "Religious", "10-Day"] },
            { title: "Bollywood", desc: "The world's largest film industry by output. Visit Film City, spot celebrities, and experience the magic of Indian cinema.", tags: ["Cinema", "Entertainment", "Culture"] }
        ],
        budget: { low: "$25–35/day", mid: "$60–100/day", luxury: "$200+/day" },
        tips: ["Use local trains during off-peak hours", "Try street food at Mohammad Ali Road", "Visit during November–February for pleasant weather", "Download the m-Indicator app for train schedules", "Carry an umbrella during monsoon (June–September)"],
        gallery: [
            "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80",
            "https://images.unsplash.com/photo-1567157577867-05ccb1388e13?w=400&q=80",
            "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=400&q=80",
            "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80"
        ],
        weather: { temp: "30°C", desc: "Hot & Humid", best: "November – February" }
    },
    kashmir: {
        name: "Kashmir, India", emoji: "🏔️", tagline: "Paradise on Earth",
        hero: "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=1920&q=80",
        about: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
        desc: "Kashmir, nestled in the Himalayas, is called Paradise on Earth for good reason. Snow-capped mountains, pristine Dal Lake, lush Mughal gardens, and warm hospitality make it a dream destination.",
        desc2: "Whether you're gliding on a Shikara across Dal Lake, trekking through alpine meadows, or savoring a traditional Wazwan feast, Kashmir offers an experience that stays with you forever.",
        places: [
            { name: "Dal Lake", img: "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=400&q=80", desc: "Iconic lake with houseboats, shikaras, and floating gardens." },
            { name: "Gulmarg", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", desc: "World's highest gondola ride and premier ski destination." },
            { name: "Pahalgam", img: "https://images.unsplash.com/photo-1465220183275-1faa863377e3?w=400&q=80", desc: "Valley of Shepherds — gateway to Amarnath pilgrimage." },
            { name: "Mughal Gardens", img: "https://images.unsplash.com/photo-1585136917250-874e1bd88a0f?w=400&q=80", desc: "Shalimar Bagh and Nishat Bagh — terraced Persian-style gardens." }
        ],
        food: [
            { name: "Rogan Josh", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=400&q=80", desc: "Aromatic lamb curry with Kashmiri spices" },
            { name: "Dum Aloo", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80", desc: "Stuffed potatoes in rich yogurt gravy" },
            { name: "Kahwa Tea", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80", desc: "Traditional saffron-almond green tea" }
        ],
        culture: [
            { title: "Wazwan Feast", desc: "A grand multi-course meal with 36 dishes served at celebrations. The pinnacle of Kashmiri culinary tradition.", tags: ["Food", "Traditional", "Feast"] },
            { title: "Pashmina & Handicrafts", desc: "World-famous Pashmina shawls, hand-knotted carpets, and papier-mâché artwork — centuries-old artisan traditions.", tags: ["Handicrafts", "Pashmina", "Heritage"] }
        ],
        budget: { low: "$20–30/day", mid: "$50–90/day", luxury: "$180+/day" },
        tips: ["Best time: March–October for summer, December–February for snow", "Book houseboats on Dal Lake for a unique experience", "Carry warm clothes even in summer evenings", "Try a Shikara ride at sunset — it's magical", "Hire a local guide for treks"],
        gallery: [
            "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=400&q=80",
            "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
            "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80",
            "https://images.unsplash.com/photo-1465220183275-1faa863377e3?w=400&q=80"
        ],
        weather: { temp: "22°C", desc: "Cool & Pleasant", best: "March – October" }
    }
};

// Add remaining cities with same structure
cityData.himachal = {
    name: "Himachal Pradesh, India", emoji: "⛰️", tagline: "Land of the Gods",
    hero: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80",
    about: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    desc: "Himachal Pradesh, the Land of Gods, offers majestic Himalayan landscapes, ancient temples, thrilling adventure sports, and serene hill stations surrounded by pine forests and snow peaks.",
    desc2: "From Shimla's colonial charm to Dharamsala's Tibetan culture, from Kasol's hippie vibes to Spiti's moonlike landscapes — Himachal is an adventure lover's paradise.",
    places: [
        { name: "Shimla", img: "https://images.unsplash.com/photo-1597074866923-dc0589150458?w=400&q=80", desc: "Colonial hill station and state capital with Mall Road." },
        { name: "Dharamsala", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", desc: "Home of the Dalai Lama and Tibetan Buddhist culture." },
        { name: "Spiti Valley", img: "https://images.unsplash.com/photo-1465220183275-1faa863377e3?w=400&q=80", desc: "Remote desert mountain valley with ancient monasteries." },
        { name: "Kasol", img: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&q=80", desc: "Mini Israel of India — backpacker's paradise in Parvati Valley." }
    ],
    food: [
        { name: "Himachali Dham", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80", desc: "Traditional festive feast with multiple courses" },
        { name: "Siddu", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80", desc: "Wheat bread stuffed with poppy seeds" },
        { name: "Madra", img: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80", desc: "Chickpeas cooked in yogurt gravy" }
    ],
    culture: [
        { title: "Kullu Dussehra", desc: "Unique 7-day festival where 300+ local deities are carried in processions to Kullu Valley.", tags: ["Festival", "Deities", "Heritage"] },
        { title: "Nati Dance", desc: "Guinness record largest folk dance performed during festivals with colorful traditional attire.", tags: ["Dance", "World Record", "Folk"] }
    ],
    budget: { low: "$15–25/day", mid: "$40–70/day", luxury: "$150+/day" },
    tips: ["Carry layers — weather changes rapidly", "Get permits for Spiti/Kinnaur in advance", "Best months: March–June and September–November", "Road conditions vary — check before planning", "Try local fruit orchards in Kullu valley"],
    gallery: ["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400&q=80", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", "https://images.unsplash.com/photo-1465220183275-1faa863377e3?w=400&q=80", "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&q=80"],
    weather: { temp: "18°C", desc: "Cool Mountain Air", best: "March – June" }
};

cityData.manali = {
    name: "Manali, India", emoji: "🏔️", tagline: "Adventure in the Mountains",
    hero: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=1920&q=80",
    about: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800&q=80",
    desc: "Manali is a high-altitude Himalayan resort town in Himachal Pradesh. It's a gateway for skiing, trekking, and adventure sports, with stunning mountain scenery and a vibrant backpacker culture.",
    desc2: "Nestled in the Beas River valley, Manali offers Solang Valley adventures, Rohtang Pass snow, Hadimba Temple, and a blend of Himachali and Tibetan culture that makes it unforgettable.",
    places: [
        { name: "Solang Valley", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", desc: "Adventure hub for skiing, paragliding, and zorbing." },
        { name: "Rohtang Pass", img: "https://images.unsplash.com/photo-1465220183275-1faa863377e3?w=400&q=80", desc: "High mountain pass at 3,978m with snow year-round." },
        { name: "Hadimba Temple", img: "https://images.unsplash.com/photo-1585136917250-874e1bd88a0f?w=400&q=80", desc: "Ancient wooden temple in cedar forest, built 1553." },
        { name: "Old Manali", img: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&q=80", desc: "Charming village with cafes, markets, and mountain views." }
    ],
    food: [
        { name: "Momos", img: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=400&q=80", desc: "Tibetan steamed dumplings with chili sauce" },
        { name: "Thukpa", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80", desc: "Hot Tibetan noodle soup — perfect for cold nights" },
        { name: "Trout Fish", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80", desc: "Fresh river trout grilled or fried" }
    ],
    culture: [
        { title: "Hadimba Temple", desc: "Ancient 1553 pagoda-style temple dedicated to Hadimba Devi, set in a stunning cedar forest.", tags: ["Temple", "Heritage", "1553"] },
        { title: "Winter Carnival", desc: "Annual celebration with folk music, dance, cultural shows, and adventure sports competitions in the snow.", tags: ["Festival", "Winter", "Adventure"] }
    ],
    budget: { low: "$15–25/day", mid: "$40–80/day", luxury: "$160+/day" },
    tips: ["Get Rohtang Pass permits online in advance", "Visit May–June or October–February", "Carry altitude sickness medication", "Book river rafting on Beas River", "Old Manali has the best cafes and vibes"],
    gallery: ["https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=400&q=80", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", "https://images.unsplash.com/photo-1465220183275-1faa863377e3?w=400&q=80", "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&q=80"],
    weather: { temp: "15°C", desc: "Cool & Crisp", best: "October – June" }
};

cityData.kerala = {
    name: "Kerala, India", emoji: "🌴", tagline: "God's Own Country",
    hero: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80",
    about: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    desc: "Kerala, known as God's Own Country, is a tropical paradise on India's southwestern coast. Famous for serene backwaters, lush tea gardens, Ayurvedic treatments, and rich cultural traditions.",
    desc2: "From houseboat cruises through palm-lined canals to misty hill stations of Munnar, from ancient Kathakali performances to spice plantations — Kerala is an unforgettable sensory experience.",
    places: [
        { name: "Alleppey Backwaters", img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80", desc: "Venice of the East — houseboat cruises through canals." },
        { name: "Munnar Tea Gardens", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80", desc: "Rolling hills covered in emerald tea plantations." },
        { name: "Kochi Fort", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80", desc: "Historic port city with Chinese fishing nets and spice markets." },
        { name: "Wayanad", img: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&q=80", desc: "Lush wildlife sanctuary with waterfalls and tribal culture." }
    ],
    food: [
        { name: "Kerala Sadya", img: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&q=80", desc: "Grand feast on banana leaf with 24+ dishes" },
        { name: "Appam & Stew", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80", desc: "Lacy rice pancakes with coconut milk stew" },
        { name: "Fish Curry", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80", desc: "Meen Curry — tangy fish in clay pot" }
    ],
    culture: [
        { title: "Kathakali Dance", desc: "Elaborate classical dance-drama with vivid makeup, costumes, and storytelling from Hindu epics.", tags: ["Dance", "Classical", "Art"] },
        { title: "Onam Festival", desc: "Harvest festival with snake boat races, flower carpets (Pookalam), and grand Onam Sadya feasts.", tags: ["Onam", "Boat Race", "Harvest"] }
    ],
    budget: { low: "$20–30/day", mid: "$50–90/day", luxury: "$200+/day" },
    tips: ["Best time: September–March", "Book houseboats for overnight backwater cruise", "Try Ayurvedic spa treatments", "Visit during Onam for the grandest celebrations", "Carry rain gear — Kerala gets heavy monsoons"],
    gallery: ["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&q=80", "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80", "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80", "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&q=80"],
    weather: { temp: "27°C", desc: "Tropical & Humid", best: "September – March" }
};

cityData.dubai = {
    name: "Dubai, UAE", emoji: "🏙️", tagline: "Where Dreams Touch the Sky",
    hero: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80",
    about: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    desc: "Dubai is a futuristic city of superlatives — the tallest building, the largest mall, the most luxurious hotels. This desert oasis blends ultra-modern architecture with rich Arabian heritage.",
    desc2: "From the soaring Burj Khalifa to thrilling desert safaris, from gold souks to man-made islands, Dubai offers a jaw-dropping experience that pushes the boundaries of imagination.",
    places: [
        { name: "Burj Khalifa", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80", desc: "World's tallest building at 828m with observation deck." },
        { name: "Dubai Mall", img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&q=80", desc: "World's largest mall with aquarium, ice rink & 1,200+ stores." },
        { name: "Palm Jumeirah", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80", desc: "Iconic manmade island shaped like a palm tree." },
        { name: "Desert Safari", img: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400&q=80", desc: "Dune bashing, camel rides, and Bedouin camp dinner." }
    ],
    food: [
        { name: "Al Machboos", img: "https://images.unsplash.com/photo-1541518763-27a96de3132c?w=400&q=80", desc: "Traditional spiced rice with meat" },
        { name: "Shawarma", img: "https://images.unsplash.com/photo-1561651188-d207bbec4ec3?w=400&q=80", desc: "Iconic Middle Eastern wrap" },
        { name: "Luqaimat", img: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80", desc: "Sweet fried dumplings with date syrup" }
    ],
    culture: [
        { title: "Desert Safari & Bedouin Culture", desc: "Experience traditional Arabian culture with desert safaris, henna painting, belly dancing, and stargazing in the dunes.", tags: ["Desert", "Arabian", "Adventure"] },
        { title: "Dubai Shopping Festival", desc: "Annual mega shopping event with incredible deals, entertainment, fireworks, and raffles attracting millions of visitors.", tags: ["Shopping", "Festival", "Luxury"] }
    ],
    budget: { low: "$60–90/day", mid: "$150–250/day", luxury: "$500+/day" },
    tips: ["Visit November–March for cooler weather", "Friday is the weekend — malls are busiest", "Dress modestly in traditional areas", "Metro is the cheapest way to travel", "Book Burj Khalifa tickets online to avoid queues"],
    gallery: ["https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80", "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&q=80", "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400&q=80", "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=400&q=80"],
    weather: { temp: "35°C", desc: "Hot & Sunny", best: "November – March" }
};

cityData.paris = {
    name: "Paris, France", emoji: "🗼", tagline: "The City of Love",
    hero: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80",
    about: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
    desc: "Paris, the City of Light, is the world's most romantic city. Home to the Eiffel Tower, Louvre Museum, and Notre-Dame, it's a treasure trove of art, culture, fashion, and gastronomy.",
    desc2: "Stroll along the Seine, sip café au lait at a sidewalk bistro, wander through Montmartre's artistic streets, and experience world-class cuisine — Paris is a dream come true for every traveler.",
    places: [
        { name: "Eiffel Tower", img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80", desc: "Iconic 330m iron tower — symbol of France since 1889." },
        { name: "Louvre Museum", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80", desc: "World's largest art museum — home to the Mona Lisa." },
        { name: "Notre-Dame", img: "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=400&q=80", desc: "Medieval cathedral masterpiece on Île de la Cité." },
        { name: "Montmartre", img: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=400&q=80", desc: "Artistic hilltop with Sacré-Cœur and street painters." }
    ],
    food: [
        { name: "Croissants", img: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=400&q=80", desc: "Buttery, flaky French pastry perfection" },
        { name: "Crème Brûlée", img: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80", desc: "Rich vanilla custard with caramelized sugar top" },
        { name: "French Onion Soup", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80", desc: "Hearty soup with melted Gruyère cheese" }
    ],
    culture: [
        { title: "Art & Museums", desc: "The Louvre, Musée d'Orsay, and hundreds of galleries make Paris the art capital of the world.", tags: ["Louvre", "Art", "Museums"] },
        { title: "Bastille Day", desc: "France's national day (July 14) features magnificent fireworks at the Eiffel Tower, parades, and celebrations.", tags: ["Festival", "Fireworks", "National Day"] }
    ],
    budget: { low: "$70–100/day", mid: "$150–250/day", luxury: "$500+/day" },
    tips: ["Buy Museum Pass for skip-the-line access", "Visit Eiffel Tower at twilight for the light show", "Learn basic French phrases — locals appreciate it", "Use the Metro — it's fast and affordable", "Book restaurants in advance for popular spots"],
    gallery: ["https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80", "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&q=80", "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=400&q=80", "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=400&q=80"],
    weather: { temp: "16°C", desc: "Mild & Temperate", best: "April – October" }
};

cityData.bali = {
    name: "Bali, Indonesia", emoji: "🌺", tagline: "Island of the Gods",
    hero: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80",
    about: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    desc: "Bali is a tropical paradise known as the Island of the Gods. With its stunning rice terraces, ancient temples, vibrant culture, world-class surfing, and warm hospitality, it captivates every visitor.",
    desc2: "From Ubud's artistic heart to Seminyak's beach clubs, from the sacred Uluwatu Temple to the volcanic Mount Batur sunrise trek — Bali offers spiritual rejuvenation and tropical adventure.",
    places: [
        { name: "Ubud Rice Terraces", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80", desc: "Stunning Tegallalang terraces — UNESCO cultural landscape." },
        { name: "Uluwatu Temple", img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&q=80", desc: "Clifftop sea temple with Kecak fire dance at sunset." },
        { name: "Mount Batur", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", desc: "Active volcano — famous sunrise trek at 1,717m." },
        { name: "Tanah Lot", img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&q=80", desc: "Iconic sea temple perched on a rock offshore." }
    ],
    food: [
        { name: "Nasi Goreng", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80", desc: "Indonesian fried rice with sweet soy & egg" },
        { name: "Babi Guling", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80", desc: "Celebratory spit-roasted suckling pig" },
        { name: "Satay", img: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80", desc: "Grilled meat skewers with peanut sauce" }
    ],
    culture: [
        { title: "Kecak Fire Dance", desc: "Mesmerizing dance performed at sunset at Uluwatu Temple, with 70+ men chanting 'cak' in unison.", tags: ["Dance", "Uluwatu", "Sunset"] },
        { title: "Nyepi — Day of Silence", desc: "Bali's unique New Year — the entire island goes completely silent. No lights, no travel, no activity for 24 hours.", tags: ["Nyepi", "Unique", "Spiritual"] }
    ],
    budget: { low: "$25–40/day", mid: "$60–100/day", luxury: "$250+/day" },
    tips: ["Visit April–October for dry season", "Rent a scooter to explore (get international permit)", "Respect temple dress codes — sarongs required", "Try a sunrise trek at Mount Batur", "Ubud is the cultural heart — spend at least 3 days"],
    gallery: ["https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80", "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&q=80", "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&q=80", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"],
    weather: { temp: "27°C", desc: "Tropical & Warm", best: "April – October" }
};

// ============================================
// ===== DOM READY — Initialize Everything =====
// ============================================
document.addEventListener('DOMContentLoaded', function () {

    // ----- LOADING SPINNER -----
    // Hide the spinner after page loads
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        setTimeout(() => spinner.classList.add('hidden'), 800);
    }

    // ----- SCROLL PROGRESS BAR -----
    // Updates a thin bar at the top showing how far user has scrolled
    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        const progressBar = document.getElementById('scroll-progress');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
    });

    // ----- NAVBAR SCROLL EFFECT -----
    // Adds 'scrolled' class to navbar when user scrolls down
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 80) {
                navbar.classList.add('scrolled');
            } else {
                // Only remove if not on inner pages (they start scrolled)
                if (document.querySelector('.hero')) {
                    navbar.classList.remove('scrolled');
                }
            }
        });
    }

    // ----- HAMBURGER MENU (Mobile) -----
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('mobile-open');
        });
        // Close mobile menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navLinks.classList.remove('mobile-open');
            });
        });
    }

    // ----- DARK / LIGHT MODE TOGGLE -----
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        // Check saved preference from localStorage
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        themeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            // Save preference to localStorage so it persists
            localStorage.setItem('darkMode', isDark);
        });
    }

    // ----- HERO IMAGE SLIDER -----
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dots .dot');
    if (heroSlides.length > 0) {
        let currentSlide = 0;
        function showSlide(index) {
            heroSlides.forEach(function (s) { s.classList.remove('active'); });
            heroDots.forEach(function (d) { d.classList.remove('active'); });
            heroSlides[index].classList.add('active');
            if (heroDots[index]) heroDots[index].classList.add('active');
        }
        // Auto-advance slides every 5 seconds
        setInterval(function () {
            currentSlide = (currentSlide + 1) % heroSlides.length;
            showSlide(currentSlide);
        }, 5000);
        // Click dots to jump to a specific slide
        heroDots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                currentSlide = parseInt(this.dataset.slide);
                showSlide(currentSlide);
            });
        });
    }

    // ----- BACK TO TOP BUTTON -----
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ----- SCROLL REVEAL ANIMATION -----
    // Elements with class 'reveal' fade in when they enter the viewport
    const revealElements = document.querySelectorAll('.reveal');
    function checkReveal() {
        revealElements.forEach(function (el) {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) {
                el.classList.add('revealed');
            }
        });
    }
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Run once on load

    // ----- TESTIMONIALS SLIDER -----
    const testimonials = document.querySelectorAll('.testimonial-card');
    if (testimonials.length > 0) {
        let currentTest = 0;
        function showTestimonial(i) {
            testimonials.forEach(function (t) { t.classList.remove('active'); });
            testimonials[i].classList.add('active');
        }
        const prevBtn = document.getElementById('prevTestimonial');
        const nextBtn = document.getElementById('nextTestimonial');
        if (prevBtn) prevBtn.addEventListener('click', function () {
            currentTest = (currentTest - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTest);
        });
        if (nextBtn) nextBtn.addEventListener('click', function () {
            currentTest = (currentTest + 1) % testimonials.length;
            showTestimonial(currentTest);
        });
    }

    // ----- DESTINATION SEARCH & FILTER (destinations.html) -----
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const destCards = document.querySelectorAll('#destinationsGrid .dest-card');

    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase();
            destCards.forEach(function (card) {
                const name = card.dataset.name || '';
                const text = card.textContent.toLowerCase();
                card.style.display = (name.includes(query) || text.includes(query)) ? '' : 'none';
            });
        });
    }

    if (filterBtns.length > 0) {
        filterBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                filterBtns.forEach(function (b) { b.classList.remove('active'); });
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                destCards.forEach(function (card) {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ----- CITY DETAIL PAGE (city.html) -----
    // Reads the ?city= parameter from URL and populates the page
    if (document.getElementById('cityHero')) {
        const params = new URLSearchParams(window.location.search);
        const cityKey = params.get('city') || 'goa';
        const city = cityData[cityKey] || cityData.goa;

        // Update page title
        document.title = city.name + ' – WanderWorld';

        // Hero
        document.getElementById('cityHero').style.backgroundImage = "url('" + city.hero + "')";
        document.getElementById('cityName').textContent = city.emoji + ' ' + city.name;
        document.getElementById('cityTagline').textContent = city.tagline;

        // About
        document.getElementById('cityAboutImg').src = city.about;
        document.getElementById('cityAboutImg').alt = city.name + ' landscape';
        document.getElementById('aboutCityName').textContent = city.name;
        document.getElementById('cityDescription').textContent = city.desc;
        document.getElementById('cityDescription2').textContent = city.desc2;

        // Places to Visit
        const placesGrid = document.getElementById('placesGrid');
        if (placesGrid) {
            placesGrid.innerHTML = city.places.map(function (p) {
                return '<div class="place-card reveal"><img src="' + p.img + '" alt="' + p.name + '"><div class="place-card-content"><h4>' + p.name + '</h4><p>' + p.desc + '</p></div></div>';
            }).join('');
        }

        // Food
        const foodGrid = document.getElementById('foodGrid');
        if (foodGrid) {
            foodGrid.innerHTML = city.food.map(function (f) {
                return '<div class="food-card reveal"><img src="' + f.img + '" alt="' + f.name + '"><h4>' + f.name + '</h4><p>' + f.desc + '</p></div>';
            }).join('');
        }

        // Culture
        const cultureSection = document.getElementById('cultureSection');
        if (cultureSection) {
            cultureSection.innerHTML = city.culture.map(function (c, i) {
                const reverseClass = i % 2 === 1 ? ' reverse' : '';
                const tags = c.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
                return '<div class="culture-block' + reverseClass + ' reveal"><img src="' + city.gallery[i % city.gallery.length] + '" alt="' + c.title + '"><div class="culture-text"><h3>' + c.title + '</h3><p>' + c.desc + '</p>' + tags + '</div></div>';
            }).join('');
        }

        // Budget
        const budgetCards = document.getElementById('budgetCards');
        if (budgetCards) {
            budgetCards.innerHTML = '<div class="budget-card low reveal"><div class="budget-label">🎒 Budget</div><div class="price">' + city.budget.low + '</div><ul><li><i class="fas fa-check"></i> Hostels & Guesthouses</li><li><i class="fas fa-check"></i> Street Food & Local Eats</li><li><i class="fas fa-check"></i> Public Transport</li><li><i class="fas fa-check"></i> Free Attractions</li></ul></div>' +
                '<div class="budget-card medium reveal"><div class="budget-label">🧳 Mid-Range</div><div class="price">' + city.budget.mid + '</div><ul><li><i class="fas fa-check"></i> 3-Star Hotels</li><li><i class="fas fa-check"></i> Restaurants & Cafes</li><li><i class="fas fa-check"></i> Taxis & Auto-rickshaws</li><li><i class="fas fa-check"></i> Guided Tours</li></ul></div>' +
                '<div class="budget-card luxury reveal"><div class="budget-label">👑 Luxury</div><div class="price">' + city.budget.luxury + '</div><ul><li><i class="fas fa-check"></i> 5-Star Resorts</li><li><i class="fas fa-check"></i> Fine Dining</li><li><i class="fas fa-check"></i> Private Transfers</li><li><i class="fas fa-check"></i> Premium Experiences</li></ul></div>';
        }

        // Tips
        const tipsList = document.getElementById('tipsList');
        if (tipsList) {
            tipsList.innerHTML = city.tips.map(function (tip) {
                return '<li class="reveal"><i class="fas fa-lightbulb"></i><span>' + tip + '</span></li>';
            }).join('');
        }

        // Gallery
        const galleryGrid = document.getElementById('galleryGrid');
        if (galleryGrid) {
            galleryGrid.innerHTML = city.gallery.map(function (img) {
                return '<img src="' + img + '" alt="' + city.name + ' gallery" class="gallery-img reveal">';
            }).join('');
        }

        // Weather
        document.getElementById('weatherTemp').textContent = city.weather.temp;
        document.getElementById('weatherDesc').textContent = city.weather.desc;
        document.getElementById('weatherBest').textContent = 'Best time to visit: ' + city.weather.best;

        // Re-run reveal check for dynamically added elements
        setTimeout(checkReveal, 100);
    }

    // ----- CULTURE PAGE TABS (culture.html) -----
    const cultureTabs = document.getElementById('cultureTabs');
    const cultureContent = document.getElementById('cultureContent');
    if (cultureTabs && cultureContent) {
        // Build tabs from city data
        const destinations = ['goa', 'mumbai', 'kashmir', 'himachal', 'manali', 'kerala', 'dubai', 'paris', 'bali'];
        cultureTabs.innerHTML = '<button class="dest-tab active" data-dest="all">🌍 All Countries</button>' + destinations.map(function (key, i) {
            const c = cityData[key];
            return '<button class="dest-tab" data-dest="' + key + '">' + c.emoji + ' ' + c.name.split(',')[0] + '</button>';
        }).join('');

        // Render all destinations' food
        function renderAllCulture() {
            let html = '<div class="section-title reveal" style="margin-top:40px;"><h2>🍽️ World Famous Cuisine</h2><p>Explore signature dishes from around the world</p></div>';
            destinations.forEach(function (key) {
                const c = cityData[key];
                html += '<div class="section-title" style="margin-top:60px; margin-bottom:30px;"><h3>' + c.emoji + ' ' + c.name.split(',')[0] + '</h3></div>';
                html += '<div class="food-grid reveal">' + c.food.map(function (f) {
                    return '<div class="food-card"><img src="' + f.img + '" alt="' + f.name + '"><h4>' + f.name + '</h4><p>' + f.desc + '</p></div>';
                }).join('') + '</div>';
            });
            cultureContent.innerHTML = html;
            // Re-check reveals
            document.querySelectorAll('.reveal').forEach(function (el) {
                const top = el.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) el.classList.add('revealed');
            });
        }

        // Render content for single destination
        function renderCulture(key) {
            const c = cityData[key];
            let html = '<div class="section-title" style="margin-top:40px;"><h2>🍽️ Traditional Food of ' + c.name.split(',')[0] + '</h2></div>';
            html += '<div class="food-grid reveal">' + c.food.map(function (f) {
                return '<div class="food-card"><img src="' + f.img + '" alt="' + f.name + '"><h4>' + f.name + '</h4><p>' + f.desc + '</p></div>';
            }).join('') + '</div>';
            html += '<div class="section-title" style="margin-top:60px;"><h2>🎭 Culture &amp; Festivals of ' + c.name.split(',')[0] + '</h2></div>';
            c.culture.forEach(function (cu, i) {
                const rev = i % 2 === 1 ? ' reverse' : '';
                const tags = cu.tags.map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');
                html += '<div class="culture-block' + rev + ' reveal"><img src="' + c.gallery[i % c.gallery.length] + '" alt="' + cu.title + '"><div class="culture-text"><h3>' + cu.title + '</h3><p>' + cu.desc + '</p>' + tags + '</div></div>';
            });
            cultureContent.innerHTML = html;
            // Re-check reveals
            document.querySelectorAll('.reveal').forEach(function (el) {
                const top = el.getBoundingClientRect().top;
                if (top < window.innerHeight - 100) el.classList.add('revealed');
            });
        }

        // Show all countries' food by default
        renderAllCulture();

        cultureTabs.addEventListener('click', function (e) {
            if (e.target.classList.contains('dest-tab')) {
                cultureTabs.querySelectorAll('.dest-tab').forEach(function (b) { b.classList.remove('active'); });
                e.target.classList.add('active');
                if (e.target.dataset.dest === 'all') {
                    renderAllCulture();
                } else {
                    renderCulture(e.target.dataset.dest);
                }
            }
        });
    }

    // ----- PACKING CHECKLIST (budget.html) -----
    const packingList = document.getElementById('packingChecklist');
    if (packingList) {
        const items = ['Passport & Visa copies', 'Travel insurance documents', 'Phone charger & power bank', 'Comfortable walking shoes', 'Sunscreen & sunglasses', 'First aid kit', 'Reusable water bottle', 'Rain jacket / umbrella', 'Local currency / travel card', 'Camera & extra memory card', 'Toiletries & medications', 'Lightweight backpack'];
        // Load saved state from localStorage
        const saved = JSON.parse(localStorage.getItem('packingChecklist') || '{}');
        packingList.innerHTML = items.map(function (item, i) {
            const checked = saved[i] ? ' checked' : '';
            const cls = saved[i] ? ' checked' : '';
            return '<div class="checklist-item' + cls + '"><input type="checkbox" id="pack' + i + '"' + checked + '><label for="pack' + i + '">' + item + '</label></div>';
        }).join('');
        // Save state when checkbox changes
        packingList.addEventListener('change', function (e) {
            if (e.target.type === 'checkbox') {
                const idx = e.target.id.replace('pack', '');
                const state = JSON.parse(localStorage.getItem('packingChecklist') || '{}');
                state[idx] = e.target.checked;
                localStorage.setItem('packingChecklist', JSON.stringify(state));
                e.target.parentElement.classList.toggle('checked', e.target.checked);
            }
        });
    }

    // ----- CURRENCY CONVERTER (budget.html) -----
    const convertBtn = document.getElementById('convertBtn');
    if (convertBtn) {
        // Approximate exchange rates (for demo purposes)
        const rates = { USD: 1, INR: 83, EUR: 0.92, GBP: 0.79, AED: 3.67, IDR: 15500 };
        convertBtn.addEventListener('click', function () {
            const amount = parseFloat(document.getElementById('convertAmount').value) || 0;
            const from = document.getElementById('fromCurrency').value;
            const to = document.getElementById('toCurrency').value;
            // Convert: amount -> USD -> target currency
            const inUSD = amount / rates[from];
            const result = inUSD * rates[to];
            const symbols = { USD: '$', INR: '₹', EUR: '€', GBP: '£', AED: 'د.إ', IDR: 'Rp' };
            document.getElementById('converterResult').textContent = '≈ ' + symbols[to] + ' ' + result.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        });
    }

    // ----- CONTACT FORM with LocalStorage Database -----
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Load and display existing submissions
        function displaySubmissions() {
            const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            const list = document.getElementById('submissionsList');
            if (!list) return;
            if (submissions.length === 0) {
                list.innerHTML = '<p style="color:var(--text-secondary);font-size:0.9rem;">No submissions yet.</p>';
                return;
            }
            list.innerHTML = submissions.map(function (s, i) {
                return '<div style="background:var(--bg-secondary);padding:14px;border-radius:8px;margin-bottom:10px;font-size:0.88rem;">' +
                    '<strong>' + s.name + '</strong> <small style="color:var(--text-secondary);">(' + s.email + ')</small>' +
                    (s.destination ? ' — <span style="color:var(--primary-blue);">' + s.destination + '</span>' : '') +
                    '<p style="color:var(--text-secondary);margin-top:6px;">' + s.message + '</p>' +
                    '<small style="color:var(--text-secondary);">' + s.date + '</small>' +
                    ' <button onclick="deleteSubmission(' + i + ')" style="float:right;background:none;border:none;color:#e74c3c;cursor:pointer;font-size:0.8rem;">🗑️ Delete</button>' +
                    '</div>';
            }).join('');
        }
        displaySubmissions();

        // Delete a submission
        window.deleteSubmission = function (index) {
            const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            submissions.splice(index, 1);
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
            displaySubmissions();
        };

        // Form validation and submission
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;

            // Validate Name
            const name = document.getElementById('contactName').value.trim();
            if (!name) { document.getElementById('nameGroup').classList.add('error'); isValid = false; }
            else { document.getElementById('nameGroup').classList.remove('error'); }

            // Validate Email
            const email = document.getElementById('contactEmail').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) { document.getElementById('emailGroup').classList.add('error'); isValid = false; }
            else { document.getElementById('emailGroup').classList.remove('error'); }

            // Validate Phone (optional but if filled, check format)
            const phone = document.getElementById('contactPhone').value.trim();
            if (phone && !/^[\d\s\+\-()]{7,15}$/.test(phone)) { document.getElementById('phoneGroup').classList.add('error'); isValid = false; }
            else { document.getElementById('phoneGroup').classList.remove('error'); }

            // Validate Message
            const message = document.getElementById('contactMessage').value.trim();
            if (!message) { document.getElementById('messageGroup').classList.add('error'); isValid = false; }
            else { document.getElementById('messageGroup').classList.remove('error'); }

            if (!isValid) return;

            // Prepare submission object
            const destination = document.getElementById('contactDest').value;
            const submission = {
                name: name,
                email: email,
                phone: phone,
                destination: destination,
                message: message,
                date: new Date().toLocaleString()
            };

            // Try to POST to backend API. If backend unavailable, fall back to LocalStorage.
            fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submission)
            }).then(function (res) {
                if (res.ok) {
                    // Also keep a local copy for the viewer
                    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                    submissions.push(submission);
                    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

                    document.getElementById('successPopup').classList.add('show');
                    document.getElementById('popupOverlay').classList.add('show');
                    contactForm.reset();
                    displaySubmissions();
                } else {
                    alert('Server error: could not save your message. It was not stored on the server.');
                }
            }).catch(function (err) {
                // Network or server not running — gracefully fall back to LocalStorage
                const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
                submissions.push(submission);
                localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

                document.getElementById('successPopup').classList.add('show');
                document.getElementById('popupOverlay').classList.add('show');
                contactForm.reset();
                displaySubmissions();
            });
        });

        // Close success popup
        const closePopup = document.getElementById('closePopup');
        const popupOverlay = document.getElementById('popupOverlay');
        if (closePopup) closePopup.addEventListener('click', function () {
            document.getElementById('successPopup').classList.remove('show');
            popupOverlay.classList.remove('show');
        });
        if (popupOverlay) popupOverlay.addEventListener('click', function () {
            document.getElementById('successPopup').classList.remove('show');
            popupOverlay.classList.remove('show');
        });
    }

    // ----- FAQ ACCORDION (contact.html) -----
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        item.querySelector('.faq-question').addEventListener('click', function () {
            // Close other FAQs
            faqItems.forEach(function (other) {
                if (other !== item) {
                    other.classList.remove('active');
                    other.querySelector('.faq-answer').style.maxHeight = null;
                }
            });
            // Toggle current
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // ----- CHATBOT -----
    const chatbotBtn = document.getElementById('chatbotBtn');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const closeChat = document.getElementById('closeChat');
    const chatSend = document.getElementById('chatSend');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    if (chatbotBtn && chatbotWindow) {
        chatbotBtn.addEventListener('click', function () {
            chatbotWindow.classList.toggle('open');
        });
        if (closeChat) closeChat.addEventListener('click', function () {
            chatbotWindow.classList.remove('open');
        });

        // Chatbot responses database
        const botResponses = {
            'goa': '🏖️ Goa is amazing! Best visited Oct–Mar. Must-see: Baga Beach, Dudhsagar Falls, Old Goa churches. Budget: $20–30/day!',
            'mumbai': '🌆 Mumbai — the City of Dreams! Visit Gateway of India, Marine Drive, and try Vada Pav. Best time: Nov–Feb.',
            'kashmir': '🏔️ Kashmir is paradise! Dal Lake houseboats, Gulmarg skiing, Mughal Gardens. Try Rogan Josh! Best: Mar–Oct.',
            'kerala': '🌴 Kerala — God\'s Own Country! Alleppey backwaters, Munnar tea gardens, Kathakali dance. Best: Sep–Mar.',
            'dubai': '🏙️ Dubai is spectacular! Burj Khalifa, desert safari, shopping festivals. Budget: $60–90/day. Visit Nov–Mar.',
            'paris': '🗼 Paris — City of Love! Eiffel Tower, Louvre, croissants, Seine cruises. Budget: $70–100/day. Visit Apr–Oct.',
            'bali': '🌺 Bali is magical! Rice terraces, temples, Kecak dance, surfing. Budget: $25–40/day. Visit Apr–Oct.',
            'manali': '🏔️ Manali — adventure paradise! Solang Valley, Rohtang Pass, momos! Budget: $15–25/day. Visit May–Jun or Oct–Feb.',
            'himachal': '⛰️ Himachal — Land of Gods! Shimla, Dharamsala, Spiti Valley. Budget: $15–25/day. Best: Mar–Jun.',
            'budget': '💰 Budget tips: Travel in off-season, use public transport, eat local street food, book in advance, and stay in hostels!',
            'food': '🍽️ Every destination has unique cuisine! From Goan Fish Curry to Parisian Croissants — check our Food & Culture page!',
            'hello': '👋 Hello there! I\'m WanderBot. Ask me about any destination like Goa, Dubai, Paris, or topics like budget tips and food!',
            'hi': '👋 Hey! Welcome to WanderWorld! Ask me about destinations, budget, food, or travel tips!',
            'help': '🤝 I can help with: destination info, budget tips, food & culture, travel tips. Just type a city name or topic!',
            'thanks': '😊 You\'re welcome! Happy travels! ✈️',
        };

        function sendChat() {
            const msg = chatInput.value.trim();
            if (!msg) return;
            // Add user message
            chatMessages.innerHTML += '<div class="chat-msg user">' + msg + '</div>';
            chatInput.value = '';
            // Find bot response
            const lower = msg.toLowerCase();
            let reply = '🤔 I\'m not sure about that! Try asking about a destination (Goa, Dubai, Paris, etc.) or topics like budget, food, or type "help".';
            for (const key in botResponses) {
                if (lower.includes(key)) { reply = botResponses[key]; break; }
            }
            setTimeout(function () {
                chatMessages.innerHTML += '<div class="chat-msg bot">' + reply + '</div>';
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 600);
        }

        if (chatSend) chatSend.addEventListener('click', sendChat);
        if (chatInput) chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') sendChat();
        });
    }

    // ----- IMAGE LIGHTBOX -----
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeLightbox = document.getElementById('closeLightbox');

    // Open lightbox when clicking gallery images
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('gallery-img') || (e.target.tagName === 'IMG' && e.target.closest('.gallery-grid'))) {
            if (lightbox && lightboxImg) {
                lightboxImg.src = e.target.src;
                lightbox.classList.add('active');
            }
        }
    });
    if (closeLightbox) closeLightbox.addEventListener('click', function () {
        lightbox.classList.remove('active');
    });
    if (lightbox) lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) lightbox.classList.remove('active');
    });

}); // END DOMContentLoaded
