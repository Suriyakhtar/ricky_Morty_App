import styled from "styled-components";
export const Wrapper = styled.div`
  .ant-layout-header {
    height: 60px;
    padding-inline: 15px;
    line-height: 40px;
  }
  .ant-typography {
    line-height: normal;
  }
  .ant-row {
    align-items: center;
  }

  .ant-divider-horizontal {
    width: 87%;
    min-width: 50%;
    margin: 25px 106px;
  }
  .ant-pagination {
    margin: 25px auto;
  }
  .ant-layout-content {
    padding: 0 100px;
    background-color: #fff;
    min-height: 100vh;
  }
  .ant-spin-spinning {
    display: flex;
    justify-content: center;
  }
`;
export default Wrapper;
