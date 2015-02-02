#StopScroll Safari Extension
This script adds a "pause" button to the context menu (the menu that shows up when you right click) on every page. You can use this to lock the scrolling of the page in one place to prevent it from moving.

When you are finished, you can unlock it by right-clicking again and selecting "Resume Scrolling" from the menu.

![Pause Scrolling](http://i.stack.imgur.com/RdDeF.png)

#Installation
You can install by downloading and opening the `.safariextz` file, which will prompt you to add the extension to Safari.

If you'd like to modify it to suit your own needs, you can clone this repository and add the extension `.safariextension` to the end of the `src` folder (in other words, edit the name of the folder, and add `.safariextension` to the end of it; after you do so, the folder should be called `src.safariextension`).

File management gets wonky with git if I try to keep this extension on there, so I keep all of the source files in `src`, but the folder has to have the `.safariextension` extension to be able to open in Extension Builder.

Then, [open Extension Builder](https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/UsingExtensionBuilder/UsingExtensionBuilder.html), select "Add extension..." from the "+" menu in the lower left corner, and select the `src.safariextension` folder:

![How to add to Extension Builder](http://i.stack.imgur.com/MfihG.gif)

You can then modify the files in the `src.safariextension` folder and reload to see the changes as needed.

This extension was inspired by [this post](http://apple.stackexchange.com/questions/170021/how-to-disable-the-scrolling-on-osx-safari) on [Ask Different](http://apple.stackexchange.com).
