# Gousto Front-End test

#### Author: Igo Lapa

#### Tools used
* React
* Redux
* Storybook (for the UI prototype in the beginning)
* Custom webpack config followed by CRA (create react app)
* Used CSS Modules when necessary + Bulma for UI prototype


### Comments during the development
* From all the functional requirements one of them I wasn't able to achieve which was to apply the redux router. Instead of starting the prototype by setting the categories via Router and let the route take care of submission of the actions, I've created a CategoryLink component which dispatch an event to Redux to select the category - which would be possible with more work (probably over engineering) to push the states and listen to route changes;
* From the non-function requirements, I sadly didn't do all the functional testings (didn't test store for example and the commits), just with the basics with snapshot;
* Browser support
    * IE11 working;
* While testing in IE11 noticed one issue with the Input filter, basically if you select a category and you type in the input and no keyword is fine it doesn't filter completely - ideally we would show empty values;

### How to run
* `yarn start` - will run the dev build
* `yarn test` - will run tests
* `yarn storybook` - will run storybook
* `yarn build` - will build the application