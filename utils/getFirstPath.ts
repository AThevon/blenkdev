function getFirstPath(pathname: string, actualPath: string) {
   if (pathname.split("/").length > 2) {
      const cleanPathname = `/${pathname.split("/")[2]}`;
      return cleanPathname === actualPath;
   }
   const match = pathname.match(/^\/(\w{2})(\/|$)/);
   const cleanPathname = match ? pathname.replace(match[0], "/") : pathname;
   return cleanPathname === actualPath;
}

export { getFirstPath };
