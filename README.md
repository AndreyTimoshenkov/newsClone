# Hacker News Clone App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

To run the app locally, follow these steps:

1. npm i (to install dependencies);
2. Turn on VPN to get data from the server;
3. npm run start (to start the development server);
4. Open [localhost](http://localhost:4200/);
5. Have fun!

The app clones Hacker News front page. The app's features include but are not limited to:

1. Each news item contains two links - to the news text itself and to the comment section.
2. Comments are displayed in a tree-like structure.
3. All the data is receieved with the use of the injectable get-data service.
4. Should you come across any error with the connection to the server, you will receive an alert that is created with the use of the error-alert service.
5. Comment section boasts a fancy 'back to results' button.
6. Pagination is available for the results feed.
7. Each step of data loading is covered by loader.

The app was created with the use of Taiga UI by Tinkoff team.
