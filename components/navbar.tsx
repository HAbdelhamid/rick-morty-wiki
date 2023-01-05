import React from "react";
import styled from "styled-components";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 1.6em 1em;
//   background: #575d90;
// `;
