---
title: 'Custom Android Roms - Open Sourcing My Mobile'
description: 'Talking about my experience getting a Google Pixel and trying several different roms'
pubDate: 'Jan 18 2025'
heroImage: '/BlogMedia/OssAndroidRoms'
---

#### My device of choice
The phone in the thumbnail! I went for a refurbished yellow Pixel 6 Pro, which I've been loving. I've had it for 1¾ years as of writing.

Unrelated: It does have one weird issue where the screen will go out sometimes, and I have to slap it to fix it. Not worth opening to fix, and I probably dropped it at some point.

I did specifically get this phone for the purpose of flashing with CalyxOS, which I didn't keep. I'll touch on that later. You have to make sure that the phone is bootloader unlocked (Pixels are great in that category) and isn't carrier locked.

#### Maybe a little important, OS choice
When I first got the phone, I installed CalyxOS. It's a very beginner-friendly, well-supported system. CalyxOS has native support for MicroG, a system to spoof/allow for Google services and account management.

After I used Calyx for long enough, I started wanting more: deeper customization, themes, UI modding, root stuff. But, as I learned the hard way, Calyx does not like being rooted.

I bricked the phone several times before realizing there were better options for my desires. That's why I switched over to LineageOS, another similar AOSP (Android Open Source Project) fork.

Lineage ended up being more of a tradeoff than anything. It was very easy to root and customize, but the support for MicroG just wasn't there. MicroG is very important; most apps rely on it for basic functions like GPS.

After bricking Lineage a few times trying to get MicroG working manually through rooting, I learned of another fork, LineageOS MicroG. Convenient!

This is the system I'm currently using, and it's been perfect for me. MicroG works amazingly and now has the added option of third-party, non-Google GPS providers. That's very important following the recent shutdown of Mozilla Location Services.

(Links)

[CalyxOS](https://calyxos.org/)

[LineageOS](https://lineageos.org/)

[LineageOS for MicroG](https://lineage.microg.org/)

### Using FOSS apps
On top of using a free OS, I also use almost entirely open apps.

Now I have to preface that using my phone as a normal phone is also important. I still have Gcam, Twitter, Reddit, etc., and my banking apps, but they are restricted on what they can do in the background. Nothing!

#### Fun rooted apps
There are some things that can only be done through root permissions, and this is already a custom ROM, so might as well!

##### AdAway
Not strictly a root app, but much better. AdAway is a system-wide ad blocker that modifies your hosts file. It also works to block trackers, which helps to finish off the few unwanted requests from non-free apps that use statistics.

#### FindMyDevice
An app that can intercept your SMS messages and return the device's coordinates. It also has other functions like locking and wiping. Very handy for allowing trusted persons to locate you/your device through non-internet-connected means.

#### Revanced Manager
A modding app that takes apps like YouTube (+music) and injects community-made features like SponsorBlock and ad-blocking.

#### Termux
It's a terminal... yeah, it's handy.

#### Fun non-rooted apps
There's a bunch of non-root apps as well, things like QKSMS, Signal, Feeder, IceRaven, etc. The main method of finding these apps is through F-Droid.

The ones mentioned above are some of my favorites, so...

##### QKSMS
A functional, beautiful SMS app that replaces the terrible built-in option.

##### Feeder
An RSS reader with sorting and notification capability. You can follow my RSS by copying [this](/rss.xml) link into it (or any other reader).

##### IceRaven
A seriously underrated mobile browser, fork of Firefox with experimental desktop add-on support. I've installed DarkReader, Decentraleyes, and uBlock Origin (lifesaver on mobile, even with AdAway).

Seriously, go check it out! It's the best mobile browser, period. It doesn't matter if you care about open source.

### Wrapping up
So that's it! Hopefully, this gives you the courage to go and try something like this for yourself. You'd be surprised how good it is.

Thanks for reading!
