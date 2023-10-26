// Modal Element
const modal = document.getElementById('product-modal');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const modalAddToCart = document.getElementById('modal-add-to-cart');

// Array of product descriptions (one for each product)
const productDescriptions = [
    `
    <h2>Device Name</h2>
    <ul>
        <li><strong>Technology:</strong> GSM / CDMA / HSPA / EVDO / LTE / 5G</li>
        <li><strong>LAUNCH:</strong>
            <ul>
                <li>Announced: 2022, September 07</li>
                <li>Status: Available. Released 2022, September 16</li>
            </ul>
        </li>
        <li><strong>BODY:</strong>
            <ul>
                <li>Dimensions: 146.7 x 71.5 x 7.8 mm (5.78 x 2.81 x 0.31 in)</li>
                <li>Weight: 172 g (6.07 oz)</li>
                <li>Build: Glass front (Corning-made glass), glass back (Corning-made glass), aluminum frame</li>
                <li>SIM: Nano-SIM and eSIM - International</li>
                <li>Dual eSIM with multiple numbers - USA</li>
                <li>Dual SIM (Nano-SIM, dual stand-by) - China</li>
                <li>IP68 dust/water resistant (up to 6m for 30 min), Apple Pay (Visa, MasterCard, AMEX certified)</li>
            </ul>
        </li>
        <li><strong>DISPLAY:</strong>
            <ul>
                <li>Type: Super Retina XDR OLED, HDR10, Dolby Vision, 800 nits (HBM), 1200 nits (peak)</li>
                <li>Size: 6.1 inches, 90.2 cm2 (~86.0% screen-to-body ratio)</li>
                <li>Resolution: 1170 x 2532 pixels, 19.5:9 ratio (~460 ppi density)</li>
                <li>Protection: Ceramic Shield glass</li>
            </ul>
        </li>
        <li><strong>PLATFORM:</strong>
            <ul>
                <li>OS: iOS 16, upgradable to iOS 17.0.3</li>
                <li>Chipset: Apple A15 Bionic (5 nm)</li>
                <li>CPU: Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)</li>
                <li>GPU: Apple GPU (5-core graphics)</li>
            </ul>
        </li>
    </ul>
    
   
    `,
    // Add descriptions with specs for other products here
    ` 
    <ul>
    <li><h2>TECHNOLOGY, LAUNCH & BODY:</h2> GSM / CDMA / HSPA / EVDO / LTE / 5G - Announced: 2022, September 07 - Released: 2022, September 16,  Dimensions: 147.5 x 71.5 x 7.9 mm (5.81 x 2.81 x 0.31 in) - Weight: 206 g (7.27 oz) - Build: Glass front (Corning-made glass), glass back, stainless steel frame</li>
    <li><h2>SIM:</h2> Nano-SIM and eSIM - International - Dual eSIM with multiple numbers - USA - Dual SIM (Nano-SIM, dual stand-by) - China - IP68 dust/water resistant (up to 6m for 30 min) - Apple Pay (Visa, MasterCard, AMEX certified)</li>
    <li><h2>DISPLAY:</h2> Type: LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 2000 nits (HBM) - Size: 6.1 inches, 91.7 cm2 (~87.0% screen-to-body ratio) - Resolution: 1179 x 2556 pixels, 19.5:9 ratio (~460 ppi density) - Protection: Ceramic Shield glass - Always-On display</li>
    <li><h2>PLATFORM & CHIPSET:</h2> OS: iOS 16, upgradable to iOS 17.0.3 - Apple A16 Bionic (4 nm) - CPU: Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth) - GPU: Apple GPU (5-core graphics)</li>
</ul>
`,
    `
<ul>
    <li><h2>Technology & LAUNCH:</h2> GSM / CDMA / HSPA / EVDO / LTE - Announced: 2020, February 11 - Released: 2020, February 14</li>
    <li><h2>BODY and SIM:</h2> Dimensions: Unfolded: 167.3 x 73.6 x 7.2 mm - Folded: 87.4 x 73.6 x 17.3 mm - Weight: 183 g (6.46 oz) - Build: Plastic front, glass back (Gorilla Glass 6), aluminum frame, Nano-SIM and eSIM</li>
    <li><h2>DISPLAY:</h2> Type: Foldable Dynamic AMOLED, HDR10+ - Size: 6.7 inches, 101.6 cm2 (~82.5% screen-to-body ratio) - Resolution: 1080 x 2636 pixels (~425 ppi density) - Cover display: Super AMOLED, 1.1 inches, 112 x 300 pixels</li>
    <li><h2>PLATFORM & CHIPSET:</h2> OS: Android 10, upgradable to Android 12, One UI 4.1.1 - Qualcomm SM8150 Snapdragon 855+ (7 nm) - CPU: Octa-core (1x2.95 GHz Kryo 485 & 3x2.41 GHz Kryo 485 & 4x1.78 GHz Kryo 485) - GPU: Adreno 640 (700 MHz)</li>
</ul>
`,
    `
<ul>
    <li><h2>Technology & LAUNCH:</h2> GSM / CDMA / HSPA / EVDO / LTE - Announced: 2019, February 20 - Released: 2019, March 08</li>
    <li><h2>BODY & SIM:</h2> Dimensions: 149.9 x 70.4 x 7.8 mm (5.90 x 2.77 x 0.31 in) - Weight: 157 g (5.54 oz) - Build: Glass front (Gorilla Glass 6), glass back (Gorilla Glass 5), aluminum frame; Single SIM (Nano-SIM) or Hybrid Dual SIM (Nano-SIM, dual stand-by) - IP68 dust/water resistant (up to 1.5m for 30 min)</li>
    <li><h2>DISPLAY:</h2> Type: Dynamic AMOLED, HDR10+ - Size: 6.1 inches, 93.2 cm2 (~88.3% screen-to-body ratio) - Resolution: 1440 x 3040 pixels, 19:9 ratio (~550 ppi density) - Protection: Corning Gorilla Glass 6 - Always-on display</li>
    <li><h2>PLATFORM & CHIPSET:</h2> OS: Android 9.0 (Pie), upgradable to Android 12, One UI 4.1 - Exynos 9820 (8 nm) - EMEA/LATAM - Qualcomm SM8150 Snapdragon 855 (7 nm) - USA/China</li>
</ul>


`,

    `
<ul>
    <li><h2>Tech & Launch:</h2> GSM / CDMA / HSPA / LTE / 5G - Announced: Feb 7, 2023 - Released: Feb 21, 2023</li>
    <li><h2>Design:</h2> Dimensions: 163.4 x 74.3 x 8.7 mm - Weight: 204 g - Build: Glass front, glass back, plastic frame</li>
    <li><h2>SIM and display:</h2> Dual SIM (Nano-SIM, dual stand-by), Fluid AMOLED, 120Hz, HDR10+ - 6.74 inches - 1240 x 2772 pixels</li>
    <li><h2>Platform & Chip:</h2> Android 13, OxygenOS 13 - Snapdragon 8+ Gen 1 (4 nm), Octa-core, Adreno 730</li>
    <li><h2>Memory:</h2> Card slot: No</li>
</ul>

`,
    `
<ul>
    <li><h2>Tech & Launch:</h2> GSM / HSPA / LTE / 5G - Announced: July 12, 2022 - Released: July 16, 2022</li>
    <li><h2>Design:</h2> Dimensions: 159.2 x 75.8 x 8.3 mm - Weight: 193.5 g - Build: Glass front, glass back, aluminum frame</li>
    <li><h2>SIM & Features:</h2> Dual SIM (Nano-SIM, dual stand-by) - Multiple LED lights, Blinking red light - IP53 splash, water, and dust resistant</li>
    <li><h2>Display:</h2> OLED, 120Hz, HDR10+ - 6.55 inches - 1080 x 2400 pixels</li>
    <li><h2>Platform & Chip:</h2> Android 12, upgradable to Android 13, Nothing OS 2.0 - Snapdragon 778G+ 5G (6 nm)</li>
</ul>

`,
    `
<ul>
    <li><h2>Tech & Launch:</h2> GSM / HSPA / LTE / 5G - Announced: May 16, 2023 - Released: May 24, 2023</li>
    <li><h2>Design & SIM:</h2> Dimensions: 164.2 x 74.7 x 8.8 mm - Weight: 210 g - Dual SIM (Nano-SIM, dual stand-by)</li>
    <li><h2>Display:</h2> AMOLED, 120Hz, HDR10+ - 6.78 inches - 1080 x 2400 pixels, 111.0 cm2 (~90.5% screen-to-body ratio).</li>
    <li><h2>Platform & Chip:</h2> Android 13 - Mediatek Dimensity 7050 (6 nm) - Octa-core CPU - Mali-G68 MC4 GPU</li>
    <li><h2>Memory:</h2> No card slot - 256GB internal storage, 8GB RAM</li>
</ul>

`,
    `
<ul>
    <li><h2>Tech & Launch:</h2> GSM / CDMA / HSPA / EVDO / LTE / 5G - Announced: Sep 14, 2021 - Released: Sep 24, 2021</li>
    <li><h2>Design & SIM:</h2> Dimensions: 146.7 x 71.5 x 7.7 mm - Weight: 174 g - Glass front/back, aluminum frame - IP68 water/dust resistant</li>
    <li><h2>Display:</h2> Super Retina XDR OLED, HDR10, Dolby Vision - 6.1 inches - 1170 x 2532 pixels</li>
    <li><h2>Platform & Chip:</h2> iOS 15, upgradable to iOS 17.0.3 - Apple A15 Bionic (5 nm) - Hexa-core CPU - Apple GPU (4-core)</li>
    <li><h2>Memory:</h2> No card slot - 128GB/256GB/512GB storage, 4GB RAM, NVMe</li>
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