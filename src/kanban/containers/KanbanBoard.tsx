import * as React from 'react';
import styled from 'styled-components';

import List from '../components/List';

interface KanbanBoardProps {
  cards: any[]
}
interface State {}

export default class KanbanBoard extends React.Component<KanbanBoardProps, State> {

	public render() {
    const { cards } = this.props;
	  return (
      <Wrapper>
        <List title={`Todo`} cards={cards.filter((card) => card.status === 'todo')}/>
        <List title={`In Progress`} cards={cards.filter((card) => card.status === 'in-progress')}/>
        <List title={`Done`} cards={cards.filter((card) => card.status === 'done')}/>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  white-space: nowrap;
  height: 100%;
`;
