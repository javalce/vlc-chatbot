export const MESSAGE_TYPES = {
  CHATBOT: 'chatbot',
  USER: 'user',
};

export type MessageType = (typeof MESSAGE_TYPES)[keyof typeof MESSAGE_TYPES];
