import { Box, Button } from "grommet";
import { Refresh } from "grommet-icons";

const refresh = () => {
  window.location.reload();
};

const ErrorMessage = () => {
  return (
    <Box background="status-error" pad="small">
      Opps! There has been an error in fetching data from the server.
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
