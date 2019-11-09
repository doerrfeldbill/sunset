# sunset 🌇
**sunset** is a super simple website that uses open data APIs to display the sunset time in your local timezone. 
I built it to demo an introductory lesson on practical API use cases. 
This is a personal project and not intended for commercial use. [View it here](https://doerrfeldbill.github.io/sunset/).

![](https://github.com/doerrfeldbill/sunset/blob/master/sunset-preview.png)

## About
**sunset** demonstrates how to use simple HTTP GET calls to open data APIs. 
First, the code calls the [GeoIPLookup.io](GeoIPLookup.io) API to return lattitude and longitude coordinates based on the caller's IP address.
Next, it uses passess these coordinates as parameters in a call to the [Sunrise-Sunset API](https://sunrise-sunset.org/api).
The Sunrise-Sunset API returns the UTC timestamp for the sunset time.
Lastly, **sunset** converts UTC into local time. It uses some JS functions to do that, and some janky slice methods to output what we want to see.

## Disclaimer
This was made for fun on vacation and is not that great. Since **sunset** depends on the caller's IP address, mobile use may return an incorrect time.
Code is not elegant, it's just for sample purposes.
All credit to Sandy, who asked me to make a website that told her when the sun was setting. 
**If you use this site you must enjoy a sunset while sipping on a drink.**

## Blog Post
I'm writing a blog post about this! Stay tuned. 
