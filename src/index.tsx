import * as React from 'react';
import * as ReactDOM from 'react-dom';
import KanbanBoard from './kanban/containers/KanbanBoard';
import cardList from './infra/cardList';

import { injectGlobalStyle } from './common/styles';

console.log('injectGlobalStyle = ',injectGlobalStyle);
injectGlobalStyle();

ReactDOM.render(
  <KanbanBoard cards={cardList}/>,
  document.querySelector('.root') as HTMLElement
);
