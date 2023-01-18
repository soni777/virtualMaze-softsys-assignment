import { Link } from "react-router-dom";

import TypingContext from "../../Context/TypingContext";

import {
  Logo,
  NavBar,
  UnorderedList,
  CustomButton,
  Timer,
} from "./styledComponents";

const Header = () => (
  <TypingContext.Consumer>
    {(value) => {
      const { duration } = value;
      return (
        <NavBar>
          <UnorderedList>
            <li>
              <Logo>TypingTest</Logo>
            </li>

            <li>
              <Link to="/">
                <CustomButton type="button">Start Test</CustomButton>
              </Link>
              Timer:
              <Timer> {duration} </Timer>
            </li>
          </UnorderedList>
        </NavBar>
      );
    }}
  </TypingContext.Consumer>
);

export default Header;
