import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Chat } from "./components/Chat";
import { Settings } from "./components/Settings";
import "./App.css";

function App() {
  const [context, setContext] = useState("");
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    // Load saved settings from sessionStorage
    const savedContext = sessionStorage.getItem("chatContext");
    const savedApiKey = sessionStorage.getItem("openaiApiKey");

    if (savedContext) {
      setContext(savedContext);
    }
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  return (
    <Router>
      <div className="h-screen">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-gray-800">
                    AI Chat Assistant
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    to="/"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Chat
                  </Link>
                  <Link
                    to="/settings"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  >
                    Settings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route
              path="/"
              element={<Chat context={context} apiKey={apiKey} />}
            />
            <Route
              path="/settings"
              element={
                <Settings
                  onContextChange={setContext}
                  onApiKeyChange={setApiKey}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
