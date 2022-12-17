import { Form, FormField, TextInput, Box, Button } from "grommet";
import { useState } from "react";

const CreateTest = () => {
  const [value, setValue] = useState({});

  return (
    <div>
      <h1>Create Test</h1>

      <Form
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={({ value }) => {}}
      >
        <FormField
          name="name"
          htmlFor="text-input-id"
          label="Organization Name"
        >
          <TextInput id="text-input-id" name="Org_Name" />
        </FormField>
        <FormField name="name" htmlFor="text-input-id" label="Year">
          <TextInput id="text-input-id" name="Year" />
        </FormField>
        <FormField name="name" htmlFor="text-input-id" label="Level">
          <TextInput id="text-input-id" name="level" />
        </FormField>
        <FormField name="name" htmlFor="text-input-id" label="Name">
          <TextInput id="text-input-id" name="name" />
        </FormField>
        <Box direction="row" gap="medium">
          <Button type="submit" primary label="Submit" />
          <Button type="reset" label="Reset" />
        </Box>

        <Box> Create Moves</Box>
        <Box> Create Links</Box>
        <Box> Link Files </Box>
      </Form>
    </div>
  );
};
export default CreateTest;
