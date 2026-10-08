# Davorin Šego

<img src="https://avatars.githubusercontent.com/u/578557?s=400&u=f32900baadc5b8b05aa8a8cd607b2ecfacd437ee&v=4" alt="Davorin Šego" width="140" align="right">

**Senior Full-Stack Engineer** · Split, Croatia

[GitHub](https://github.com/dsego) · [Toptal profile](https://www.toptal.com/developers/resume/davorin-sego)

Full-stack engineer with nearly 20 years of experience building web applications, most recently a fintech platform that handles sensitive tax and financial data. Works across the stack in Python/Django, PHP/Laravel, and React/TypeScript, from data models and APIs to the finished UI. Long background in data-heavy products: dashboards, interactive maps, charting tools, surveys, and booking systems. Writes testable, maintainable code and has worked remotely with distributed teams for over a decade.

---

## Skills

- **Languages:** Python, TypeScript, JavaScript, PHP, SQL, HTML, CSS/SCSS
- **Front end:** React (hooks, Suspense), Redux Toolkit, RTK Query, Inertia.js, MobX, Mithril.js, Storybook, Vite
- **Back end:** Django, Django REST Framework, Laravel, Node.js, Express.js, REST APIs, Server-Sent Events
- **Databases & storage:** PostgreSQL, MySQL, Redis, MongoDB, MS SQL Server, Google Cloud Storage
- **Security & auth:** Two-factor auth (TOTP), Laravel Sanctum SSO, field-level encryption, JWT-based SSO
- **AI & documents:** AWS Textract OCR, LLM-based document classification, PDF.js
- **Data visualization & maps:** D3.js, Plotly, Leaflet, PostGIS, GeoJSON
- **Integrations:** HubSpot, Stripe, Dropbox Sign (HelloSign), PandaDoc, Mixpanel, Sentry
- **Testing:** Cypress, Playwright, pytest, PHPUnit, MirageJS
- **Tooling & CI:** Git, Docker, GitHub Actions, GitLab CI, uv, Ruff, ESLint, pre-commit

---

## Experience

### Senior Full-Stack Engineer — [Harness Wealth](https://www.harness.co/)
*May 2021 – Present*

Harness Wealth runs a secure client and advisor portal that connects individuals with vetted financial, tax, and estate planning professionals. I built and maintained the core tax engagement platform across three connected codebases: the Django client backend, the React/TypeScript client front end, and the Laravel/Inertia.js internal advisor platform. That came to over 1,600 commits in nearly five years.

**Tax engagement platform**
- Designed and built the engagement workflow engine that runs the tax service lifecycle: task creation, assignment, status tracking, reminders, and completion for e-sign, e-file, questionnaire, upload, and payment tasks.
- Built the multi-section tax questionnaire end to end, with conditional logic, repeating groups, auto-save, progress tracking, year-over-year prefill for returning clients, and Excel/CSV export for advisors.
- Designed the notification and reminder system, with consolidated task emails, configurable cadence, calendar-based triggers, and multi-contact delivery, which reduced manual follow-up by advisors.
- Built an equity tax scenario tool with interactive comparison tables and charts, RSU/NSO/ISO support, and AMT calculations.

**Documents & AI**
- Built the document management system from storage to UI: GCS storage with signed URLs and malware scanning, LLM-based auto-categorization, drag-and-drop upload, in-browser PDF preview, team-based access control, and a data model migration across thousands of records.
- Led the Tax Assist integration, an AI document analysis feature with AWS Textract OCR, PII redaction, and structured data extraction from IRS forms.
- Added suggested document uploads based on questionnaire answers, so clients are prompted for the right tax documents.

**Security**
- Delivered two-factor authentication across the full stack (TOTP setup with QR codes, backup codes, trusted devices), replacing a legacy SMS-based system.
- Implemented per-user encryption for sensitive questionnaire data, with on-the-fly re-encryption and migration tooling.
- Built Sanctum-based SSO between the advisor platform and AWS-hosted AI services.

**Platform & integrations**
- Designed the integration layer between the Laravel advisor platform and the Django client backend for file operations, taxpayer records, and invoices.
- Built a custom Laravel mail transport that sends Mailable emails through HubSpot transactional email.
- Added real-time task updates with server-sent events and Redis, and moved external API calls to async (httpx).
- Led a dependency upgrade effort across 8+ packages with breaking changes (e.g. Stripe SDK 3→11, google-cloud-storage 2→3).
- Migrated the front end from Flow to TypeScript, and integrated Mixpanel, HubSpot tracking, and Sentry across user flows.
- Ran 15+ feature flags through their full lifecycle to support safe continuous deployment.

*Stack: Python, Django, DRF, PostgreSQL, Redis, GCS · React, TypeScript, Redux Toolkit, SCSS, Vite · Laravel, PHP 8, Inertia.js · Cypress, Playwright, Docker*

### Dashboard Engineer — Lam Research (via Toptal)
*2020 – 2021*

- Designed and built REST API endpoints feeding the dashboards, using Node.js and Swagger.
- Rebuilt Power BI reports as interactive web visualizations with Plotly.
- Laid the groundwork for a new React front end and ported part of the existing codebase to React.
- Extended an interactive SVG.js map tool to load external data.
- Helped plan the new architecture and project structure with the engineering team.

*Stack: JavaScript, Node.js, Swagger, React, PostgreSQL, Docker, D3.js, Plotly*

### Full-stack Developer — SHIFT (via Toptal)
*2018 – 2019*

- Built full-stack features including psychometric tests, surveys, dashboards, reports, and data visualizations.
- Developed new front-end product features with a focus on a seamless user experience.
- Integrated web analytics and customer experience platforms into the product.
- Took part in architecture discussions, technical decisions, and code reviews.

*Stack: React, MobX, Mithril.js, TypeScript, CoffeeScript, Laravel, MySQL, Bootstrap*

### Web Developer — 2nd Nature, LLC (via Toptal)
*2016 – 2017*

- Developed feature-rich interactive map tools on top of Leaflet.
- Built a CSV import for map features with validation, preview, and field remapping.
- Implemented PostGIS feature export to shapefile and XLS formats.
- Implemented token-based single sign-on across a suite of online tools.
- Rewrote the PHP back end with Lumen and added audit logging of user actions.
- Wrote end-to-end tests with Nightwatch.js.

*Stack: Leaflet, PostGIS, GeoJSON, Lumen, Nunjucks, Baobab, Nightwatch.js*

### Full-stack Developer — Pareto Solutions (via Toptal)
*2015 – 2017*

- Built a multi-step checkout with the Stripe API.
- Built features for a Facebook API–based app for reporting, analytics, and marketing automation, plus a prototype for automating Facebook ad bids.
- Created a bulk CSV database update tool with preview.
- Prototyped a React Data Grid editing tool backed by Firebase.
- Worked on numerous CakePHP projects and interactive HTML5/JavaScript demos.

### Senior Web Developer — Extension Engine
*2013 – 2015*

- Implemented Backbone.js search and course discovery UIs for Open edX, and contributed features and fixes upstream.
- Worked on a proprietary social learning platform integrating Open edX via its REST API.
- Implemented new features for PaintNite, a platform for organizing painting parties.
- Built a file upload and management tool with infinite scrolling and quick preview.
- Wrote unit, integration, and acceptance tests for Python and JavaScript code.

### Web Developer — ImadeThis AS
*2012 – 2013*

- Built a mobile publication reader for Spreads, a digital publishing platform, using HTML5, JavaScript, and advanced CSS animations.

### Web Developer — Extension Engine
*2009 – 2012*

- Built a multi-step questionnaire tool and an interactive charting tool for CompStudy, a compensation survey service.
- Worked on Parent School Network, a school information and engagement platform.
- Built several Drupal and WordPress sites.

### Web Developer — Booking IT
*2007 – 2009*

- Built an embeddable e-booking form for hotel websites, backed by a centralized .NET / MS SQL booking system.
- Improved the design and usability of several PHP and .NET sites.

### Co-founder & Web Developer — Kinitos
*2006 – 2007*

- Co-developed a real-time online booking system for yacht charters.
- Designed the relational database, .NET admin forms for boats, equipment, and services, and optimized MS SQL stored procedures.

---

## Education

**Master's Degree in Computer Science**
Faculty of Electrical Engineering, Mechanical Engineering and Naval Architecture (FESB), University of Split
*2003 – 2008*
