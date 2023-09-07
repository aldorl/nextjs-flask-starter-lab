'use client' // is a directive that can be used...

// Import the necessary modules and components
import { useEffect } from 'react'  // Hook for handling side effects
import Alert from './components/Alert'  // Alert component for displaying messages
import Button from './components/Button'  // Button component
import useDownloadVideo from './hooks/useDownloadVideo';  // Custom hook for handling video download

// Define the Home component
export default function Home() {
  // Destructure the variables and functions returned by the useDownloadVideo hook
  const { downloading, downloaded, downloadVideo, setDownloaded } = useDownloadVideo();

  // useEffect hook to handle side effects
  useEffect(() => {
    // If the video has been downloaded
    if (downloaded) {
      // Set a timer to reset the downloaded state after 5 seconds
      const timer = setTimeout(() => setDownloaded(false), 5000);
      
      // Cleanup function to clear the timer
      return () => clearTimeout(timer);
    }
  }, [downloaded]);  // Dependency array for the useEffect hook. The hook will run again if the 'downloaded' state changes.

  // Return the JSX to be rendered
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Alert variant="info">This is relevant information</Alert> */}
      {/* Alert component to display a success message when a download is successful */}
      {downloaded && <Alert variant="success">Download successful!</Alert>}
      {/* <Alert variant="error">Download unsuccessful...</Alert> */}

      {/* Button component to start the video download */}
      <Button
        disabled={downloading}  // Disable the button while a download is in progress
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={downloadVideo}  // Set the onClick handler to the downloadVideo function
      >
        Download Now ⬇️
      </Button>
    </main>
  )
}
