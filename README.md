![title1](https://user-images.githubusercontent.com/105279237/182450353-e831f6e5-30cb-4408-93f8-dbdbb88208b1.svg)

<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available. 

**[PROJECT PHILOSOPHY](#) • [WIREFRAMES](#) • [TECH STACK](#) • [IMPLEMENTATION](#) • [HOW TO RUN?](#)**

</div>

<br><br>

![title2](https://user-images.githubusercontent.com/105279237/182450471-80b7b409-9d35-4fc1-a3cc-c7b2f9062e73.svg)


> The CowPanion app is soon to be farmer's best friend, from small to mid-range farm owners, it's aimed at giving the farmer insights over his farm and help him take better decision, monitor his animal's health along with production levels.
> 
> With CowPanion, we want farmers and veterinarians to symbiotically exist on one platform and easily coordinate. We want for the farmers to recognize their farm performance patterns through visual data representation and help them take better decisions.

### User Stories
- As a farmer, I need quick and easy access to the medical history of my cows.
- As a farmer I need visual representations of my farm's milk performance.
- As a farmer, I want a seemless interaction with veterinarians.

<br><br>

![title3](https://user-images.githubusercontent.com/105279237/182450491-e70cf25a-d1d4-4f5c-9692-396839d92c97.svg)


> This design was planned before on paper, then moved to Figma app for the fine details.
Note that i didn't use any styling library or theme, all from scratch and using pure css modules

| Farmer's User Flow  | Veterinarian's User Flow  |
| -----------------| -----|
| ![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/105279237/182549379-5ea46e06-c9bf-40d9-8a2c-3c1e61e9953a.gif) | ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/105279237/182549327-97727b40-11bb-4f54-87ac-860e8a0357fb.gif) |



<br><br>

![title4](https://user-images.githubusercontent.com/105279237/182450509-8384e315-deef-4bb1-a523-61a3e81a9076.svg)


Here's a brief high-level overview of the tech stack the Well app uses:

- This project uses the [Django Framework](https://www.djangoproject.com/). Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
- For persistent storage (database), the app uses the [MySQL](https://www.mysql.com/) package which allows the app to create a custom storage schema and save it to a local database.
- For the calculation of milk production per day the app uses 'NodeMCU Amica' microcontroller with an UltraSonic sensor attached to it to measure the volume of milk inside a given container.
- The app uses QR Codes to identify animals.
- The app uses the font ["Work Sans"](https://fonts.google.com/specimen/Work+Sans) as its main font, and the design of the app adheres to the material design guidelines.



<br><br>

![title5](https://user-images.githubusercontent.com/105279237/182450544-1a7db30b-a2b0-4fd7-9d87-f9907d2ea791.svg)


> Uing the above mentioned tech stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, these are screenshots from the real app

| Home  | Animals List | Animal Profile | Reminders | Profile |
| ------| -------------| ---------------| ----------| ----------|
| ![Android Emulator - Pixel_4_API_29_5554 8_3_2022 10_41_29 AM](https://user-images.githubusercontent.com/105279237/182554241-91dbe443-e382-454a-a76b-56cda24074b6.png) |  
![Android Emulator - Pixel_4_API_29_5554 8_3_2022 10_41_36 AM](https://user-images.githubusercontent.com/105279237/182554310-90799671-a376-4247-996f-42c9fa916557.png) | ![Android Emulator - Pixel_4_API_29_5554 8_3_2022 10_41_41 AM](https://user-images.githubusercontent.com/105279237/182554347-84d78143-1bb6-425e-ab1e-c837b0224f6b.png) | 
![Android Emulator - Pixel_4_API_29_5554 8_3_2022 10_42_04 AM](https://user-images.githubusercontent.com/105279237/182554696-6897da74-e2ea-4472-9f02-16cfb864e198.png) | ![Android Emulator - Pixel_4_API_29_5554 8_3_2022 10_42_41 AM](https://user-images.githubusercontent.com/105279237/182554756-cc82a6ba-0374-4014-853f-21921a2ad052.png) |





<br><br>

![title6](https://user-images.githubusercontent.com/105279237/182450571-c9c29231-8f9f-4e1b-8751-4f4e40a6e20d.svg)


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


