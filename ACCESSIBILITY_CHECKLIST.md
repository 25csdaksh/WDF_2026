# Accessibility Compliance Checklist (WCAG 2.1 & HTML5 Semantic Standards)

| Check Item | Description | Status | Implementation Details |
| :--- | :--- | :---: | :--- |
| **Semantic Landmarks** | Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`. | ✅ PASS | All 11 pages follow consistent HTML5 landmark tags. |
| **Page Landmark Identifier** | Each page has a unique `<main id="main-content">` landmark. | ✅ PASS | Enabled across all HTML pages. |
| **Skip Navigation Link** | Hidden keyboard-accessible skip link at top of body. | ✅ PASS | `<a href="#main-content" class="skip-link">Skip to main content</a>` present. |
| **Document Title & Language** | `lang="en"` and unique, descriptive `<title>` per page. | ✅ PASS | e.g., `<title>Dashboard - StudentHub Portal</title>`. |
| **Heading Hierarchy** | Single `<h1>` per page, sequential `<h2>` and `<h3>` without skipping levels. | ✅ PASS | Verified across all 11 pages. |
| **Form Labels & Inputs** | All `<input>`, `<select>`, `<textarea>` have matching `<label for="...">`. | ✅ PASS | Explicit matching IDs and labels applied. |
| **Form Error & Requirement** | Mandatory fields marked with `required` and `aria-required="true"`. | ✅ PASS | Applied on Login, Register, Contact, Feedback forms. |
| **Image Alternatives** | All `<img>` tags include meaningful `alt="..."` descriptions. | ✅ PASS | Informative alt text provided for screen readers. |
| **Breadcrumb Navigation** | Breadcrumb navigation with `aria-label="Breadcrumb"`. | ✅ PASS | Available on internal pages. |
| **Active Navigation State** | Current page marked with `aria-current="page"`. | ✅ PASS | Active links marked appropriately. |
| **Table Structure** | Accessible tables with `<caption>`, `<thead>`, `<th> scope="col"`. | ✅ PASS | Implemented in Admin and Dashboard pages. |
