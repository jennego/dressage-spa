import { Main, Button } from "grommet";
import { Link } from "react-router-dom";

const Page404 = ({ location }) => (
  <div className="main">
    <Main pad="medium">
      <h2>
        404 Error. Oops! Cannot find <code>{location.pathname}</code>.
      </h2>
      <p>That page doesn't exist.</p>

      <p>
        Perhaps you are looking for non-existent test or we moved your dressage
        letters. Sorry. Try again?
        <Button
          as={Link}
          label="Go Home"
          to="/"
          fill={false}
          style={{ width: "150px" }}
        ></Button>
      </p>
      <img
        src="https://assets.horsenation.com/wp-content/uploads/2013/01/259734891_73e29a0188_z.jpg"
        width="500px"
      />
      <p> Just like that move wasn't on that test...</p>
    </Main>
  </div>
);

export default Page404;
