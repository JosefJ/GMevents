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
title: 'Ethereum Devcon 4'

# Description for this event. This will be rendered as a <meta> tag in the HTML,
# and displayed on the /events page. Keep it short.
# Linebreaks are ignored, but they _must_ start with two spaces.
description: When it comes to financial inclusion, major challenges include
  poor financial and digital literacy as well as the lack of identification
  documents. However, DLT can also be leveraged to restructure control over
  personal data, such as identification and empower users to participate in
  financial markets.


#####################
### EVENT DETAILS ###
#####################
# The name of the event you're creating.
# Ideally this is the same as the title.
name: 'Ethereum Devcon 4'

# There _needs_ to be one hyphen before each paragraph.
# Linebreaks are ignored, but they _must_ start with two spaces.
# Indentation is crucial:
# Two spaces before the hyphen, four spaces before the text. _No_ tabs allowed.
# Add or remove paragraphs as needed, but remember the hyphen before each entry.
synopsis:
  -
    What is Devcon all about?
     Devcon is our annual Ethereum family reunion. We at the Ethereum Foundation 
     host Devcon to educate and empower our community to build decentralized 
     applications, and to bring Ethereum protocols, tools, and culture to the world.
    
  -
    Who is Devcon for?    
     The name Devcon refers to a developer conference. While the majority of the 
     programming & content will be deeply technical, we think of developers as 
     builders of all kinds - designers, UX researchers, smart contract devs, 
     blockchain researchers, client implementers, test engineers, infrastructure 
     operators, community organizers, and even artists in the community.
  -
    Who is Devcon not for?
     Devcon is not a place for sharing or listening to investment promotions. 
     Participants focused on the financial value of ETH or other investments 
     will detract from the intended experience.

# The date should be in the format year-month-day (ISO 8601).
# Example: 2018-02-28
date: 2018-10-30
# The date when the event ends. Can be left empty or set to the same day the
# event starts.
endDate: 2018-11-02

# Set the time in 24 hours format, surrounded by quotes.
# _Only_ the starting time!
# Example: '18:00'
time: '12:00'
# Time when the event ends. Can be left empty.
endTime: '18:00'

# The URL where to acquire the tickets. Can be left empty.
tickets: https://devcon.ethereum.org

# If the entrance is free, set zero (0) as the price, or leave it empty.
# _Don't_ write the currency symbol (Euro symbol will be used).
price: 1025

# The name of the venue where the event will be held. Can be left empty.
venue: Prague Congress Center

# The address to link to a Google map. Please test the address on Google Maps.
# Example: Skalitzer Strasse 85-86, 10997 Berlin, Germany
address: 5. května 1640/65, 140 21 Praha 4, Czech Rep.

# The category of the event. Valid options:
# - conference
# - event
# - hackathon
# - panel
# - workshop
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
  #-
    # Required.
    # name: 
    # Can be left empty.
    # title: 
    # Can be left empty.
    # company: 
    # The full URL, including http(s)://. Can be left empty.
    # companyURL:
    # Just the twitter handle, without Twitter's URL, nor the '@' symbol.
    # Can be left empty.
    # twitter:
    # The full URL, including http(s)://. Can be left empty.
    # website:
    # The bio is a single line.
    # Linebreaks are ignored, but they _must_ start with two spaces.
    # bio: 
  #-
  #  name: Awesome on
  #  title: Title
  #  company: Company
  #  companyURL:
  #  twitter:
  #  website:
  #  bio:

### DON'T MAKE CHANGES BELOW THIS LINE! ###
---
<!-- ### DON'T MAKE CHANGES BELOW THIS LINE! ### -->

<Event-Content/>
