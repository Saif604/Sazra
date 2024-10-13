import { Row, Col } from "react-bootstrap";
import main from "../assets/images/main.svg";
import styled from "styled-components";
const Home = () => {
  return (
    <Wrapper>
      <Row className="hero-center">
        <Col>
          <h2>Govindpur</h2>
          <p>
            <strong>Shahadat Ali</strong> is the founding father of this
            village. The village of Govindpur(Motipur), nestled in the scenic
            plains of northern India, thrived over generations, preserving the
            heritage and stories of Shahadat Ali's family. Today, the families
            of this village proudly trace their roots back to him, a symbol of
            resilience and continuity. As this website unfolds, may it serve as
            a beacon of pride, keeping alive the stories of the past for future
            generations.
          </p>
          <p>
            <i>
              The village is more than just land; it’s the legacy of those who
              came before, and the dreams of those who are yet to come.
            </i>
          </p>
        </Col>
        <Col className="main-img">
          <img src={main} alt="village" />
        </Col>
      </Row>
    </Wrapper>
  );
};
export default Home;

const Wrapper = styled.main`
    color: var(--thm-gray);
  .hero-center{
    max-width:var(--max-width);
    margin: 0 auto;
    margin-top: 5rem;
    min-height: calc(100vh - 5rem);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 992px) {
    .main-img {
      display: none;
    }
`;
