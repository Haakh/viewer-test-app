import { NavigationState, NavigationScreenProp } from 'react-navigation';
import { signIn } from '../../../redux';

export interface LoginContainerPropsType {
  navigation: NavigationScreenProp<NavigationState>;
  signIn: typeof signIn;
  error?: string;
  message?: string;
  currentUserUid?: string;
  isLoading?: boolean;
}
