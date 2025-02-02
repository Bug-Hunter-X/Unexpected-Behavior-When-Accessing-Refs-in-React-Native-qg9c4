import React, { useRef, useEffect } from 'react';

const MyComponent = () => {
  const myRef = useRef(null);

  useEffect(() => {
    // Access the ref only if it's available
    if (myRef.current) {
      console.log('Ref value:', myRef.current);
      // Perform actions using myRef.current
    }

    // Cleanup function: This is essential to remove any event listeners or cleanup actions
    return () => {
      // Cleanup actions if necessary
      console.log('Component unmounted');
    };
  }, [myRef]);

  return (
    <View>
      <Text ref={myRef}>Hello!</Text> 
    </View>
  );
};

export default MyComponent;