# Davorin Šego

<img src="https://avatars.githubusercontent.com/u/578557?s=400&u=f32900baadc5b8b05aa8a8cd607b2ecfacd437ee&v=4" alt="Davorin Šego" width="140" align="right">

**Senior Full-Stack Engineer** · Split, Croatia

[GitHub](https://github.com/dsego) · [Toptal profile](https://www.toptal.com/developers/resume/davorin-sego)

Full-stack engineer with nearly 20 years of experience building web applications, most recently a fintech platform that handles sensitive tax and financial data. Works across the stack in React/TypeScript, PHP/Laravel, and Python/Django, from data models and APIs to the finished UI. Long background in data-heavy products: dashboards, interactive maps, charting tools, surveys, and booking systems. Writes testable, maintainable code and has worked remotely with distributed teams for over a decade.

---

## Skills

- **Languages:** TypeScript, JavaScript, PHP, Python, SQL, HTML, CSS/SCSS, Odin
- **Front end:** React, TanStack Query (React Query), Inertia.js, Storybook, Vite
- **Back end:** Laravel, Node.js, Django, Django REST Framework
- **Databases & storage:** PostgreSQL, MySQL, Redis, Google Cloud Storage
- **AI & documents:** AWS Textract OCR, LLM-based document classification
- **Data visualization & maps:** D3.js, Plotly, Leaflet
- **Integrations:** HubSpot, Stripe, Mixpanel, Sentry
- **Testing:** Jest, PHPUnit
- **Tooling & CI:** Docker, GitHub Actions, GitLab CI

---

## Experience

### Senior Full-Stack Engineer — Harness Wealth
*May 2021 – Present*

Harness Wealth runs a secure client and advisor portal that connects individuals with vetted financial, tax, and estate planning professionals. As part of the engineering team, I worked across the full stack of the core tax engagement platform, which spans three connected codebases: the React/TypeScript client front end, the Laravel/Inertia.js internal advisor platform, and the Django client backend.

**Areas where I had the larger role**
- **Tax questionnaire:** a main contributor to the multi-section questionnaire across front end and back end, including conditional logic, repeating groups, auto-save, progress tracking, year-over-year prefill for returning clients, Excel/CSV export for advisors, and suggested document uploads based on the answers.
- **Document management:** a main contributor to the document system, from storage to UI. That covers GCS storage with signed URLs and malware scanning, LLM-based auto-categorization, drag-and-drop upload, in-browser PDF preview, team-based access control, and a data model migration across thousands of records.
- **Notifications:** helped design and build the notification and reminder system, with consolidated task emails, configurable cadence, calendar-based triggers, and multi-contact delivery, which reduced manual follow-up by advisors.
- **Two-factor authentication:** built most of the 2FA across the full stack, including TOTP setup with QR codes, backup codes, and trusted devices, replacing a legacy SMS-based system.

**Other contributions**
- Worked on the engagement workflow engine that runs the tax service lifecycle, including tasks for e-sign, e-file, questionnaire, upload, and payment.
- Worked on the Tax Assist integration, an AI document analysis feature with AWS Textract OCR, PII redaction, and structured data extraction from IRS forms.
- Worked on the equity tax scenario tool, extending its interactive comparison tables and charts, RSU/NSO/ISO support, and AMT calculations.
- Contributed to security work: per-user encryption for sensitive questionnaire data, and Sanctum-based SSO with AWS-hosted AI services.
- Worked on the integration layer between the Laravel advisor platform and the Django client backend, and on a custom Laravel mail transport that sends email through HubSpot.
- Added real-time task updates with server-sent events and Redis, and moved external API calls to async (httpx).
- Integrated Mixpanel, HubSpot tracking, and Sentry across user flows, and managed feature flags through rollout and removal.

*Stack: React, TypeScript, Laravel, PHP, Inertia.js, Django, PostgreSQL, Redis, GCS, AWS Textract*

<details markdown="1">
<summary>Full stack by codebase</summary>

- **Client front end:** React, TypeScript, Redux Toolkit, RTK Query, SCSS, Vite, Yarn, Storybook, PDF.js, Server-Sent Events, Mixpanel, Sentry, PandaDoc, Cypress, Playwright, MirageJS, ESLint, Knip
- **Advisor platform:** Laravel, PHP 8, Eloquent, MySQL, Sanctum (SSO), Inertia.js, React, TypeScript, PDF.js, AWS Textract, GCS signed URLs, Fernet encryption, HubSpot, Mixpanel, PHPUnit, Pint
- **Client backend:** Python, Django, Django REST Framework, PostgreSQL, Redis, Google Cloud Storage, httpx, Django OTP, Segno, Docker, Gunicorn, Nginx, HubSpot API, Stripe API, Dropbox Sign (HelloSign), PandaDoc, Trello, Prefinery, Mixpanel, pytest, uv, Ruff, pre-commit
- **CI:** GitHub Actions, GitLab CI

</details>

### Dashboard Engineer — Lam Research (via Toptal)
*2020 – 2021*

- Designed and built REST API endpoints feeding the dashboards, using Node.js and Swagger.
- Rebuilt Power BI reports as interactive web visualizations with Plotly.
- Laid the groundwork for a new React front end and ported part of the existing codebase to React.
- Extended an interactive SVG.js map tool to load external data.
- Helped plan the new architecture and project structure with the engineering team.

*Stack: JavaScript, Node.js, Express.js, React, React Query, Vite, PostgreSQL, MS SQL Server, Plotly, D3.js, Docker*

<details>
<summary>Full stack</summary>

JavaScript, Node.js, Express.js, Swagger / OpenAPI, React, React Query, Zustand, SWR, React Router, Ant Design, React Bootstrap, styled-components, Sass, Vite, Storybook, PostgreSQL, MS SQL Server, Docker, Git, Git LFS, Jenkins, D3.js, Plotly, SVG.js, Lodash, Luxon, Sentry, JWT, Active Directory, Cypress, Jest, Mocha, Chai, Testing Library, MSW, ESLint, Pandas, Python, Flask, REST APIs, Microsoft Power BI, Mithril.js, YouTrack

</details>

### Full-stack Developer — SHIFT (via Toptal)
*2018 – 2019*

- Built full-stack features including psychometric tests, surveys, dashboards, reports, and data visualizations.
- Developed new front-end product features with a focus on a seamless user experience.
- Integrated web analytics and customer experience platforms into the product.
- Took part in architecture discussions, technical decisions, and code reviews.

*Stack: React, TypeScript, MobX, Mithril.js, CoffeeScript, Laravel, MySQL, D3.js, Bootstrap*

<details>
<summary>Full stack</summary>

React, React Router, TypeScript, MobX, Mithril.js, CoffeeScript, D3.js, ProseMirror, CodeMirror, jQuery, Lodash, Bootstrap, Reactstrap, Sass, Webpack, Laravel Mix, Gulp (Laravel Elixir), Bower, Jest, Enzyme, TSLint, PHP, Laravel, MySQL, PHPUnit, Laravel Dusk, Stripe, Intercom, AWS SDK, Sentry, Docker (Laradock)

</details>

### Web Developer — 2nd Nature, LLC (via Toptal)
*2016 – 2017*

- Developed feature-rich interactive map tools on top of Leaflet.
- Built a CSV import for map features with validation, preview, and field remapping.
- Implemented PostGIS feature export to shapefile and XLS formats.
- Implemented token-based single sign-on across a suite of online tools.
- Rewrote the PHP back end with Lumen and added audit logging of user actions.
- Wrote end-to-end tests with Nightwatch.js.

*Stack: Leaflet, PostGIS, PHP, Lumen, Nightwatch.js*

<details>
<summary>Full stack</summary>

Git, Nightwatch.js, Baobab, Nunjucks, Leaflet, Lumen, PostGIS, GeoJSON, JavaScript, jQuery, PHP, JWT-based SSO

</details>

### Full-stack Developer — Pareto Solutions (via Toptal)
*2015 – 2017*

- Built a multi-step checkout with the Stripe API.
- Built features for a Facebook API–based app for reporting, analytics, and marketing automation, plus a prototype for automating Facebook ad bids.
- Created a bulk CSV database update tool with preview.
- Prototyped a React Data Grid editing tool backed by Firebase.
- Worked on numerous CakePHP projects and interactive HTML5/JavaScript demos.

*Stack: React, Redux, Node.js, CakePHP, MongoDB, MySQL, Firebase, Stripe API*

<details>
<summary>Full stack</summary>

React, Redux, Redux Thunk, React Router, React Data Grid, Ant Design, Reactstrap, Firebase, Webpack, Babel, Node.js, Express.js, Knex, Objection.js, Redis, pm2, ccxt, MongoDB, MySQL, PHP, CakePHP 3, PHPUnit, Stripe API (Omnipay), Facebook Graph API, Facebook Marketing API, SheetJS, Bootstrap, DataTables, Morris.js, Flot, Sass, Compass, jQuery, HTML5, Mocha, ESLint, Git

</details>

### Senior Web Developer — Extension Engine
*2013 – 2015*

- Did front-end and full-stack development within the Solutions team at edX.
- Implemented Backbone.js search and course discovery UIs for Open edX, and contributed features and fixes upstream.
- Worked on a proprietary social learning platform integrating Open edX via its REST API.
- Implemented new features for PaintNite, a platform for organizing painting parties.
- Built a file upload and management tool with infinite scrolling and quick preview.
- Wrote unit, integration, and acceptance tests for Python and JavaScript code.

*Stack: Python, Django, Open edX, Backbone.js, Sass, Jasmine*

<details>
<summary>Full stack</summary>

Jasmine, Vagrant, Sass, ZURB Foundation, Backbone.js, Django, Python, jQuery, CakePHP, Open edX, REST APIs

</details>

### Web Developer — ImadeThis AS
*2012 – 2013*

- Built a mobile publication reader for Spreads, a digital publishing platform, using HTML5, JavaScript, and advanced CSS animations.

*Stack: HTML5, JavaScript, jQuery, CSS animations, CodeIgniter, Bootstrap, Less*

<details>
<summary>Full stack</summary>

HTML5, JavaScript, jQuery, Zepto.js, Spine.js, iScroll, CSS 3D transforms and animations, Jasmine, PHP, CodeIgniter, WordPress, Bootstrap, Less, Git

</details>

### Web Developer — Extension Engine
*2009 – 2012*

- Helped build CompStudy, a web-based compensation survey tool, including the multi-step questionnaire and interactive reports and charts of executive salary and equity data.
- Worked on Parent School Network, a school information and engagement platform.
- Built several Drupal and WordPress sites.

*Stack: PHP, MySQL, JavaScript, jQuery, Drupal 6, WordPress, Subversion (SVN)*

### Web Developer — Booking IT
*2007 – 2009*

- Built an embeddable e-booking form for hotel websites, backed by a centralized .NET / MS SQL booking system.
- Improved the design and usability of several PHP and .NET sites.
- Built a Joomla website for a local municipality.

*Stack: .NET, MS SQL Server, PHP, JavaScript, Joomla*

### Co-founder & Web Developer — Kinitos
*2006 – 2007*

- Co-developed a real-time online booking system for yacht charters.
- Designed the relational database, .NET admin forms for boats, equipment, and services, and optimized MS SQL stored procedures.

*Stack: .NET, MS SQL Server, JavaScript*

---

## Side projects

### [Strobie](https://strobie.app) — strobe tuner for musical instruments
[Source on GitHub](https://github.com/dsego/strobe-tuner/) · GPL-3.0

- Native stroboscopic tuner written in Odin, with real-time pitch detection (NSDF / McLeod method) and a GPU-rendered strobe display.
- Harmonic mode with up to five partials, vernier mode, transposition, instrument tunings with capo, adjustable concert A (400–480 Hz), and four display styles.
- Targets macOS, iPhone, and Android from one codebase. Coming to the App Store.

*Stack: Odin, SDL3 GPU (Metal, Vulkan), GLSL*

<details>
<summary>Full stack</summary>

Odin, SDL3 (GPU API: Metal, Vulkan), GLSL, PFFFT, miniaudio, stb, just

</details>

### [Clipless](https://clipless.dev) — workflow engine for multi-person and AI-agent forms
- Developer tool that turns a form defined in a React file into an executable workflow. It handles per-stage email links, reminders, per-person field visibility, AI steps that keep personal data away from the model, and a tamper-evident event log.
- Built mostly with AI coding agents, as an experiment in AI-assisted development.

---

## Education

### Master's Degree in Computer Science — FESB, University of Split
*2003 – 2008*

Faculty of Electrical Engineering, Mechanical Engineering and Naval Architecture
