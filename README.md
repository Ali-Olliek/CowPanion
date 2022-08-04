![title1](https://user-images.githubusercontent.com/105279237/182939104-ffcb321e-023f-4c1f-8758-17e53bae7f77.svg)


<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available. 

**[PROJECT PHILOSOPHY](#In-a-world) • [WIREFRAMES](#) • [TECH STACK](#) • [IMPLEMENTATION](#) • [HOW TO RUN?](#)**

</div>

<br><br>

![title2](https://user-images.githubusercontent.com/105279237/182450471-80b7b409-9d35-4fc1-a3cc-c7b2f9062e73.svg)


> In a world fighting for **food security**, alot of the scarcity is due to following **ineffecient farming practices**. With **CowPanion** we aim to lessen the effect of these practices.
>
> The **CowPanion** app is soon to be included as an **essential tool** for farms, from small to mid-range farms, it's aimed at giving the farmers **insights** over their farm and help them take better decisions, **monitor** their animal's health along with keeping an eye on **production** levels.
> 
> With **CowPanion**, we want farmers and veterinarians to **symbiotically exist** on one platform and **easily coordinate** for the betterment of their animals' health.

### Farmer's Stories
- As a farmer, I need quick and **easy access** to my animals.
- As a farmer, I want a **seemless interaction** with veterinarians.
- As a farmer, I need **visual representations** of my farm's milk performance.
- As a farmer, I need to keep track of **tasks** in hand.
- As a farmer, I need to **monitor** my animal's current lifecycle stage.

### Veterinarian's Stories
- As a veterinarian, I want to have all the patients **at one place**.
- As a veterinarian, I want to **grow** my career and network of farms.
- As a veterinarian, I want to have **easy access** to patients as fast as possible.

### Admin's Stories
- As an admin, I need to **explore** my userbase's age groups and adjust my services accordingly.
- As an admin, I need to see the **geographical distribution** of farms accross the country.

<br><br>

![title3](https://user-images.githubusercontent.com/105279237/182450491-e70cf25a-d1d4-4f5c-9692-396839d92c97.svg)


> This design was planned before on paper, then moved to Figma app for the fine details.
Note that i didn't use any styling library or theme, all from scratch and using pure css modules


| Farmer Log In  | Farmer Sign Up  | List of Animals |
| -----------------| -----| ---|
| ![Log In](https://user-images.githubusercontent.com/105279237/182940019-1e93ccee-422b-4d47-b799-f5179b8a4699.gif) | ![Sign UP](https://user-images.githubusercontent.com/105279237/182940049-17a451cf-372d-4331-a5d8-2af0b9e4895c.gif) | ![update status](https://user-images.githubusercontent.com/105279237/182940128-8404fd32-162f-4cd3-bb0b-b13c4b4c26d1.gif) |


|Create Reminder| Animal Scanning | Profile Dashboard|
|----|----|---|
|  ![create reminder](https://user-images.githubusercontent.com/105279237/182940171-a8f3892d-681d-4d58-b764-919c12ec4cce.gif) | ![scan animal](https://user-images.githubusercontent.com/105279237/182940198-4c700f53-4bad-42aa-98ff-55a1e1738c21.gif)  | ![profile dashboard](https://user-images.githubusercontent.com/105279237/182940240-648e3886-ab3d-4297-a3e6-d477ff4f6612.gif) |

<br>

|Veterinarian User Flow|
|----------------------|
|  ![VetFlow](https://user-images.githubusercontent.com/105279237/182947984-1af607d5-c379-48ec-960d-2d09f80aeada.gif) |
<br>

|Admin's Panel |
|--------------|
|![Admin](https://user-images.githubusercontent.com/105279237/182940303-7186cb22-f6c1-4cb3-9ff8-11113754831c.png) |

<br><br>

![title4](https://user-images.githubusercontent.com/105279237/182450509-8384e315-deef-4bb1-a523-61a3e81a9076.svg)


Here's a brief high-level overview of the tech stack the Well app uses:

- The backend was constructed using [Django Framework](https://www.djangoproject.com/). Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
<br>
- The frontend experience was crafted using [React Native](https://reactnative.dev/docs/getting-started) and [Expo](https://expo.dev/). React Native lets you create truly native apps and doesn't compromise your users' experiences. While Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
<br>
- The database was built using [MySQL](https://www.mysql.com/) package which allows the app to create a custom storage schema and save it to a local database.
<br>
- Admin's panel was put together using [React](https://reactjs.org/). React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
<br>
- Calculation of milk volume was done using [NodeMCU Amica](https://www.nodemcu.com/index_en.html) microcontroller connected to a waterproof [Ultrasonic sensor](https://dronebotworkshop.com/waterproof-ultrasonic/) to measure the volume of milk inside a given container.
<br>
- Animal identification was accomplished using [QR codes](https://en.wikipedia.org/wiki/QR_code). QR codes are a machine-readable optical label that can contain information about the item to which they are attached to.
<br>
- Data visualization was achieved using [D3.JS](https://d3js.org/). D3.js is a JavaScript library for manipulating documents based on data.
<br>
- Weather data was presented using [OpenWeatherAPI](https://openweathermap.org/). It is a simple, fast and free weather API that you have access to current weather data, hourly, 5- and 16-day forecasts.
<br>
- Geographical representation of Lebanon was done using [Google Maps](https://developers.google.com/maps), while for the admin the project used [Leaflet](https://leafletjs.com/)'s open source map.

<div>
<br><br>

![title5](https://user-images.githubusercontent.com/105279237/182450544-1a7db30b-a2b0-4fd7-9d87-f9907d2ea791.svg)


> Uing the above mentioned tech stacks and the wireframes build with figma from the user sotries we have, the implementation of the app is shown as below, this is a GIF displaying screenshots from the real app including home, animal's list, animal's profile, reminders, and profile page accordingly.

| CowPanion |
| ------| 
|  |


|  Admin's Panel |
|---|---|
| ![AdminPanelPNG](https://user-images.githubusercontent.com/105279237/182946884-34de4ed4-e246-4ac6-821d-5f78048dc69f.PNG)  |

 | Admin's Map | Admin's User Age Groups Chart |
 |----|-----|
 | ![AdminMaps](https://user-images.githubusercontent.com/105279237/182947062-0e5559b5-237b-44f3-bc8d-ec21c4190a2c.gif) |  ![userAges](https://user-images.githubusercontent.com/105279237/182947218-45a356e9-988c-44f2-a1c1-978f3f469cf6.gif) |
 
<br>

|Diagram displaying how the hardware will work in a real farm|
|-----|
| ![Diagram](https://user-images.githubusercontent.com/105279237/182946510-9b8d1d54-1e2c-4119-b929-205aa1e99dfa.gif) |

<br>

|  NodeMCU Amica  | HC-SR04 Ultrasonic Distance Sensor |
|---|---|
|  ![NodeMCU](https://user-images.githubusercontent.com/105279237/182941237-954f452b-7927-4b92-8788-5e433f074f33.jpg) |  ![Sensor](https://user-images.githubusercontent.com/105279237/182941257-33a3b2b1-2793-4e2d-acdf-9ebd5ccd3a77.jpg)
 |



<div>


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


