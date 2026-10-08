# StudentHub - Campus Portal

A comprehensive web-based campus portal designed for students, faculty, and administrators to access academic resources, campus events, notifications, profile management, and feedback.

---

## Practical 1: Project Initiation, Requirement Analysis, Sitemap, Wireframe & GitHub Setup

### 1. Problem Definition & Scope
- **Problem Statement:** College campuses lack a single unified platform for student notices, event registrations, student profile viewing, administrative updates, and structured feedback collection.
- **Scope:** Provide a clean, accessible, and structured static HTML5 portal covering key campus functions with a minimum of 10 interconnected pages.

### 2. User Roles & Key Modules
| User Role | Responsibilities / Permissions |
| :--- | :--- |
| **Guest / Visitor** | View Home, About, Events, FAQs, Contact; register or log in. |
| **Student** | Access Student Dashboard, manage Profile, view/register for Events, submit Feedback. |
| **Admin / Faculty** | Access Admin Panel, manage announcements, oversee event logs, view student queries. |

### 3. Key Modules
1. **Authentication Module:** Registration and Login for role-based access.
2. **Academic & Info Module:** Home, About, FAQs, Contact details.
3. **Student Activity Module:** Dashboard, Events listing, Profile management.
4. **Governance & Feedback Module:** Admin controls, System feedback submission.

---

### 4. Key Questions & Analysis

#### Q1: What is a URL and what are the parts of a URL?
A **Uniform Resource Locator (URL)** is a web address used to identify and locate a resource on the internet.
- **Example:** `https://www.studenthub.edu:443/portal/dashboard.html?user=daksh#announcements`
- **Parts of a URL:**
  1. **Scheme / Protocol:** `https://` (Defines the communication protocol, e.g., HTTP/HTTPS).
  2. **Subdomain:** `www.` (Subdivision of the main domain).
  3. **Domain Name / Host:** `studenthub.edu` (The registered server name or IP address).
  4. **Port Number (Optional):** `:443` (Default 80 for HTTP, 443 for HTTPS).
  5. **Path:** `/portal/dashboard.html` (Location of the file/resource on the web server).
  6. **Query String / Parameters:** `?user=daksh` (Key-value pairs sending data to the server).
  7. **Fragment Identifier / Anchor:** `#announcements` (Navigates to a specific section/element ID on the page).

#### Q2: How is an HTML file processed in a web browser?
1. **Network Request & Response:** The browser requests the HTML file via HTTP/HTTPS and receives raw bytes.
2. **Conversion to Characters:** Bytes are decoded into text characters based on character encoding (UTF-8).
3. **Tokenization:** Text is parsed into tokens (`<html>`, `<head>`, `<body>`, tags, attributes).
4. **DOM Tree Construction:** Tokens are converted into DOM (Document Object Model) nodes forming a tree structure.
5. **CSSOM Tree Construction:** Linked CSS is parsed to form the CSS Object Model tree.
6. **Render Tree Generation:** DOM and CSSOM combine into a Render Tree (only visible nodes).
7. **Layout / Reflow:** The browser calculates exact geometry, positions, and dimensions for every node.
8. **Painting & Compositing:** Pixels are rasterized and drawn onto the browser screen.

#### Q3: How is page navigation flow managed among all HTML pages?
- Managed through **relative path hyperlinks** (`<a href="...">`) wrapped in standard `<nav>` elements.
- Consistent header navigation is present across all pages.
- Breadcrumbs are implemented for contextual hierarchical navigation.
- Accessible skip-links allow direct keyboard jumping to main content.

#### Q4: How will GitHub commits be maintained after each practical?
- **Branching & Commit Discipline:**
  - `main` branch holds validated, complete practical deliverables.
  - Commits follow conventional commit messages: `feat(p1): initial project setup and sitemap`, `feat(p2): semantic html5 structure and accessibility`.
  - Push commits to remote GitHub repository at the completion of each practical milestone.

---

### 5. Sitemap & Navigation Flow

```
                     [ Home (index.html) ]
                               │
       ┌───────────────┬───────┴───────┬───────────────┐
       ▼               ▼               ▼               ▼
 [ About.html ]  [ Events.html ] [ FAQ.html ]   [ Contact.html ]
       │               │
       ├───────────────┼───────────────┐
       ▼               ▼               ▼
 [ Register.html ] [ Login.html ] [ Feedback.html ]
                       │
       ┌───────────────┴───────────────┐
       ▼                               ▼
 [ Dashboard.html ]             [ Admin.html ]
       │
       ▼
 [ Profile.html ]
```

