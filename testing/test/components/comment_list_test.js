import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Comment List', () => {
  let component;

  beforeEach(() => {
    const props = {
      comments: ['This is a comment', 'This is another comment']
    };

    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI element for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('This is a comment');
    expect(component).to.contain('This is another comment');
  });
});
