import * as React from 'react';
import styled from 'styled-components';

import Card from './Card';

interface ListProps {
  cards: any[],
  title: string
}
interface State {}

export default class List extends React.Component<ListProps, State> {

	public render() {
    const cards = this.props.cards.map((card, index) => {
      return (
        <Card
          key={index}
          id={card.id}
          title={card.title}
          description={card.description}
          tasks={card.tasks}
        />
      )
    });

    return (
      <Wrapper>
        <div>{this.props.title}</div>
        {cards}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  white-space: normal;
  height: 100%;
  width: 33%;
  padding: 0 20px;
  overflow: auto;
  
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 99%;
    background: linear-gradient(to bottom, #eee 0%, #ccc 50%, #eee 100%) fixed;
  }
`;