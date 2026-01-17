/**
 * ============================================
 * THE DATA ANALYST'S COSMOS
 * Interactive Roadmap Visualization
 * ============================================
 */

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    orbitRadius: 340,
    colors: [
        'orange', 'red', 'teal', 'indigo', 'yellow',
        'pink', 'cyan', 'emerald', 'purple', 'lime', 'rose'
    ],
    sizes: {
        launchpad: 'large',
        default: 'medium'
    }
};

// ============================================
// GET RESPONSIVE ORBIT RADIUS
// Debe coincidir exactamente con el radio de orbit-2 en cada breakpoint
// ============================================
function getOrbitRadius() {
    const width = window.innerWidth;
    
    // Los valores deben ser exactamente la mitad del width/height de orbit-2
    if (width >= 1920) {
        return 300; // orbit-2: 600px → radio 300px
    } else if (width >= 1024) {
        return 220; // orbit-2: 440px → radio 220px
    } else if (width >= 768) {
        return 200; // orbit-2: 400px → radio 200px
    } else if (width >= 480) {
        return 180; // orbit-2: 360px → radio 180px
    } else {
        return 160; // orbit-2: 320px → radio 160px
    }
}

// ============================================
// MODULE DATA
// ============================================
const modulesData = {
    "core": {
        "id": "da-core",
        "label": "DA Core",
        "subtitle": "Repositorio Central",
        "url": "https://github.com/ORG/da-core",
        "description": "Diseño pedagógico completo del bootcamp: visión, cronograma, evaluación y estructura"
    },
    "satellites": [
        {
            "id": "da-sat-00-launchpad",
            "label": "Launchpad",
            "subtitle": "Fundamentos para el Despegue",
            "url": "https://github.com/ORG/da-sat-00-launchpad-fundamentos",
            "tags": ["preparación", "conceptual", "no-evaluativo"]
        },
        {
            "id": "da-sat-01-atlas",
            "label": "Atlas",
            "subtitle": "Exploración de Datos",
            "url": "https://github.com/ORG/da-sat-01-atlas-exploracion-datos",
            "tags": ["excel", "análisis-básico", "primer-proyecto"]
        },
        {
            "id": "da-sat-02-kepler",
            "label": "Kepler",
            "subtitle": "Limpieza de Datos",
            "url": "https://github.com/ORG/da-sat-02-kepler-limpieza-datos",
            "tags": ["python", "limpieza", "transformación"]
        },
        {
            "id": "da-sat-03-galileo",
            "label": "Galileo",
            "subtitle": "Visualización",
            "url": "https://github.com/ORG/da-sat-03-galileo-visualizacion",
            "tags": ["gráficos", "dashboards", "storytelling"]
        },
        {
            "id": "da-sat-04-newton",
            "label": "Newton",
            "subtitle": "Estadística Descriptiva",
            "url": "https://github.com/ORG/da-sat-04-newton-estadistica",
            "tags": ["estadística", "EDA", "análisis"]
        },
        {
            "id": "da-sat-05-curie",
            "label": "Curie",
            "subtitle": "EDA Avanzado",
            "url": "https://github.com/ORG/da-sat-05-curie-eda",
            "tags": ["análisis-avanzado", "patrones", "hipótesis"]
        },
        {
            "id": "da-sat-06-faraday",
            "label": "Faraday",
            "subtitle": "Reporting Automatizado",
            "url": "https://github.com/ORG/da-sat-06-faraday-reporting",
            "tags": ["automatización", "informes", "reproducibilidad"]
        },
        {
            "id": "da-sat-07-darwin",
            "label": "Darwin",
            "subtitle": "Clustering",
            "url": "https://github.com/ORG/da-sat-07-darwin-clustering",
            "tags": ["machine-learning", "clustering", "segmentación"]
        },
        {
            "id": "da-sat-08-turing",
            "label": "Turing",
            "subtitle": "Clasificación",
            "url": "https://github.com/ORG/da-sat-08-turing-clasificacion",
            "tags": ["machine-learning", "clasificación", "predicción"]
        },
        {
            "id": "da-sat-09-pasteur",
            "label": "Pasteur",
            "subtitle": "Pipelines de ML",
            "url": "https://github.com/ORG/da-sat-09-pasteur-pipelines",
            "tags": ["machine-learning", "pipelines", "automatización"]
        },
        {
            "id": "da-sat-10-halley",
            "label": "Halley",
            "subtitle": "Series Temporales",
            "url": "https://github.com/ORG/da-sat-10-halley-series-temporales",
            "tags": ["forecasting", "tendencias", "series-temporales"]
        }
    ]
};

// ============================================
// INITIALIZE APPLICATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    try {
        renderSatellites();
        setupInteractions();
        initTailwind();
    } catch (error) {
        console.error('Error initializing application:', error);
        showFallbackMessage();
    }
});

