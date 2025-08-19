# HeroSection Component Documentation

## Overview
The `HeroSection` component is a flexible hero section that can be used across different pages with customizable content and images. It supports both tabbed navigation (for the homepage) and static content (for other pages).

## Props

### `showTabs` (boolean, default: true)
- Controls whether to display the Enterprise/Candidate tabs
- Set to `false` for single-purpose pages like the candidate page
- Set to `true` for the homepage with tabbed content

### `content` (object, optional)
- Custom content object for static pages
- When provided, overrides the default tabbed content
- Structure:
  ```javascript
  {
    headline: React.Node, // Can include JSX with styling
    subheadline: string,  // Plain text description
    buttonText: string    // Text for the CTA button
  }
  ```

### `heroImage` (string, optional)
- Path to a custom hero image from the public folder
- When provided, replaces the default tab-based illustrations
- Should be optimized for both mobile and desktop display

### `className` (string, optional)
- Additional CSS classes to apply to the hero section
- Useful for page-specific styling adjustments

## Usage Examples

### Homepage (Default - with tabs)
```javascript
import HeroSection from "./HeroSection";

<HeroSection />
// This will show the default tabbed interface with Enterprise/Candidate tabs
```

### Candidate Page (Custom content and image)
```javascript
import HeroSection from "../HeroSection";

const candidateContent = {
  headline: (
    <>
      Accelerate Your <span className="font-bold text-[#1D6C86]">Career Growth</span>
      <br />
      with Expert <span className="font-bold text-[#1D6C86]">Guidance</span>
    </>
  ),
  subheadline: "Join thousands of professionals who have successfully advanced their careers through our comprehensive interview preparation and skill development programs.",
  buttonText: "Start Your Journey"
};

<HeroSection 
  showTabs={false}
  content={candidateContent}
  heroImage="/candidate-hero.png"
/>
```

### Enterprise Page (Custom content only)
```javascript
const enterpriseContent = {
  headline: (
    <>
      Scale Your <span className="font-bold text-[#1D6C86]">Technical Hiring</span>
      <br />
      with Expert <span className="font-bold text-[#1D6C86]">Interviewers</span>
    </>
  ),
  subheadline: "Let our expert technical interviewers handle your hiring process while your team focuses on building great products.",
  buttonText: "Book a Demo"
};

<HeroSection 
  showTabs={false}
  content={enterpriseContent}
  heroImage="/enterprise-hero.png"
  className="bg-gradient-to-r from-blue-50 to-indigo-50"
/>
```

## File Structure
```
src/app/
├── HeroSection.js          # Main flexible component
├── page.js                 # Homepage (uses default tabbed version)
├── candidate/
│   └── page.js            # Candidate page (uses custom content)
└── Navbar.js              # Updated with navigation links
```

## Features

### Responsive Design
- Mobile-first approach with responsive images and layouts
- Different layouts for mobile and desktop views
- Optimized image sizing for different screen sizes

### Tab System (Homepage)
- Interactive Enterprise/Candidate tabs
- Dynamic content switching
- Visual tab indicators with smooth transitions

### Custom Content Support
- Flexible headline with JSX support for styling
- Customizable subheadlines and button text
- Support for custom hero images

### Navigation Integration
- Updated Navbar with proper Next.js Link components
- Active page highlighting
- Smooth navigation between pages

## Adding New Pages

To create a new page using the HeroSection:

1. Create your page component in the appropriate directory
2. Define your custom content object
3. Import and use HeroSection with your props
4. Add navigation link to Navbar.js if needed

Example for a new "About" page:
```javascript
// src/app/about/page.js
import HeroSection from "../HeroSection";

const aboutContent = {
  headline: (
    <>
      About <span className="font-bold text-[#1D6C86]">Mapkie</span>
    </>
  ),
  subheadline: "We're revolutionizing technical interviews...",
  buttonText: "Learn More"
};

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <HeroSection 
        showTabs={false}
        content={aboutContent}
        heroImage="/about-hero.png"
      />
      {/* Additional page content */}
    </div>
  );
}
```

## Best Practices

1. **Image Optimization**: Ensure hero images are optimized for web (WebP format recommended)
2. **Content Length**: Keep headlines concise and impactful
3. **Consistent Styling**: Use the established color scheme and typography
4. **Accessibility**: Ensure proper alt text for images and semantic HTML
5. **Performance**: Use Next.js Image component for automatic optimization
