import { ToastAndroid } from 'react-native';

export enum MessageDuration {
  SHORT,
  MEDIUM,
  LONG
}

export class Message {
  static show = (message: string, duration: MessageDuration = MessageDuration.SHORT) => {
    ToastAndroid.show(message, Message.getDurationForAndroid(duration));
  }

  private static getDurationForAndroid = (duration: MessageDuration): number => {
    switch (duration) {
      case MessageDuration.SHORT: return ToastAndroid.SHORT;
      case MessageDuration.LONG: return ToastAndroid.LONG;
      case MessageDuration.MEDIUM: return (ToastAndroid.SHORT + ToastAndroid.LONG) / 2;
    }
  }
}
