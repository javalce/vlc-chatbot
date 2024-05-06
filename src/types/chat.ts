import { type Message } from 'ai/react';

export type MessageRole = Pick<Message, 'role'>['role'];
