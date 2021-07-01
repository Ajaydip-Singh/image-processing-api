# Image Processing API

This is a simple image processing api to resize **jpeg** images on the go and place them on frontend of projects (via URL parameters) for rapid prototyping. 
The api supports resizing images with only the "cover" option for cropping.

## Getting started

### Using the API

1. Clone the repo.
2. Move into the project directory.
3. Run `npm install` to install all project dependencies.
4. Run `npm start` to start the server (by default runs on localhost:3000).
5. Once the server is started, drop image you wish to resize in the `assets/full` directory (make sure the image is a jpeg).
6. Next, head on to `localhost:3000` on your browser and go to the `localhost:3000/api/resize-image?filename=value&width=value&height=value` endpoint and
replace *value* with your preferences (note that the filename parameter's value should not include the extension). 

### Running Tests

Simply run the test script: `npm run test` which compiles the typescript code and runs jasmine for testing.

### Dev environment

This project requires no environment variables or any secret keys as it is designed to be run locally. If you want to contribute
then you can run the dev server with the script `npm run dev`. Please make sure to run prettier and eslint before making any
commits using `npm run prettier` and `npm run lint` respectively.





