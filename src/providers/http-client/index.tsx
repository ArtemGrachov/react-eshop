import { ComponentType, createContext, PropsWithChildren, useContext, useMemo } from 'react';
import axios from 'axios';
import { Axios } from 'axios';

export const HttpClientContext = createContext<Axios>(null as unknown as Axios);

export const useHttpClientContext = () => useContext(HttpClientContext);

export const HttpClientProvider: ComponentType<PropsWithChildren> = ({ children }) => {
  const httpClient = useMemo(() => axios.create(), []);

  return (
    <HttpClientContext.Provider value={httpClient}>
      {children}
    </HttpClientContext.Provider>
  )
}
