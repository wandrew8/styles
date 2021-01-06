import { useState } from 'react';

function useButtonClick(initialValue) {
    const [value, setValue] = useState(initialValue);
    return [value, setValue];
}

export default useButtonClick;