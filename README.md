# Instructions on how to run the app

## Install dependencies(only for the first time)

- `npm run install` - install all dependencies needed to run the app. **Make sure you are in the root app directory.**

## Run client & server

- `npm run start:client` - to run client App
- `npm run start:server` - to run server

## Run tests

- `npm run test` - runs tests

# Explanation of the technologies I am using in the project

## View layer

- **ReactJS** - I've chosen to build the app with the ReactJS framework because this is the frontend framework I know best and I feel the most comfortable with it. I helped myself using the [CRA](https://reactjs.org/docs/create-a-new-react-app.html) boilerplate. I've chosen CRA biollerplate with JS, and redux because I found it as a best option to finish the task on time. Thanks to CRA I could save much time and forget about creating the `webpack` server and configure `babel` to use ES6.
- **Material UI** - I was thinking about choosing the right design system and I decided to choose Material UI because I am using it in my current job's project. To be honest using that in such a small project is a bit an overkill because I am not taking much adventage from it but still it for example helps me to display an error in Forms in an easy way.
- **React router** - I wanted to use the routing tool in my project to allow someone to open specific component(weather forecast or add/remove stations) typing the url. I've chosen this one because I am using it a lot in my projects and I didn't find any better one. There is also not needed to look for other tools in rather small app. It totally fits my needs.
- **Prop types** - This allows me to define what prop type is expected in the component. I am not using TypeScript here so I wanted to write more safe JS components.
- **Axios** - With Axios I can easily write an API requests. It is easy to use it and it has a great documentation.

## Store layer

- **Redux(react-redux)** - I had to manage app state somehow and I decided to go in a redux approach. I am using react-redux for that because I've found it as the easiest way to achieve that. Some time ago react-redux released their hooks so using it is even more simple. I can get the state from every component using just one hook.
- **Redux logger** - This thing only runs in the `development` environment. It displays the app state on every action. It shows me the state before and after the action. I can see the action payload as well.

## Testing

- testing-library/\* - CRA also provides me the testing set so I dont need to implement for example Jest to make testing works. I can make the unit tests and snaphot tests using it.

## Linting and formatting

- **Eslint** - I am using it to analyze my code and inform me on every errors. It also helps me stick to the rules I attached.
- **Prettier** - It formats the code for me on save file.

## Server

**Why I implemented the server?**
I wanted to display the map layer from the openweather API. The only one endpoint there with free API key access is the [Weather Maps 1.0](https://openweathermap.org/api/weathermaps). However it throwed me the CORS error. I tried a few solutions spending a few hours on that but nothing worked. Probably the reason of the error is that the client(browser) makes the request with `options` header attached. `Options` header is not allowed by openweather server so it throws the CORS error. The only one solution which comed to my mind was to just create the server and use it as some kind of proxy to avoid sending the `options` header.

- **Express** - Express allows me to manage my routes and request/response in an easy way using NodeJS.

# Describe what steps you would take to:

## to test the application

- I have already added some simple unit and snapshot tests. I covered only some components to show that I know how to do that. Other components(which are not covered by tests at the moment) can be tested in the similar way.

- I would also add e2e tests to make sure everything is working as expected. Maybe future changes can add unexpected changes and with e2e tests we can detect that quickly. I would use Jest and puppeteer to make it works.

- I would also add tests as a pipeline step while building the app in an environment to immidiently see if something goes wrong there.

## to make sure the application is fast (performant)

- I would refactor the code and make sure that there is no additional re-renderings of the component. Maybe I'd have to use `useMemo()` or `useCallback()` hook.
- For sure I would virtualize the list of the stations. When it gets bigger it can take a while to fetch all items at once.

## to ensure it is easy to maintain and easy to extend in the future

I would definitely make components more reusable. For example I have headers displayed in many places so I can make reusable component for that. This allows me to make changes only in one place and it will affect many places in the app.

To share the logic I'd use react hooks. For example I can have a hook called `useForm()` which can have logic to handle forms. Currently I have only two forms in the app so there was no need to make it unified.

I can also refactor action creators because some of them at some point are super similar. I could extract that functions to utils and reuse them when next reducer will be needed.

Maybe it is also a good idea to implement here the [storybook](https://storybook.js.org/) tool(or something similar) to have the documentation of the components.

## to deploy the application

I would probably go with [heroku](https://www.heroku.com/).

In the next step I will integrate it with for example [CircleCI](https://circleci.com/) to create the pipeline and to automate the process of installings deps, run tests and start the app.

Next, we will make sure that the master GiHub branch is protected by ensuring that pull requests cannot be merged unless the build passes. To achieve that some actions in the Github settings repo page are needed to be taken.

For the server part I would probably create the [EC2 instance on AWS](https://aws.amazon.com/ec2/).

To sum up, at the end of the day I would like to have an autmate deploy(from the master branch) once the pipeline passes the tests or whatever steps I would put there.

<hr>

## Contact ☎️

email: p.stanecki93@gmail.com<br>
LinkeidIn: [Pawel Stanecki](https://www.linkedin.com/in/pawel-stanecki/?locale=en_US)
