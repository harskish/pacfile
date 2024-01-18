function FindProxyForURL(url, host) {
  if (
     dnsDomainIs(host, "storage-yahoo.jp") ||
     dnsDomainIs(host, "yahooapis.jp") ||
     dnsDomainIs(host, "yimg.jp") ||
     dnsDomainIs(host, "yahoo.co.jp") ||
     dnsDomainIs(host, "whatsmyip.org")
  ) return "PROXY 133.18.234.13:80";

  // Edit via:  https://github.com/harskish/pacfile/edit/main/proxies.pac
  // Proxies:   https://www.freeproxy.world/

  return "DIRECT";
}
