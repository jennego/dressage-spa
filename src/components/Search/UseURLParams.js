import Filters from "./Filters";
import Search from "./search";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";

const UseUrlParams = (props) => {
  const history = useHistory();
  const location = useLocation();

  const { search } = useLocation();
  const { query } = queryString.parse(search);
  const { current } = queryString.parse(search);

  console.log(query, current);
  console.log(props.tests);

  let tests = props.tests;
  return (
    <div>
      {props.tests === undefined ? "loading" : <Search {...tests}></Search>}
      {/* <Filters></Filters> */}
    </div>
  );
};

export default UseUrlParams;
