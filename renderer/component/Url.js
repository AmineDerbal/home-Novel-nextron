import React, { useState } from 'react';

const Url = () => {
  const [url, setUrl] = useState('');
  const handleClick = async () => {
    console.log('url of url page', url);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url,
      }),
    };
    const urlStream = await fetch('/api/download', options);
    const urlData = await urlStream.json();
    if (urlData) {
      console.log('it works');
    } else {
      console.log("it doesn't");
    }
  };
  return (
    <div className="input-url">
      <input
        type="text"
        value={url}
        id="url"
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        placeholder="type a ScribbleHub url"
      />
      <button type="button" className="submit" onClick={handleClick}>
        Download
      </button>
    </div>
  );
};

export default Url;
