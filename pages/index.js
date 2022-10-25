import styled from "@emotion/styled";
import CommonLayoput from "@/layouts/CommonLayout";

function Home() {
  return <Wrapper>index</Wrapper>;
}

export default Home;

Home.getLayout = function getLayout(page) {
  return <CommonLayoput>{page}</CommonLayoput>;
};

const Wrapper = styled.div``;
