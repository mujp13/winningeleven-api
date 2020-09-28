## Winningeleven

Winningeleven is a back-end server for Winningeleven, the frontend.

## Running the tests

To run front-end or back-end tests, simply run "npm t" in the terminal.

## API Overview

/api  
.  
├── /login  
│ └── POST  
├── /register  
│ └── POST  
├── /newteam  
| └── POST  
│  
├── /teams  
│ └── GET  
├── /teams/teamId  
├── /players  
│ └── GET  
└── /

## API Overview

## POST ### /login

Gets the following information from a user for sing-in

{  
 user_name: text,  
password: text  
}

## POST ### /register

Gets the following information from a user for sing-up

{  
 full_name: text,  
 user_name: text,  
password: text,  
nickname: text  
}

## POST ### /newteam

Gets the following information from a user

{  
 team_id: integer,  
player_id: integer  
}

## GET ### /teams

Returns team names created by users

{
team_name: text  
}

## GET ### /teams/teamId

Returns teams created by users

{
team_name: text,  
 full_name: text,  
 position: text  
}

## Screenshot

![koffeeblog screenshot](https://github.com/mujp13/koffee_blog_fs/blob/master/github_screenshot.PNG)

## Built With

Node - Run-time environment  
Express - Web application framework  
Postgres DB - Database  
Mocha - Testing  
Chai - Testing  
Javascript - Front-end development

## Authors

Keun Suk Park - Full-stack
