import Toast from 'react-native-root-toast';
import {} from '../../../lib/theme';

export const ToastMessage = ({
  message,
  position,
  offset = 0,
}: {
  message: string;
  position: 'TOP' | 'BOTTOM';
  offset?: number;
}) => {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position:
      position === 'TOP'
        ? Toast.positions.TOP + offset
        : Toast.positions.BOTTOM - offset,
    shadow: true,
    animation: true,
  });
};
