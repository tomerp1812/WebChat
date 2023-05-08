import React, { useState } from 'react';

function DisplayName({value, onChange}) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };
    return (
        <div>
        <input value={value} onChange={onChange} className="form-control marginSmall" type="text" placeholder="Display name" onFocus={handleFocus} onBlur={handleBlur}></input>
        {isFocused  && <p className='font_error'>Display name must be between 2-10 characters long</p>}
        </div>
    );
}

export default DisplayName;