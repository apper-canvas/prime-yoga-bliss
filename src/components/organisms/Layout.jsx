import { Outlet } from "react-router-dom";
import { useState } from "react";
import BottomNav from "@/components/molecules/BottomNav";

const Layout = () => {
  // App-level state that can be passed to child components via outlet context
  const [appState, setAppState] = useState({
    // Add any app-level state here as needed
    user: null,
    theme: 'light',
    preferences: {}
  });

  // App-level methods that can be passed to child components
  const appMethods = {
    updateUser: (userData) => setAppState(prev => ({ ...prev, user: userData })),
    updateTheme: (theme) => setAppState(prev => ({ ...prev, theme })),
    updatePreferences: (preferences) => setAppState(prev => ({ ...prev, preferences }))
  };

  // Outlet context object containing all app-level state and methods
  const outletContext = {
    appState,
    appMethods
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <main className="pb-20 lg:pb-0">
<Outlet context={outletContext} />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;