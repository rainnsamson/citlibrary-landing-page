import { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import ChatIcon from './ChatIcon'; // Ensure the path to ChatIcon is correct

interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: Date;
  chatId: string;
}

function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const chatId = auth.currentUser?.uid || 'guest'; // Use the current user's UID as chatId

  useEffect(() => {
    const chatSessionId = chatId;

    // Query the messages sub-collection within the specific chat session document
    const q = query(collection(db, 'chats', chatSessionId, 'messages'), orderBy('timestamp'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Message[];
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [chatId]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    // Add the new message to the appropriate chat session's 'messages' sub-collection
    await addDoc(collection(db, 'chats', chatId, 'messages'), {
      sender: chatId,
      text: newMessage,
      timestamp: new Date(),
      chatId,
    });

    setNewMessage(''); // Clear the input after sending the message
  };

  return (
    <>
      <ChatIcon onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="fixed bottom-16 right-8 bg-white shadow-lg w-80 h-96 rounded-lg flex flex-col">
          <div className="bg-red-600 text-white p-4 font-bold rounded-t-lg flex items-center justify-between">
            <span>Chat Support</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-bold hover:text-gray-200 focus:outline-none"
              aria-label="Close Chat"
            >
              &times;
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`mb-2 ${msg.sender === chatId ? 'text-right' : ''}`}>
                <div
                  className={`inline-block px-4 py-2 rounded-lg ${
                    msg.sender === chatId ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-2 flex items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border rounded-l-lg p-2"
            />
            <button
              onClick={sendMessage}
              className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBox;
