// CODE TO BE RUN IN ARDUINO IDE or DOWNLOAD VSCODE'S ARDUINO EXTENSION
// SELECT ESP8266 BOARDS
// SELECT NODEMCU 1.0 (ESP-12 MODULE)


#include <WiFiClient.h> 
#include <ESP8266WebServer.h>
#include <ESP8266HTTPClient.h>

const char *ssid = "tenda4";  //ENTER YOUR WIFI ssid
const char *password = "Moh@oll@3#";  //ENTER YOUR WIFI password

const int trigPin = D5; // Define the TrigPin (Sensor Pin) connected to D5 (Arduino Pin)
const int echoPin = D6; // Define the EchoPin (Sensor Pin) connected to D6 (Arduino Pin)

long duration; // Duration to measure the time it took for the sensor to return a signal
int distance; // Distance Calculated by Centimeters = ((Microseconds / 2) / 29)

void setup() {
connectWifi();

pinMode(trigPin, OUTPUT); // Assign TrigPin as Output
pinMode(echoPin, INPUT); // Assign EchoPin as Input
}


void loop() {
SendSensorData(); // Loop the SendSensorData Endlessly
}

//function to connect to wifi
void connectWifi(){
  delay(1000);
  Serial.begin(115200);
  WiFi.mode(WIFI_OFF);        //Prevents reconnection issue (taking too long to connect)
  delay(1000);
  WiFi.mode(WIFI_STA);        //This line hides the viewing of ESP as wifi hotspot
  WiFi.begin(ssid, password);     //Connect to your WiFi router
  Serial.println("");
  Serial.print("Connecting");
  // Wait for connection
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  //If connection successful show IP address in serial monitor 
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());  //IP address assigned to your ESP
}


//function to send sensor data 
void SendSensorData() {
  WiFiClient clientt; 
  HTTPClient http; //Declare object of class HTTPClient

  digitalWrite(trigPin, LOW); // reset trigPin for 5 microseconds
  delayMicroseconds(5);

  digitalWrite(trigPin, HIGH); // Activate trigPin for 10 microseconds
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW); // Deactivate after 10 microseconds

  duration = pulseIn(echoPin, HIGH); // get the duration from EchoPin

  distance = duration*0.034/2; // Convert to CM

  Serial.print("Distance: ");
  Serial.println(distance);
  
  //Post Data

  String data = "distance="+ String(distance);

  http.begin(clientt, "http://192.168.1.6:8000/api/v1/updateSensor/");     //change ip to your device's ip address
  http.addHeader("Content-Type", "application/x-www-form-urlencoded");    //Specify content-type header

  int httpCode = http.POST(data);   //Send the request
 
  Serial.println(httpCode);   //Print HTTP return code
 
  http.end();  //Close connection

  delay(8.64e+7); // Post Data One Per Day -- Tweak As You Like
}