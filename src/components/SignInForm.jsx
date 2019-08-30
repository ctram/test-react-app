import React from 'react';

import '../styles/Global.css';
import '../styles/SignInForm.css';

function App() {
  return (
    <div className="Sign-In-Form">
      <h1 className="text-center">Sign In Form</h1>
      <form action="/somewhere" method="post">
        <fieldset className="column-fields">
          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>
            <input id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>
            <input id="password" name="password" type="password" />
          </div>

          <div className="form-group">
            <label htmlFor="monster-select">
              Choose Monster:
            </label>

            <select id="monster-select">
              <option value="vampire">
                Vampire
              </option>
              <option value="werewolf">
                Werewolf
              </option>
            </select>
          </div>

          <div className="form-group">
            <legend>Choose Name:</legend>

            <div className="radio-group">
              <div className="radio-option">
                <input type="radio" id="radio-tom" name="name" value="tom" selected />
                <label htmlFor="radio-tom">
                  Tom
                </label>
              </div>

              <div className="radio-option">
                <input type="radio" id="radio-brad" name="name" value="brad" />
                <label htmlFor="radio-brad">
                  Brad
                </label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <button type="submit">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
