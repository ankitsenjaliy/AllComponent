import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import {
  TapGestureHandler,
  State,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

export default function DoubleTapGestureScreen() {
  const [likeColor, setLikeColor] = useState('red');
  const doubleTapRef = useRef(null);

  const onDoubleTapEvent = (event: any) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      console.log('tapped');
      likeColor === 'red' ? setLikeColor('yellow') : setLikeColor('red');
    }
  };
  return (
    <GestureHandlerRootView>
      <TapGestureHandler
        ref={doubleTapRef}
        onHandlerStateChange={onDoubleTapEvent}
        numberOfTaps={2}>
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: likeColor,
            marginTop: 22,
            marginBottom: 22,
          }}
        />
      </TapGestureHandler>
    </GestureHandlerRootView>
  );
}
