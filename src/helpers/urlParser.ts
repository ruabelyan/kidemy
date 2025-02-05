export function parseUrl(urlString: string) {
  try {
    const url = new URL(urlString);
    const params = Object.fromEntries(url.searchParams.entries());

    return {
      href: url.href,
      protocol: url.protocol,
      host: url.host,
      hostname: url.hostname,
      port: url.port,
      pathname: url.pathname,
      search: url.search,
      searchParams: params,
      hash: url.hash,
    };
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}
