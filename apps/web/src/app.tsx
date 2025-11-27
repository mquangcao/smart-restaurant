import { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const checkBackend = async () => {
    setLoading(true);
    setResponse('');

    try {
      console.log('check backend: ' + import.meta.env.VITE_API_BASE_URL);
      const res = await fetch(import.meta.env.VITE_API_BASE_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 404) {
        setResponse(`✅ Backend trả về 404 - CORS OK!`);
      } else {
        const data = await res.json();
        setResponse(`✅ Backend trả về ${res.status}: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      setResponse(`❌ Lỗi kết nối: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Smart Restaurant - CORS Test</h1>
      <button
        onClick={checkBackend}
        disabled={loading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Đang kiểm tra...' : 'Kiểm tra Backend'}
      </button>
      {response && (
        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: '#f0f0f0',
            borderRadius: '5px',
            fontFamily: 'monospace',
          }}
        >
          {response}
        </div>
      )}
    </div>
  );
}

export default App;
