# Train With Amanda Jane – Frontend

This is the frontend for [Train With Amanda Jane](https://trainwithamandajane.com), a modern and interactive website built for a personal fitness coach. It helps users:

- Learn about Amanda’s services
- Subscribe to her newsletter (Mailchimp)
- Contact her directly through a custom form (emails via Nodemailer)

---

## ⚙️ Tech Stack

- **React** (with **TypeScript**)
- **React Router DOM** – client-side routing
- **Materialize CSS** – lightweight UI framework
- **Framer Motion** – animations
- **Font Awesome** – social and brand icons
- **Canvas Confetti** – fun form animation
- **Typewriter Effect** – animated headers
- **Swiper.js** – carousel/sliders
- **Netlify** – deployment platform
- Connected to a Node.js/Express backend (hosted on Heroku)

---

🧪 Development
bash
npm start
Runs at: http://localhost:3000

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/trainwithamandajane-frontend.git
cd trainwithamandajane-frontend
npm install

🌐 Live Site
Hosted on Netlify:
➡️ https://trainwithamandajane.com

🔌 API Integration
This frontend integrates with a custom backend API:

Newsletter Signup (POST /subscribe)
Submits email to Mailchimp list
Contact Form (POST /contact)
Sends a message to info@trainwithamandajane.com
The backend is hosted on Heroku and uses environment variables to control the API base URL.

🔌 Backend Integration
This frontend connects to a backend (hosted on Heroku) for:

📩 POST /subscribe
Submits email address to Mailchimp.

📨 POST /contact

🧩 File Structure Overview
bash
Copy
Edit
src/
  components/
    Footer.tsx        # Includes subscription + contact form
    NavBar.tsx
    TypeWriter.tsx
    ...
  pages/
    Home/
    About/
  App.tsx
  index.tsx

  💅 Features
Clean & modern design
Fully responsive
Modal contact form with sound & confetti
Smooth scrolling & animated sections
Social media links (Instagram, TikTok, YouTube)

🧩 Notable Dependencies
Package	Use Case
materialize-css	Styling & layout
framer-motion	Smooth animations
canvas-confetti	Confetti after form submissions
swiper	Carousel/testimonial slider
typewriter-effect	Animated text headlines
@fortawesome packages	Icons for social links
react-router-dom	Navigation between pages
typescript	Strong typing & dev safety

