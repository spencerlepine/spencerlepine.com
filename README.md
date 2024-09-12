# [SpencerLepine.com](https://www.spencerlepine.com/) [![🚀 Deploy to GitHub Pages](https://github.com/spencerlepine/spencerlepine.com/actions/workflows/deploy.yml/badge.svg)](https://github.com/spencerlepine/spencerlepine.com/actions/workflows/deploy.yml)

My developer portfolio site. A static landing page built with Gatsby, ReactJS, and TailwindCSS

![Portfolio Site Screenshot GIF](./portfolio-site-landing-page.gif)

<img alt="Architecture" src="./portfolio-architecture.png" width="400px" />

<img alt="Deplyoment" src="./portfolio-deployment.png" width="700px" />

## 📦 Technologies

- [GatsbyJS](https://www.gatsbyjs.com/)
- [React](https://reactjs.org/)
- [GraphQL](https://graphql.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Netlify](https://www.netlify.com/)
- [AWS Route53](https://aws.amazon.com/route53/)

## ⭐ How It's Built

This was built from scratch with React and TailwindCSS, which includes a light/dark theme toggle. Using MDX content, static pages are generated with Gatsby and GraphQL. Automatically deploys to netlify, with routing on AWS Route53 for the domain.

Using Figma, I created the designs to follow and basic component layout of the site:

![Figma Designs](./static/figma-designs.png)

## 📁 Previous Versions

- V1: https://github.com/spencerlepine/portfolio-site-v1
- V2: https://github.com/spencerlepine/portfolio-site-v2

## ⚙️ Local Development
```sh
$ git clone https://github.com/spencerlepine/spencerlepine.com.git
$ cd spencerlepine.com
$ yarn install
$ yarn start
# access on http://localhost:8000
```
