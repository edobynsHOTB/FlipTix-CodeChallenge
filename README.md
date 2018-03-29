#Getting started with the Eventz App
##Clone the repo
##cd into the directory 
##run 'yarn install' to install the depencies

#Requirements
##It is best to have Yarn installed
##To run the app in development on your phone, install the Expo app and scan the barcode when starting up the app.

# Code Challenge

## Instructions

This challenge will be a take home assignment.

At this time you should have been granted git access to this repository and may begin working. Please create a new branch and commit all code to this repository.

You will be required to create a small React Native application. The purpose of the app is to connect to a private api; authenticate a user via username & password; fetch and display all upcoming events; and provide a qr code for each event. 

This app should include a minimum of 3 pages or modals. 
- Login Page<br>
    - The login page should include a username text field, a password text field, and a login button. Upon successful authentication the user should be taken to the Event List page.
- Event List Page<br>
    - The event list page should display a list of all events provided via the `/events` endpoint. For each event cell please display the following:<br> 
        - Event Name
        - Venue Name 
        - Event Image
        - Event start date and time (Please use the following date format: MMM dd, YYYY - HH:mm tt)
    - The event page should also include a log out button that uses the `/logout` endpoint and returns the user to the login page after successfully logging out.
    - When an event cell is clicked the user should be taken to the Event Details page.
- Event Details Page (To display the qr code)<br>
    - The event details page should display a generated qr code containing the `value` received from the `/events` endpoint. 
    - The event details page should also include a back button to return to the Event List page.

Upon completion of this assignment please make sure all code has been uploaded to this git repository and please send an email to edobyns@hotbsoftware.com

If you have any trouble connecting to the private api or have any questions at all please feel free to reach out to edobyns@hotbsoftware.com

Thanks and have a great day!
<br><br>

# API Information

## API Endpoints

Please use the following REST api endpoints:

http://18.144.44.44:5000/api/v1/login<br>
```
Request Body:
{
    "username": "",
    "password": ""
}
```
http://18.144.44.44:5000/api/v1/logout<br>
```
Request Body:
N/A
```
http://18.144.44.44:5000/api/v1/events
```
Request Body:
N/A
```

## API Key
In order to access the private api please use the following api key. The key should be provided as a header with every api request that is made to the server:

```
api-key: hotbsoftware123456
```

## User Credentials
Please use the following credentials to log in:
```
username: jSchuster
password: hotb123
```
