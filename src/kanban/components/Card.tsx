import * as React from 'react';
import styled from 'styled-components';

import CheckList from './CheckList';

interface CardProps {
  id: number,
  title: string,
  description: string,
  tasks: any,
}
interface CardState {
  showDetails: boolean
}

export default class Card extends React.Component<CardProps, CardState> {
  constructor(props:CardProps){
    super(props);
    this.state = {
      showDetails: false
    }
  }

	public render() {
	  const {id , title, description, tasks} = this.props;
	  let cardDetails;

	  if (this.state.showDetails) {
      cardDetails = (
        <div>
          {description}
          <CheckList
            cardId={id}
            tasks={tasks}
          />
        </div>
      )
    }

    return (
      <Wrapper>
        <strong onClick={() => this.setState({showDetails: !this.state.showDetails })}>{title}</strong>
        {cardDetails}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  background: #fff;
  width: 100%;
  padding: 10px 10px 10px 15px;
  margin: 0 0 10px 0;
  overflow: auto;
  border: 1px solid #e5e5df;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  
    strong{
      color: #f00;
      border-bottom: solid 5px transparent;
      
      &:before {
        display: inline-block;
        width: 1rem;
        content: ">"
      }
    }
`;