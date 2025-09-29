import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Minimize2, Maximize2, Bot } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m GreenAI, your sustainability assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isMinimized) {
      setIsMinimized(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const getBotResponse = (userMessage: string): Message => {
    const lowerCaseMessage = userMessage.toLowerCase();
    let responseText = '';

    // Simple pattern matching for responses
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hey')) {
      responseText = 'Hello there! How can I help you with your sustainability goals today?';
    } else if (lowerCaseMessage.includes('carbon footprint') || lowerCaseMessage.includes('emissions')) {
      responseText = 'To reduce your carbon footprint, we recommend starting with a baseline assessment. Our platform can help you measure and track your emissions across your supply chain.';
    } else if (lowerCaseMessage.includes('pricing') || lowerCaseMessage.includes('cost') || lowerCaseMessage.includes('price')) {
      responseText = 'Our pricing plans start at $29/month for the Basic plan. For detailed information, please check our Pricing page or I can connect you with our sales team.';
    } else if (lowerCaseMessage.includes('feature') || lowerCaseMessage.includes('what can you do')) {
      responseText = 'GlobalGreen offers carbon footprint tracking, supply chain optimization, sustainability reporting, and AI-powered recommendations to reduce your environmental impact.';
    } else if (lowerCaseMessage.includes('report') || lowerCaseMessage.includes('reporting')) {
      responseText = 'Our platform generates detailed sustainability reports compliant with GHG Protocol, CDP, and ESG standards. You can customize reports for different stakeholders.';
    } else if (lowerCaseMessage.includes('thank')) {
      responseText = 'You\'re welcome! Feel free to ask if you have any other questions about sustainability or our platform.';
    } else {
      responseText = 'I appreciate your question. To provide the most accurate information, would you like to speak with one of our sustainability experts? I can help schedule a call.';
    }

    return {
      id: Date.now().toString(),
      text: responseText,
      sender: 'bot',
      timestamp: new Date()
    };
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary-600 text-white shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
      >
        <MessageSquare size={24} />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 'auto' : '500px'
            }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed bottom-24 right-6 w-full max-w-sm bg-white rounded-xl shadow-2xl overflow-hidden z-50 border border-neutral-200"
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center">
                <Bot size={20} className="mr-2" />
                <h3 className="font-semibold">GreenAI Assistant</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={toggleMinimize}
                  className="p-1 hover:bg-primary-500 rounded"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button 
                  onClick={toggleChat}
                  className="p-1 hover:bg-primary-500 rounded"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Chat messages */}
            {!isMinimized && (
              <div className="h-96 overflow-y-auto p-4 bg-neutral-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`rounded-lg p-3 max-w-xs lg:max-w-md ${
                        message.sender === 'user' 
                          ? 'bg-accent-500 text-white'
                          : 'bg-white border border-neutral-200 text-neutral-800'
                      }`}
                    >
                      <p>{message.text}</p>
                      <div 
                        className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-accent-100' : 'text-neutral-400'
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}

            {/* Chat input */}
            {!isMinimized && (
              <div className="border-t border-neutral-200 p-3 flex items-center">
                <input
                  type="text"
                  ref={inputRef}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 border border-neutral-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputMessage.trim() === ''}
                  className={`ml-2 p-2 rounded-full ${
                    inputMessage.trim() === '' 
                      ? 'bg-neutral-200 text-neutral-400' 
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  <Send size={18} />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;