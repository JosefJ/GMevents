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
title: 'REDCON - A New Language for Smart Contracts'

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: 'Red Language and Red/C3 are much simpler and safer way to build smart contracts and Dapps. Red is the first full-stack open-source programming language, on a mission is to fight software complexity, especially in the Ethereum blockchain.'


#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: "REDCON - A New & Better Language for Smart Contracts & Dapps"

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    "What's Redcon about? ... Redcon is for anyone interested in open-source, full-stack, domain-specific languages built using Red Language or any of its dialects. Red's mission is to fight software complexity in favor of simple and elegant solutions. We'll be having a casual meetup-style event, with food and adult beverages."
  -
    "What will we be discussing? ... Red/C3, Red's domain-specific language for making Ethereum's smart contracts safer and simpler ||| Your needs as the user ||| The latest version of Red Wallet ||| How Red's DSLs build fantastic Dapps"
  -
    "You'll get ... Food & drinks ||| Raffle prizes from Leatherman, PacSafe, Travelon, and Victorinox ||| Input on Red tooling and features ||| The change to join and enjoy the awesome Red community"
  -
    "Who will be there? ... Red's designer, Nenad Rakocevic, will be there for a discussion of the language and its capabilities ||| A Q&A session, presentations and demos are also on the agenda. ||| Also present will be Gregg Irwin, leading governance and language design for the Red Foundation; and also core contributors to Red's creation and design."

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2018-11-03

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '11:00'
# Time when the event ends. Can be left empty.
endTime: '17:00'

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (EUR symbol will be used).
price: 0

# The name of the venue where the event will be held. Can be left empty.
venue: Hotel Olšanka, 2nd Floor Conference Room

# The address to link to a Google map. Please test the address on Google Maps.
# Example: 5. května 1640/65, 140 21 Praha 4
address: Praha 3, Táboritská 23

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
    name: Nenad Rakocevic

    # Can be left empty.
    title: Creator of Red Language

    # The full URL, including http(s)://. Can be left empty.
    companyURL: https://www.red-lang.org/

    # Just the twitter handle, without Twitter's URL, nor the '@' symbol.
    # Can be left empty.
    twitter: dockimbel

    # The full URL, including http(s)://. Can be left empty.
    website:

    # The bio is a single line.
    # Linebreaks are ignored, but they _must_ start with two spaces.
    bio: With over 30 years of programming experience, Rakocevic founded the Red programming language in 2011 to fight back against growing complexity in the software world.
  -
    name: Gregg Irwin
    title: Governance and Operations
    company: Red Foundation
    companyURL: https://www.red-lang.org/
    twitter: 
    website: 
    bio: Five of the top ten banks in the U.S. have used software he developed; a member of the ACM and IEEE Computer Society for almost 20 years.

### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
