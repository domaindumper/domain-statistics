---
title: Getting Started
tags:
- help
- " start"
- Getting started
description: Getting started with Domain Dumper

---
# Getting Started
You can get free domains states and TLD price comparison from all registrars

## Domains states

You can get states of all registered domains from 1 January 1990. We cover 900 plus zone and update on every 24 hours

### How to use

It's simple, we update states in JSON files, you only need to curl from its data directory.

#### Example:

Get domains stats from 1 January 1990

```
curl https://api.domaindumper.com/database/stats/1990/01/01/stats.json
```

Get domains stats for today {{ site.time | date: '%d %B %Y' }}

```
curl https://api.domaindumper.com/database/stats/{{ site.time | date: '%Y/%m/%d' }}/stats.json
```

Note: Please change your year, month and date according to your need. The file name will be always same.


## TLD Price comparison

We do check all registrars to get the cheapest price in the market

### How to use

It's simple, we update states in JSON files, you only need to curl from its data directory.

#### Example:

Soon example will be available

`curl https://api.domaindumper.com/database/stats/1990/01/01/stats.json`