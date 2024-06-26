<a name="readme-top"></a>

<!--
!!! IMPORTANT !!!
This README is an example of how you could professionally present your codebase. 
Writing documentation is a crucial part of your work as a professional software developer and cannot be ignored. 

You should modify this file to match your project and remove sections that don't apply.

REQUIRED SECTIONS:
- Table of Contents
- About the Project
  - Built With
  - Live Demo
- Getting Started
- Authors
- Future Features
- Contributing
- Show your support
- Acknowledgements
- License

OPTIONAL SECTIONS:
- FAQ

After you're finished please remove all the comments and instructions!

For more information on the importance of a professional README for your repositories: https://github.com/microverseinc/curriculum-transversal-skills/blob/main/documentation/articles/readme_best_practices.md
-->

<div align="center">
  <!-- You are encouraged to replace this logo with your own! Otherwise you can also remove it. -->
  <img src="./public/images/cookiez.png" alt="logo" width="140"  height="auto" />
  <br/>

  <h3><b>CraveCode Project</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
<!-- - [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq) -->
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 CraveCode Bakery <a name="about-project"></a>

**CraveCode Bakery** is a dynamic web application designed for a cookie shop. It features a simple transaction system with separate cart and order tables. The project is developed as a final exam for our web development subject.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

In this project, we are using Express.js as the backbone, which supports the backend operations of this website. EJS assists as the templating engine for the front end, ensuring dynamic web processing. For the database configurations, we are using PostgreSQL client database helped by Prisma which serves as the conduit. Lastly, bcrypt is used for authentication processing and session management.  

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="">HTML</a></li>
    <li><a href="">CSS</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://ejs.github.io/">EJS</a></li>
    <li><a href="https://www.npmjs.com/package/cors">CORS</a></li>
    <li><a href="https://www.npmjs.com/package/express-session">Express Session</a></li>
    <li><a href="https://www.npmjs.com/package/method-override">Method Override</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
    <li><a href="https://www.prisma.io/">Prisma</a></li>
  </ul>
</details>

<details>
<summary>Other Dependencies</summary>
  <ul>
    <li><a href="https://www.npmjs.com/package/axios">Axios</a></li>
    <li><a href="https://www.npmjs.com/package/bcrypt">Bcrypt</a></li>
    <li><a href="https://www.npmjs.com/package/dotenv">Dotenv</a></li>
  </ul>
</details>

<details>
<summary>Development Dependencies</summary>
  <ul>
    <li><a href="https://eslint.org/">ESLint</a></li>
    <li><a href="https://www.npmjs.com/package/nodemon">Nodemon</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Dynamic Navigation**: Dynamic navigation system that adjusts based on user's interactions.
- **Simple Design**: Only uses standard HTML and CSS for styling, keeping the design simple and easy to understand.
- **Structured Folder**: Organized folder structure, easy to navigate between different use cases.
- **Structured Database Schema**: A well-structured database schema ensures efficient data management.
- **Simple and Easy to Read Session and Authentication Implementation**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

For the live demo, we are using Vercel for a deployment.
- [Click here!](https://cravecode-dev-js.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

To run this project you need:

- [Node.js](https://nodejs.org/en/download/)
- [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/install-prisma-migrate-typescript-postgres)
- Make sure to clone the project to your desired folder location!
```
git clone https://github.com/krauchelli/cravecode-dev-js.git
```

### Install

Install this project with:

```sh
cd cravecode-dev-js
npm i
npx prisma migrate dev
npx prisma migrate reset
```
! Please take this as an example of the initialization of a project that uses Prisma as the PostgreSQL database's conduit.

### Usage

To run the project, execute the following command:

```sh
npm run dev
```

### Run tests

To run tests, run the following command:

Coming Soon!

### Deployment

Coming Soon!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Muhammad Dwi Ananda**

- GitHub: [@krauchelli](https://github.com/krauchelli)
- Twitter: [@kraunanda](https://x.com/kraunanda)
- LinkedIn: [@Dwi](https://www.linkedin.com/in/muhammad-dwi-ananda-b97797246/)

👤 **Dini Rahmawati**

👤 **Ladya Kusuma**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

Will Be Announced Soon!
<!-- - [ ] **[new_feature_1]**
- [ ] **[new_feature_2]**
- [ ] **[new_feature_3]** -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project, feel free to contact us on authors information above!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

<!-- ## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank...

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- FAQ (optional) -->

<!-- ## ❓ FAQ (OPTIONAL) <a name="faq"></a>

> Add at least 2 questions new developers would ask when they decide to use your project.

- **[Question_1]**

  - [Answer_1]

- **[Question_2]**

  - [Answer_2]

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

_NOTE: we recommend using the [MIT license](https://choosealicense.com/licenses/mit/) - you can set it up quickly by [using templates available on GitHub](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository). You can also use [any other license](https://choosealicense.com/licenses/) if you wish._

<p align="right">(<a href="#readme-top">back to top</a>)</p>
