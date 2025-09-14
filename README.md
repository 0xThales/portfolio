# Daniel Jimenez Portfolio

A modern, interactive portfolio website built with Astro, featuring a unique sliding interface and custom animations. This portfolio showcases a creative approach to web development with custom cursors, interactive elements, and a playful design.

![Portfolio Screenshot](docs/home.png)

> _"Software is eating the world"_ - Interactive portfolio with custom animations and unique design elements

## ✨ Features

- **Interactive Slider Navigation**: Custom-built slider with dots navigation and keyboard controls
- **Animated Welcome Section**: Dynamic text animation with Pacman-inspired elements
- **Custom Cursors**: Tailored cursor styles for different interaction states
- **Maximize/Minimize Interface**: Toggle between different viewing modes
- **Responsive Design**: Built with TailwindCSS for optimal viewing across devices
- **State Management**: Uses Nanostores for reactive state management
- **Modern Typography**: Custom font stack including VT323, Epilogue, and DM Sans

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── cursor.svg
│   │   ├── hand.svg
│   │   ├── linkedin.jpeg
│   │   ├── pacman.png
│   │   ├── pointer.svg
│   │   ├── text.svg
│   │   ├── whatsapp.jpeg
│   │   └── whatsapp.svg
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button.astro
│   │   │   ├── Contact.astro
│   │   │   ├── Divider.astro
│   │   │   ├── Pacman.astro
│   │   │   ├── QrCode.astro
│   │   │   └── Toast.astro
│   │   ├── Footer.astro
│   │   ├── Goof.astro
│   │   ├── Me.astro
│   │   ├── Slider.astro
│   │   └── Welcome.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── store.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator with component islands
- **Styling**: [TailwindCSS](https://tailwindcss.com) - Utility-first CSS framework
- **Icons**: [Lucide Astro](https://lucide.dev) - Beautiful & consistent icon toolkit
- **State Management**: [Nanostores](https://github.com/nanostores/nanostores) - Tiny state manager
- **Language**: TypeScript for enhanced developer experience

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎨 Design Features

### Custom Cursors

The portfolio features three custom cursor states:

- **Default**: Custom arrow cursor for general navigation
- **Interactive**: Pointer cursor for clickable elements
- **Text**: Text cursor for selectable content

### Interactive Slider

- Navigate between portfolio sections using arrow buttons
- Dot navigation for direct section access
- Page counter showing current/total sections
- Maximize/minimize toggle for different viewing experiences

### Responsive Typography

- Viewport-relative heading sizes for perfect scaling
- Multiple font families for visual hierarchy
- Custom letter spacing and weights

## 📱 Sections

1. **Welcome**: Interactive landing with animated text and Pacman element
2. **Me**: Personal introduction and background
3. **Goof**: Creative showcase section

## 🔗 Contact

Built by [Daniel Jimenez](https://www.linkedin.com/in/dan-jimenez-dev)

---

_"Software is eating the world"_ - This portfolio embodies that philosophy with modern web technologies and creative interaction design.
