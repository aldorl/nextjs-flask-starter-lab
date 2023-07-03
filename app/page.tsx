'use client'

import Button from './components/Button'
import Message from './components/Message'
import useDownloadVideo from './hooks/useDownloadVideo';

export default function Home() {
  const { downloading, downloaded, downloadVideo } = useDownloadVideo();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {downloaded && <Message variant="success">Download successful!</Message>}
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
