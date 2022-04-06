import React from "react"
import Header from "~/components/ui/Header"
import Wrapper from "~/components/ui/Wrapper"
import NavBottom from "~/components/ui/NavBottom"
import { css } from "@emotion/react"
import { navLinks } from "~/constants/navbar"

const DefaultLayout: React.FC = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <NavBottom
        links={navLinks}
        css={css`
          position: fixed;
          left: 0;
          margin: 0;
          bottom: 0;
        `}
      />
    </>
  )
}

export default DefaultLayout