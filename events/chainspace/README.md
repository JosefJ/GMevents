---
####################
### INSTRUCTIONS ###
####################
# This file is a template to create new events.
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
title: 'Chainspace - Decentralised infrastructure on a planetary scale'

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: "For the first time ever Chainspace team will be presenting their project to the public. You'll hear about their peer reviewed smart-contract solution addressing some of the key issues of blockchain infrastructure, such as scalability, speed, and privacy."


#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: 'Chainspace - Decentralised infrastructure on a planetary scale'

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    "For the first time ever Chainspace team will be presenting their project to the public. You'll hear about their peer reviewed smart-contract solution addressing some of the key issues of blockchain infrastructure, such as scalability, speed, and privacy."
  -
    "The event will take place right after the first day of Devcon4 at one of the most authentic places in Prague - [Kasárna Karlín](https://www.kasarnakarlin.cz/). Drinks and food will be provided."
  -
    "Agenda:"
  - list:  
    - "18:30 - 19:30 Walk-in & Networking"
    - "19:30 - 19:45 Opening of the evening"
    - "19:45 - 20:30 Chainspace Project Presentation + Q&A by George Danezis"
    - "20:30 - 22:00 Networking"
  -
    "Transportation options from Devcon4 venue to Kasárna Karlín: [Google Maps](https://www.google.com/maps/dir/Prague+Congress+Centre,+5.+kv%C4%9Btna+1640%2F65,+140+21+Praha+4,+Czechia/Kas%C3%A1rna+Karl%C3%ADn,+Prvn%C3%ADho+pluku,+Prague+8-Karl%C3%ADn,+Czechia/@50.0750415,14.400861,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x470b9464c186eb79:0x4d26855708eb61f7!2m2!1d14.428506!2d50.062033!1m5!1m1!1s0x470b94bd05a920d1:0xb4ab62b11de22eb4!2m2!1d14.4433391!2d50.0899071!3e0)"
  -
    "Event partner: [Lemniscap](https://lemniscap.com)"

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2018-10-30
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2018-10-30

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '18:30'
# Time when the event ends. Can be left empty.
endTime: '22:00'

# The URL where to akquire the tickets. Can be left empty.
tickets: https://www.eventbrite.com/e/lemniscap-presents-chainspace-decentralised-on-a-planetary-scale-tickets-51621499294

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (EUR symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue: Kasárna Karlín

# The address to link to a Google map. Please test the address on Google Maps.
# Example: 5. května 1640/65, 140 21 Praha 4
address: Prvního pluku 20, 186 00 Praha 8, Czechia

# The category of the event. Valid options:
# - conference
# - event
# - hackathon
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
    name: George Danezis

    # Can be left empty.
    title: Co-Founder

    # Can be left empty.
    company: Chainspace

    # The full URL, including http(s)://. Can be left empty.
    companyURL: https://chainspace.io

    # Just the twitter handle, without Twitter's URL, nor the '@' symbol.
    # Can be left empty.
    twitter: GDanezis

    # The full URL, including http(s)://. Can be left empty.
    website: 

    # The bio is a single line.
    # Linebreaks are ignored, but they _must_ start with two spaces.
    bio: George Danezis is the former head of the Information Security Research Group at UCL. He co-designed and prototyped RsCoin, an experimental scalable cryptocurrency, and did his doctorate at Cambridge under Ross Anderson, followed by a stint at Microsoft Research.

### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
