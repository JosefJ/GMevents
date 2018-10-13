---
####################
### INSTRUCTIONS ###
####################
# This file is a template to create new events. In order to use it, duplicate
# the whole folder (/template) as a new folder (I.E. /my-event-name) inside of
# the /events folder, using for the folder name _only_:
# - lowercase letters
# - hyphens/dashes (-) instead of spaces
# - alphanumeric characters ('a' to 'z', '0' to '9')
# and edit the README.md file inside that new folder just created.
#
# The name of the folder will be used on the URL. Example:
# https://blockchainweek.berlin/my-event-name
#
# _Don't_ rename the new file (README.md), only edit its content.
# _Don't_ remove any text before the colons at the beginning of each line,
# only edit what is after the colon. Example:
# Don't remove the word nor colon on 'description:'
#
# Every line starting with a hash symbol (#) is a comment. It will be ignored
# and can be safely removed, including these instructions.
###############


###########
### SEO ###
###########
# The title of the page, displayed by the browser on the title of the window.
# Ideally this is the same as the name of the event.
title: 'Building the free web - Prague Edition'

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: Eight technical showcases from projects that are decentralising the web.


#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: 'Building the free web - Prague Edition'

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    Building the free web. Prague edition.
  -  
    A technical exploration of a decentralised world.
    The web as we know it has proven to be reminiscent of Pandora's Box. An unprecedented experiment of human faith with outcomes we had yet to discover. The discussions on privacy, security, trust, personal data and governance are becoming fiercer by the day. The loudest critics believe the foundations of the internet were flawed to begin with.
  - 
    But things are changing.
  -  
    Cryptographers, protocol designers and distributed systems engineers have been doing R&D for decades on how computer science could liberate our world, the web and financial systems. With the inception of Bitcoin and Ethereum a larger part of the world is witnessing the first steps into a decentralised world.
    What are the next steps? Which teams are working on the cutting edge of cryptography and are solving unprecedented challenges in the field of cryptography, consensus mechanisms, protocol design, scalability, security and on-chain governance?
  - 
    During this event we will witness technical showcases from CTO's or technical leads from eight different projects. After each showcase there is room for a Q&A. There will be enough time for socializing and one on ones with the projects
  - 
    These eight projects will be attending:
  -list:
    - NuCypher [https://www.nucypher.com]
    - The Graph [https://thegraph.com/]
    - Mainframe [https://mainframe.com]
    - Chromapolis [https://chromapolis.com), presented by Chromawa]
    - Tomochain [https://tomochain.com]
    - Dfinity [https://dfinity.org]
    - Project 7: tba
    - Project 8: tba
  - 
    Program:
  -list:
    - '1200 - 1300 Walk-in, snacks and socializing'
    - '1300 - 1305 Opening of the event'
    - '1305 - 1330 Showcase #1'
    - '1330 - 1400 Showcase #2'
    - '1400 - 1430 Showcase #3'
    - '1430 - 1445 Short break'
    - '1445 - 1515 Showcase #4'
    - '1515 - 1545 Showcase #5'
    - '1545 - 1615 Showcase #6'
    - '1615 - 1630 Short break'
    - '1630 - 1700 Showcase #7'
    - '1700 - 1730 Showcase #8'
    - '1730 - 1800 One on ones, socializing, drinks'
  -
    The technical threshold to enjoy this event will be high. We encourage IT & blockchain developers, distributed systems engineers, cryptographers, security experts, protocol designers, peer to peer developers and tech savvy enthusiasts to join this event.
  - 
    Until November 3rd in Prague,
  -  
    The Innovation Department

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2018-11-03
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '12:00'
# Time when the event ends. Can be left empty.
endTime: '18:00'

# The URL where to akquire the tickets. Can be left empty.
tickets: https://bit.ly/2ynUQ8i

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue: VNITROBLOCK

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: 31 Tusarova, 170 00 Praha 7

# The category of the event. Valid options:
# - conference
# - event
# - hackathon
# - panel
# - workshop
# - party
# Use _only_ one, and don't capitalize.
category: event


#################
### SPEAKERS ####
#################
# There _needs_ to be one hyphen before each entry.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove speakers as needed, but remember the hyphen before each entry.
speakers:
  -
    # Required.
    name: Carlos E. Salazar

    # Can be left empty.
    title: Lead Front-end Developer

    # Can be left empty.
    company: Least Authority

    # The full URL, including http(s)://. Can be left empty.
    companyURL: https://leastauthority.com

    # Just the twitter handle, without Twitter's URL, nor the '@' symbol.
    # Can be left empty.
    twitter: cesalazar

    # The full URL, including http(s)://. Can be left empty.
    website: https://cesalazar.com

    # The bio is a single line.
    # Linebreaks are ignored, but they _must_ start with two spaces.
    bio: Here goes Carlos' description. Amet corporis laudantium obcaecati
      perferendis reiciendis rem perferendis. Magni qui reiciendis explicabo.
  -
    name: Vitalik Buterin
    title: Co-founder
    company: Ethereum
    companyURL: https://ethereum.org/
    twitter: VitalikButerin
    website: https://vitalik.ca
    bio: Vitalik Buterin is a Russian-Canadian programmer and writer primarily
      known as a co-founder of Ethereum and as a co-founder of Bitcoin Magazine.
  -
    name: Kathleen Breitman
    title: CEO
    company: Tezos
    companyURL: https://tezos.com/
    twitter: breitwoman
    website: http://kathleenbreitman.com
    bio: Co-founder at Tezos, a fresh implementation of a blockchain which can
      amend its protocol.

### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
