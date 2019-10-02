[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# Viper admin web component UI 

The frontend to create new collaboration rooms. 

## Installation 

### Preconditions

[npm](https://nodejs.org/en/download/) needs to be installed on the local machine.

### Install vue cli

Simply run ``npm i -g @vue/cli`` on the command line.

NOTE: If you're on a machine without admin permissions you might encounter issues when trying to install the vue cli globally.
If so try using ``npm i @vue/cli`` instead.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development (sample ui)
```
npm run serve
```

### Compiles and minifies for production (creates web component js library)
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Web component definition  

The custom html tag is: 
  <remote-collab-admin-component></remote-collab-admin-component>

### Parameters: 

- username (optional)
 Should be passed from the application. 

- show_button (optional) 
Switch to hide and show the open dialog button. If set to false, than the dialog must be opened by API call (remoteCollab.openAdminDialog()). The default is "true".

- backendurl (optional)
Per default set to localhost:5000 for local testing. Must be set if you are in a server environment.


### External API 
You can trigger the Open modal dialog vie external API. 
´´´remoteCollabAdmin.openDialog();´´´


### Example: 
 <remote-collab-admin-component username="qx443322" show_button="false"></remote-collab-admin-component>
