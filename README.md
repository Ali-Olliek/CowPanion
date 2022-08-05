![title1](https://user-images.githubusercontent.com/105279237/183063072-00079ba1-25ac-44bd-8867-0d83ce523d4a.svg)



<div align="center">

> Hello world! This is the project’s summary that describes the project plain and simple, limited to the space available. 

**[PROJECT PHILOSOPHY](#philosophy) • [WIREFRAMES](#wireframes) •  [TECH STACKS](#stacks) • [IMPLEMENTATION](#implementation) • [HOW TO RUN?](#run)**

</div>

<br><br>


![title2 id="philosophy"](https://user-images.githubusercontent.com/105279237/183057835-f8f10a3f-cab0-4753-afb3-cbf0de5de13c.svg)



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

![title3 id="wireframes"](https://user-images.githubusercontent.com/105279237/183058040-37903cf5-6ee9-462d-8fce-72b3b41508ac.svg)


> This design was planned before on paper, then moved to Figma app for the fine details.
Note that i didn't use any styling library or theme, all from scratch and using pure css modules

### Farmers

| Farmer Log In  | Farmer Sign Up  | List of Animals |
| -----------------| -----| ---|
| ![Log In](https://user-images.githubusercontent.com/105279237/182940019-1e93ccee-422b-4d47-b799-f5179b8a4699.gif) | ![Sign UP](https://user-images.githubusercontent.com/105279237/182940049-17a451cf-372d-4331-a5d8-2af0b9e4895c.gif) | ![update status](https://user-images.githubusercontent.com/105279237/182940128-8404fd32-162f-4cd3-bb0b-b13c4b4c26d1.gif) |


|Create Reminder| Animal Scanning | Profile Dashboard|
|----|----|---|
|  ![create reminder](https://user-images.githubusercontent.com/105279237/182940171-a8f3892d-681d-4d58-b764-919c12ec4cce.gif) | ![scan animal](https://user-images.githubusercontent.com/105279237/182940198-4c700f53-4bad-42aa-98ff-55a1e1738c21.gif)  | ![profile dashboard](https://user-images.githubusercontent.com/105279237/182940240-648e3886-ab3d-4297-a3e6-d477ff4f6612.gif) |

<br>

### Veterinarians

| Log In | Update Medical Records | Scan Animals |
|----------------------|-------|----------|
|  ![VETLOGINWF](https://user-images.githubusercontent.com/105279237/183062642-40aadb19-cf80-469e-8c30-042191daff2d.gif) | ![WFADDMED](https://user-images.githubusercontent.com/105279237/183062671-e15e413e-3a90-405a-a3ad-d48dcb3df4d9.gif) | ![VetSCANWF](https://user-images.githubusercontent.com/105279237/183062690-3024ac52-25d3-4952-8c7a-e4109e0eb328.gif) |
<br>

### Admins

|Admin's Panel |
|--------------|
|![Admin](https://user-images.githubusercontent.com/105279237/182940303-7186cb22-f6c1-4cb3-9ff8-11113754831c.png) |

<br><br>


![title4 id="stacks"](https://user-images.githubusercontent.com/105279237/183058102-ead7c6ba-ad17-493a-b761-a68dc8e794f0.svg)


Here's a brief high-level overview of the tech stack the Well app uses:

- The backend was constructed using [Django Framework](https://www.djangoproject.com/). Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.
- The frontend experience was crafted using [React Native](https://reactnative.dev/docs/getting-started) and [Expo](https://expo.dev/). React Native lets you create truly native apps and doesn't compromise your users' experiences. While Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
- The database was built using [MySQL](https://www.mysql.com/) package which allows the app to create a custom storage schema and save it to a local database.
- Admin's panel was put together using [React](https://reactjs.org/). React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
- Calculation of milk volume was done using [NodeMCU Amica](https://www.nodemcu.com/index_en.html) microcontroller connected to a waterproof [Ultrasonic sensor](https://dronebotworkshop.com/waterproof-ultrasonic/) to measure the volume of milk inside a given container.
- Animal identification was accomplished using [QR codes](https://en.wikipedia.org/wiki/QR_code). QR codes are a machine-readable optical label that can contain information about the item to which they are attached to.
- Data visualization was achieved using [D3.JS](https://d3js.org/). D3.js is a JavaScript library for manipulating documents based on data.
- Weather data was presented using [OpenWeatherAPI](https://openweathermap.org/). It is a simple, fast and free weather API that you have access to current weather data, hourly, 5- and 16-day forecasts.
- Geographical representation of Lebanon was done using [Google Maps](https://developers.google.com/maps), while for the admin the project used [Leaflet](https://leafletjs.com/)'s open source map.
<div>
<br><br>


![title5 id="implementation"](https://user-images.githubusercontent.com/105279237/183058128-5595d37f-916c-440e-a323-81207c5f0eb4.svg)


> Uing the above mentioned tech stacks and the wireframes build with figma from the user stories we have, the implementation of the app is shown as below, this is a GIF displaying screenshots from the real app including home, animal's list, animal's profile, reminders, and profile page accordingly.

### Farmers
 
| Farmer's Login | Farmer's Register | Farmer's Profile |
| ------| --- | ---- |
|  ![LoginFarmerV2](https://user-images.githubusercontent.com/105279237/183056794-2ec16944-bbf1-45fa-bfd4-03442f1f3787.gif)   | ![Register](https://user-images.githubusercontent.com/105279237/182951829-eb0fae42-2296-4057-991f-046ced6aaada.gif) |![PROFILEGIF](https://user-images.githubusercontent.com/105279237/182949925-0c7b43c1-e76e-4c64-bca0-69f7a6862a7e.gif) |

|Animals and Adding Animal| Farmer's Reminders | Animal QR Code Scan|
|----|----|-----|
| ![AddAnimalGIF](https://user-images.githubusercontent.com/105279237/182950380-252adf90-c9ea-4789-b707-d2c2a0bfaeef.gif) | ![FARMERREMINDERS](https://user-images.githubusercontent.com/105279237/182950711-ec563bc0-6e10-4a7e-a425-d5fc2f4906f2.gif) | ![SCANANIMALGIF](https://user-images.githubusercontent.com/105279237/182950882-3570829b-5f36-4cf0-9872-ad220b937273.gif) | 
 
 <br><br>
 
 ### Veterinarians
 
 | Veterinarian Login | Update Medical Records | Vet Scan Animal |
 |------| ---------| ----- |
 |  ![VETLOGIN](https://user-images.githubusercontent.com/105279237/182952274-d306c652-43db-4967-943e-dd448dfea5dd.gif) |   ![CreateMedicalRecordGIF](https://user-images.githubusercontent.com/105279237/182952285-609de54e-0002-458c-951f-ba0d47186f89.gif) | ![VetScan](https://user-images.githubusercontent.com/105279237/182952761-98ae4b50-2614-425f-aa36-db0fe9b52d81.gif) |
 
### Admins
 
|  Admin's Panel |
|---|
| ![AdminPanelPNG](https://user-images.githubusercontent.com/105279237/182946884-34de4ed4-e246-4ac6-821d-5f78048dc69f.PNG)  |

 | Admin's Map | Admin's User Age Groups Chart |
 |----|-----|
 | ![AdminMaps](https://user-images.githubusercontent.com/105279237/182947062-0e5559b5-237b-44f3-bc8d-ec21c4190a2c.gif) |  ![userAges](https://user-images.githubusercontent.com/105279237/182947218-45a356e9-988c-44f2-a1c1-978f3f469cf6.gif) |
 
<br>

 ### Hardware
 
|Diagram displaying how the hardware will work in a real farm|
|-----|
|  ![HQDiagram](https://user-images.githubusercontent.com/105279237/183056504-f1d13650-e17f-43c4-8d5b-91eec3e94bb4.gif) |

<br>

|  NodeMCU Amica  | HC-SR04 Ultrasonic Distance Sensor |
|---|---|
|  ![NodeMCU](https://user-images.githubusercontent.com/105279237/182941237-954f452b-7927-4b92-8788-5e433f074f33.jpg) | ![Sensor](https://user-images.githubusercontent.com/105279237/182941257-33a3b2b1-2793-4e2d-acdf-9ebd5ccd3a77.jpg) |


<div>


<br><br>


![title6 id="run"](https://user-images.githubusercontent.com/105279237/183058162-0900b104-ceb9-47ee-84d4-65e81eb1250f.svg)


> This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
* pip 
   ```sh
  curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
  ```
    ```sh
  python get-pip.py
  ```

* Expo CLI
    ```sh
  npm install --global expo-cli
  ```
* or Expo GO app 
 
* [Arduino IDE](https://www.arduino.cc/en/software)
* Get farm password and farm ID From Admin for Arduino Setup.
 
### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._
 
1. Clone the repo
   ```sh
   git clone https://github.com/Ali-Olliek/CowPanion
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Install PIP package manage for Python
    ```sh
   pip install django
   ```
4. To launch the backend run: 
     ```sh
   python manage.py runserver
   ```
5. To launch the app run:
    ```sh
   expo start
   ```
