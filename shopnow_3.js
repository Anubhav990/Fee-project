// Modal Element
const modal = document.getElementById('product-modal');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const modalAddToCart = document.getElementById('modal-add-to-cart');

// Array of product descriptions (one for each product)
const productDescriptions = [
    `
    <ul>
        <li><h2>Technology,LAUNCH :</h2> GSM / HSPA / LTE, Announced: 2022, September 07 - Released: 2022, September 16</li>
        <li><h2>BODY:</h2> Dimensions: 45 x 38 x 10.7 mm - Weight: 42.3 g (41mm), 51.5 g (45mm) - Build: Glass front, ceramic/sapphire crystal back, stainless steel frame - SIM: eSIM - IP6X certified - 50m water resistant - ECG certified (region dependent SW application; HW available on all models)</li>
        <li><h2>DISPLAY:</h2> Type: Retina LTPO OLED, 1000 nits (peak) - Size: 1.9 inches - Resolution: 484 x 396 pixels (~326 ppi density) - Protection: Sapphire crystal glass - Always-on display</li>
        <li><h2>PLATFORM:</h2> OS: watchOS 9.0, upgradable to watchOS 10 - Chipset: Apple S8 - CPU: Dual-core - GPU: PowerVR</li>
        <li><h2>MEMORY & Camera:</h2> Card slot: No - Internal: 32GB 1GB RAM - eMMC 5.1, no camera.</li>
    </ul>
    
   
    `,
    // Add descriptions with specs for other products here
    ` 
    <ul>
        <li><h2>Technology, LAUNCH & BODY:</h2> GSM / HSPA / LTE - Announced: 2022, August 10 - Released: 2022, August 26,  Dimensions: 44.4 x 43.3 x 9.8 mm - Weight: 33.5 g (44mm), 28.7 g (40mm) - Build: Glass front (Sapphire crystal), aluminum frame - SIM: eSIM - MIL-STD-810H compliant* - 50m water resistant (IP68) - Compatible with standard 20mm straps - ECG certified - Blood pressure monitor - Armor aluminum frame with tougher drop and scratch resistance (advertised) - *does not guarantee ruggedness or use in extreme conditions</li>
        <li><h2>DISPLAY:</h2> Type: Super AMOLED - Size: 1.4 inches - Resolution: 450 x 450 pixels (~321 ppi density) - Protection: Sapphire crystal - Always-on display</li>
        <li><h2>PLATFORM & MEMORY :</h2> OS: Android Wear OS 4, One UI Watch 5 - Chipset: Exynos W920 (5 nm) - CPU: Dual-core 1.18 GHz Cortex-A55 - GPU: Mali-G68,  Card slot: No - Internal: 16GB 1.5GB RAM</li>
        <li><h2>CAMERA, SOUND & Loudspeaker:</h2> No, Yes - 3.5mm jack: No</li>
    </ul>
    

`,
    `
    <ul>
        <li><h2>Materials & Display:</h2> Fiber-reinforced polymer & Anodized aluminum - 1.41" AMOLED with Corning Gorilla Glass 3 - Resolution: 320 x 360</li>
        <li><h2>Bands & Dimensions/Weight:</h2> 20mm quick release - 40.6 x 37.0 x 11.1 mm, 38 grams</li>
        <li><h2>Sensors & Connectivity:</h2> GPS/GLONASS/GALILEO, HRM, barometric altimeter, compass, gyroscope, accelerometer, ambient light, pulse ox - NFC (Garmin Pay), Bluetooth, ANT+, Wi-Fi</li>
        <li><h2>Music Storage & Colors:</h2> Music Edition only (up to 500 songs, $50 extra) - 
            <ul>
                <li>Venu Sq 2: Slate/Shadow Gray, Cream Gold/White, Metallic Mint/Cool Mint</li>
                <li>Venu Sq 2 - Music Edition: Slate/Black, Peach Gold/Ivory, Cream Gold/French Gray</li>
            </ul>
        </li>
        <li><h2>Mic and Speaker:</h2> 🚫</li>
    </ul>
    
`,
    `
<ul>
    <li><h2>Technology & LAUNCH:</h2> GSM / HSPA / LTE - Announced: 2020, September 15 - Released: 2020, September 18</li>
    <li><h2>BODY:</h2> Dimensions: 44 x 38 x 10.4 mm - Weight: 36.4 g - Build: Glass front, ceramic/sapphire crystal back, aluminum frame - SIM: eSIM - 50m water resistant</li>
    <li><h2>DISPLAY:</h2> Type: Retina LTPO OLED, 1000 nits (peak) - Size: 1.78 inches - Resolution: 448 x 368 pixels (~326 ppi density) - Protection: Ion-X strengthened glass</li>
    <li><h2>PLATFORM & MEMORY:</h2> OS: watchOS 7.0, upgradable to watchOS 10 - Chipset: Apple S5 - CPU: Dual-core - GPU: PowerVR - Card slot: No - Internal: 32GB 1GB RAM</li>
    <li><h2>CAMERA & SOUND:</h2> Camera: No - Loudspeaker: Yes - 3.5mm jack: No</li>
</ul>

`,
    `
<ul>
    <li><h2>Phone OS Compatibility & Watch OS:</h2> Android, iOS - Fitbit OS</li>
    <li><h2>Processor:</h2> N/A</li>
    <li><h2>Display:</h2> Size: 1.58 inches - Type: AMOLED</li>
    <li><h2>Fitness Features:</h2> Accelerometer, GPS, Heart Rate Monitor, Blood Oxygen Monitor, Temperature Sensor</li>
    <li><h2>Estimated Battery Life:</h2> 5 days</li>
    <li><h2>Separate App Store & Phone Call Capacity:</h2> 🚫</li>
</ul>

`,
    `
    <ul>
        <li><h2>Phone & Watch OS Compatibility:</h2> Android, iOS - Proprietary</li>
        <li><h2>Processor & Display:</h2> N/A, Size: 1 inch - Type: Grayscale Touch Screen</li>
        <li><h2>Fitness Features & Estimated Battery Life:</h2> Accelerometer, Heart Rate Monitor,  4 days</li>
        <li><h2>App Store & Phone Call Capacity:</h2> 🚫</li>
        <li><h2>Additional Features:</h2> Heart Rate Monitor: ✅ - Sleep Tracker: ✅ - Battery Life: 4 days</li>
    </ul>
    
`,
    `
    <ul>
        <li><h2>Phone & Watch OS Compatibility:</h2> Android, Wear OS</li>
        <li><h2>Display:</h2> Size: 1.2 inches - Type: AMOLED</li>
        <li><h2>Fitness Features:</h2> Accelerometer, GPS, Blood Oxygen Monitor, Heart Rate Monitor, Temperature Sensor, Pedometer</li>
        <li><h2>Estimated Battery Life:</h2> 33 hours</li>
        <li><h2>App Store & Phone Call Capacity:</h2> ✅</li>
    </ul>
    
`,
    `
    <ul>
        <li><h2>Phone & Watch OS Compatibility:</h2> Android, Wear OS</li>
        <li><h2>Processor:</h2> Qualcomm Snapdragon W5+ Gen 1</li>
        <li><h2>Display:</h2> Size: 1.43 inches - Type: AMOLED, Ultra-Low-Power</li>
        <li><h2>Fitness Features:</h2> Accelerometer, GPS, Heart Rate Monitor, Blood Oxygen Monitor, Temperature Sensor</li>
        <li><h2>Estimated Battery Life:</h2> 80 hours</li>
        <li><h2>App Store & Phone Call Capacity:</h2> ✅</li>
    </ul>
    
`
];

// Function to open the modal
function openModal(description, price) {
    modal.style.display = 'block';
    modalDescription.innerHTML = description; // Use innerHTML to render HTML markup
    modalPrice.textContent = price;
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listener for opening the modal
document.querySelectorAll('.read-more').forEach((readMoreButton, index) => {
    readMoreButton.addEventListener('click', () => {
        const productContainer = document.querySelectorAll('.product-details')[index];
        const productPrice = productContainer.querySelector('.description').querySelectorAll('p')[1].textContent; // Updated line here

        openModal(productDescriptions[index], productPrice); // Use the corresponding description from the array
    });
});

// Event listener for closing the modal
document.getElementById('close-modal').addEventListener('click', closeModal);

// Close the modal if the user clicks outside the content
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        closeModal();
    }
});
document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});