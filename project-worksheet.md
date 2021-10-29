# Project Overview

## Project Links

- https://github.com/brian99na/project-2
- [add your deployment link]()

## Project Description

This project is focused around the use of a cryptocurrency API that allows people to calculate how much their investment would be worth from a certain date until now.
It will also feature another slide that compares their investment if they had chose to keep it as fiat currency.

## API

CoinGecko API. This API has options for current market data as well as the data shown below that allows for historical data to be retrieved.

```
GET: https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-03-2016&localization=false

{
"id": "bitcoin",
"symbol": "btc",
"name": "Bitcoin",
"image": {
	"thumb": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
	"small": "https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
	},
"market_data": {},
"community_data": {},
"developer_data": {},
"public_interest_stats": {
	"alexa_rank": 12489,
	"bing_matches": null
	}
}
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP EXAMPLE

- Find and use external api
- Render data on page
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components

##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component |                          Description                          |
| --------- | :-----------------------------------------------------------: |
| App       | This will make the initial data pull and include React Router |
| Header    |          This will render the header include the nav          |
| Footer    |          This will render the header include the nav          |

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component        | Priority | Estimated Time | Time Invetsted | Actual Time |
| ---------------- | :------: | :------------: | :------------: | :---------: |
| Adding Form      |    H     |      3hrs      |     3.5hrs     |   3.5hrs    |
| Working with API |    H     |      3hrs      |     2.5hrs     |   2.5hrs    |
| Total            |    H     |      6hrs      |      5hrs      |    5hrs     |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description. Code snippet should not be greater than 10 lines of code.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
