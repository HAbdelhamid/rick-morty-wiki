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
  li:hover {
    background-color: white;
    color: black;
  }
`;
