# 🌌 El Cosmos del Data Analyst

Visualización interactiva del roadmap curricular del Data Analyst Bootcamp.

**Del dato al criterio. De la técnica al razonamiento analítico aplicado.**

---

## 🚀 Ver el roadmap

**[→ https://anais-rv.github.io/da-roadmap/](https://anais-rv.github.io/da-roadmap/)**

---

## 🏗️ Estructura

- **DA Core**: Repositorio central con visión pedagógica, cronograma y evaluación
- **11 Satélites**: Módulos temáticos especializados (Launchpad → Halley)
- **Estrellas realistas**: Campo estelar con variación de temperatura
- **Animaciones astronómicas**: Breathing effects, órbitas, meteoros

---

## 💻 Desarrollo local

```bash
python -m http.server 8000
# http://localhost:8000
```

---

## 📦 Tecnología

- Tailwind CSS (inline config)
- HTML5 Canvas (shooting stars)
- SVG (micro-detalles orbitales)
- Vanilla JavaScript
- Totalmente responsive

---

## 👩‍💻 Autoría

**Anaïs Rodreíguez Villanueva** · [LinkedIn](https://www.linkedin.com/in/anaisvillanueva/)

Edición I · 2026
  },
  "satellites": [
    {
      "id": "da-sat-XX-nombre",
      "label": "Nombre corto",
      "subtitle": "Descripción breve",
      "url": "https://github.com/ORG/da-sat-XX-nombre",
      "tags": ["tag1", "tag2"]
    }
  ]
}
```

### Añadir un satélite nuevo

1. Abre `data/modules.json`
2. Añade un objeto al array `satellites`:
   ```json
   {
     "id": "da-sat-11-nuevo",
     "label": "Nuevo Módulo",
     "subtitle": "Descripción del módulo",
     "url": "https://github.com/ORG/da-sat-11-nuevo",
     "tags": ["nuevo", "avanzado"]
   }
   ```
3. Guarda y recarga la página

### Eliminar un satélite

Simplemente borra el objeto correspondiente del array `satellites`.

### Cambiar URLs

Edita el campo `url` de cualquier módulo con la URL real del repositorio en GitHub.

---

## 🎨 Personalización

### Colores

Edita las variables CSS en `styles.css`:

```css
:root {
    --color-core: #4a90e2;          /* Color del planeta central */
    --color-satellite: #f39c12;      /* Color de satélites */
    --color-bg: #0a0e17;            /* Fondo oscuro */
    /* ... más colores ... */
}
```

### Configuración de la galaxia

Edita `script.js` → sección `CONFIG`:

```javascript
const CONFIG = {
    stars: {
        count: 300,              // Número de estrellas
        maxSize: 2.5,           // Tamaño máximo de estrellas
        twinkleSpeed: 0.001     // Velocidad de parpadeo
    },
    galaxy: {
        coreRadius: 50,         // Radio del planeta central
        orbitRadius: 280,       // Radio de la órbita de satélites
        satelliteRadius: 25     // Radio de planetas satélite
    }
};
```

### Deshabilitar efectos

Para mejorar rendimiento o simplificar:

```javascript
// En script.js
const CONFIG = {
    parallax: {
        enabled: false  // Deshabilita parallax
    }
};
```

---

## 🔧 Estructura del proyecto

```
da-roadmap/
├── index.html          # Página principal
├── styles.css          # Estilos (galaxia, responsive, a11y)
├── script.js           # Lógica (starfield, rendering, parallax)
├── data/
│   └── modules.json    # Datos de módulos (core + satélites)
└── README.md           # Este archivo
```

---

## 🎯 Convenciones de nombres

### Repositorios recomendados:

- **Central:** `da-core`
- **Satélites:** `da-sat-XX-nombre-descriptivo`
  - `XX`: número de dos dígitos (00, 01, 02...)
  - `nombre-descriptivo`: slug en minúsculas con guiones

Ejemplos:
- ✅ `da-sat-00-launchpad-fundamentos`
- ✅ `da-sat-01-atlas-exploracion-datos`
- ✅ `da-sat-02-kepler-limpieza-datos`
- ❌ `DataAnalyst-Module-01` (no sigue convención)

### IDs en modules.json:

Deben coincidir con el nombre del repo:

```json
{
  "id": "da-sat-01-atlas",
  "url": "https://github.com/ORG/da-sat-01-atlas-exploracion-datos"
}
```

---

## ♿ Accesibilidad

### Navegación por teclado

- **Tab:** Navegar entre planetas
- **Enter / Space:** Abrir repositorio
- **Shift + Tab:** Navegar hacia atrás

### Soporte `prefers-reduced-motion`

El sitio detecta automáticamente si el usuario prefiere movimiento reducido:
- Desactiva animaciones de estrellas
- Desactiva parallax
- Desactiva efectos de nebulosa

Puedes probarlo en DevTools:
1. Abre DevTools (F12)
2. Command Palette (Ctrl+Shift+P)
3. "Emulate CSS prefers-reduced-motion"

### Screen readers

Todos los planetas tienen:
- `role="link"`
- `aria-label` descriptivo
- Instrucciones de interacción

---

## 🐛 Troubleshooting

### No se cargan los datos

**Problema:** "Failed to load modules data" en consola

**Solución:**
1. Verifica que `data/modules.json` existe
2. Verifica que el JSON es válido (usa JSONLint.com)
3. Si usas protocolo `file://`, algunos navegadores bloquean fetch. Usa servidor local.

### Las estrellas no se animan

**Solución:**
1. Abre DevTools → Console
2. Busca errores relacionados con canvas
3. Verifica que `prefers-reduced-motion` no está activo

### Los planetas no se muestran

**Solución:**
1. Inspecciona el elemento `#galaxy`
2. Verifica que el SVG tiene elementos `<g>` dentro
3. Revisa la consola por errores en `renderGalaxy()`

### El parallax no funciona

**Solución:**
1. Verifica que `CONFIG.parallax.enabled` es `true`
2. Verifica que no estás en modo `prefers-reduced-motion`
3. Prueba en ventana del navegador (no en iframe)

---

## 📦 Dependencias

**Ninguna.** Este proyecto no tiene dependencias externas. Todo es vanilla HTML/CSS/JS.

---

## 🔄 Actualizaciones futuras

### Posibles mejoras:

- [ ] Filtrado por tags (mostrar solo módulos con cierta etiqueta)
- [ ] Búsqueda de módulos
- [ ] Vista de línea de tiempo (cronológica)
- [ ] Animación de órbitas de satélites
- [ ] Zoom in/out
- [ ] Dark/light mode toggle
- [ ] Exportar roadmap como imagen

---

## 📄 Licencia

Material pedagógico diseñado por **Anaïs Rodríguez Villanueva**.

---

## 🙋 Soporte

Si encuentras problemas o tienes sugerencias:

1. Abre un issue en el repositorio `da-roadmap`
2. Incluye:
   - Descripción del problema
   - Navegador y versión
   - Captura de pantalla si es relevante
   - Mensajes de consola

---

**¡Feliz exploración de la galaxia Data Analyst! 🚀✨**
