import { Store } from 'vuex';// path to store file
import { RootState } from './types/vuex';


declare module '@vue/runtime-core' {

  interface State {
    venues:object,
    locale:string,
    selectedCity:string,
    isLoggedIn:boolean,
    user:object,
    bookedVenueAndUser:object,
    isTracking:string
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
