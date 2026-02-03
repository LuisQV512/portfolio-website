# Luis Quiroz Viveros - Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

🌐 **Live Site:** [luisquirozviveros.com](https://luisquirozviveros.com)

## ✨ Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for professional transitions
- **Contact Form**: Integrated with EmailJS for direct email delivery
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, sitemap, robots.txt, and JSON-LD structured data
- **Security Headers**: X-Frame-Options, X-XSS-Protection, CSP, and more via Vercel
- **Accessibility**: Skip-to-main link, semantic HTML, and ARIA labels
- **Image Optimization**: WebP format with fallback support

## 📋 Sections

1. **Hero** - Introduction with profile photo and call-to-action buttons
2. **About** - Professional summary and technical skills grid
3. **Experience** - Work history at USAA and General Motors
4. **Education** - University degree information
5. **Resume** - Downloadable PDF resume
6. **Contact** - Working contact form with validation and social links
7. **Footer** - Social media links and copyright

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and development server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Framer Motion 12.29.0** - Animation library
- **React Icons 5.5.0** - Icon library
- **EmailJS 4.4.1** - Contact form email service

## 📦 Installation

### Prerequisites
- Node.js 22.x or higher
- npm 10.x or higher

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/LuisQV512/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🚀 Deployment

This site is deployed on **Vercel** with automatic deployments from the GitHub repository.

**Production URL:** https://luisquirozviveros.com

### Deployment Process

1. Push changes to the `main` branch on GitHub
2. Vercel automatically builds and deploys the updated site
3. Changes go live in ~2 minutes

### Environment Variables on Vercel

The following environment variables are configured in the Vercel dashboard:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## 🔒 Security

- Environment variables for sensitive data (.env not tracked in git)
- Security headers configured in `vercel.json`
- Input validation on contact form
- HTTPS enforced on production

## 📂 Project Structure

```
portfolio-website/
├── public/
│   ├── IMG_0610.JPG          # Profile photo (original)
│   ├── IMG_0610.webp         # Profile photo (optimized)
│   ├── Luis_QuirozViveros_Resume.pdf
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Resume.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env                     # Environment variables (not tracked)
├── .env.example             # Environment variable template
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vercel.json              # Security headers configuration
└── vite.config.js
```

## 🎨 Color Scheme

- **Primary**: `#1e3a8a` (Navy Blue)
- **Secondary**: `#3b82f6` (Bright Blue)
- **Accent**: `#60a5fa` (Light Blue)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

Luis Quiroz Viveros
- **Email**: luisquirozviveros@gmail.com
- **LinkedIn**: [linkedin.com/in/luisquirozviveros](https://linkedin.com/in/luisquirozviveros)
- **GitHub**: [@LuisQV512](https://github.com/LuisQV512)
- **Website**: [luisquirozviveros.com](https://luisquirozviveros.com)

---

**Built with React, Vite, Tailwind CSS, and Framer Motion**
