📘 Chapter 1 | THREE.js - 3D Object Visualization
This project demonstrates the basics of using Three.js to render a 3D object inside a web browser. It includes camera setup, scene creation, and rendering an animated wireframe geometry using WebGL.

🚀 Features
Uses Three.js to render 3D objects.

Renders an IcosahedronGeometry (20-faced polyhedron).

Wireframe material with smooth rotation animation.

Easily switch between different geometric shapes (Torus, Cone, Box, Sphere, etc.) by uncommenting the relevant geometry code.

Simple and minimal styling for a fullscreen 3D canvas.

🛠️ Getting Started
Prerequisites
A modern web browser (Chrome, Firefox, Edge, etc.).

Local web server (optional but recommended for module loading in some browsers).

Installation & Usage
Clone or download the repository.

Place three.min.js in the same directory (or use a CDN version if preferred).

Open index.html in a web browser.

Or you can start a local server (optional):
``` bash
# Python 3.x
python -m http.server

# Then open http://localhost:8000 in your browser
```
Geometry Options
You can experiment with different shapes by uncommenting any of the geometry blocks in the code:

```bash
// geometry = new THREE.BoxGeometry(...);
// geometry = new THREE.TorusGeometry(...);
// geometry = new THREE.SphereGeometry(...);
```
📂 File Structure
```bash
/project-directory
│
├── index.html        # Main HTML file with Three.js script
├── three.min.js      # Three.js library (local or via CDN)
```