# The Grand Heritage Hotel

![Grand Heritage Hero](https://lh3.googleusercontent.com/aida-public/AB6AXuCjVW-9ahbEJIkZRjIvhQxVTyIgI84iGHvmt4LVO8VSKqfWTI0GQ6k0vwkSnQ5-7QMXkyfDIhh5FvQCIRtIlBlagC6EAj_SkSuCNJ8mQ9-62CVnRtavgqMVTCCdEquawDr5xXvnfvkkQOENQYdK-TErLi85DaS9eCz-M0piwG2JT6Fy7vIjsav7TP8rOMfDqiCMxpGkiimdPmZrSfSR9Y2eZZ6b8-firSazNlBYu_f5ZBBmXzek2-FEChT7frHTk4pHwe0c2YjFCGe0)

> "A timeless icon where history whispers in the halls and luxury knows no bounds."

The Grand Heritage is a luxury hotel website application built with Next.js, showcasing a premium user interface for browsing suites, dining experiences, and wellness amenities. It features a sophisticated design language blending modern aesthetics with classic elegance.

## ✨ Features

- **Immersive Hero Sections**: Full-screen visuals with animated typography and smooth transitions.
- **Interactive Room Browsing**: Filterable grid of luxury suites with detailed modal views including 360° tour placeholders.
- **Seamless Booking Flow**: A multi-step checkout process with guest information, payment simulation, and booking confirmation.
- **Dining & Wellness**: Dedicated pages for culinary experiences and spa treatments.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Material Symbols](https://fonts.google.com/icons)
- **Fonts**: Inter (Sans), Gemunu Libre (Display), Cormorant Garamond (Serif)
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/BilalLakhder/luxury-hotel-app.git
    cd luxury-hotel-app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── booking-confirmation/ # Confirmation page
│   ├── checkout/         # Checkout flow
│   ├── dining/           # Dining & Wellness page
│   ├── rooms/            # Suites & Accommodations
│   ├── globals.css       # Global styles & Tailwind config
│   ├── layout.tsx        # Root layout & Font configuration
│   └── page.tsx          # Home page
├── components/           # Reusable UI components
│   ├── dining/           # Dining-specific components
│   ├── home/             # Home page sections (Hero, History, Team)
│   ├── rooms/            # Room grid & detail modals
│   └── ui/               # Shared UI (Navbar, Footer)
└── public/               # Static assets
```

## 🎨 Design System

The application uses a custom color palette defined in Tailwind:

- **Primary Gold**: `#d4af35` (Luxury accent)
- **Background Dark**: `#0a1d37` (Deep Navy/Black)
- **Surface**: `#162a4a` (Lighter Navy for cards)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
