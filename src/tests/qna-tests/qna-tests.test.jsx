import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from '../../components/qna-components/list/qna-list.component';
import Search from '../../components/qna-components/search/qna-search.component';
import QuestionModal from '../../components/qna-components/question-modal/qna-question-modal.component';
import qData from '../../exampleData/exampleQuestionData';

Enzyme.configure({ adapter: new Adapter() });

describe('Question & Answers', () => {
  it('renders a search bar', () => {
    const wrapper = shallow(
      <Search searchQuestions={qData.searchQuestions} />,
    );
    expect(wrapper);
  });

  it('renders a new question modal', () => {
    const wrapper = shallow(
      <QuestionModal
        id={qData.product_id}
        showAddQuestionModal={qData.showAddQuestionModal}
        addNewQuestions={qData.addNewQuestions}
      />,
    );
    expect(wrapper);
  });

  it('renders without crashing', () => {
    const q = qData.results[0];
    console.log("these are the results: ", q.answers);
    const wrapper = shallow(
      <List
        id={qData.product_id}
        questionAnswers={q.answers}
        questionBody={q.question_body}
        questionId={q.question_id}
        questionHelpfulness={q.question_helpfulness}
        key={`q${q.question_id}`}
      />,
    );
    expect(wrapper);
  });
});
