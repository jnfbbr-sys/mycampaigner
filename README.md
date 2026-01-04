# MyCampaigner Marketing Site

A production-ready SPA marketing website for MyCampaigner - a Shopify discount campaign automation app.

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS
- **React Router** - Client-side routing
- **Framer Motion** - Animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server will start at `http://localhost:5173`

## Project Structure

```
marketing-site/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Footer.tsx       # Site footer
│   │   └── Layout.tsx       # Page layout wrapper
│   ├── pages/
│   │   ├── Home.tsx         # Homepage with hero
│   │   ├── Features.tsx     # Feature showcase
│   │   ├── Pricing.tsx      # Pricing plans
│   │   ├── Privacy.tsx      # Privacy policy
│   │   └── Terms.tsx        # Terms of service
│   ├── App.tsx              # Root component with routes
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## Features

### Pages

- **Home** - Hero section with CTAs, feature grid, how it works, and final CTA
- **Features** - Detailed feature breakdown organized by category
- **Pricing** - Plan comparison with monthly/yearly toggle and FAQ
- **Privacy Policy** - GDPR and Shopify-compliant privacy policy
- **Terms of Service** - Legal terms and conditions

### Components

- **Header** - Responsive navigation with mobile menu
- **Footer** - Multi-column footer with links and legal information
- **Layout** - Wrapper component for consistent page structure

### Design

- Clean, modern SaaS aesthetic
- Mobile-first responsive design
- Subtle Framer Motion animations
- Accessible typography and colors
- Tailwind CSS utility classes

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: {
    // Your brand colors
  },
}
```

### Content

Update content in the page components:

- `src/pages/Home.tsx` - Homepage content
- `src/pages/Features.tsx` - Feature descriptions
- `src/pages/Pricing.tsx` - Plans and pricing

### Links

Update Shopify App Store link in:

- `src/components/Header.tsx`
- `src/pages/Home.tsx`
- `src/pages/Pricing.tsx`

## Deployment

### Build for Production

```bash
npm run build
```

The `dist/` folder will contain optimized static files ready for deployment.

### Deploy Options

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop `dist/` folder
- **GitHub Pages**: Push `dist/` to `gh-pages` branch
- **Any static host**: Upload `dist/` contents

## License

ISC

## Support

For questions or support, contact: support@mycampaigner.com
# mycampaigner
