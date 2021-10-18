import styled from "styled-components";

export const StyleCardTask = styled.div`
  width: 100%;
  border-left: 25px solid var(--bar);
  min-height: 130px;
  background-color: var(--white);
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .actions {
    display: flex;
    align-items: end;
  }
  .active {
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 120px;
    border: 1px solid green;
    border-radius: 30px;
    cursor: pointer;
  }
  .progress {
    margin: auto;
    width: 100px;
    height: 10px;
    background-color: var(--button);
    border-radius: 5px;
    overflow: hidden;
  }
  .percentage {
    height: 10px;
    background-color: var(--bar);
    border-radius: 5px;
  }
`;
