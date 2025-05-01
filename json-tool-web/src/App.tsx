import { useState } from 'react';
import './App.css';

function App() {
  const MAX_INPUT_SIZE = 10000; // 10KB
  const [inputJSON, setInputJSON] = useState("") // 入力されたJSON文字列
  const [outputJSON, setOutputJSON] = useState("") // 整形結果
  const [errorMessage, setErrorMessage] = useState("") // エラーメッセージ

  const clearOutput = () => {
    setOutputJSON("") // 整形結果をクリア
    setErrorMessage("") // エラーメッセージをクリア 
  }

  const showErrorMessage = (error: unknown) => {
    if (error instanceof Error) {
      const positionInfo = error.message.match(/at position (\d+)/)
      const lineInfo = error.message.match(/\(line (\d+)/)
      const detailedMessage = positionInfo && lineInfo
        ? `エラー: 無効なJSONです。(${lineInfo[1]}行目, ${positionInfo[1]}文字目)`
        : `エラー: ${error.message}`
      setErrorMessage(detailedMessage)
    } else {
      setErrorMessage('不明なエラーが発生しました。');
    }
  }

  const sortJSON = (data: unknown): unknown => {
    if (Array.isArray(data)) {
      return data.map(sortJSON)
    } else if (typeof data === 'object' && data !== null) {
      return Object.keys(data)
        .sort()
        .reduce((acc, key) => {
          acc[key] = sortJSON((data as Record<string, unknown>)[key])
          return acc
        }, {} as Record<string, unknown>)
    }
    return data
  }

  const handleSort = () => {
    try {
      clearOutput()
      if (inputJSON.length > MAX_INPUT_SIZE) {
        setErrorMessage(`入力サイズが${MAX_INPUT_SIZE}バイトを超えています。`)
        return
      }
      const parsed: unknown = JSON.parse(inputJSON) // 何でもいけるようにするのでスキーマなし
      const sorted = sortJSON(parsed)
      setOutputJSON(JSON.stringify(sorted, null, 2))
    } catch (error: unknown) {
      showErrorMessage(error)
    }
  }

  const handleMinify = () => {
    try {
      clearOutput()
      if (inputJSON.length > MAX_INPUT_SIZE) {
        setErrorMessage(`入力サイズが${MAX_INPUT_SIZE}バイトを超えています。`)
        return
      }
      const parsed: unknown = JSON.parse(inputJSON) // 何でもいけるようにするのでスキーマなし
      setOutputJSON(JSON.stringify(parsed))
    } catch (error: unknown) {
      showErrorMessage(error)
    }
  }

  const handleExpand = () => {
    try {
      clearOutput()
      if (inputJSON.length > MAX_INPUT_SIZE) {
        setErrorMessage(`入力サイズが${MAX_INPUT_SIZE}バイトを超えています。`)
        return
      }
      const parsed: unknown = JSON.parse(inputJSON) // 何でもいけるようにするのでスキーマなし
      setOutputJSON(JSON.stringify(parsed, null, 2))
    } catch (error: unknown) {
      showErrorMessage(error)
    }
  }

  const handleCopy = () => {
    if (outputJSON) {
      if (window.location.protocol !== 'https:') {
        alert('この機能はHTTPS環境でのみ動作します。');
        return;
      }
      if (!navigator.clipboard) {
        alert('クリップボード操作がサポートされていません。');
        return;
      }
      const promise = navigator.clipboard.writeText(outputJSON)
      promise.then(() => {
        // alert('結果をコピーしました！')
      }).catch((error) => {
        showErrorMessage(error)
      })
    }
  }

  return (
    <div className="App">
      <h1>JSON 整形ツール</h1>
      <textarea
        rows={20}
        cols={90}
        placeholder="ここにJSONデータを入力してください"
        value={inputJSON}
        onChange={(e) => setInputJSON(e.target.value)}
      />
      <br />
      <button onClick={handleSort}>ソートする</button>
      <button onClick={handleMinify}>1行にする</button>
      <button onClick={handleExpand}>展開するのみ</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {outputJSON && (
        <div>
          <h2>結果:</h2>
          <pre>{outputJSON}</pre>
          <button onClick={handleCopy}>コピーする</button>
        </div>
      )}
    </div>
  )
}

export default App
