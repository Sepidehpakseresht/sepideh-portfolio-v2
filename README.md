# 🚀 Sepideh Pakseresht - Modern Portfolio

A stunning, interactive portfolio website built with React, Three.js, and modern web technologies. Features a realistic 3D VS Code editor, smooth animations, and a professional design.

![Portfolio Preview](https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop)

## ✨ Features

- **🎨 Modern Design**: Dark theme with orange accents (#F96902, #0B0E13)
- **🖥️ 3D VS Code Editor**: Interactive 3D model in the hero section
- **⚡ Smooth Animations**: Framer Motion powered animations
- **📱 Fully Responsive**: Works perfectly on all devices
- **🎯 Interactive Elements**: Hover effects, modals, and smooth transitions
- **🔧 Modern Tech Stack**: React 18, Vite, Three.js, Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Styling**: Tailwind CSS, Custom CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Inter, Poppins (Google Fonts)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/updated-portfolio.git
cd updated-portfolio
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/
│   │   └── Header.jsx          # Navigation header
│   ├── Experienxe/
│   │   └── Experience.jsx      # Experience timeline
│   ├── About-Me.jsx            # About section
│   ├── Contact.jsx             # Contact form
│   ├── Footer.jsx              # Footer
│   ├── FullScreenMenu.jsx      # Mobile menu
│   ├── Hero.jsx                # Hero with 3D VS Code
│   ├── Skills.jsx              # Skills grid
│   └── Works.jsx               # Projects showcase
├── App.jsx                     # Main app component
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## 🎨 Customization

### Colors
The portfolio uses a custom color scheme defined in `tailwind.config.js`:
- **Primary**: `#F96902` (Orange)
- **Background**: `#0B0E13` (Dark)
- **Surface**: `#181C23` (Dark gray)

### 3D Elements
The 3D VS Code editor is located in `src/components/Hero.jsx`. You can customize:
- Colors and materials
- Animation speed
- Rotation behavior
- Lighting effects

### Content
Update the following files to customize your content:
- **Personal Info**: `src/components/Hero.jsx`, `src/components/About-Me.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Projects**: `src/components/Works.jsx`
- **Experience**: `src/components/Experienxe/Experience.jsx`
- **Contact**: `src/components/Contact.jsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms
The project works with any static hosting service.

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## 🎯 Key Features Explained

### 3D VS Code Editor
- **Realistic Interface**: Detailed VS Code UI with accurate colors
- **Interactive Rotation**: Smooth auto-rotation with user controls
- **Dynamic Elements**: Blinking cursor, floating particles
- **Responsive**: Adapts to different screen sizes

### Skills Section
- **Hover Interactions**: Detailed skill information on hover
- **Code Snippets**: Real code examples for each skill
- **Visual Previews**: UI mockups for each technology
- **Progress Indicators**: Skill level visualization

### Projects Showcase
- **Live Previews**: Hover to see project previews
- **Modal Details**: Click for detailed project information
- **Technology Tags**: Visual tech stack indicators
- **External Links**: Direct links to live demos and code

## 🔧 Troubleshooting

### Common Issues

**1. Dependency Conflicts**
```bash
npm install --legacy-peer-deps
```

**2. Build Errors**
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**3. 3D Elements Not Loading**
- Check Three.js imports
- Verify @react-three/fiber installation
- Ensure WebGL support in browser

**4. Animations Not Working**
- Verify Framer Motion installation
- Check import statements
- Clear browser cache

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sepideh Pakseresht**
- GitHub: [@Sepidehpakseresht](https://github.com/Sepidehpakseresht)
- LinkedIn: [Sepideh Pakseresht](https://www.linkedin.com/in/sepideh-pakseresht-1b3967239)
- Email: sepiidehpakseresht@gmail.com

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) for 3D graphics
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Icons](https://react-icons.github.io/react-icons/) for icons
- [Unsplash](https://unsplash.com/) for placeholder images

---

⭐ **Star this repository if you found it helpful!**
