# collector-net

> **Collect net metrics (tcp, udp, ip and icmp). Linux only.**  
> A [`telemetry`](https://github.com/telemetry-js/telemetry) plugin.

[![npm status](http://img.shields.io/npm/v/telemetry-js/collector-net.svg)](https://www.npmjs.org/package/@telemetry-js/collector-net)
[![node](https://img.shields.io/node/v/@telemetry-js/collector-net.svg)](https://www.npmjs.org/package/@telemetry-js/collector-net)
[![Test](https://github.com/telemetry-js/collector-net/workflows/Test/badge.svg?branch=main)](https://github.com/telemetry-js/collector-net/actions)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

<details><summary>Click to expand</summary>

- [Usage](#usage)
- [Options](#options)
- [Install](#install)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

## Usage

```js
const telemetry = require('@telemetry-js/telemetry')()
const net = require('@telemetry-js/collector-net')

telemetry.task()
  .collect(net, { /* options */ })
```

## Options

_Yet to document._

## Install

With [npm](https://npmjs.org) do:

```
npm install @telemetry-js/collector-net
```

## Acknowledgements

This project is kindly sponsored by [Reason Cybersecurity Inc](https://reasonsecurity.com).

[![reason logo](https://cdn.reasonsecurity.com/github-assets/reason_signature_logo.png)](https://reasonsecurity.com)

## License

[MIT](LICENSE) © Vincent Weevers
