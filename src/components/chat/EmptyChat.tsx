import { ChatMessage } from './ChatMessage';

export function EmptyChat() {
  return (
    <ChatMessage type='chatbot'>
      <p>Bienvenido al asistente de la ciudad de Valencia. ¿En qué puedo ayudarte?</p>
    </ChatMessage>
  );
}
