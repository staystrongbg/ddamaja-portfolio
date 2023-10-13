'use client';
import { createContext, useContext, useState } from 'react';

type ObserverContextType = {
  activeSection: string;
  setActiveSection: any;
  shouldObserverHandleScroll: boolean;
  setShouldObserverHandleScroll: any;
};

export const ObserverContext = createContext<ObserverContextType>({
  activeSection: '',
  setActiveSection: () => {},
  shouldObserverHandleScroll: true,
  setShouldObserverHandleScroll: () => {},
});

export const ObserverProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState('');
  const [shouldObserverHandleScroll, setShouldObserverHandleScroll] =
    useState(true);
  return (
    <ObserverContext.Provider
      value={{
        activeSection,
        setActiveSection,
        shouldObserverHandleScroll,
        setShouldObserverHandleScroll,
      }}
    >
      {children}
    </ObserverContext.Provider>
  );
};

export const useObserverContext = () => {
  return useContext(ObserverContext);
};
