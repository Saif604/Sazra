import { Row,Col} from "react-bootstrap";
import main from '../assets/images/main.svg'
import styled from "styled-components";
const Home = () => {
  return (
    <Wrapper>
      <Row className="hero-center">
        <Col>
          <h3>GOVINDPUR</h3>
          <p>
            <strong>Khuda Baks</strong> the founding father of this village, along
            with his brother, laid the foundation for the village, but the
            lineage continued solely through his descendants. The village of Govindpur, nestled in the scenic plains of
            northern India, thrived over generations, preserving the heritage
            and stories of Khuda Baks' family. Today, the families of this
            village proudly trace their roots back to him, a symbol of
            resilience and continuity. As this website unfolds, may it serve as
            a beacon of pride, keeping alive the stories of the past for future
            generations.
          </p>
          <p>
            <i>A village is more than just land; it’s the legacy of those who came
            before, and the dreams of those who are yet to come.</i>
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
p{
  color: var(--thm-gray);
}
  .hero-center {
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 5rem);
  }
  @media (max-width:992px){
    .main-img{
      display: none;
    }
  }
`;
