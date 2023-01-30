const createRouter = () => {
    const routeToView = new Map();
    let notFound = () => {};
  
    function addRoute(route, view) {
      routeToView.set(route, view);
      return this;
    }
  
    function setNotFound(cb) {
      notFound = cb;
      return this;
    }
  
    function start() {
      window.addEventListener("click", (event) => {
        const { target } = event;
        if (target.matches("a[data-navigate]")) {
          const { navigate } = target.dataset;
          history.pushState({}, "", navigate);
          checkRoutes();
        }
      });
  
      window.addEventListener("popstate", () => {
        checkRoutes();
      });
  
      checkRoutes();
      return this;
    }
  
    function checkRoutes() {
      const currentRoute = routeToView.get(window.location.pathname);
      if (!currentRoute) {
        notFound();
        return;
      }
      currentRoute();
    }
  
    return {
      addRoute,
      setNotFound,
      start,
      checkRoutes,
    };
  };