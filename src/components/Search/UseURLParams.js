import Filters from "./Filters";
import Search from "./search";

const UseUrlParams = (props) => {
  console.log(props.tests);
  return (
    <div>
      {props.tests === undefined ? (
        "loading"
      ) : (
        <Search {...props.tests}></Search>
      )}
      {/* <Filters></Filters> */}
    </div>
  );
};

export default UseUrlParams;
