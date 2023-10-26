// Modal Element
const modal = document.getElementById('product-modal');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const modalAddToCart = document.getElementById('modal-add-to-cart');

// Array of product descriptions (one for each product)
const productDescriptions = [
    `
    <ul>
        <li><h2>Body Type:</h2> SLR-style mirrorless</li>
        <li><h2>Sensor:</h2> Max resolution: 6000 x 4000 - Image ratio: 1:1, 4:3, 3:2, 16:9 - Effective pixels: 24 megapixels - Sensor type: Full frame CMOS (36 x 24 mm) - Processor: Digic X</li>
        <li><h2>Image:</h2> ISO: 100-102400 (expands to 204800) - White balance presets: 8 - Custom white balance: Yes - Image stabilization: Sensor-shift - Image stabilization notes: Works with lens-based IS systems for maximum shake reduction - CIPA image stabilization rating: 8 stop(s) - Uncompressed format: RAW - JPEG quality levels: Fine, Normal</li>
        <li><h2>Optics & Focus:</h2> Autofocus: Phase Detect, Multi-area, Center, Selective single-point, Tracking, Single, Continuous, Touch, Face Detection, Live View</li>
    </ul>
    
   
    `,
    // Add descriptions with specs for other products here
    ` 
<ul>
    <li><h2>Body Type:</h2> SLR-style mirrorless</li>
    <li><h2>Sensor:</h2> Max resolution: 6960 x 4640 - Image ratio: 1:1, 4:3, 3:2, 16:9 - Effective pixels: 33 megapixels - Sensor type: APS-C CMOS (22.2 x 14.8 mm) - Processor: Digic X</li>
    <li><h2>Image:</h2> ISO: 100-32000 - White balance presets: 6 - Custom white balance: Yes - Image stabilization: Sensor-shift - Image stabilization notes: Up to 8EV with certain lenses - CIPA image stabilization rating: 6 stop(s) - Uncompressed format: RAW</li>
    <li><h2>Optics & Focus:</h2> Autofocus: Phase Detect, Multi-area, Center, Selective single-point, Tracking, Single, Continuous, Touch, Face Detection, Live View</li>
</ul>

`,
    `
<ul>
    <li><h2>Body Type & Sensor:</h2> SLR-style mirrorless, Max resolution: 6240 x 4160 - Image ratio: 1:1, 3:2, 16:9 - Effective pixels: 26 megapixels - Sensor type: APS-C BSI-CMOS (23.5 x 15.6 mm)</li>
    <li><h2>Image:</h2> ISO: Auto, 160-12800 (expands to 80-51200) - White balance presets: 7 - Custom white balance: Yes (3 slots) - Image stabilization: Sensor-shift - CIPA image stabilization rating: 7 stop(s) - Uncompressed format: RAW - JPEG quality levels: Fine, normal</li>
    <li><h2>Optics & Focus:</h2> Autofocus: Contrast Detect (sensor), Phase Detect, Multi-area, Center, Selective single-point, Tracking, Single, Continuous, Touch, Face Detection, Live View - Digital zoom: No - Manual focus: Yes - Number of focus points: 425 - Lens mount: Fujifilm X - Focal length multiplier: 1.5×</li>
    <li><h2>Screen / Viewfinder:</h2> Articulated LCD: Fully articulated - Screen size: 3″ - Screen dots: 1,840,000 - Touch screen: Yes - Screen type: TFT LCD</li>
</ul>

`,
    `
<ul>
    <li><h2>Body Type $ Sensor:</h2> VR/Action camera, Image ratio: 4:3, 16:9 - Effective pixels: 27 megapixels</li>
    <li><h2>Image, Optics & Focus:</h2> Image stabilization: Digital only, Manual focus: No</li>
    <li><h2>Screen / Viewfinder, Photography Features & Videography features:</h2> Touch screen: Yes - Live view: Yes,  Microphone - Microphone: Multiple</li>
    <li><h2>Storage:</h2> Connectivity: USB charging - Microphone port: Yes - Headphone port: No - Wireless: Built-In</li>
    <li><h2>Physical, Other Features :</h2> Durability: Waterproof - Battery: Battery Pack - Weight (inc. batteries): 154 g - Dimensions: 72 x 51 x 34 mm, GPS: None</li>
</ul>

`,
    `
<ul>
    <li><h2>Body Type:</h2> Rangefinder-style mirrorless</li>
    <li><h2>Sensor:</h2> Max resolution: 6000 x 4000 - Image ratio: 1:1, 3:2, 16:9 - Effective pixels: 24 megapixels - Sensor photo detectors: 25 megapixels - Sensor size: APS-C (23.5 x 15.6 mm) - Sensor type: CMOS - Processor: Bionz X</li>
    <li><h2>Image:</h2> ISO: Auto, 100-32000 (expands to 102800) - Boosted ISO (maximum): 102800 - White balance presets: 10 - Custom white balance: Yes - Image stabilization: No - Uncompressed format: RAW - JPEG quality levels: Extra fine, fine, standard</li>
    <li><h2>Optics & Focus:</h2> Autofocus: Contrast Detect (sensor), Phase Detect - Multi-area, Center, Selective single-point, Tracking, Single, Continuous, Touch, Face Detection, Live View</li>
</ul>

`,
    `
<ul>
    <li><h2>Body Type:</h2> Compact</li>
    <li><h2>Sensor:</h2> Max resolution: 4000 x 3000 - Image ratio: 1:1, 4:3, 3:2, 16:9 - Effective pixels: 12 megapixels - Sensor size: 1/2.3" (6.17 x 4.55 mm) - Sensor type: BSI-CMOS - Processor: TruePic VIII</li>
    <li><h2>Image:</h2> ISO: Auto, ISO 100-12800 - White balance presets: 6 - Custom white balance: Yes (4 slots) - Image stabilization: Sensor-shift - CIPA image stabilization rating: 2.5 stop(s) - Uncompressed format: RAW - JPEG quality levels: Super fine, fine, normal</li>
    <li><h2>Optics & Focus:</h2> Focal length (equiv.): 25–100 mm - Optical zoom: 4× - Maximum aperture: F2–4.9 - Autofocus: Contrast Detect (sensor) - Multi-area, Center, Selective single-point, Tracking, Single, Continuous, Face Detection, Live View - Digital zoom & Manual focus: Yes (4X), Yes</li>
</ul>

`,
    `
    <ul>
        <li><h2>Body Type:</h2> SLR-style mirrorless</li>
        <li><h2>Sensor:</h2> Max resolution: 7008 x 4672 - Image ratio: 1:1, 4:3, 3:2, 16:9 - Effective pixels: 33 megapixels - Sensor size: Full frame (35.6 x 23.8 mm) - Sensor type: BSI-CMOS - Processor: Bionz XR</li>
        <li><h2>Image:</h2> ISO: Auto, 100-51200 (expands to 50-204800) - White balance presets: 7 - Custom white balance: Yes - Image stabilization: Sensor-shift (5-axis) - CIPA image stabilization rating: 5.5 stop(s) - Uncompressed format: RAW - JPEG quality levels: Extra fine, fine, normal</li>
        <li><h2>Optics & Focus:</h2> Autofocus: Contrast Detect (sensor), Phase Detect - Multi-area, Center, Selective single-point, Tracking, Single, Continuous, Touch, Face Detection, Live View - Manual focus & Number of focus points: Yes, 759</li>
    </ul>
    
`,
    `
    <ul>
        <li><h2>Body Type & Sensor:</h2> SLR-style mirrorless, Max resolution: 6000 x 4000 - Image ratio: 1:1, 4:3, 3:2, 16:9 - Effective pixels: 24 megapixels - Sensor size: APS-C (22.2 x 14.8 mm) - Sensor type: CMOS - Processor: Digic X</li>
        <li><h2>Image:</h2> ISO: 100-32000 - Boosted ISO (minimum): 100 - Boosted ISO (maximum): 51200 - White balance presets: 6 - Custom white balance: Yes - Image stabilization: No - Uncompressed format: RAW - JPEG quality levels: Fine</li>
        <li><h2>Optics & Focus:</h2> Autofocus: Phase Detect - Multi-area, Center, Selective single-point, Tracking, Single, Continuous, Touch, Face Detection, Live View - Number of focus points: 651 - Lens mount: Canon RF</li>
        <li><h2>Screen / Viewfinder:</h2> Articulated LCD: Fully articulated - Screen size & Touch screen: 3″, Yes</li>
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