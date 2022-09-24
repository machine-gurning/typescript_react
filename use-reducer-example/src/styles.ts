import styled from 'styled-components';

export const AppContainer = styled.div`
  align-items: center;
  justify-content: center;
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  height: 80vh;
  padding: 10vh 10vw;
  width: 80vw;
`
export const CounterContainer = styled.div`
  align-items: center;
  flex-direction: column;
  background-color: white;
  display: flex;
  padding: 20px;
  height: 400px;
  width: 500px;
`

export const CounterValue = styled.div`
  font-size: 200px;
  text-align: center;
`

export const ControlsContainer = styled.div`
  padding: 10px;
  margin-top: 50px;
`

export const CounterButton = styled.button`
  background-color: #5aac44;
  font-size: 50px;
  margin: 10px;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
  cursor: pointer;
`