// ============================================
// RENDER SATELLITES
// ============================================
function renderSatellites() {
    if (!modulesData || !modulesData.satellites) {
        console.error('No satellite data available');
        return;
    }

    const container = document.getElementById('satellites-container');
    if (!container) {
        console.error('Satellites container not found');
        return;
    }

    const satellites = modulesData.satellites;
    const angleStep = 360 / satellites.length;

    satellites.forEach((satellite, index) => {
        const angle = angleStep * index;
        const satelliteNode = createSatelliteNode(satellite, angle, index);
        container.appendChild(satelliteNode);
    });
}

// ============================================
// CREATE SATELLITE NODE
// ============================================
function createSatelliteNode(satellite, angle, index) {
    const node = document.createElement('div');
    node.className = 'satellite-node';
    
    // Add color class
    const colorClass = CONFIG.colors[index % CONFIG.colors.length];
    node.classList.add(`color-${colorClass}`);
    
    // Add size class
    const sizeClass = satellite.id.includes('launchpad') 
        ? CONFIG.sizes.launchpad 
        : CONFIG.sizes.default;
    node.classList.add(`size-${sizeClass}`);
    
    // Position the node using rotate-translate-rotate technique
    // This ensures satellites sit exactly on the orbit-2 circle
    const orbitRadius = getOrbitRadius();
    node.style.transform = `rotate(${angle}deg) translate(${orbitRadius}px) rotate(-${angle}deg)`;
    
    // Set data attributes
    node.dataset.id = satellite.id;
    node.dataset.url = satellite.url || '#';
    node.setAttribute('role', 'button');
    node.setAttribute('tabindex', '0');
    node.setAttribute('aria-label', `${satellite.label} - ${satellite.subtitle}`);
    
    // Build node HTML
    node.innerHTML = `
        <div class="node-visual">
            <div class="node-pulse"></div>
            <div class="node-dot"></div>
        </div>
        <h3 class="module-title">${satellite.label}</h3>
        <p class="module-subtitle">${satellite.subtitle}</p>
    `;
    
    return node;
}

// ============================================
// SETUP INTERACTIONS
// ============================================
function setupInteractions() {
    // DA Core interaction
    const daCore = document.querySelector('.da-core');
    if (daCore && modulesData && modulesData.core) {
        daCore.dataset.url = modulesData.core.url || '#';
        daCore.setAttribute('role', 'button');
        daCore.setAttribute('tabindex', '0');
        daCore.setAttribute('aria-label', `${modulesData.core.label} - ${modulesData.core.subtitle}`);
        
        daCore.addEventListener('click', handleNodeClick);
        daCore.addEventListener('keydown', handleNodeKeydown);
    }
    
    // Satellite nodes interaction
    const satellites = document.querySelectorAll('.satellite-node');
    satellites.forEach(node => {
        node.addEventListener('click', handleNodeClick);
        node.addEventListener('keydown', handleNodeKeydown);
    });
    
    // Responsive resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            repositionSatellites();
        }, 250);
    });
}

// ============================================
// REPOSITION SATELLITES ON RESIZE
// ============================================
function repositionSatellites() {
    const satellites = document.querySelectorAll('.satellite-node');
    const satelliteCount = satellites.length;
    const angleStep = 360 / satelliteCount;
    const orbitRadius = getOrbitRadius();
    
    satellites.forEach((satellite, index) => {
        const angle = angleStep * index;
        const radians = (angle - 90) * (Math.PI / 180);
        const x = orbitRadius * Math.cos(radians);
        const y = orbitRadius * Math.sin(radians);
        satellite.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// ============================================
// HANDLE NODE CLICK
// ============================================
function handleNodeClick(event) {
    const node = event.currentTarget;
    const url = node.dataset.url;
    
    if (url && url !== '#') {
        window.open(url, '_blank', 'noopener,noreferrer');
    } else {
        console.warn('No URL configured for this node');
    }
}

// ============================================
// HANDLE NODE KEYBOARD INTERACTION
// ============================================
function handleNodeKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleNodeClick(event);
    }
}

// ============================================
// INITIALIZE TAILWIND
// ============================================
function initTailwind() {
    if (window.tailwind) {
        window.tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#D4AF37",
                        "background-dark": "#0a0a0a",
                    },
                    fontFamily: {
                        display: ["'Playfair Display'", "serif"],
                        sans: ["'Inter'", "sans-serif"],
                    },
                },
            },
        };
    }
}

// ============================================
// FALLBACK MESSAGE
// ============================================
function showFallbackMessage() {
    const container = document.getElementById('satellites-container');
    if (container) {
        container.innerHTML = `
            <div style="text-align: center; color: var(--slate-400); padding: 2rem;">
                <p>Unable to load module data. Please check the console for details.</p>
            </div>
        `;
    }
}

// ============================================
// UTILITY: LOG MODULE INFO (for debugging)
// ============================================
function logModuleInfo() {
    if (modulesData) {
        console.log('=== DA COSMOS MODULES ===');
        console.log('Core:', modulesData.core);
        console.log('Satellites:', modulesData.satellites);
        console.log('========================');
    }
}

// Expose for debugging
window.daRoadmap = {
    config: CONFIG,
    data: modulesData,
    logInfo: logModuleInfo
};
