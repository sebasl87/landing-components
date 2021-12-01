import styled from "@emotion/styled";

export interface GridCards {
  children: React.ReactNode;
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

const GridElement = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  @media (min-width: 600px) {
    grid-template-columns: 50% 50%;
    grid-column-gap: 24px;
  }
  @media (min-width: 900px) {
    grid-template-columns: 30% 30% 30%;
    grid-column-gap: 24px;
  }
`;

const Container: React.FC<GridCards> = ({ children }) => {
  return (
    <Layout>
      <GridElement>{children}</GridElement>
    </Layout>
  );
};

export default Container;
