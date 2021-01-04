![CI](https://github.com/rundocs/jekyll-rtd-theme/workflows/CI/badge.svg?branch=develop)

Domain Dumper daily states of domains

API for stats for daily registered domains. Here you can get daily updates for how many domains registered on every TLD. we are updating our files in every 24 hours,

# How to use
It's simple, we update states in JSON files, you only need to curl from its data directory.

# Example:

Get domains stats from 15 July 2020

`curl https://api.domaindumper.com/database/stats/2020/07/15/stats.json`

Please change your year, month and date according to your need. The file name will be always same.

# Need premium services

if you need premium services like domains Whois OR Free daily registered domain names, then you can find this information our other website: https://www.whoisextractor.in/