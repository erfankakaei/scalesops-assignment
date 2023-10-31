import { CardHeader, CardTitle, Input } from "reactstrap";
// *** Icons
import { Search as SearchIcon } from "../../icons/index";
// *** Styles
import styles from "./styles/Search.module.scss";

const Search = ({ searchPhrase, setSearchPhrase }) => (
  <CardHeader className={"d-flex align-items-center gap-1"}>
    <SearchIcon />
    <CardTitle className={`${styles["search-title"]} m-0`}>
      Search by title:
    </CardTitle>
    <Input
      placeholder={"Search"}
      value={searchPhrase}
      onChange={(e) => setSearchPhrase(e.target.value)}
    />
  </CardHeader>
);

export default Search;
