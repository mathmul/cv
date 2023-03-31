import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders the correct message', () => {
    const msg = 'Hello Vue 3';
    const wrapper = mount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.find('h1').text()).toBe(msg);
  });

  it('increments the count on button click', async () => {
    const wrapper = mount(HelloWorld, {
      props: { msg: 'Test' },
    });
    const button = wrapper.find('button');
    await button.trigger('click');
    expect(wrapper.find('button').text()).toContain('count is 1');
  });
});
