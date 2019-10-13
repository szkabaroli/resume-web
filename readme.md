## Description

This is my online *CV* or *Résumé* :briefcase: :rocket:, implemented in [Vue.js](https://github.com/vuejs/vue) and [React.js](https://github.com/facebook/react)

### Development

*First things first clone the repo and install dependecies*

```bash
# Clone project
git clone https://github.com/PanJiaChen/vue-element-admin.git

# Install dependencies
npm install
```

*Then run the local dev server*

##### Vue

```bash
# Run local dev server
npm run start:vue
```

*Visit in browser: http://localhost:8080*

##### React

```bash
# Run local dev server
npm run start:react
```

Visit in browser: http://localhost:8081

### Distribution

##### Vue

```bash
# Build staged environment
npm run vue:build:dev

# Build production environment
npm run vue:build:prod
```

##### React

```bash
# Build staged environment
npm run react:build:dev

# Build production environment
npm run react:build:prod
```

## Directory structure

```
├── dist                                    // parcel buid dir
│	├── react
│	└── vue
├── src                                     // source code
│	├── shared                              // shared sources
│	├── assets                              // static resource like themes, fonts
│	├── vue                                 // vue app sources
│	│	├── components                      // single file components
│	│	├── App.vue                         // main component
│	│	├── index.js                        // entry javascript file
│	│	└── index.html                      // entry for the vue app
│	├── react                               // react app sources
│	│	├── components                      // components
│	│	├── App.jsx                         // main component
│	│	├── index.js                        // entry javascript file
│	│	└── index.html                      // entry for the react app
├── public                                  // public static assets like images
│	└── images                              // static images
├── .gitignore                              // gitignore
├── .gitattibutes                           // lfs filters
├── readme.md                               // this file
├── package.json                            // package.json
└── package-lock.json                       // package-lock.json
```