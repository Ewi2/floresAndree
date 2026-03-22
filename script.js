document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const buttonWrapper = document.getElementById('button-wrapper');
    const bouquetWrapper = document.getElementById('bouquet-container') || document.getElementById('bouquet-wrapper'); // Compatible con ambas versiones
    const textContainer = document.getElementById('text-container');
    const gifOsitos = document.getElementById('gif-container');

    const TOTAL_FLOWERS = 18; // SU DÍA DE CUMPLEAÑOS JEJJEJEJ

    // irregularidad
    const MIN_HEIGHT = 140; 
    const MAX_HEIGHT = 190; 
    const MAX_ANGLE_OFFSET = 8; 
    const MAX_VERTICAL_OFFSET = 15; 

    function createTulip(index, total) {
        const flowerWrap = document.createElement('div');
        flowerWrap.classList.add('flower-wrap');


        const angleBase = (index / (total - 1)) * 70 - 35; 
        const angleRandomOffset = Math.random() * (MAX_ANGLE_OFFSET * 2) - MAX_ANGLE_OFFSET; 
        const finalAngle = angleBase + angleRandomOffset;

        const randomHeight = Math.random() * (MAX_HEIGHT - MIN_HEIGHT) + MIN_HEIGHT;

        const verticalRandomOffset = Math.random() * MAX_VERTICAL_OFFSET;

        flowerWrap.style.transform = `rotate(${finalAngle}deg)`;
        flowerWrap.style.bottom = `-${verticalRandomOffset}px`;
        
        flowerWrap.style.zIndex = Math.round(randomHeight / 10); 

        flowerWrap.innerHTML = `
            <div class="stem" style="height: ${randomHeight}px;">
                <div class="leaf leaf-1" style="top: ${Math.random() * 40 + 50}px; left: -15px;"></div>
                <div class="leaf leaf-2" style="top: ${Math.random() * 40 + 60}px; right: -15px;"></div>
                <div class="tulip-head">
                    <div class="petals">
                        <div class="pétalo-central"></div>
                    </div>
                </div>
            </div>
        `;

        return flowerWrap;
    }

    startButton.addEventListener('click', () => {
        buttonWrapper.classList.add('fade-out');

        bouquetWrapper.innerHTML = '';
        for (let i = 0; i < TOTAL_FLOWERS; i++) {
            const tulip = createTulip(i, TOTAL_FLOWERS);
            bouquetWrapper.appendChild(tulip);
        }

        void bouquetWrapper.offsetWidth; 

        bouquetWrapper.classList.add('emerge');

        textContainer.classList.add('fade-in');
        gifOsitos.classList.add('fade-in');
    });
});
//TE AMO ANDREA