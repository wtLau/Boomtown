import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const style = {
  height: 700,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const SignUp = ({ signUpUser }) => {
  return (
    <form onSubmit={signUpUser}>
      <Paper style={style} zDepth={5} >
        <div>
          <div>
            <h4>No Account With this Email</h4>
            <p>The email you provided is not registered. Would you like to use it to join and start sharing with everyone?</p>
          </div>
          <TextField
            hintText="Your name"
            errorText="This field is required."
            floatingLabelText="Your name"
          />
          <TextField
            hintText="Tell us about yourself!"
            errorText="This field is required."
            floatingLabelText="Tell us about yourself!"
            multiLine={'true'}
            rows={4}
          />
          <button type="submit"> click click</button>
        </div>
      </Paper >
    </form>
  );
};
export default SignUp;
