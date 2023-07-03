'use client'

import Button from './components/Button'
import useDownloadVideo from './hooks/useDownloadVideo';

export default function Home() {
  const { downloading, downloaded, downloadVideo, setDownloaded } = useDownloadVideo();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
