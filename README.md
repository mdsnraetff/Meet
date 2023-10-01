# Meet App 

## About
A serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## Dependencies

- React
- Jest
- React Testing Library
- Puppeteer

- Runs using "npm run start"

## Features

### Filter Events by City
- As a user, I would like to be able to filter events by city, so that I can see events that take place in a certain city.
- ***Given*** the user has opened the app, ***when*** the user searches for a city, ***then*** the events taking place in that city are displayed.
### Show/Hide Event Details
- As a user, I would like to expand or hide additional details about an event so that I can see more or less about the event I choose.
- ***Given*** the user has searched a city, ***when*** the user selects event details, ***then*** details for that even will appear.
### Specify Number of Events
- As a user, I would like to be able to specify the number of events that are shown in the app so I can see fewer all at once.
- ***Given*** the user is viewing a list of events, ***when*** specifying a number of events to view, ***then*** only that number of events will be shown.
### Use the App When Offline
- As a user, I would like to be able to use the app offline, so that I can see my previous results wherever I am.
- ***Given*** the user has used the app previously, ***when*** the user loses internet connection, ***then*** they can view previously loaded results.
### Add an App Shortcut to the Home Screen
- As a user, I would like a shortcut to the app on the homescreen of my device so that I may access the app more quickly.
- ***Given*** the user enjoys the app, ***when*** they download it onto their device, ***then*** a shortcut will appear on their homescreen.
### Display Charts Visualizing Event Details
- As a user, I would like to see a chart that lists the upcoming events in each city so that I know which events are organized in each city.
- ***Given*** the user is viewing an even, ***when*** an option to view more events in each city is clicked, ***then*** an organized chart will appear for the user to view.
