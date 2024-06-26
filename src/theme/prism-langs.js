const ciscoKeywords = [
  'auto',
  'clear',
  'clock',
  'configure',
  'connect',
  'copy',
  'debug',
  'delete',
  'dir',
  'disable',
  'disconnect',
  'enable',
  'erase',
  'exit',
  'logout',
  'mkdir',
  'more',
  'ping',
  'reload',
  'resume',
  'rmdir',
  'send',
  'setup',
  'show',
  'ssh',
  'telnet',
  'terminal',
  'traceroute',
  'undebug',
  'vlan',
  'write',
];

const ciscoConfKeywords = [
  'aaa',
  'access-list',
  'banner',
  'bba-group',
  'boot',
  'cdp',
  'class-map',
  'clock',
  'config-register',
  'crypto',
  'default',
  'do',
  'dot11',
  'enable',
  'end',
  'exit',
  'flow',
  'hostname',
  'interface',
  'ip',
  'ipv6',
  'key',
  'license',
  'line',
  'lldp',
  'logging',
  'login',
  'mac-address-table',
  'ntp',
  'parameter-map',
  'parser',
  'policy-map',
  'port-channel',
  'priority-list',
  'privilege',
  'queue-list',
  'router',
  'secure',
  'security',
  'service',
  'snmp-server',
  'spanning-tree',
  'tacacs-server',
  'username',
  'vpdn',
  'vpdn-group',
  'zone',
  'zone-pair',
];

const ciscoIntKeywords = [
  'arp',
  'bandwidth',
  'cdp',
  'channel-group',
  'crypto',
  'custom-queue-list',
  'delay',
  'description',
  'duplex',
  'exit',
  'fair-queue',
  'hold-queue',
  'ip',
  'ipv6',
  'lldp',
  'mac-address',
  'media-type',
  'mtu',
  'no',
  'pppoe',
  'pppoe-client',
  'priority-group',
  'service-policy',
  'shutdown',
  'speed',
  'standby',
  'tx-ring-limit',
  'zone-member',
];

const ciscoLineKeywords = [
  'access-class',
  'accounting',
  'databits',
  'default',
  'exec-timeout',
  'exit',
  'flowcontrol',
  'history',
  'ipv6',
  'logging',
  'login',
  'motd-banner',
  'no',
  'parity',
  'password',
  'privilege',
  'session-limit',
  'speed',
  'stopbits',
  'transport',
];

Prism.languages['cisco-ios'] = {
  comment: /^\s*!.*$/m,
  string: {
    greedy: true,
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
  },
  keyword: {
    pattern: new RegExp(
      ciscoKeywords
        .concat(ciscoConfKeywords)
        .concat(ciscoIntKeywords)
        .concat(ciscoLineKeywords)
        .join('(?=$|\\s)|') + '(?=$|\\s)',
      'm',
    ),
  },
  function: {
    pattern: /(?<=\|\s*)[^$\s]+/m,
  },
  operator: /\|/,
  no: {
    alias: 'important',
    pattern: /(^|\s)no($|\s)/m,
  },
  ipv4: {
    alias: 'class-name',
    pattern:
      /((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])/m,
  },
  ipv6: {
    alias: 'class-name',
    pattern:
      /((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9]?[0-9])){3}))|:)))(\/(6[0-4]|\d|[1-5]\d))?/,
  },
  number: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
};
