import { shallowMount,createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Vuetify from 'vuetify';

describe('HelloWorld.vue', () => {
  const localVue = createLocalVue()
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
