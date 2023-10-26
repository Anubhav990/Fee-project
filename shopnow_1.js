// Modal Element
const modal = document.getElementById('product-modal');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const modalAddToCart = document.getElementById('modal-add-to-cart');

// Array of product descriptions (one for each product)
const productDescriptions = [
    `
    <h2>MacBook Air M1</h2>
    <h2>Display</h2>
    <ul>
        <li>Retina display</li>
        <li>13.3-inch (diagonal) LED-backlit display with IPS technology</li>
        <li>2560-by-1600 native resolution at 227 pixels per inch with support for millions of colors</li>
        <li>Supported scaled resolutions:</li>
        <li>1680 by 1050</li>
        <li>1440 by 900</li>
        <li>1024 by 640</li>
        <li>400 nits brightness</li>
        <li>Wide color (P3)</li>
        <li>True Tone technology</li>
    </ul>
    
    <h2>Chip, Battery and Power</h2>
    <ul>
        <li>Apple M1 chip</li>
        <li>8-core CPU with 4 performance cores and 4 efficiency cores</li>
        <li>7-core GPU</li>
        <li>16-core Neural Engine</li>
        <li>Up to 15 hours wireless web</li>
        <li>Up to 18 hours Apple TV app movie playback</li>
        <li>Built-in 49.9‑watt‑hour lithium‑polymer battery</li>
        <li>30W USB-C Power Adapter</li>
    </ul>    
    `,
    // Add descriptions with specs for other products here
    `   <ul>
    <li><h2>CPU:</h2> 11th-generation Intel Core i7-11800H (8-core, 24MB cache, up to 4.60GHz with Turbo Boost)</li>
    <li><h2>Graphics:</h2> Nvidia GeForce RTX 3050 Ti (4GB GDDR6)</li>
    <li><h2>Memory (RAM):</h2> 16GB DDR4 (3,200MHz)</li>
    <li><h2>Display:</h2> 15.6-inch 3456 x 2160 OLED InfinityEdge Touch Anti-Reflective 400-Nit</li>
    <li><h2>Storage, Connectivity and ports:</h2> <li>512GB SSD (PCIe, NVMe, M.2)</li> Killer Wi-Fi 6 AX1650, 2 x 2, Bluetooth 5.0</li>
    <li>2 x Thunderbolt 4, 1 x USB-C 3.2, 1 x SD card reader, combi audio jack, 1 x Wedge-shaped lock slot</li>
    <li><h2>Camera, Weight:</h2> 720p at 30 fps HD camera , 4.31 pounds (1.96 kg)</li>
</ul>

`,
    `<ul>
<li><h2>Processor and Graphics:</h2> <li>Intel® Core™ i9-13900H Processor 2.6 GHz (24MB Cache, up to 5.4 GHz, 14 cores, 20 Threads)</li>
<li>NVIDIA® Geforce RTX™ 3050 4GB Laptop GPU</li>
     <li>4GB GDDR6</li>
     <li>Intel® Iris Xe Graphics (Intel Iris Xᵉ Graphics is only available in models with Intel® Core™ i5/i7/i9 processors and dual-channel memory.)</li>
</li>
<li><h2>Display and Memory:</h2>
    <ul>
        <li>14.5-inch, 2.8K (2880 x 1800) OLED</li>
        <li>16:10 aspect ratio</li>
        <li>0.2ms response time</li>
        <li>550nits HDR peak brightness</li>
        <li>100% DCI-P3 color gamut</li>
        <li>1,000,000:1 contrast ratio</li>
        <li>Glossy display</li>
        <li>SGS Eye Care Display</li>
        <li>Touch screen With stylus support</li>
        <li>32GB LPDDR5 on board (Supports dual-channel memory.)</li>
    </ul>
<li><h2>Storage</h2>: 1TB M.2 NVMe™ PCIe® 4.0 SSD</li>
</ul>`,
    `<ul>
    <li><h2>CPU:</h2> Qualcomm Snapdragon 7c Gen 2</li>
    <li><h2>Display:</h2> 11 inches, 2,000 x 1,200 pixels</li>
    <li><h2>Memory & Storage:</h2> 4GB RAM, 64GB-128GB</li>
    <li><h2>Cameras:</h2> Front: 5MP, Rear: 8MP</li>
    <li><h2>Size & Weight:</h2> Tablet: 1.2 lbs, Tablet + Cover: 2.1 lbs</li>
    <li><h2>Ports and connectivity:</h2> (2)USB-C 3.2 Gen1, 802.11 a/b/g/n/ac, Bluetooth 5.1</li>
</ul>
`,
    `<ul>
    <li><h2>CPU:</h2> Intel Core i7-1280P</li>
    <li><h2>Graphics:</h2> Intel Iris Xe (integrated)</li>
    <li><h2>Memory and Storage:</h2> 
        <ul>
            <li>32GB Crucial DDR4-3200</li>
            <li>2TB WD Black SN850 NVMe SSD</li>
        </ul>
    </li>
    <li><h2>Display, Networking and Ports:</h2> 
        <ul>
            <li>13.5-inch, 3:2, 2256 x 1504</li>
            <li>Intel Wi-Fi 6E AX210</li>
            <li>Bluetooth 5.2</li>
            <li>3.5 mm headphone jack</li>
            <li>Four expansion slots of your choosing</li>
        </ul>
    </li>
    <li><h2>Battery and Power Adapter:</h2> 
        <ul>
            <li>55 WHr</li>
            <li>60W GaN charger</li>
        </ul>
    </li>
</ul>`,
    `<ul>
    <li><h2>CPU & GPU:</h2> AMD Ryzen 9 6900HS & AMD Radeon RX 6800S</li>
    <li><h2>Display:</h2> 14.0” WQXGA (2560 x 1600), 120 Hz</li>
    <li><h2>Storage:</h2> 1TB SSD, M.2 Slot: 1x 2280 PCIe NVMe 4.0 x4</li>
    <li><h2>RAM:</h2> 16GB DDR5</li>
    <li><h2>OS:</h2> Windows 11 Home</li>
    <li><h2>Material and Dimensions:</h2></li>
    <li> Aluminum, 312 x 227 x 18.5 mm (12.28" x 8.94" x 0.73")</li>
</ul>
`,
    `<ul>
<li><h2>Processor Options:</h2> 
    <ul>
        <li>AMD Ryzen™ 7 7735U (8 cores, 16 threads)</li>
        <li>AMD Ryzen™ 5 7535U (6 cores, 12 threads)</li>
    </ul>
</li>
<li><h2>Chipset:</h2> AMD Integrated SoC</li>
<li><h2>Memory:</h2> 
    <ul>
        <li>On-board system memory</li>
        <li>Dual Channel Memory support</li>
        <li>Maximum memory supported: 16 GB</li>
        <li>Memory options: 16 GB LPDDR5-6400 MHz RAM (on-board), 8 GB LPDDR5-6400 MHz RAM (on-board)</li>
    </ul>
</li>
<li><h2>Graphics (Integrated):</h2> AMD Radeon™ Graphics</li>
<li><h2>Storage Options:</h2> 
    <ul>
        <li>1 TB PCIe® NVMe™ Value M.2 Solid-State Drive</li>
        <li>512 GB PCIe® NVMe™ Value M.2 Solid-State Drive</li>
        <li>256 GB PCIe® NVMe™ Value M.2 Solid-State Drive</li>
    </ul>
</li>
</ul>
`,
    `<ul>
    <li><h2>CPU & GPU:</h2> Intel Core i5-1335U with Intel Iris Xe Graphics</li>
    <li><h2>Memory & Storage:</h2> 
        <ul>
            <li>RAM: 8GB</li>
            <li>Storage: 256GB SSD</li>
        </ul>
    </li>
    <li><h2>Screen:</h2> 14" 16:10 WUXGA (1920 x 1200p) IPS touch display</li>
    <li><h2>Ports:</h2> 2x USB-C Thunderbolt 4, 1x USB-A, HDMI, 3.5mm Combo-Jack</li>
    <li><h2>Wireless:</h2> Wireless Wi-Fi 6E AX211, Bluetooth® 5.2</li>
    <li><h2>Camera:</h2> 1440p @ 30Hz webcam</li>
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
