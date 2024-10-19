import { ModeToggle } from '@/components/mode-toggle';
import Home from '../pages/home-page';
import { ThemeProvider } from '@/components/theme-provider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Switch } from '@radix-ui/react-switch';

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
