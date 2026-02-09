# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to enable the contact form functionality.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Connect Your Email Service

1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the prompts to connect your email account
5. **Copy your Service ID** - you'll need this later

### Recommended: Gmail Setup
- Select Gmail
- Click "Connect Account"
- Choose your Gmail account
- Grant necessary permissions
- Your Service ID will be shown (e.g., `service_abc1234`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

### Template Content:
```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Message:
{{message}}

---
This message was sent from the Tech Capital website contact form.
```

### Template Variables:
Make sure your template includes these variables:
- `{{from_name}}`
- `{{from_email}}`
- `{{phone}}`
- `{{company}}`
- `{{message}}`

4. **Copy your Template ID** (e.g., `template_xyz5678`)
5. Test the template by clicking "Test It"

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (or API Key)
3. **Copy this key** (e.g., `AbCdEfGhIjKlMnOp`)

## Step 5: Add Credentials to Your Project

1. Open `.env.local` file in your project root
2. Replace the placeholder values with your actual credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc1234
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz5678
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

3. Save the file
4. Restart your development server:
   ```bash
   npm run dev
   ```

## Step 6: Test the Contact Form

1. Open your website: [http://localhost:3000](http://localhost:3000)
2. Scroll to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email inbox for the message

## Troubleshooting

### Form not sending?
- ✅ Check that all environment variables are set correctly
- ✅ Ensure no extra spaces in `.env.local`
- ✅ Restart the dev server after modifying `.env.local`
- ✅ Check browser console for error messages

### Not receiving emails?
- ✅ Verify your email service is connected in EmailJS dashboard
- ✅ Check your spam/junk folder
- ✅ Test the template in EmailJS dashboard
- ✅ Ensure the template variables match exactly

### Rate Limits
The free EmailJS plan includes:
- 200 emails per month
- Rate limit: 1 request per 5 seconds from same IP

For production sites with higher traffic, consider upgrading to a paid plan.

## Security Notes

- ✅ **Never commit** `.env.local` to version control (it's already in `.gitignore`)
- ✅ The Public Key is safe to expose in client-side code
- ✅ EmailJS handles server-side email sending securely
- ✅ Consider adding reCAPTCHA for production to prevent spam

## Production Deployment

When deploying to Vercel, Netlify, or other platforms:

1. Add the environment variables in your hosting platform's dashboard
2. Use the same variable names:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
3. Redeploy your site

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**Once configured, your contact form will automatically send emails to your connected email address!** 📧
