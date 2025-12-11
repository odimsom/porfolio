# Portfolio Design Specification

## Visual Identity

### Color Palette (Dark Mode - Default)
- **Primary Background:** `#000000` (Deep Black)
- **Secondary Background:** `rgba(17, 24, 39, 0.95)` (Dark Blue-Gray)
- **Accent Color:** `#3b82f6` (Electric Blue)
- **Text Primary:** `#ffffff` (White)
- **Text Secondary:** `#d1d5db` (Light Gray)
- **Glassmorphism:**
  - Background: `rgba(255, 255, 255, 0.1)`
  - Border: `rgba(255, 255, 255, 0.2)`

### Typography
- **Headings:** Sans-serif, Bold, Tracking-wide.
- **Body:** Sans-serif, Clean.
- **Special:** "Text Reveal" animations on main headings.

### Layout Structure

#### Hero Section
- **Desktop:** 3-Column Grid
  - **Left:** Social Links (Vertical stack of circular icons: LinkedIn, GitHub).
  - **Center:** Profile Info (Name "Francisco Castro" with "Fran" in accent color, Title, Description, CV Download button).
  - **Right:** Profile Image (Rounded square `rounded-2xl`, shadow, floating animation).
- **Mobile:** Vertical Stack (Social -> Image -> Info -> CV).

#### Global Elements
- **Background:** Fixed `particle-background` with blue connections.
- **Navigation:** `app-navigation-layout` (Fixed position).
- **Controls:** Floating theme/language toggles.

### Components
- **Buttons:** Glassy background, hover scale effect, accent color borders.
- **Cards:** Glassmorphism style, subtle borders, shadows.
- **Animations:** Fade-in-up, Fade-in-left/right, Float, Hover Glow.

## Image Generation Prompt (for reference)
A high-fidelity UI design mockup of a modern developer portfolio website in dark mode.
**Visual Style:** Deep dark blue/black background with blue particle network. Electric Blue (#3b82f6) accents. Glassmorphism on cards.
**Hero Section:** Center alignment. Large "Francisco Castro" text with blue highlight. Profile picture in rounded square with float effect. Vertical social icons on left.
**Atmosphere:** Professional, sleek, glowing, tech-focused.
