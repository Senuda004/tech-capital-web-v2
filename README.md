# Tech Capital Managed Services - Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, and Tailwind CSS for Tech Capital Managed Services, an IT solutions and consulting company.

## 🚀 Features

- **Modern Design**: Clean, professional design with white and red (#E74C3C) color scheme
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth animations using Framer Motion
- **Comprehensive Sections**:
  - Hero section with animated elements
  - About section with company stats
  - Services showcase (8 key services)
  - Interactive statistics section
  - Projects/portfolio gallery
  - Client testimonials
  - Trusted companies section
  - Call-to-action section
  - Contact form with EmailJS integration

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **UI Components**: Radix UI primitives

## 📦 Installation

1. **Clone the repository** (or navigate to the project folder)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up EmailJS**:
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a new email service
   - Create an email template
   - Copy `.env.local.example` to `.env.local`
   - Add your EmailJS credentials:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Add your logo**:
   - Place your logo image in the `public` folder as `logo.png`
   - The provided logo from the attachment should be saved as `public/logo.png`

## 🚀 Running the Project

### Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky navigation header
│   │   └── Footer.tsx      # Footer with links and social media
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section with stats
│   │   ├── Services.tsx    # Services grid
│   │   ├── Stats.tsx       # Statistics section
│   │   ├── Projects.tsx    # Projects/portfolio
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── ClientCompanies.tsx # Trusted companies
│   │   ├── CTA.tsx         # Call-to-action section
│   │   └── Contact.tsx     # Contact form with EmailJS
│   └── ui/
│       ├── button.tsx      # Reusable button component
│       ├── card.tsx        # Card component
│       ├── input.tsx       # Input component
│       ├── textarea.tsx    # Textarea component
│       └── animated-section.tsx # Animation wrapper
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    └── logo.png            # Company logo
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.ts`. Primary colors:
- Primary: #E74C3C (Red)
- Background: White and light gray shades

### Content
Update the content in each section component:
- Services: `components/sections/Services.tsx`
- Projects: `components/sections/Projects.tsx`
- Testimonials: `components/sections/Testimonials.tsx`
- Client Companies: `components/sections/ClientCompanies.tsx`

### Logo
Replace `public/logo.png` with your own logo image.

## 🔧 Key Features

### 1. Animated Hero Section
- Floating background elements
- Smooth fade-in animations
- Responsive design with mobile-optimized layout

### 2. Services Grid
- 8 comprehensive IT service offerings
- Hover effects with smooth transitions
- Icon-based visual representation

### 3. Projects Portfolio
- 6 case studies with results
- Category tags and year labels
- Image thumbnails with hover effects

### 4. Contact Form
- EmailJS integration for form submissions
- Real-time validation
- Success/error status messages
- Contact information cards

### 5. Interactive Elements
- Scroll-triggered animations
- Hover effects on cards and buttons
- Smooth scrolling navigation
- Mobile-responsive menu

## 📧 EmailJS Setup Guide

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Create/connect an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{company}}`
   - `{{message}}`
4. Copy your Service ID, Template ID, and Public Key to `.env.local`

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Custom VPS

## 📝 License

This project is created for Tech Capital Managed Services.

## 🤝 Support

For questions or issues, please contact Tech Capital Managed Services at info@techcapital.com

---

**Built with ❤️ using Next.js and Tailwind CSS**
