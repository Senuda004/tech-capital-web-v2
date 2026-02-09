# Tech Capital Managed Services - Quick Start Guide

## 🎉 Your Website is Ready!

Congratulations! Your modern landing page is now set up and running.

## 🚀 Accessing Your Website

Your development server is running at:
**[http://localhost:3000](http://localhost:3000)**

Open this URL in your browser to see your website!

## 📋 What's Included

Your landing page includes these sections:

1. **Hero Section** - Eye-catching introduction with animated elements
2. **About Section** - Company information with impressive stats
3. **Services Section** - 8 comprehensive IT services
4. **Statistics Section** - Key metrics displayed beautifully
5. **Projects Section** - 6 case studies showcasing your work
6. **Testimonials Section** - 6 client reviews
7. **Client Companies** - Logos of companies you work with
8. **Call-to-Action** - Encouraging visitors to contact you
9. **Contact Form** - EmailJS-powered contact form

## ⚙️ Essential Setup Tasks

### 1. Add Your Logo (REQUIRED)
- Save your logo image as `public/logo.png`
- See `LOGO-SETUP.md` for detailed instructions
- A temporary SVG placeholder is currently being used

### 2. Configure EmailJS (REQUIRED for Contact Form)
- Follow the complete guide in `EMAILJS-SETUP.md`
- Set up your EmailJS account
- Add credentials to `.env.local`
- Test the contact form

### 3. Customize Content (RECOMMENDED)

#### Update Company Information:
Edit these files to customize content:

**Services** (`components/sections/Services.tsx`):
- Modify service titles, descriptions, and features
- Add or remove services as needed

**Projects** (`components/sections/Projects.tsx`):
- Replace with your actual projects
- Update images (use Unsplash or your own)
- Modify case study details

**Testimonials** (`components/sections/Testimonials.tsx`):
- Add real client testimonials
- Update client photos and information

**Client Companies** (`components/sections/ClientCompanies.tsx`):
- Replace placeholder logos with actual client logos
- Add logo files to the `public` folder

**Contact Information** (`components/sections/Contact.tsx` & `components/layout/Footer.tsx`):
- Update phone number, email, and address
- Modify business hours
- Update social media links

#### Update Metadata:
Edit `app/layout.tsx` to update:
- Page title
- Meta description
- Keywords
- Open Graph tags

## 🎨 Customization

### Colors
The primary color (#E74C3C - red) is configured in:
- `tailwind.config.ts`
- Various component files

To change colors:
1. Open `tailwind.config.ts`
2. Modify the `primary` color values
3. Save and refresh your browser

### Fonts
Current fonts:
- **Inter** - Body text
- **Poppins** - Headings and emphasis

To change fonts, edit `app/layout.tsx`

### Images
Replace placeholder images in:
- Projects section
- Testimonials section (client photos)
- Client companies section (logos)

You can use:
- Your own images (save in `public` folder)
- Unsplash URLs (already used in some sections)
- Other free image services

## 📱 Mobile Responsive

Your website is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

Test on different devices to ensure everything looks perfect!

## 🚀 Deployment

### Deploy to Vercel (Recommended - Free):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
6. Click "Deploy"

Your website will be live in minutes! 🎉

### Other Hosting Options:
- **Netlify** - Similar to Vercel, easy deployment
- **AWS Amplify** - Amazon's hosting platform
- **Digital Ocean** - VPS hosting with more control

## 📊 Performance Optimization

For production, consider:
- ✅ Optimize images (use WebP format)
- ✅ Set up proper caching
- ✅ Enable compression
- ✅ Use a CDN for static assets
- ✅ Monitor with Google Analytics

## 🔒 Security Checklist

- ✅ Keep dependencies updated: `npm update`
- ✅ Never commit `.env.local` (already in `.gitignore`)
- ✅ Use HTTPS in production (automatic with Vercel)
- ✅ Consider adding reCAPTCHA to contact form
- ✅ Set up rate limiting for form submissions

## 📝 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🐛 Common Issues & Solutions

### Port 3000 already in use?
```bash
# Kill the process using port 3000
# Windows PowerShell:
Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force

# Then run:
npm run dev
```

### Changes not appearing?
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Restart dev server

### Images not loading?
- Check images are in the `public` folder
- Verify file names match exactly (case-sensitive)
- Restart dev server

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)

## 🤝 Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Refer to the documentation links above
3. Review the README.md file
4. Check individual setup guides (LOGO-SETUP.md, EMAILJS-SETUP.md)

## 🎯 Next Steps

1. ✅ View your website at [http://localhost:3000](http://localhost:3000)
2. ✅ Replace the logo with your actual logo
3. ✅ Set up EmailJS for the contact form
4. ✅ Customize content with your company information
5. ✅ Replace placeholder images with real ones
6. ✅ Test on different devices and browsers
7. ✅ Deploy to production when ready!

---

**Enjoy your new website! 🎉**

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
