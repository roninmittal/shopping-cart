import React from 'react'
import { shallow} from 'enzyme'
import CartNotification from '../../../Components/CartNotification';

describe("Render CartNotification component", () => {

    const dummyProps = {
        count: 1, 
        cartToggle: jest.fn()
    }

    test("render", () => {
        const wrapper = shallow(<CartNotification {...dummyProps}/>)
        wrapper.find(".cartNotification").props().onClick();
        // expect(dummyProps.cartToggle).toBeCalledWith(true);
        expect(wrapper.find(".badge-secondary").props().children).toBe(1);
    })
});
