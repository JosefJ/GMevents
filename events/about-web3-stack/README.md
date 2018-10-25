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
title: Web3 Stack, What's Next for Developers?

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: Tech presentations & demos from Fluence, Swarm, Livepeer, NuCypher

#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: Web3 Stack, What's Next for Developers? 

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
   Join us for tech breakdowns on the latest developments across the decentralized stack solutions. 
   Swarm, Livepeer, NuCypher, and Fluence will have a technical overview presentation and/or a demo. 
  -
   You'll learn about the developments in data processing, decentralized databases, decentralized query layers, latest research topics around micropayment and other scaling techniques; censorship-resistant, trustless and economically sustainable solutions for digital communication modalities, chat, file transfer, email, forums, blogs & comments, privacy-preserving techniques for decentralized data sharing and storage, and other base-layers implementations.

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2018-10-30
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2018-10-30

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '18:00'
# Time when the event ends. Can be left empty.
endTime: '21:00'

# The URL where to akquire the tickets. Can be left empty.
tickets: https://web3stack-prague.eventbrite.com

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (EUR symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue: Ackee office

# The address to link to a Google map. Please test the address on Google Maps.
# Example: 5. května 1640/65, 140 21 Praha 4
address: 'Karolinská 650 1, 186 00 Prague 8'

# The category of the event. Valid options:
# - conference
# - event
# - hackathon
# - workshop
# - party
# Use _only_ one, and don't capitalize.
category: workshop


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
    name: Alexander Demidko
    title: Co-Founder & CRO
    company: Fluence
    companyURL: https://fluence.one
    website: https://github.com/xdralex
    twitter: https://twitter.com/xdralex
    bio: Experienced distributed systems engineer with deep understanding of computer science and game theory. Previously he's built a petabyte analytics platform at Metamarkets and ML infrastructure at Stitch Fix.
  -
    name: Viktor Tron
    title: Swarm Lead
    company: Swarm
    companyURL: https://swarm-guide.readthedocs.io/en/latest/#
    website: https://github.com/zelig
    twitter: https://twitter.com/zeligf
    bio: Viktor Tron is team lead for the swarm project and has worked for the Ethereum Foundation since the start. He advocates open source, open data and open collaboration models, currently working on web3.

  -
    name: Justin Myles Holmes
    title: Engineer
    company: NuCypher
    companyURL: https://www.nucypher.com/
    website: https://github.com/jMyles
    twitter: https://twitter.com/jMylesHolmes
    bio: There isn’t a whole lot about Justin that makes sense, or where he lives likewise. Like so many young men of his generation, Justin writes Python. Justin has a degree in political science from SUNY New Paltz. 

  -
    name: Eric Tang
    title: Founder & CTO
    company: Livepeer
    companyURL: https://livepeer.org/
    website: https://github.com/ericxtang
    twitter: https://twitter.com/ericxtang
    bio: Eric, a Founder of Livepeer, an open source video infrastructure services, built on the Ethereum blockchain. He will show a demo and share the latest research topics around micropayment and other scaling techniques. 
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
