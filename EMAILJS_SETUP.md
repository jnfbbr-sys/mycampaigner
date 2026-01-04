# EmailJS Setup Guide

The contact form is configured to send emails to **jnfbbr@gmail.com** using EmailJS.

## Setup Steps

### 1. Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account (100 emails/month free)
3. Verify your email address

### 2. Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Connect your Gmail account (jnfbbr@gmail.com)
   - **Outlook**: Connect your Outlook account
   - **SendGrid/Mailgun**: For production use
4. Note down your **Service ID** (e.g., `service_xyz123`)

### 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:**

```
New Contact Form Submission: {{subject}}
```

**Content:**

```
You have received a new message from MyCampaigner website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

4. Save the template and note down the **Template ID** (e.g., `template_abc456`)

### 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xyz123abc456`)

### 5. Update Contact.tsx

Open `src/pages/Contact.tsx` and replace the placeholder values around line 20:

```typescript
const serviceId = "service_xyz123"; // Replace with your Service ID
const templateId = "template_abc456"; // Replace with your Template ID
const publicKey = "xyz123abc456"; // Replace with your Public Key
```

### 6. Test the Form

1. Fill out the contact form on your website
2. Check your email inbox (jnfbbr@gmail.com) for the message
3. Check EmailJS dashboard for delivery stats

## Alternative: Use Environment Variables (Recommended for Production)

Instead of hardcoding the values, you can use environment variables:

1. Update `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=service_xyz123
VITE_EMAILJS_TEMPLATE_ID=template_abc456
VITE_EMAILJS_PUBLIC_KEY=xyz123abc456
```

2. Update `Contact.tsx`:

```typescript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

3. Restart the dev server after changing `.env`

## Security Note

- Never commit your `.env` file to git
- The `.gitignore` file already excludes `.env` files
- For production, set these values in your hosting platform's environment variables

## Troubleshooting

**Emails not sending?**

- Check EmailJS dashboard for error logs
- Verify your email service is properly connected
- Ensure you haven't exceeded the free tier limit (100 emails/month)
- Check spam folder

**CORS errors?**

- EmailJS handles CORS automatically
- Make sure you're using the latest EmailJS library

**Form shows error message?**

- Verify all three IDs are correct
- Check browser console for detailed error messages
- Test your EmailJS configuration directly in their dashboard

## Current Status

✅ EmailJS library installed  
✅ Contact form code implemented  
⏳ EmailJS account needs to be configured  
⏳ Service ID, Template ID, and Public Key need to be added

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Pricing: https://www.emailjs.com/pricing/ (Free tier: 100 emails/month)
