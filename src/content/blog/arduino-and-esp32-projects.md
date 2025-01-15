---
title: "Dev Boards Galore!"
description: "Lorem ipsum dolor sit amet"
pubDate: "Jan 13 2024"
heroImage: "/devboards-galore.avif"
---
Dev boards are designed as a tool for engineers to prototype simple electronics.. Butttt they're also tons of fun for random projects.

Also, note that I don't have much experience, and this article is based on the little amount of messing around I've done.

#### Arduino vs. ESP: What's the Difference?

Without getting into the nitty-gritty details distinguishing the duo of dev boards, ESP32s are the more powerful and flexible option. Arduinos are easier for beginners, and some support native communication over the USB-C port, making custom input devices such as keyboards much easier to implement.

ESP boards support more nuanced and advanced features such as:

- Built-in Wi-Fi, including hotspotting and server compatibility
- Lots of storage, usually 4 megabytes. It doesn't sound like a lot, but compared to 64 KB, the possibilities are endless
- A much more powerful processor, allowing you to do advanced tasks like running a touchscreen UI
- The standard PlatformIO add-on ecosystem supports it, making development so much better.

I might be a little bit partial to ESP32 boards, but I still have lots of Arduino stuff and love what they do!

Fun Fact: It's actually standard to program ESP32s with the Arduino library and style.

Enough prefixing fluff; let's get into some cool projects I've made using the Arduino boards.

#### *The* Arduino Project

##### Life-Sized Outdoor Stranger Things LED Wall

Mouthful, I know. I put up 100 WS2811 LEDs that I got off Amazon, painted some "removable" (it wasn't) paint on the wall, and did some coding.

![A bunch of lights and letters strung up on a wall, Stranger Things style](/BlogMedia/StrangerThingsLeds.avif)

*Nerdometer maxed!*

The wire you can see on the left is a cut-up Cat5e Ethernet cord. The actual board and power source are tucked away in the corner, "weatherproofed" with a cooler and a brick to weigh it down. Hey, it survived a Colorado snowstorm—good enough for me!

Oh, yes. Of course, it spells things out and flashes the lights.

#### A Very IoT Christmas

Then came the next decoration-filled holiday; those LEDs were calling my name from the corner of my desk. So what did I do?

Well, I naturally made a website-controlled Christmas tree that anyone in the house could set to their liking. With awesome animated effects and a simple, Wi-Fi-connected website, it delighted my family and took our tree up a level.

It *was* super cool... and then it fried. I used a different power brick for the project, and something fried it beyond repair. Yeah, that happens. I also lost literally every picture, so... take my word for it? I'll publish the code to my GitHub one of these days. Yeah, sorry.
