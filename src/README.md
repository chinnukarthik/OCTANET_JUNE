GameFlow – Modern  Landing Page
GameFlow is a modern, responsive, animated landing page built using React, TailwindCSS, and Framer Motion. It showcases a product for team productivity with sleek UI components, interactive pricing plans, and user testimonials.

Preview

Features
Modern UI with TailwindCSS

Framer Motion animations

Toast notifications via Sonner

 Reusable UI components (Button, Toaster)

 Pricing Plans and Testimonials

 Theme-aware toaster using next-themes

 Tech Stack
Category	Libraries / Tools
Frontend	React 19, Vite
Styling	Tailwind CSS, Tailwind Merge, Class Variance
Animation	Framer Motion
UI/UX Utils	Lucide Icons, Radix UI Slot
Notifications	Sonner
Theming	next-themes

Project Structure
php
Copy
Edit
octanet_june/
├── public/
├── src/
│   ├── App.jsx             # Main landing page layout
│   ├── main.jsx            # React root render
│   ├── components/
│   │   └── ui/
│   │       ├── button.jsx  # Reusable Button component
│   ├── sonner.jsx          # Themed Toaster using Sonner
│   └── index.css           # Global styles
├── index.html              # HTML entry file
├── package.json            # Project config and dependencies
└── README.md               # 📄 You’re reading it!
🧪 Pages Implemented
Home (Landing) – Hero banner with CTA

Features – Highlighted feature cards

Pricing – 3-tier subscription model

Testimonials – Real user feedback

Footer – Social links + copyright

🔧 Getting Started
1. Clone the repo
bash
Copy
Edit
git clone https://github.com/your-username/octanet_june.git
cd octanet_june
2. Install dependencies
bash
Copy
Edit
npm install
3. Run locally
bash
Copy
Edit
npm run dev
Now open your browser at http://localhost:5173.

 Build for Production
bash
Copy
Edit
npm run build
To preview the production build:

bash
Copy
Edit
npm run preview
 License
This project is open-source and free to use for learning or portfolio purposes.