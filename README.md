<img src="![title1](https://user-images.githubusercontent.com/105279237/182450353-e831f6e5-30cb-4408-93f8-dbdbb88208b1.svg)

"/>

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available. 

**[PROJECT PHILOSOPHY](#) • [WIREFRAMES](#) • [TECH STACK](#) • [IMPLEMENTATION](#) • [HOW TO RUN?](#)**

</div>

<br><br>


<img src="./readme/title2.svg"/>

> The CowPanion app is soon to be farmer's best friend, from small to mid-range farm owners, it's aimed at giving the farmer insights over his farm and help him take better decision, monitor his animal's health along with production levels.
> 
> With CowPanion, we want farmers and veterinarians to symbiotically exist on one platform and easily coordinate. We want for the farmers to recognize their farm performance patterns through visual data representation and help them take better decisions.

### User Stories
- As a farmer, I need quick and easy access to the medical history of my cows.
- As a farmer I need visual representations of my farm's milk performance.
- As a farmer, I want a seemless interaction with veterinarians.

<br><br>

<img src="./readme/title3.svg"/>

> This design was planned before on paper, then moved to Figma app for the fine details.
Note that i didn't use any styling library or theme, all from scratch and using pure css modules

| Landing  | Home/Search  |
| -----------------| -----|
| ![Landing]() | ![Home/Search]() |

| Artists results  | Artist's Albums  |
| -----------------| -----|
| ![Artists results]() | ![Artist's Albums]() |


<br><br>

<img src="./readme/title4.svg"/>

Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses the [Django Framework](https://www.djangoproject.com/). Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
- For persistent storage (database), the app uses the [MySQL](https://www.mysql.com/) package which allows the app to create a custom storage schema and save it to a local database.
- For the calculation of milk production per day the app uses 'NodeMCU Amica' microcontroller with an UltraSonic sensor attached to it to measure the volume of milk inside a given container.
- The app uses QR Codes to identify animals.
- The app uses the font ["Work Sans"](https://fonts.google.com/specimen/Work+Sans) as its main font, and the design of the app adheres to the material design guidelines.



<br><br>
<img src="./readme/title5.svg"/>

> Uing the above mentioned tech stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app

| Landing  | Home/Search  |
| -----------------| -----|
| ![Landing]() | ![Home/Search]() |


<br><br>
<img src="./readme/title6.svg"/>


> This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```


