declare global {
  interface Window {
    localStorage: {
      getItem: jest.Mock;
      setItem: jest.Mock;
      clear: jest.Mock;
      removeItem: jest.Mock;
      key: jest.Mock;
      length: number;
    };
  }
}

export {}; 