# Davorin Šego

<img src="https://avatars.githubusercontent.com/u/578557?s=400&u=f32900baadc5b8b05aa8a8cd607b2ecfacd437ee&v=4" alt="Davorin Šego" width="140" align="right">

**Senior Full-Stack Engineer** · Split, Croatia

[GitHub](https://github.com/dsego) · [Toptal profile](https://www.toptal.com/developers/resume/davorin-sego)

Full-stack engineer with nearly 20 years of experience building web applications, most recently a fintech platform that handles sensitive tax and financial data. Works across the stack in React/TypeScript, PHP/Laravel, and Python/Django, from data models and APIs to the finished UI. Long background in data-heavy products: dashboards, interactive maps, charting tools, surveys, and booking systems. Writes testable, maintainable code and has worked remotely with distributed teams for over a decade.

---

## Skills

- **Languages:** TypeScript, JavaScript, PHP, Python, SQL, HTML, CSS/SCSS, Odin
- **Front end:** React, TanStack Query (React Query), Inertia.js, Storybook, Vite
- **Data visualization & maps:** D3.js, Plotly, Leaflet
- **Back end:** Laravel, Node.js, Django, Django REST Framework
- **Databases & storage:** PostgreSQL, MySQL, Redis, Google Cloud Storage
- **AI & documents:** AWS Textract OCR, LLM-based document classification
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
- **Client backend:** Python, Django, Django REST Framework, PostgreSQL, Redis, Google Cloud Storage, httpx, Django OTP, Docker, Gunicorn, Nginx, HubSpot API, Stripe API, Dropbox Sign (HelloSign), PandaDoc, Trello, Prefinery, Mixpanel, pytest, uv, Ruff, pre-commit
- **CI:** GitHub Actions, GitLab CI

</details>

### Dashboard Engineer — Lam Research (via Toptal)
*2020 – 2021*

- Designed and built REST API endpoints to feed the dashboards using Node.js and Swagger.
- Created powerful web-based visualizations based on the Power BI files provided, using the Plotly graphing library and Pandas for data analysis.
- Laid the groundwork for a new React front end and helped re-implement a portion of the existing codebase into React.
- Improved an interactive map tool built with SVG.js to support loading external data. Implemented new features based on the provided designs.
- Participated in technical discussions with the engineering team and helped plan the new architecture and project structure.

*Stack: JavaScript, Node.js, Express.js, React, React Query, Vite, PostgreSQL, MS SQL Server, Plotly, D3.js, Docker*

<details>
<summary>Full stack</summary>

JavaScript, Node.js, Express.js, Swagger / OpenAPI, React, React Query, Zustand, SWR, React Router, Ant Design, React Bootstrap, styled-components, Sass, Vite, Storybook, PostgreSQL, MS SQL Server, Docker, Git, Git LFS, Jenkins, D3.js, Plotly, SVG.js, Lodash, Luxon, Sentry, JWT, Active Directory, Cypress, Jest, Mocha, Chai, Testing Library, MSW, ESLint, Pandas, Python, Flask, REST APIs, Microsoft Power BI, Mithril.js, YouTrack

</details>

### Full-stack Developer — SHIFT (via Toptal)
*2018 – 2019*

- Developed full-stack features, including psychometric tests, surveys, dashboards, reports, and data visualizations.
- Developed new front-end product features with a focus on creating a seamless user experience.
- Integrated web analytics and customer experience platforms into the product.
- Wrote understandable, testable code with an eye toward maintainability.
- Participated in technical architecture discussions and helped drive technical decisions.
- Solved technical problems in collaboration with other engineers on the team.
- Performed code reviews in conjunction with the other developers.

*Stack: React, TypeScript, MobX, Mithril.js, CoffeeScript, Laravel, MySQL, D3.js, Bootstrap*

<details>
<summary>Full stack</summary>

React, React Router, TypeScript, MobX, Mithril.js, CoffeeScript, D3.js, ProseMirror, CodeMirror, jQuery, Lodash, Bootstrap, Reactstrap, Sass, Webpack, Laravel Mix, Gulp (Laravel Elixir), Bower, Jest, Enzyme, TSLint, PHP, Laravel, MySQL, PHPUnit, Laravel Dusk, Stripe, Intercom, AWS SDK, Sentry, Docker (Laradock)

</details>

### Web Developer — 2nd Nature, LLC (via Toptal)
*2016 – 2017*

- Helped develop feature-rich map tools built on top of Leaflet, a JavaScript library for interactive maps.
- Created a CSV import of map features with data validation, preview, and ability to remap fields.
- Implemented export functionality for PostGIS map features, with support for shapefiles and XLS format.
- Implemented single sign-on access control, based on web tokens, for a suite of online tools.
- Rewrote and refactored existing PHP back-end code with the Lumen framework.
- Developed auditing back-end code to keep track of user actions.
- Created basic end-to-end tests with the Nightwatch browser automation framework.
- Fixed bugs and cleaned up code in the existing codebase.

*Stack: Leaflet, PostGIS, PHP, Lumen, Nightwatch.js*

<details>
<summary>Full stack</summary>

Git, Nightwatch.js, Baobab, Nunjucks, Leaflet, Lumen, PostGIS, GeoJSON, JavaScript, jQuery, PHP, JWT-based SSO

</details>

### Full-stack Developer — Pareto Solutions (via Toptal)
*2015 – 2017*

- Created a multi-step checkout page with the Stripe API.
- Created a CSV tool to update database rows in bulk with preview functionality.
- Implemented required functionalities for a web app that uses the Facebook API for reporting, analytics, and marketing automation.
- Worked on numerous CakePHP projects and created interactive demos with HTML5 and JavaScript.
- Created a prototype web tool for automating bids with Facebook's advertising platform.
- Created an editing tool prototype based on React Data Grid that saves data to Firebase.

*Stack: React, Redux, Node.js, CakePHP, MongoDB, MySQL, Firebase, Stripe API*

<details>
<summary>Full stack</summary>

React, Redux, Redux Thunk, React Router, React Data Grid, Ant Design, Reactstrap, Firebase, Webpack, Babel, Node.js, Express.js, Knex, Objection.js, Redis, pm2, ccxt, MongoDB, MySQL, PHP, CakePHP 3, PHPUnit, Stripe API (Omnipay), Facebook Graph API, Facebook Marketing API, SheetJS, Bootstrap, DataTables, Morris.js, Flot, Sass, Compass, jQuery, HTML5, Mocha, ESLint, Git

</details>

### Senior Web Developer — Extension Engine
*2013 – 2015*

- Did front-end and full-stack development within the Solutions team at edX.
- Implemented Backbone.js UIs for search and course discovery on Open edX, an online learning platform.
- Worked on a proprietary social learning platform that integrates Open edX via RESTful API.
- Contributed features and bug fixes to Open edX.
- Implemented new features on PaintNite, a website for organizing painting parties.
- Created a web tool for uploading and managing files with endless scrolling and quick file preview.
- Implemented unit, integration, and acceptance tests for Python and JavaScript code.

*Stack: Python, Django, Open edX, Backbone.js, Sass, Jasmine*

<details>
<summary>Full stack</summary>

Jasmine, Vagrant, Sass, ZURB Foundation, Backbone.js, Django, Python, jQuery, CakePHP, Open edX, REST APIs

</details>

### Web Developer — ImadeThis AS
*2012 – 2013*

- Worked on Spreads, a digital publication platform.
- Implemented a publication reader for mobile devices using HTML5, JavaScript, and sophisticated CSS animations.
- Learned fundamentals in Bootstrap and Less.

*Stack: HTML5, JavaScript, jQuery, CSS animations, CodeIgniter, Bootstrap, Less*

<details>
<summary>Full stack</summary>

HTML5, JavaScript, jQuery, Zepto.js, Spine.js, iScroll, CSS 3D transforms and animations, Jasmine, PHP, CodeIgniter, WordPress, Bootstrap, Less, Git

</details>

### Web Developer — Extension Engine
*2009 – 2012*

- Helped build a website for CompStudy, a web service for compensation surveys, with interactive reports on executive salary and equity data.
- Implemented a multi-step web-based questionnaire tool with PHP and JavaScript.
- Built an interactive charting tool to allow a user to chart, graph, filter, and sort data in different ways.
- Worked on Parent School Network, a school information and engagement platform.
- Created several websites on Drupal and WordPress.

*Stack: PHP, MySQL, JavaScript, jQuery, Drupal 6, WordPress, Subversion (SVN)*

### Web Developer — Booking IT
*2007 – 2009*

- Created a solution to seamlessly integrate an e-booking web form into hotel websites.
- Supported a centralized booking system using .NET and MS SQL.
- Improved the design and usability of several PHP and .NET websites.
- Created a Joomla website for a local municipality.

*Stack: .NET, MS SQL Server, PHP, JavaScript, Joomla*

### Co-founder & Web Developer — Kinitos
*2006 – 2007*

- Worked in a small team to envision and develop a real-time online booking system for yacht charters.
- Helped design a complex relational database for the booking system.
- Created elaborate .NET web forms for administering boats, equipment, and services.
- Implemented optimized SQL procedures for MS SQL Server.

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
