# 🎯 My Personal Portfolio

## 📁 Live Demo

🔗 [View Live Portfolio](https://my-personal-portfolio-9hbbzacm7-teja-jangas-projects.vercel.app/)

## Overview

A professional, modern portfolio website built with Next.js and Tailwind CSS. This portfolio showcases my Front-End Development projects, tech stack, professional journey, and provides easy ways to get in touch. Features a responsive design with a sleek neon-inspired dark theme, smooth navigation, and an engaging user interface.

## ✨ Features

### 🎨 Core Features:
- 💻 **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- 📱 **Mobile Navigation** - Smart hamburger menu for mobile devices
- 🎯 **Project Showcase** - Display of 5 complete projects with live demos and source links
- 🛠️ **Tech Stack Section** - Visual representation of technical skills
- 📅 **Timeline Section** - Professional journey and education highlights
- 📧 **Contact Information** - Direct email and phone contact options
- ⚡ **Fast Performance** - Optimized with Next.js for quick load times
- 🌓 **Dark Theme** - Modern neon-inspired color scheme with cyan/blue accents
- 🎬 **Smooth Animations** - Subtle hover effects and transitions
- 📊 **SEO Optimized** - Proper metadata and structured content

## Tech Stack

- **Frontend Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Language:** TypeScript / JavaScript
- **Icons:** react-icons
- **Deployment:** Vercel
- **Version Control:** Git, GitHub
- **Build Tool:** npm/yarn

## Project Structure

```
My-Personal-Portfolio/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation & mobile menu
│   │   ├── Hero.tsx            # Introduction section
│   │   ├── Projects.tsx        # Projects showcase grid
│   │   ├── Technologies.tsx    # Tech stack display
│   │   ├── Timeline.tsx        # Education & experience
│   │   └── Footer.tsx          # Contact & social links
│   ├── constants/
│   │   └── index.ts            # Projects data
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── public/
│   └── images/                 # Project screenshots
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 📂 Projects Included

1. **Movie Search App** - React + Vite, OMDB API integration
2. **GetGadjet** - PHP + MySQL e-commerce platform
3. **Weather Dashboard** - Vanilla JavaScript weather app
4. **Healthy Meals Tracker** - JavaScript with Chart.js visualization
5. **Currency Converter** - React with real-time exchange rates

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Teja-Janga/My-Personal-Portfolio.git
```

2. Navigate to the project:
```bash
cd My-Personal-Portfolio
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
npm run start
```

## Usage Guide

1. **Customize Content** - Edit project data in `app/constants/index.ts`
2. **Update Personal Info** - Modify contact details in `Footer.tsx`
3. **Add Project Images** - Place screenshots in `public/images/`
4. **Change Colors** - Adjust Tailwind colors in `tailwind.config.ts`
5. **Deploy** - Push to GitHub and deploy via Vercel

## Environment Setup

No environment variables are required for the basic setup. All project data is stored in the `constants/index.ts` file.

For future integrations:
1. Create a `.env.local` file
2. Add your environment variables
3. Reference them using `process.env.VARIABLE_NAME`

## Features in Detail

### Hero Section
- Eye-catching introduction with animated gradient background
- Call-to-action "Learn More" button
- Responsive layout that works on all devices

### Projects Showcase
- Grid layout that adapts from 1 column (mobile) to 3 columns (desktop)
- Project cards with image preview
- Links to live demos and GitHub repositories
- Technology stack tags for each project
- Hover effects for better interactivity

### Technologies Section
- Visual display of your tech skills
- Organized by category (Frontend, Tools, Languages)
- Icon-based representation for easy recognition

### Timeline Section
- Visual representation of your professional journey
- Education and internship milestones
- Alternating layout for visual interest

### Mobile Navigation
- Responsive hamburger menu
- Touch-friendly navigation links
- Smooth animations and transitions

## Customization Tips

### Adding a New Project

1. Add project data to `constants/index.ts`:
```typescript
{
  title: 'Your Project Name',
  description: 'Project description...',
  image: '/images/your-project.png',
  tags: ['Tech1', 'Tech2'],
  source: 'GitHub link',
  visit: 'Live demo link',
  id: 5,
}
```

2. Add project image to `public/images/`

### Changing Colors

Edit the color classes in component files:
- Replace `from-cyan-600` with your preferred color
- Use Tailwind's built-in color palette

## Deployment

This project is deployed on **Vercel** and automatically deploys on every push to the main branch.

### Deploy Your Own

1. Push your code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy"
5. Your portfolio will be live in minutes!

## Performance Optimizations

- Next.js Image component for optimized images
- Code splitting for faster initial load
- Tailwind CSS purging unused styles
- Responsive images for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

📧 Email: [tejat7927@gmail.com](mailto:tejat7927@gmail.com)
📱 Phone: +91 7032769461
🔗 GitHub: [@Teja-Janga](https://github.com/Teja-Janga)
💼 LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/teja-janga)

## Learning Journey

This portfolio was built with the philosophy of **#LearningbyDoing** - every line of code was written from scratch to understand the fundamentals deeply rather than copy-pasting. This approach has helped me master:

- Next.js and React best practices
- Tailwind CSS utility-first approach
- TypeScript fundamentals
- Component-based architecture
- Responsive design principles
- Version control with Git

---

**Made with ❤️ by Teja Janga**
