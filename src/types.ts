export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
}

export interface SettingsState {
  context: string;
}
