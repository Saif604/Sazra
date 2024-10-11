import { FamilyTree } from "../components";
import lineage from "../assets/data/lineage";
import styled from "styled-components";
const Dashboard = () => {
  return (
    <Wrapper>
      <FamilyTree data={lineage}/>
    </Wrapper>
  );
};
export default Dashboard;

const Wrapper = styled.main`
  overflow-x: scroll;
`;
