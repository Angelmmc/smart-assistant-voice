# smart-assistant-voice

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/Angelmmc/smart-assistant-voice.svg)](https://github.com/Angelmmc/smart-assistant-voice/stargazers)
[![GitHub Issues](https://img.shields.io/github/issues/Angelmmc/smart-assistant-voice.svg)](https://github.com/Angelmmc/smart-assistant-voice/issues)

## About 
This project is an Alexa-like voice assistant designed to interact with and control smart home devices using the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API). It allows users to issue voice commands to perform various tasks within a simulated smart house environment, such as turning lights on or off, opening or closing the curtains, locking doors, or controlling appliances. The system integrates speech recognition and natural language processingto provide a seamless and responsive user experience.

##  Getting Started

###  Installation

1. Clone the repository
```bash
git clone https://github.com/Angelmmc/smart-assistant-voice.git
```
2. Navigate to the project folder
```bash
cd smart-assistant-voice
```
3. Run the index.html file
   
## Usage

> **Note:** Every command on this app only works in spanish.

1.  The page will ask you for a pin to log in, the pin is 1234 so say something like "Mi pin es 1234".
2.  Once the pin is correct, you'll be redirected to the main page where the microphone is constantly listening.
3.  There is a predefined list of actions you can perform with the assistant. To ensure the system recognizes your commands accurately, you must say them exactly as they are written. Additionally, start each command by saying the activation word "nugget", similar to how Alexa uses a wake word. For example:
*"Nugget desactiva la alarma de la casa"*
5.  When you correcly spell an action, it will appear on top of the page to confirm it was executed.
6.  To Validate the action visit the smar-assistant-monitoring repository on the related section.

## Screenshot

<img src="https://github.com/Angelmmc/smart-assistant-voice/blob/main/assets/img/main_page.png" alt="App Screen" width="500"/>

## License
Distributed under the MIT License. See LICENSE for more information.

## Related

Check out the related repositories for my smart assistant project.

[![iot-car-webapp](https://img.shields.io/badge/smart_assistant-monitoring-f55288?logo=github)](https://github.com/Angelmmc/smart-assistant-monitoring)

