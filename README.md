# The Spine Lounge - Doctor's Website

A professional, modern website for "The Spine Lounge" - a specialized spine care practice. Built with React, Vite, and TailwindCSS.

## Features

- **Modern Design**: Clean, professional interface with dark teal and tan color scheme inspired by the business card
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Multiple Sections**:
  - Hero section with call-to-action buttons
  - About section with statistics
  - Services section showcasing 6 key services
  - Contact section with form and contact information
  - Professional footer
- **Interactive Elements**: Hover effects, smooth transitions, and modern UI components
- **Icon Integration**: Uses Lucide React for consistent, beautiful icons

## Tech Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **TailwindCSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
- `spine-teal`: Main dark teal color (#1a5f5f)
- `spine-teal-dark`: Darker teal for accents (#0d3d3d)
- `spine-tan`: Tan background color (#d4b896)
- `spine-tan-light`: Lighter tan for sections (#e8dcc8)

### Content

Edit `src/App.jsx` to modify:
- Navigation links
- Hero section content
- About section text
- Services offered
- Contact information
- Form fields

## Project Structure

```
drVasuJindal/
├── index.html          # HTML entry point
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # TailwindCSS configuration
├── postcss.config.js   # PostCSS configuration
├── src/
│   ├── main.jsx        # React entry point
│   ├── App.jsx         # Main application component
│   └── index.css       # Global styles with Tailwind
└── README.md           # This file
```

## License

This project is private and proprietary.
