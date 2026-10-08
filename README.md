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

### Implementation Details:
1. **Semantic HTML5 Tags Used:**
   - `<header>`: Page banners, branding, and top metadata.
   - `<nav>`: Primary site navigation, skip-to-content links, and breadcrumbs (`aria-label="Breadcrumb"`).
   - `<main>`: Main landmark containing unique content for each page (`id="main-content"`).
   - `<section>`: Thematic grouping of content with appropriate heading levels (`<h1>` to `<h3>`).
   - `<article>`: Self-contained content such as notices, event cards, and FAQ items.
   - `<aside>`: Contextual sidebars for announcements, related links, and guidelines.
   - `<footer>`: Site credits, campus contacts, and secondary links.

2. **Accessibility Features:**
   - **Skip Link:** Direct jump to `<main id="main-content">` via keyboard tab.
   - **Form Accessibility:** All inputs strictly paired with `<label for="...">`, required field indicators, and `aria-required="true"`.
   - **Image Accessibility:** Descriptive `alt` attributes on all images.
   - **Semantic Heading Hierarchy:** Single `<h1>` per page with sequential `<h2>` and `<h3>`.
   - **ARIA Attributes:** `role="navigation"`, `aria-label`, `aria-current="page"` used appropriately.
