// Import the necessary hooks and types from 'react'.
import { useState, useEffect, ReactNode, FC } from 'react';

// Define the prop types for the Alert component. 
// 'variant' can be one of 'info', 'success', or 'error', 
// and 'children' is a ReactNode, which means it can be any valid React component or elements.
interface AlertProps {
    variant: 'info' | 'success' | 'error';
    children: ReactNode;
}

// Define the types for the CSS classes of the Alert component.
interface AlertClass {
    container: string;
    inner: string;
    text: string;
    badge: string;
}

// Define the CSS classes for the different alert variants. These are Tailwind CSS classes.
const alertClasses: Record<string, AlertClass> = {
    info: {
        container: 'bg-indigo-900',
        inner: 'bg-indigo-800',
        text: 'text-indigo-100',
        badge: 'bg-indigo-500'
    },
    success: {
        container: 'bg-green-900',
        inner: 'bg-green-800',
        text: 'text-green-100',
        badge: 'bg-green-500'
    },
    error: {
        container: 'bg-red-900',
        inner: 'bg-red-800',
        text: 'text-red-100',
        badge: 'bg-red-500'
    },
};

// Define the Alert component. It takes a 'variant' and 'children' as props.
const Alert: FC<AlertProps> = ({ variant = 'info', children }) => {
    // Use the useState hook to manage the visibility of the alert.
    const [show, setShow] = useState(true);

    // Use the useEffect hook to hide the alert after 5 seconds.
    useEffect(() => {
        const timeId = setTimeout(() => setShow(false), 5000);
        return () => clearTimeout(timeId);  // This is cleanup function to clear the timeout if the component unmounts.
    }, []);

    // Define a function to dismiss the alert when the close button is clicked.
    const handleDismiss = () => setShow(false);

    // Get the CSS classes for the current alert variant.
    const { container, inner, text, badge } = alertClasses[variant];

    // Render the alert if it's visible, otherwise return null.
    return show ? (
        <div id="alert-banner" tabIndex="-1" className={`fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 ${container} border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600`}>
            <div className="flex flex-col items-start mb-3 mr-4 md:items-center md:flex-row md:mb-0">
                <div className={`flex items-center mb-2 border-gray-200 md:pr-4 md:mr-4 md:border-r md:mb-0 dark:border-gray-600 ${inner}`}>
                <span className={`${badge} flex rounded-full uppercase px-2 py-1 text-xs font-bold mr-3`}>{variant.toUpperCase()}</span>
                <span className={`self-center text-lg font-semibold whitespace-nowrap ${text}`}>{children}</span>
                </div>
            </div>
            <div className="flex items-center flex-shrink-0">
                <button onClick={handleDismiss} type="button" className="absolute top-2.5 right-2.5 md:relative md:top-auto md:right-auto flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                {/* This SVG is an 'X' icon for the dismiss button. */}
                <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close banner</span>
                </button>
            </div>
        </div>
    ) : null;  // If 'show' is false, the component doesn't render anything.
};

// Export the Alert component as the default export.
export default Alert;
