# Building a GIF search engine :

Part 1 : Building a GIF Search Engine
Part 2 : Refactoring with Redux 
Part 3 : Routing and Auth
Part 4 : Firebase

Why React 
A lot of people are excited about react, Facebook new JAVASCRIPT Framework.
Big companies, among them Netflix, Yahoo...
are making React a critical part of their stack, and it seems like more and more developers are singing its praises.

## The fundamentals of React :
To understand React, you need to think in terms of self-contained components. A component is a module that contains all of the HTML and JS it needs.

The app we are going to create takes text input from a search field and returns a list of individual gifs. this can be broken down into four seperate React components.

{ App : {
            {Search bar : inputText}
            {Gif List : {Gif Item : Image}}

        }

}

Adding it to our render method as a self losing component.
(Please note that <SearchBar> alone is not valid JSX; if the component does not have a body, it is important to add /> to close the tag)
Lets refactor this code to be more interactive. we need to create an input field in our SearchBar component and be able to track what term we are searching for in our main app component so that we can use it to search the Gipy API

## Constructor()
We added a constructor() method at the top of the class. Similar to what you might find in other OOP languages, the constructor runs automatically when the class is initialized. calling super() within that method lets us access this.state within the constructor. since our class is a subclaass of React.Component.
We are aleady extending react.Component when initializing our SearchBar class, but if we want access to React's this.state in the constuctor, we need to make sur that our class is inheriting whatever properties are inside of the constructor of the parent. ReactComponent

### onChange( )
Every time we update our input, React's onchange property automatically fires.
you probably notices the odd-looking  syntax within the curly braces.
#### A fat arrow function like this
e => this.onInputChange(e.target.value)

is equivalent to the following code :
function(event){
    this.onInputChange(event.target.value);
}

### onInputChange() methode
we now know that our onInputChange() methode will be fired every time the input is changed. you might be wondering, however, why we are calling this.setstate instead of setting the term directly on this.state, as we did in the constructor.
### this.props.onTermChange(term):
we need a way to pass data from a child component(SearchBar) to its parent (App), and in React, we can do that through props -- data or callbacks passed from a parent component to see how we can do that, let's take a look at the code we added in index.js

We are already extending React.Component when initializing our SearchBar class, but if we want access to Reacts {This.state} in the constructor, we need to make sure that our class is inheriting whatever properties are inside of the constructor of the parent ReactComponent.

### ClassName instead of class :

why are we using className instead of class here? Remember that we are writing JSX, not HTML. class is a reserved keyword in JAVASCRIP, so we must use className instrad to set HTML classes. 
(The same thing is true about for : if you HTML element requires for, you should use HTMLFOR instead.)

### onChange Property automatically fires. 
You probably noticed the odd-loking syntax within the curly braces. This new ES2015 feature is known as fat-arrow functions; they are a stripped down way of writing functions, similar to what you might fing in coffeecript.

### SearchBar/>
we are setting a new property called onTermChange. Whenever we set a property on a child component in this way. 
it becomes available within that child component via this.props. In this example we are using the onTermchange property to pass the HandleTermChange().


##### Understand what is actually happening, step-by-step, 
from the time we open the app in our browser : 
    1. Our App component renders ours SearchBar component with a prop of OntermChange, passing in its Own handleTermChange method as an argument.
    2. Our SearchBar calls its constructor() method upon initialization. It creates a new state object and sets the term propery to an empty string.
    3. The user enters some text in the input field 
    4. Every time the user enters / deletes a character, React calls the onChange method on the input, automatically passing in an event obect as an argument. within its callback, we call our SearchBar class's OnInputChange class method, passing through the event Object.
    5. The SearchBar's onInputChange method calls this.setstate to update the state's term property. it also calls the App components handleTermChange method, which iis passed through the onTermChange prop.

## State, nesting components, and stateless function components
## Giflist 
There are two different components we will need to build here:  GifList that maps through the array of gifs we will receive from the giphy API a GifItem to actually render the individual gifs.

Before we actually worry about calling the Giphy API, let's mock up some fake data to pass to our components, In index.js, add a constructor function and initialize the state with an array of gifts. don't forget to call super() so that we actually have access to this.state

## AJAX and APIs
while there are a lot of ways to make HTTP requests within the node.js ecosystem,
a library called SuperAgent is one of the best documented and easiste to use.
Run $ npm install --save superagent to pull into your project.

back it into our project. 

### Request our gifs from url 
After importing SuperAgent's request object, we want to make our 
API call within our handleTermChange method, since that's receiving 
the term from our SearchBar.

we are setting a const named url with all three things we said we neede to make an API call. Notice the $[term] in the middle of that 
string; this is yet anather bit of ES2015. Adding ${} to a string allows us to cancatenate a varaible.$
but in order to use this syntax, you must wrap the string in backticks '' instead of single or double quotation marks.


### Making it all look good --- CSS and Webpack

If you ready unpacking webpack, you should already be somewhat familiar with handling css in webpack.
we are able to import our css directly into our javascript, and best of all, create react app handles all of the configuration for us.

include belpw is styling we wil be using. if you are at all familiar with css, there shouldn't be naything too confusing here:

### Adding a model with a third-party package : 

One of the great things about the modularity of React components is how easy it is to plig and play third party packages.
while we could go through the trouble of writing our modal from scratch. we are instead going to pull in react modal and let it handle most
of the heavy lifting for us.

To pull the package into our project run 
$ npm install --save react-modal
