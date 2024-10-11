import styled from "styled-components";
const Logo = () => {
  return (
    <MainLogo>Sazra</MainLogo>
  )
}
export default Logo;

const MainLogo = styled.span`
    display: inline-block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--thm-extra);
`