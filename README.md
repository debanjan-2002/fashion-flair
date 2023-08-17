
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/debanjan-2002/fashion-flair">
    <img src="client/public/logo-big.png" alt="Logo" height="80">
  </a>

  <h3 align="center">Fashion Flair</h3>

  <p align="center">
    Your personalised AI fashion assistant!
    <br />
    <br />
    <a href="https://youtube.com/adrishyantee">View Demo</a>
    ·
    <a href="https://github.com/debanjan-2002/fashion-flair/issues">Report Bug</a>
    ·
    <a href="https://github.com/debanjan-2002/fashion-flair/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
  <h2>Table of Contents</h2>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- GIF -->

In this innovative project, we are leveraging the power of AI, particularly Generative AIs like OpenAI, to create a fashion AI assistant that revolutionizes how people approach their clothing choices. The problem statement centers around the time-consuming and often overwhelming task of selecting outfits suitable for different occasions, aligning with personal styles and current fashion trends.

Our fashion AI assistant, powered by GenAI, addresses this challenge by generating tailored outfit recommendations based on user preferences, style inputs, and event contexts. By utilizing GenAI, we ensure the assistant can intelligently synthesize fashionable ensembles that blend individual tastes with current fashion trends. This project aims to streamline and elevate the outfit selection process, helping users feel more confident and stylish in their clothing choices. Through the integration of GAN-based AI, we envision empowering people with personalized fashion guidance, ultimately impacting their self-expression and enhancing their everyday lives.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With


* [![OpenAI API](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
* [![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
* [![Express js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
* [![React js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
* [![Node JS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
* [![Typescript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
* [![Tailwind](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Get a free OPENAI API Key at [https://openai.com/](https://openai.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/debanjan/fashion-flair.git
   ```
3. Install NPM packages - in both client and server directories
   ```sh
   npm install
   ```
4. Enter your API in `/.env`
   ```bash
    OPENAI_API_KEY = 'ENTER YOUR API'
    MONGO_URL='ENTER YOUR API'
    SESSION_SECRET='ENTER YOUR API'
    JWT_SECRET='ENTER YOUR API'
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Here are a few useful examples of how our fashion AI assistant can be used:

1. **Outfit Suggestions:**
   Users can describe an event or their preferences, and the AI assistant can generate outfit suggestions based on their input. For example, "Suggest a casual outfit for a summer picnic" or "Show me a formal outfit for a business meeting."

2. **Styling Advice:**
   Users can upload images of clothing items they own, and the AI can provide advice on how to style them with other pieces. For instance, "How can I style this red dress for a night out?" or "Pair this denim jacket with what shoes?"

3. **Trend Insights:**
   The AI can analyze fashion trends from recent data and provide insights. Users might ask, "What are the trending colors this season?" or "Show me the latest accessories in vogue."

4. **Virtual Wardrobe Organization:**
   Users can input their wardrobe items, and the AI can help create various outfit combinations using those items. For example, "Create outfits with my blue jeans and white t-shirts."

5. **Occasion-specific Recommendations:**
   Users can specify occasions like weddings, parties, or vacations, and the AI can suggest appropriate outfits. For instance, "What should I wear to a beach wedding?" or "Give me outfit ideas for a weekend getaway."

6. **Fashion Tips and Tricks:**
   Users can ask for general fashion tips, such as "How do I dress for my body type?" or "What accessories go well with a jumpsuit?"

7. **Personal Shopper Assistance:**
   The AI can act as a virtual personal shopper, suggesting clothing items that match the user's style and preferences. Users might ask, "Find me a stylish jacket under $100."

8. **Color Coordination Help:**
   Users can ask for advice on color combinations, like "What colors go well with olive green?" or "Suggest a color palette for a vintage look."

These examples demonstrate how a fashion AI assistant can offer personalized fashion advice, trend insights, and outfit recommendations to users. Users can engage with the assistant via text input or even images, making it a versatile tool for enhancing their fashion choices.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] **Conceptualization and Planning:**
  - [x] Define Purpose and Scope
  - [x] Select Outfit Types
  - [x] Choose Deployment Platforms
  - [x] Specify Input Formats

- [x] **Data Preparation:**
  - [x] Collect Outfit Dataset
  - [x] Label and Organize Data

- [x] **OpenAI API Integration:**
  - [x] Access OpenAI GPT-3 API
  - [x] Formulate User Prompts

- [x] **User Interaction:**
  - [x] Design User Interface (UI)
  - [x] Accept User Inputs
  - [x] Send Prompts to API

- [x] **Model Output Processing:**
  - [x] Receive API Responses
  - [x] Extract Outfit Suggestions

- [ ] **Feedback Loop:**
  - [ ] Gather User Feedback
  - [ ] Identify Improvements

- [ ] **Deployment:**
  - [ ] Set Up Hosting Environment
  - [ ] Deploy Chatbot on Platforms

- [ ] **Monitoring and Maintenance:**
  - [ ] Monitor Performance
  - [ ] Update Model and Data

- [ ] **Legal and Ethical Compliance:**
  - [ ] Ensure Data Usage Rights
  - [ ] Address Privacy Concerns



See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Adrishyantee Maiti - [@adrishyantee](https://linkedin.com/in/adrishyantee) - adrishyantee@gmail.com

Debanjan Poddar - [@debanjan](https://linkedin.com/in/debanjan-poddar) - debanjan.edu.2002@gmail.com

Project Link: [https://github.com/debanjan-2002/fashion-flair](https://github.com/debanjan-2002/fashion-flair)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


* [StorySet](https://storyset.com/)
* [SlangAi](https://www.slang.ai/)
* [Tailwind](https://tailwindcss.com/)
* [Heroicon](https://storyset.com/)




<p align="right">(<a href="#readme-top">back to top</a>)</p>