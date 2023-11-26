const useBrowserStorage = () => {
  return (
    window.localStorage && {
      set: window.localStorage.setItem,
      get: window.localStorage.getItem,
    }
  );
};

export default useBrowserStorage;
