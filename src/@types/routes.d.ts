import { IChat } from '@screens/App/AllChats/types';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      AppRoutes: undefined;
      Authentication: undefined;
      Onboarding: undefined;
      Home: undefined;
      VerifySMS: undefined;
      AllChats: undefined;
      Chat: { chat: IChat };
    }
  }
}
