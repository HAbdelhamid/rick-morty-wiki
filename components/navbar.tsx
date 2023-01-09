import React from "react";
import styled from "styled-components";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <ListItem>
            <Link href="/">
              <strong>Home</strong>
            </Link>
          </ListItem>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

const ListItem = styled.li`
  padding: 0.5em;
  :hover {
    border-radius: 16px;
    background-color: white;
    color: black;
  }
`;
