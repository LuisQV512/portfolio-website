# Luis Quiroz Viveros - Portfolio Website

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive layout that works on all devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Animations**: Subtle animations powered by Framer Motion
- **Contact Form**: Functional contact form ready for integration
- **Customizable**: Easy to customize with your own content

## 📋 Sections

1. **Hero/Home** - Eye-catching introduction with CTA buttons
2. **About Me** - Professional summary and technical skills showcase
3. **Resume** - Downloadable resume with highlights
4. **Contact** - Contact form and social media links
5. **Footer** - Social links and copyright information

## 🛠️ Built With

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## 📦 Installation & Setup

### Prerequisites
- Node.js 22.x or higher
- npm 10.x or higher

### Steps

1. **Navigate to the project**
   ```bash
   cd ~/Developer/personal/portfolio-website
   ```

2. **Install dependencies** (already done if following setup)
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`

## ✏️ Customization Guide

### 1. Personal Information

#### Update Profile Photo
- Add your professional headshot to `/public/profile.jpg`
- Update in `src/components/Hero.jsx`:
  ```jsx
  // Uncomment and update:
  <img
    src="/profile.jpg"
    alt="Luis Quiroz Viveros"
    className="w-48 h-48 mx-auto mb-8 rounded-full object-cover shadow-2xl"
  />
  ```

#### Update Bio and Summary
- Edit `src/components/Hero.jsx` - Update the tagline and description
- Edit `src/components/About.jsx` - Update the professional summary paragraphs

### 2. Skills & Technologies

Edit `src/components/About.jsx`:
```javascript
const skills = [
  { name: 'Your Skill', icon: <YourIcon size={40} />, color: 'text-your-color' },
  // Add or remove skills as needed
];
```

### 3. Statistics & Experience

Edit `src/components/About.jsx`:
```jsx
<h4 className="text-4xl font-bold text-primary mb-2">5+</h4>
<p className="text-gray-700">Years of Experience</p>
// Update with your actual numbers
```

### 4. Resume

1. **Add your resume PDF**
   - Place `resume.pdf` in the `/public` folder

2. **Enable PDF preview** (optional)
   - Uncomment the iframe in `src/components/Resume.jsx`:
     ```jsx
     <iframe
       src="/resume.pdf"
       className="w-full h-96"
       title="Resume Preview"
     />
     ```

3. **Update Education & Certifications**
   - Edit `src/components/Resume.jsx` with your actual details

### 5. Social Media Links

Update in these files:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

Replace placeholder URLs:
```jsx
<a href="https://linkedin.com/in/YOUR-PROFILE" ...>
<a href="https://twitter.com/YOUR-PROFILE" ...>
<a href="https://github.com/LuisQV512" ...>
```

### 6. Contact Information

Edit `src/components/Contact.jsx`:
- Update location information
- Update email address if different
- Add any additional contact methods

### 7. Contact Form Integration

The form currently shows a success message without actually sending. To integrate a backend:

**Option 1: EmailJS** (Recommended for beginners)
```bash
npm install @emailjs/browser
```

**Option 2: Formspree**
- Sign up at formspree.io
- Update form action in Contact.jsx

**Option 3: Your Own Backend**
- Set up API endpoint
- Update handleSubmit in Contact.jsx

### 8. Colors & Branding

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#1e3a8a',    // Navy blue
  secondary: '#3b82f6',  // Bright blue
  accent: '#60a5fa',     // Light blue
},
```

## 📱 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For production deployment**
   ```bash
   vercel --prod
   ```

### Deploy to Netlify

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   netlify deploy
   ```

4. **Production deployment**
   ```bash
   netlify deploy --prod
   ```

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://LuisQV512.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎨 Customization Tips

### Add New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

### Change Animations
- Edit animation variants in component files
- Framer Motion docs: https://www.framer.com/motion/

### Add More Icons
- Browse React Icons: https://react-icons.github.io/react-icons/
- Import and use in your components

## 🐛 Troubleshooting

### Development server won't start
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Tailwind classes not working
- Ensure `index.css` has Tailwind directives
- Check `tailwind.config.js` content paths

### Icons not showing
- Verify React Icons installation: `npm list react-icons`
- Check import statements

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

Luis Quiroz Viveros
- Email: lquirozviveros@gmail.com
- GitHub: [@LuisQV512](https://github.com/LuisQV512)

---

**Made with ❤️ using React, Tailwind CSS, and Framer Motion**