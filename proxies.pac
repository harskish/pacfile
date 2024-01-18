// Hosted at: https://raw.githubusercontent.com/harskish/pacfile/main/proxies.pac
// Edit via: https://github.com/harskish/pacfile/edit/main/proxies.pac
function FindProxyForURL(url, host) {
  if (
     dnsDomainIs(host, "storage-yahoo.jp") ||
     dnsDomainIs(host, "yahooapis.jp") ||
     dnsDomainIs(host, "yimg.jp") ||
     dnsDomainIs(host, "yahoo.co.jp") ||
     dnsDomainIs(host, "whatsmyip.org")
  ) return "PROXY 47.245.34.161:118"; // https://www.freeproxy.world/

  return "DIRECT";
}
