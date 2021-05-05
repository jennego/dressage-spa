import React from "react";
import { TextInput, Button, Form, FormField, Box } from "grommet";

const Login = () => {
  const [value, setValue] = React.useState({});

  return (
    <div className="col-12 col-md-8 mx-auto fill-height">
      <Box pad="medium">
        <h2>Log In</h2>
        <Form
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
          onReset={() => setValue({})}
          onSubmit={({ value }) => {}}
        >
          <FormField name="email" htmlFor="text-input-id" label="Email">
            <TextInput id="text-input-id" name="email" />
          </FormField>
          <FormField name="password" htmlFor="text-input-id" label="Password">
            <TextInput id="text-input-id" name="password" type="password" />
          </FormField>
          <Box direction="row" gap="medium">
            <Button type="submit" primary label="Submit" />
            <Button type="reset" label="Reset" />
          </Box>
        </Form>
      </Box>
    </div>
  );
};

export default Login;
