---
title: Domains stats
tags:
- help
- " start"
- Getting started
description: Get daily domains states

---
# Domains stats

## Example

### Get domains stats from 1 January 1990


`curl https://api.domaindumper.com/database/stats/1990/01/01/stats.json`

### Get domains stats for today {{ site.time | date: '%d %B %Y' }}

`curl https://api.domaindumper.com/database/stats/{{ site.time | date: '%Y/%m/%d' }}/stats.json`

Note: Please change your year, month and date according to your need. The file name will be always same.

# Need premium services

if you need premium services like domains Whois OR Free daily registered domain names, then you can find this information on our other website: [https://www.whoisextractor.in/](https://www.whoisextractor.in/ "Whoisextractor")