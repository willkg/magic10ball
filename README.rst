=============
Magic 10 Ball
=============

The magic 10 ball is your decision making system for superior decision
making.

But seriously, this is a "toy" project fiddling with building B2G
apps. Turns out it's just like writing web sites and it was both
pretty easy and really interesting.


Why "magic 10 ball"?
====================

10 octal = 8 decimal

for some reason, Will thought that was clever.


History
=======

December 12th, 2012

    Will redid magic10ball and based it on the `mortar tab template
    <http://mozilla.github.com/mortar-tab-view/>`_. Then fixed some
    stupid things with it.

May 4th, 2012

    Ricky and I threw this together in a few hours one morning at a hack
    half day during a webdev work week with no prior experience with Gaia
    or B2G.

    I'm not sure what the future of this project is. I might turn it into
    a real app in the app marketplace when I have some more time to look
    into that side of things.


Me too!
=======

If you're interested in building B2G apps, definitely check out
the following links:

* https://wiki.mozilla.org/Gaia
* https://wiki.mozilla.org/Gaia/Hacking

Also:

* https://developer.mozilla.org/en/Mozilla/Boot_to_Gecko
* https://developer.mozilla.org/en/Apps/Getting_Started
* https://developer.mozilla.org/en/Mozilla/Boot_to_Gecko/Writing_a_web_app


How to hack
===========

This uses volo. So, launch the site in volo and fiddle with things in
``www/``, ``www/css/``, and ``www/js/`` and that's pretty much where
everything is.

::

    $ volo serve


How to deploy
=============

::

    $ volo build
    $ volo ghdeploy
