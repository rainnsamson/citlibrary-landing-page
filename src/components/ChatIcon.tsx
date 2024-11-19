import { FaComments } from 'react-icons/fa';

function ChatIcon({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700"
    >
      <FaComments className="w-6 h-6" />
    </button>
  );
}

export default ChatIcon;