---

### 6. Low-Fidelity Wireframe (Layout Architecture)

```
+--------------------------------------------------------------------+
|  [Skip to Main Content]                                            |
|  HEADER: StudentHub Logo / Title                 [Login | Register]|
+--------------------------------------------------------------------+
|  NAV: Home | About | Events | Dashboard | Profile | Admin | FAQ ...|
+--------------------------------------------------------------------+
|  BREADCRUMB: Home > Section > Current Page                         |
+---------------------------------------------------+----------------+
|  MAIN CONTENT SECTION                             |  ASIDE BAR     |
|  - <h1> Page Title                                |  - Quick Links |
|  - <section> Primary Info / Cards / Tables / Form |  - Noticeboard |
|  - <article> Featured content / Announcements     |  - Key Contacts|
+---------------------------------------------------+----------------+
|  FOOTER: Copyright © 2026 StudentHub | Quick Links | Accessibility |
+--------------------------------------------------------------------+
```

---

### 7. Project Folder Structure
```
studenthub/
├── index.html              # Home page
├── about.html              # About page
├── register.html           # Student registration
├── login.html              # Login page
├── dashboard.html          # Student dashboard
├── events.html             # Campus events listing
├── profile.html            # Student profile details
├── contact.html            # Contact directory & form
├── admin.html              # Administration portal
├── faq.html                # Frequently asked questions
├── feedback.html           # Feedback form
├── css/
│   └── style.css           # Semantic layout & typography styling
├── assets/
│   └── images/             # Portal images and icons
├── README.md               # Practical 1 & Practical 2 Documentation
└── ACCESSIBILITY_CHECKLIST.md # Accessibility checklist
```

---

## Practical 2: Semantic HTML5 Pages with Accessibility-Ready Structure

### 1. Key Questions & Analysis

#### Q1: Are semantic tags such as `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>` used properly?
- **Yes.** Every page uses standard HTML5 semantic elements rather than generic `<div>` containers:
  - `<header>`: Contains portal branding and global action buttons.
  - `<nav>`: Hosts main navigation, breadcrumbs (`aria-label="Breadcrumb"`), and footer links.
  - `<main id="main-content">`: Designated as the primary landmark containing unique page content.
  - `<section>`: Divides distinct topics with explicit heading levels.
  - `<article>`: Encapsulates standalone items like notices, event cards, and FAQ entries.
  - `<aside>`: Contains contextual widgets (quick links, emergency helplines, timetables).
  - `<footer>`: Encapsulates copyright and secondary links.

#### Q2: Are form labels, headings, image alt text, and navigation links accessible?
- **Form Labels:** Every `<input>`, `<select>`, and `<textarea>` is explicitly linked to a `<label for="...">` with matching ID. Mandatory fields use `required` and `aria-required="true"`.
- **Heading Hierarchy:** Each page contains exactly one `<h1>` tag, followed sequentially by `<h2>` and `<h3>` tags without skipping hierarchy.
- **Image Alt Text:** All image assets include descriptive and meaningful `alt` text.
- **Navigation Links:** Active pages are indicated programmatically using `aria-current="page"`, and internal anchor targets are verified.

#### Q3: Is the page structure consistent across all pages?
- **Yes.** All 11 pages follow an identical skeleton:
  1. Skip-to-content landmark at the top.
  2. Uniform site header and primary navigation bar.
  3. Contextual breadcrumb bar.
  4. Standard 2-column layout (main content + aside sidebar).
  5. Consistent site footer with auxiliary navigation.

---

### 2. Intermediate & Advanced Extensions Implemented
- **Intermediate Extension:** Breadcrumb navigation bar implemented across internal pages (`<nav class="breadcrumb" aria-label="Breadcrumb">`) to display hierarchical pathing.
- **Advanced Extension:** Keyboard-friendly Skip-to-Content link (`<a href="#main-content" class="skip-link">Skip to main content</a>`) positioned at the top of the `<body>` that becomes visible on keyboard focus (`:focus`).

---

