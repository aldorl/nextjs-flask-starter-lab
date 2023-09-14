import { useState } from 'react'

const useDownloadVideo = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const downloadVideo = async () => {
    setDownloading(true);

    try {
      // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}:5328/api/generate_video`, { method: 'POST' });
      const res = await fetch(`https://xtok-flask-backend.onrender.com/generate_video`, { method: 'POST' });
      const resBlob = await res.blob();
  
      let blob = new Blob([resBlob], {type: "application/octet-stream"});
      let downloadUrl = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = downloadUrl;
      a.download = "your_video_name.mp4";
      // a.download = "your_image_name.png";
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(downloadUrl);

      setDownloaded(true);
    } catch (error) {
      console.error("There was an error with the fetch operation: ", error);
    }

    setDownloading(false);
  }

  return { downloading, downloaded, downloadVideo, setDownloaded };
}

export default useDownloadVideo;
