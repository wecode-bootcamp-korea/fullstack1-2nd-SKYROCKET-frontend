import { useState, useCallback } from 'react';

function useFormInput(initialValue = null) {
  const [value, setValue] = useState(initialValue);

  const handleOnChange = useCallback(event => {
    setValue(event.target.value);
  }, []);

  return [value, handleOnChange];
}

export default useFormInput;
