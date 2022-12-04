import React from 'react';
import FilterDropdown from '../FilterDropdown';
import Search from '../Search';
import Accordion from '../Accordion';
import TestStatusBar from '../TestStatusBar';
import { Actions, ExpandAll, Left, Right, TestDetailsWrapper, Wrapper } from './style';
import TestCaseView from '../TestCaseView';

const TestData: React.FC = () => {
  return (
    <Wrapper>
      <TestStatusBar />
      <TestDetailsWrapper>
        <Left>
          <Search placeholder="Spec, test, tag" />
          <Actions>
            <ExpandAll type="button">Expand all</ExpandAll>
            <FilterDropdown />
          </Actions>
          <Accordion />
        </Left>
        <Right>
          <TestCaseView />
        </Right>
      </TestDetailsWrapper>
    </Wrapper>
  );
};

export default TestData;