### 3. List of Implemented Semantic HTML5 Pages
1. [index.html](file:///index.html) - Home / Campus Portal Landing Page
2. [about.html](file:///about.html) - About Portal, Vision & Mission
3. [register.html](file:///register.html) - Student Registration Form
4. [login.html](file:///login.html) - Portal Authentication / Sign-in Form
5. [dashboard.html](file:///dashboard.html) - Student Academic Dashboard & Course Table
6. [events.html](file:///events.html) - Campus Activities, Hackathons & Event Cards
7. [profile.html](file:///profile.html) - Student Profile & Information Update Form
8. [contact.html](file:///contact.html) - Department Contact Directory & Helpdesk Query Form
9. [admin.html](file:///admin.html) - Administrative Control Panel & Notice Publisher
10. [faq.html](file:///faq.html) - Frequently Asked Questions & Knowledge Base
11. [feedback.html](file:///feedback.html) - Student Feedback Submission Form

---

## Practical 3: Responsive UI Design using CSS Grid, Flexbox, and Modern Layouts

### 1. Problem Definition & Scope
- Design mobile-first responsive layouts for StudentHub pages (Home, About, Registration, Dashboard, Events, Contact, Feedback) using CSS Grid for macro-layouts and Flexbox for micro-components.
- Ensure optimal display across Mobile (<768px), Tablet (768px - 1024px), and Desktop (>1024px) viewport widths without layout breaks or horizontal overflow.

---

### 2. Key Questions & Analysis

#### Q1: How does the layout adapt for mobile, tablet, and desktop screens?
- **Mobile (< 768px):**
  - Layout shifts to a single column (`grid-template-columns: 1fr`).
  - Navigation links become horizontally scrollable with touch friction (`overflow-x: auto`).
  - Header actions stack or wrap cleanly below branding.
  - Data tables use `.table-responsive` wrappers allowing smooth touch-scrolling.
  - Card grids collapse to a single column.
- **Tablet (768px - 1024px):**
  - Header aligns brand and action buttons in a single flex line (`justify-content: space-between`).
  - Multi-item cards render in a 2-column grid (`repeat(2, 1fr)`).
  - Form field rows align side-by-side where applicable (`form-row`).
- **Desktop (> 1024px):**
  - Macro-layout activates 2-column CSS Grid: main content (`minmax(0, 1fr)`) and sticky sidebar (`300px`).
  - Card collections adapt automatically using CSS Grid `repeat(auto-fit, minmax(240px, 1fr))`.

#### Q2: Which layout technique is used and why?
- **CSS Grid (Macro Layout & Card Grids):**
  - Used for overall page scaffolding (`.page-container`) to define the relationship between `<main>` and `<aside>`.
  - Used for `.grid-cards` with `auto-fit` and `minmax()` because CSS Grid excels at 2-dimensional fluid distribution of items without manual breakpoint calculations.
- **CSS Flexbox (Micro Components & 1D Alignment):**
  - Used for Header, Navigation bars, Breadcrumbs, Card internal headers, Button alignments, and Footer content because Flexbox provides exceptional 1-dimensional alignment, wrapping, and spacing controls (`gap`, `align-items`, `justify-content`).

#### Q3: Are typography, spacing, colors, and contrast readable?
- **Typography:** Uses CSS `clamp()` fluid font sizing (e.g. `clamp(1.4rem, 4vw, 2rem)`) so text scales smoothly on smaller devices.
- **Spacing:** Standardized CSS variables (`--spacing-xs` to `--spacing-xl`) ensure rhythmic vertical and horizontal whitespace.
- **Color Contrast:** High contrast ratio compliant with WCAG AA/AAA standards: Deep Navy `#1e3a8a` on White/Light Slate background, Charcoal `#0f172a` for body text.

#### Q4: Is the framework/CSS used consistently without unnecessary inline CSS?
- **Yes.** All inline styles have been removed and replaced with reusable CSS classes and design tokens in [css/style.css](file:///css/style.css).
- Standardized utility classes like `.btn`, `.btn-primary`, `.btn-full`, `.table-responsive`, `.stat-value`, and `.content-card` are used consistently across all pages.

---

### 3. Responsive Breakpoints Specification Table

| Device Class | Viewport Range | Grid / Flex Behavior | Navigation Style |
| :--- | :--- | :--- | :--- |
| **Mobile Phones** | `< 768px` | 1-Column Grid (`1fr`), Stacked widgets | Horizontal scrollable nav (`overflow-x: auto`) |
| **Tablets** | `768px - 1024px` | 2-Column Card Grid, Balanced spacing | Full horizontal flex nav |
| **Desktops / Laptops** | `> 1024px` | 2-Column Layout (`1fr 300px`), Auto-fit cards | Extended flex navigation with hover cues |

---

### 4. Extensions Implemented
- **Intermediate Extension:** Fully responsive Contact and Feedback pages with flexible grid-based form controls (`.form-row`).
- **Advanced Extension:** Reusable JavaScript layout component helper ([js/main.js](file:///js/main.js)) that automatically detects active route states, wraps tables in touch-scrollable containers, and enhances interactive micro-animations.


