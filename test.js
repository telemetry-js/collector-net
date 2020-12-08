'use strict'

const test = require('tape')
const path = require('path')
const collector = require('.')
const snmpPath = path.join(__dirname, 'snmp_fixture')

test('emits all metrics by default', function (t) {
  t.plan(2)

  const c = collector({ snmpPath })
  const metrics = []
  const common = { unit: 'count', resolution: 60, tags: {} }
  const expect = (name, value) => Object.assign({ name, value }, common)

  c.on('metric', metrics.push.bind(metrics))

  c.ping((err) => {
    t.ifError(err, 'no ping error')
    t.same(metrics.map(simplify), [
      expect('telemetry.net.tcp.established.count', 3),

      expect('telemetry.net.tcp.resets.recv.count', 0),
      expect('telemetry.net.tcp.resets.sent.count', 544),

      expect('telemetry.net.tcp.segments.recv.count', 54560),
      expect('telemetry.net.tcp.segments.sent.count', 36770),
      expect('telemetry.net.tcp.segments.retrans.count', 348),

      expect('telemetry.net.tcp.errors.count', 0),
      expect('telemetry.net.tcp.errors.checksum.count', 0),

      expect('telemetry.net.tcp.opens.active.count', 194),
      expect('telemetry.net.tcp.opens.passive.count', 8907),

      expect('telemetry.net.udp.datagrams.recv.count', 1630),
      expect('telemetry.net.udp.datagrams.sent.count', 1633),

      expect('telemetry.net.udp.errors.count', 0),
      expect('telemetry.net.udp.errors.checksum.count', 0),
      expect('telemetry.net.udp.rcvbuf.errors.count', 0),
      expect('telemetry.net.udp.sndbuf.errors.count', 0)
    ])
  })
})

test('can filter metrics with wildcard', function (t) {
  t.plan(2)

  const c = collector({ snmpPath, metrics: ['telemetry.net.tcp.errors.*', '*.sent.count'] })
  const metrics = []
  const common = { unit: 'count', resolution: 60, tags: {} }
  const expect = (name, value) => Object.assign({ name, value }, common)

  c.on('metric', metrics.push.bind(metrics))

  c.ping((err) => {
    t.ifError(err, 'no ping error')
    t.same(metrics.map(simplify), [
      // Order is dictated by pattern order
      expect('telemetry.net.tcp.errors.count', 0),
      expect('telemetry.net.tcp.errors.checksum.count', 0),
      expect('telemetry.net.tcp.resets.sent.count', 544),
      expect('telemetry.net.tcp.segments.sent.count', 36770),
      expect('telemetry.net.udp.datagrams.sent.count', 1633)
    ])
  })
})

test('can filter metrics with single name', function (t) {
  t.plan(2)

  const c = collector({ snmpPath, metrics: ['telemetry.net.tcp.established.count'] })
  const metrics = []
  const common = { unit: 'count', resolution: 60, tags: {} }
  const expect = (name, value) => Object.assign({ name, value }, common)

  c.on('metric', metrics.push.bind(metrics))

  c.ping((err) => {
    t.ifError(err, 'no ping error')
    t.same(metrics.map(simplify), [
      expect('telemetry.net.tcp.established.count', 3)
    ])
  })
})

function simplify (metric) {
  delete metric.date
  delete metric.statistic

  return metric
}
