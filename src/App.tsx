import './App.css';

function App() {
  // 環境変数からAPI_KEYを読み取る
  const api_key = process.env.REACT_APP_API_KEY;

  // 表示テスト
  return (
    <p>{api_key}</p>
  );
}

export default App;
