const overlay = document.getElementById('imageOverlay');
const extraImagesContainer = document.getElementById('extraImages');
const overlayTitle = document.getElementById('overlayTitle');
const closeBtn = document.querySelector('.close-overlay');

// Data for extra images (Replace with your actual filenames)
const facilityData = {
    "Main Gymnasium": [
        "court.png", 
        "court1.png", 
    ],
    "Athletic Track & Field": [
        "f1.png",
    ]
};

// Add click event to all facility cards
document.querySelectorAll('.facility-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        overlayTitle.innerText = title;
        
        // Clear previous images
        extraImagesContainer.innerHTML = '';

        // Load new images based on the title
        if (facilityData[title]) {
            facilityData[title].forEach(src => {
                const img = document.createElement('img');
                img.src = src; // Your extra image path
                extraImagesContainer.appendChild(img);
            });
        }

        overlay.style.display = 'flex';
    });
});

// Hide overlay when clicking X or outside the content
closeBtn.onclick = () => overlay.style.display = 'none';
window.onclick = (event) => {
    if (event.target == overlay) overlay.style.display = 'none';
};