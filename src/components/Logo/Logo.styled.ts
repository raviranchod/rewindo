import styled from "styled-components";

export const Logo = styled.div`
  font-family: ${(p) => p.theme.fonts.family.cursive.name};
  font-weight: ${(p) => p.theme.fonts.family.cursive.weight};
  font-size: 2rem;
  text-transform: uppercase;
  user-select: none;
`;
