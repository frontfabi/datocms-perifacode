import React from "react"
import { Logo } from "../logo"
import { Navigation } from "../."
import { Anchor } from "../."
import StyledHeader from "./Header.style"

import { AnchorProps } from "../."

export type NavProps = {
  siteTitle?: string
  navList: AnchorProps[]
}

export const Header:React.FC<NavProps> = ({ siteTitle, navList }) => {
  return (
    <StyledHeader>
      <h1 className="logo">
        <Logo alt={`Logo ${siteTitle}`} />
      </h1>

      <Navigation className="menu-list" navList={navList} />
    </StyledHeader>
  )
}
