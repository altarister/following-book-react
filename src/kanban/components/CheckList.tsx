import * as React from 'react';
import styled from 'styled-components';

interface CheckListProps {
  cardId: number,
  tasks: any[],
}
interface CheckListState {}

export default class CheckList extends React.Component<CheckListProps, CheckListState> {

	public render() {
	  const tasks = this.props.tasks.map((task, index) => {
	    return (
	      <List key={index}>
          <input type="checkbox" checked={task.done}/>
          {task.name}
          <a href="#" />
        </List>
      )
    });

    return (
      <Wrapper>
        {tasks}
      </Wrapper>
    );
  }
}

const Wrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const List = styled.li`
  :first-child {
    margin-top: 10px;
    padding-top: 10px;
    border-top: dashed 1px #ddd;
  }
  
  input {}
  
  a {
    :after {
      display: inline-block;
      color: #d66;
      content: "+";
    }
  }
`;
