import React, { ReactNode } from "react"
import { Link } from "gatsby"
import StyledAnchor from "./Anchor.style"

export type AnchorProps = {
  href?: string
  to?: string
  children?: ReactNode
}

export const Anchor:React.FC<AnchorProps> = ({ to, href, children }) => {
  return (
    <StyledAnchor>
      <div className="anchor-wrapper">
        {href ? (
          <a className="anchor-link" href={href} target="blank">
            {children}
          </a>
        ) : (
          <Link className="anchor-link" to={to}>
            {children}
          </Link>
        )}
      </div>
    </StyledAnchor>
  )
}

