import { useState } from 'react'

const useDownloadVideo = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const downloadVideo = async () => {
    setDownloading(true);

    try {
      setTimeout(() => {
        setDownloaded(true);
        setDownloading(false);
      }, 2500);
    } catch (error) {
      console.error("There was an error with the fetch operation: ", error);
      setDownloading(false);
    }

    // setDownloading(false);
  }

  return { downloading, downloaded, downloadVideo, setDownloaded };
}

export default useDownloadVideo;
