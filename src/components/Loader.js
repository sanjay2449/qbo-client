export default function Loader() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

            {/* Text */}
            <p className="mt-6 text-lg font-bold text-gray-600 animate-pulse">
                QBO magic loading...
            </p>
        </div>
    );
}
