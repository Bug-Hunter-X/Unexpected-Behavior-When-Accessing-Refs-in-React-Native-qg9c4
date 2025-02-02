# Unexpected Behavior When Accessing Refs in React Native

This repository demonstrates a common issue in React Native: accessing a component's ref before it has mounted or after it has unmounted.  This can lead to unexpected behavior because the ref might be `null` or undefined.

The `BugRefAccess.js` file shows the problematic code, while `BugRefAccessSolution.js` provides a corrected version.  The solution uses useEffect hook with a cleanup function to ensure the ref is accessed only when the component is mounted and properly handled when unmounting.