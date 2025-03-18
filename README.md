# Ultimate Dictionary App

A modern dictionary web application built with HTML, CSS, and JavaScript, using the Tailwind CSS framework.

## Features

- Word search functionality powered by the Dictionary API by API Ninjas
- Responsive design that works on both mobile and desktop
- Clean, modern UI with custom color scheme
- About and Contact pages
- Modular code structure with separate JS and CSS files

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- Dictionary API by API Ninjas

## Setup

1. Clone this repository
2. Create a `config/apikey.js` file with your API credentials:

```javascript
// config/apikey.js
const API_CONFIG = {
  RAPID_API_KEY: "your-rapidapi-key",
  RAPID_API_HOST: "dictionary-by-api-ninjas.p.rapidapi.com",
};

export default API_CONFIG;
```

3. Open the project directory
4. Open `index.html` in your browser or use a local server

## API Configuration

This application uses the Dictionary API by API Ninjas via RapidAPI. You'll need to:

1. Sign up for a RapidAPI account
2. Subscribe to the Dictionary API by API Ninjas
3. Get your API key
4. Create the `config/apikey.js` file as shown above

## GitHub Pages Deployment

To deploy this application on GitHub Pages:

1. Push your code to a GitHub repository (the apikey.js file will be ignored due to .gitignore)
2. Go to your repository settings
3. Navigate to the Pages section
4. Select the branch you want to deploy from (usually main)
5. Click Save

**Note:** Since GitHub Pages doesn't support ES6 modules directly without a build step, you may need to modify the code to use global variables instead of import/export statements for the API key configuration.

## License

This project is open source and available under the [MIT License](LICENSE).
