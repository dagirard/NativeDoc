-----------------------------------------------
NativeDoc
-----------------------------------------------
NativeDoc is a source code documentation tool for LiveCode.

NativeDoc enables you to browse or generate a documentation from your source code. 

The documentation is extracted directly from the scripts and is directly browsable within the LiveCode IDE. 
Review, search and navigate through your documentation with NativeDoc.

# How to get started?

Download the repository, and extract it to your LiveCode extension folder.

You can locate the user plugins folder by doing so:
1. Open LiveCode preferences
2. In the Files & Memory preferences pane you can find the full path to the User Extensions folder. 
3. Open this folder in your system file browser.
4. If it doesn't exists, create a **"Plugins"** subfolder.
5. Extract NativeDoc into the **"Plugins"** subfolder.
6. Start LiveCode and the NativeGeometry plugin window will be displayed.

**Make sure that "rev_NativeDoc_Launcher.rev" file is at the root of the Plugins folder, LiveCode will automatically execute this file that will load NativeDoc.**

# Documentation

Once NativeDoc is opened, click "Help Center".

# Tests

NativeDoc doesn't have an automated test suite. For each release a set of manual tests cases need to be executed.

Before a push request can be made, you will have to perform manual tests with NativeDoc, and mark them as you didn't introduced a regression.

# How to contribute?

If you wish to contribute to development of NativeDoc, you must sign the [Contributor's Agreement](http://www.nativesoft.net/oss/contribute).  This agreement is required because the NativeDoc project is dual-licensed both under the GPLv3 and a commercial (closed-source) license; you need to give Damien Girard permission to use your submissions in this way.

**Note:** Any pull-requests from individuals who have not signed this agreement will be refused.

The workflow is a typical git workflow, where contributors fork the [dagirard/NativeDoc](https://github.com/dagirard/NativeDoc) repository, make their changes on a branch, and then submit a pull request.

**Note:** Before commit, you must run `"NativeDoc.res\Devel\NativeDocCleaner.rev"` in order to clean up development variables.

# License

NativeDoc is under the LGPL 3.0 license.
A complete copy is available in the file COPYING.TXT, COPYING.LESSER.TXT

NativeSoft, DataTree, NativeDoc, NativeGeometry, the NativeSoft logo, the DataTree logo, the NativeGeometry logo, the NativeDoc logo, NativeSpeak, are registered trademarks of Damien André Edouard Girard, registered in France and other countries.