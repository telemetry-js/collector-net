'use strict'

// Resources:
// - https://sourceforge.net/p/net-tools/code/ci/master/tree/statistics.c
// - include/uapi/linux/snmp.h
// - https://tools.ietf.org/html/rfc1213 (RFC 1213, MIB-II)
// - https://tools.ietf.org/html/rfc2011 (RFC 2011, updates 1213, SNMPv2-MIB-IP)
// - https://tools.ietf.org/html/rfc2863 (RFC 2863, Interfaces Group MIB)
// - https://tools.ietf.org/html/rfc2465 (RFC 2465, IPv6 MIB: General Group)
// - https://tools.ietf.org/html/draft-ietf-ipv6-rfc2011-update-10: (MIB for IP: IP Statistics Tables)

module.exports = new Map([
  ['telemetry.net.tcp.established.count', { protocol: 'Tcp', column: 'CurrEstab' }],

  ['telemetry.net.tcp.resets.recv.count', { protocol: 'Tcp', column: 'EstabResets' }],
  ['telemetry.net.tcp.resets.sent.count', { protocol: 'Tcp', column: 'OutRsts' }],

  ['telemetry.net.tcp.segments.recv.count', { protocol: 'Tcp', column: 'InSegs' }],
  ['telemetry.net.tcp.segments.sent.count', { protocol: 'Tcp', column: 'OutSegs' }],
  ['telemetry.net.tcp.segments.retrans.count', { protocol: 'Tcp', column: 'RetransSegs' }],

  ['telemetry.net.tcp.errors.count', { protocol: 'Tcp', column: 'InErrs' }],
  ['telemetry.net.tcp.errors.checksum.count', { protocol: 'Tcp', column: 'InCsumErrors' }],

  ['telemetry.net.tcp.opens.active.count', { protocol: 'Tcp', column: 'ActiveOpens' }],
  ['telemetry.net.tcp.opens.passive.count', { protocol: 'Tcp', column: 'PassiveOpens' }],

  // Missing TCP metrics:
  // - AttemptFails
  // - MaxConn
  // - RtoAlgorithm
  // - RtoMax
  // - RtoMin

  ['telemetry.net.udp.datagrams.recv.count', { protocol: 'Udp', column: 'InDatagrams' }],
  ['telemetry.net.udp.datagrams.sent.count', { protocol: 'Udp', column: 'OutDatagrams' }],

  ['telemetry.net.udp.errors.count', { protocol: 'Udp', column: 'InErrors' }],
  ['telemetry.net.udp.errors.checksum.count', { protocol: 'Udp', column: 'InCsumErrors' }],

  ['telemetry.net.udp.rcvbuf.errors.count', { protocol: 'Udp', column: 'RcvbufErrors' }],
  ['telemetry.net.udp.sndbuf.errors.count', { protocol: 'Udp', column: 'SndbufErrors' }]

  // Missing UDP metrics:
  // - IgnoredMulti
  // - NoPorts
])
