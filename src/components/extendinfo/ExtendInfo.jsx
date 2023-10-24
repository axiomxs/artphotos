import React, { useState } from 'react';

function App() {
  const [showBox, setShowBox] = useState(false);

  const handleClick = () => {
    setShowBox(true);
  };

  return (
    <div>
      <button onClick={handleClick}>点击显示弹窗</button>
      {showBox && <div style={{ border: '1px solid black', padding: '10px' }}>这是一个弹窗</div>}
    </div>
  );
}

export default App;
