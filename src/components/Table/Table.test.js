import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import reactDom from 'react-dom';
import renderer from 'react-test-renderer';
import Table from './Table.component';

Enzyme.configure({ adapter: new Adapter() });

describe('Table', () => {
  const props = {
    list: [
      {
        title: '1',
        author: '1',
        num_comments: 1,
        points: 2,
        objectID: 'y',
      },
      {
        title: '2',
        author: '2',
        num_comments: 2,
        points: 2,
        objectID: 'z',
      },
    ],
    sortKey: 'TITLE',
    isSortReverse: false,
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    reactDom.render(<Table {...props} />, div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(<Table {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows two items in list', () => {
    const wrapper = shallow(<Table {...props} />);
    expect(wrapper.find('.table-row').length).toBe(2);
  });
});
