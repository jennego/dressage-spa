import { Box, Button, Heading, Paragraph } from "grommet";
import { Refresh } from "grommet-icons";

const refresh = () => {
  window.location.reload();
};

const ErrorMessage = () => {
  return (
    <Box background="status-error" pad="small">
      <Heading textAlign="center" level="3" fill={true}>
        Opps! There has been an error in fetching data from the server.
      </Heading>
      <div className="d-flex justify-content-center">
        <Button
          icon={<Refresh />}
          onClick={refresh}
          label="refresh"
          color="brand"
          primary
        ></Button>
      </div>
    </Box>
  );
};

export default ErrorMessage;
