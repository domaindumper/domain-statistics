---
title: registrar
description: Registrar states details in 2 ways
---

# Registrar

We parse all registrar state information according to daily registered domains. And we all provide separate states for all registered domain registrars.


# Daily states

You can get daily states of registrar according to date by using below example:

`https://api.domaindumper.com/database/stats/2020/10/18/registrar.json`

In this date based information you will get : Registrar ID, Name, States and Share

# Full details for single registrar

In this state you will get all posible information for that registrar:

Example for registrar ID: 146 and Registrar Name: GoDaddy.com, LLC

`https://api.domaindumper.com/database/registrar/146/details.json`

In this information you will get: TLDs the registrar works with, Registered domains, Global market share, Signed zones, Upcoming deletes, Registrar ID, Official website