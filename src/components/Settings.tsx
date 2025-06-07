import { useState, useEffect } from "react";

interface SettingsProps {
  onContextChange: (context: string) => void;
  onApiKeyChange: (apiKey: string) => void;
}

export function Settings ({
  onContextChange,
  onApiKeyChange,
}: SettingsProps) {
  const [context, setContext] = useState("");
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    // Load saved settings from sessionStorage
    const savedContext = sessionStorage.getItem("chatContext");
    const savedApiKey = sessionStorage.getItem("openaiApiKey");

    if (savedContext) {
      setContext(savedContext);
      onContextChange(savedContext);
    }
    if (savedApiKey) {
      setApiKey(savedApiKey);
      onApiKeyChange(savedApiKey);
    }
  }, []);

  function handleApiKeyChange (e: React.ChangeEvent<HTMLInputElement>) {
    const newApiKey = e.target.value;
    setApiKey(newApiKey);
    sessionStorage.setItem("openaiApiKey", newApiKey);
    onApiKeyChange(newApiKey);
  };

  function handleContextChange (e: React.ChangeEvent<HTMLTextAreaElement>) {
    const newContext = e.target.value;
    setContext(newContext);
    sessionStorage.setItem("chatContext", newContext);
    onContextChange(newContext);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="apiKey"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            OpenAI API Key
          </label>
          <input
            type="password"
            id="apiKey"
            value={apiKey}
            onChange={handleApiKeyChange}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your OpenAI API key"
          />
        </div>

        <div>
          <label
            htmlFor="context"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            System Context
          </label>
          <textarea
            id="context"
            value={context}
            onChange={handleContextChange}
            rows={10}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the system context that will be used for all conversations"
          />
        </div>
      </div>
    </div>
  );
};
