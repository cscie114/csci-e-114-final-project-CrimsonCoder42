# final-project

Final Project

# My Vision

I am an avid outdoorsman and bushcrafter 2 years ago in the middle of the pandemic I did the Colorado Trail. I am currently training for the PCT this summer, and usually go out for a week at a time with basically a pack and what I can carry.

This project will be an evolution of past projects to give me what I need when I'm on the trail. Step one will be the standard finding and listing from NPS. In this project however I have combined it with the national weather service so I can get the weather for any park. Then submiting my name, email, and number will give me both email and text for severe weather alerts. I have found this to be very much needed on remote trails. Sometimes you will get a signal but not enough for data but enough for a text message. Then sometimes you will get a wifi signal but no txt messaging ability.

# Project Requirements

To meet the project requirements, please ensure the following:

1. **Static Site Generator**: Make sure that the pages in your project are built using a Static Site Generator. Next.js already supports static site generation, and current code utilizes the `getStaticProps` and `getStaticPaths` functions to pre-render pages at build time. Project meets this requirement.

2. **Data-Driven Content**: Your project should utilize data to drive the content. Currently fetching data from the National Park Service API and the Weather API, which fulfills this requirement.

3. **Version Control with GitHub**: Create a repository on GitHub and push your project to it. https://github.com/cscie114/csci-e-114-final-project-CrimsonCoder42/tree/main/final_app

4. **CI/CD process that deploys to hosting**: Amplify provides it's own hosting steps which I found once connected to a Git repo will block actions from redeploying.
   ![Amplify Image](AmplifyDeploy.png)

# How to Run the Project

Follow these steps to set up and run the project locally on your machine:

## Prerequisites

Ensure that you have the following installed on your system:

1. Node.js[^1^]
2. npm[^2^]
3. Git[^3^]

[^1^]: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
[^2^]: [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)
[^3^]: [https://git-scm.com/downloads](https://git-scm.com/downloads)

## Clone the Repository

`git clone https://github.com/cscie114/csci-e-114-final-project-CrimsonCoder42.git`

## Install Dependencies

`cd csci-e-114-final-project-CrimsonCoder42/final_app/next_park_weather_proj`
`npm ci`

## Create `.env.local` File

Replace `<your_nps_api_key>` with your actual API key.

## Run the Development Server

Open your browser and visit `http://localhost:3000` to access the application.

## Build and Run the Production Version

`npm run build`
`npm run start`

This will build and serve the production version of the application at `http://localhost:3000`.
