import React from "react";
import ReactDOM from "react-dom";
import suggestedFriends from "../src/data.js";

import "./styles.css";

function App() {
    return (
        <div className="App">
            <h1>Turn our Pseudocode into… JSX</h1>
            <p>add the JSX elements described in these pseudocode comments</p>
            <br />
            <main>
                <h2>People You May Know</h2>
                {/* don't worry about how this map function works quite yet...
          we will learn how this works in a few more lessons! */}
                {suggestedFriends.map(friend => (
                    <div className="card">
                        {/* add a self closing img element with:
              - "picture" as the value for the className attribute
              - the friend.picture variable as the value for the src attribute
              - "user profile" as the value for the alt attribute
              */}
                        {/* add an opening div tag with:
              - "card-text" as the value for the className attribute
              */}
                        {/* add an h5 element with:
              - "username" as the value for the className attribute
              - a JSX expression with the variable friend.name between 
              - the h5 tags, and don't forget to use curly braces between it!
              */}
                        {/* add a span element with:
              - "mutual-friends" as the value for the className attribute
              - a JSX expression with `{friend.mutualFriendCount} mutual 
              - friends` between the span tags
              */}
                        {/* add an opening div tag with:
              - "card-actions" as the value for the className attribute
              */}
                        {/* add a button element with:
                - "primary" as the value for the className attribute
                - the text `Add Friend` between the button tags
                */}
                        {/* add a button element with:
                - the text `Remove` between the button tags
                */}
                        {/* add a closing div tag */}
                        {/* add a closing div tag */}
                    </div>
                ))}
            </main>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
