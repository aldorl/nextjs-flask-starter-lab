'use client'

import { useEffect } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'
import useDownloadVideo from './hooks/useDownloadVideo';

export default function Home() {
  const { downloading, downloaded, downloadVideo, setDownloaded } = useDownloadVideo();

  useEffect(() => {
    if (downloaded) {
      const timer = setTimeout(() => setDownloaded(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [downloaded]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {downloaded && <Alert variant="success">Download successful!</Alert>}
      <Button
        disabled={downloading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        onClick={downloadVideo}
      >
        Download Now ⬇️
      </Button>
    </main>
  )
}
