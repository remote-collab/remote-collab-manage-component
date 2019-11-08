[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# Remote Collaboration Manage Web Component

The Remote Collaboration Manage Component allows you to administrate your remote session.

## Installation

### Preconditions

* [npm](https://nodejs.org/en/download/) needs to be installed on the local machine.
* Install Vue CLI ``npm i @vue/cli``

# Web component definition  

The custom html tag is:
```
  <remote-collab-manage-component></remote-collab-manage-component>
```

### Parameters: 

* `username` (optional)<br>
  Should be passed from the application.

* `show_button` (optional)<br> 
  Switch to hide and show the open dialog button. If set to false, than the dialog must be opened by API call (remoteCollab.openAdminDialog()). The default is "true".

* `backendurl` (optional)<br> 
  Per default set to localhost:5000 for local testing. Must be set if you are in a server environment.


### External API 
You can trigger the Open modal dialog via external API. 
```
remoteCollabAdmin.openDialog();
```


### Example: 
```
<remote-collab-manage-component username="JoeDoe" show_button="true" show_debug="true"></remote-collab-manage-component>
```
