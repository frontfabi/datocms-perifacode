import React from "react"
import { Anchor, AnchorProps } from "../."

export type NavProps = {
  className?: string
  navList: AnchorProps[]
}

export const Navigation:React.FC<NavProps> = ({ navList, className }) => (
  <nav className="menu">
    <ul className={className}>
      {navList.map(anchor => (
        <li>
          <Anchor href={anchor.href} to={anchor.to}>
            {anchor.children}
          </Anchor>
        </li>
      ))}
    </ul>
  </nav>
)
