# Temperature Control App

This is a simple React application that allows you to control and display the temperature. You can increase or decrease the temperature using the provided buttons, and the temperature value is displayed dynamically. The temperature color changes based on the set threshold values.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:

   ```shell
   npm install
   ```

## Usage

1. Start the application by running the following command:

   ```shell
   npm start
   ```

2. Open your browser and visit `http://localhost:3000` to view the app.

## Features

- Temperature Display: The current temperature is displayed dynamically in a temperature display container. The temperature value is initially set to 60.
- Temperature Color Change: The temperature display color changes based on the set threshold values. Temperatures below 65 degrees are displayed as "cold," and temperatures 65 degrees and above are displayed as "hot."
- Increase and Decrease Buttons: You can increase or decrease the temperature by clicking the "+" and "-" buttons, respectively. The temperature value will update accordingly.

## Components

The following components are used in the application:

- **App**

## Dependencies

The application utilizes the following dependencies:

- **React**
- **useState**

## Customization

Feel free to customize the code according to your preferences. You can modify the temperature range, threshold values, styling, and add additional features as needed.