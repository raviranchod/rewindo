import NextLink from "next/link";
import { Logo } from "../Logo";
import * as Style from "./Header.styled";

const Header = () => (
  <Style.Header>
    <NextLink href='/'>
      <Style.Logo>
        <Logo />
      </Style.Logo>
    </NextLink>
  </Style.Header>
);

export { Header };
