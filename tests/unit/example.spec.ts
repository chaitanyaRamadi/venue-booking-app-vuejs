import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Vuetify from 'vuetify';

describe('HelloWorld.vue', () => {
  // let vuetify;

  beforeEach(() => {
    // vuetify = new Vuetify()
  })
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
