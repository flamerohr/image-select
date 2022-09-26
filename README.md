# Image PoC Select App

To get started, run:

```sh
  npm install
  npm run start
```

things start with `src/index.js` and the main feature is in `src/features/gallery/Gallery.js`

## Outline of project

Technologies used for project:

- Create React App
- Redux Toolkit with RTKQuery
- CSS modules for styles

## Code structure

I keep simple shareable/common components contained in a `components` folder.

The `features` folder contains more complex components are other functions, I explore moving 
functiosn and libraries out of the `features` folder depending on the size of the project.  
Features can contain child components, which are built specific to that feature, I normally 
start building there and then shift components out of that folder when I find that I can 
make it more for generic consumption.

If there were shareable hooks/helpers for computation, I would created the respective `hooks`/`helpers` folders.

## Things to do

- Image loading is a bit janky and delayed when navigating the list of images.
- Image could be zoomable/translatable later for easier inspecting the image.
- I hadn't built this project in typescript, as it would take a lot more time, but a gist is 
I would keep interfaces and types in separate files like I have done with components.
- There are missing "loading" UI I could add to when images/faces are loading.
- Figma showed a right click menu, which would've been simple to implement if I put in a bit 
more time.
- Add a better mock setup for async testing
