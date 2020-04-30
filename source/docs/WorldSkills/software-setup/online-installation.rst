.. note:: This setup is for Java/C++ only

Online Installer 
================

.. caution:: The online installation will download approximately 1.3GB worth of data, please maintain a stable conneciton while downloading

.. tabs::

   .. tab:: Windows
		
      .. warning:: Windows 7: You **must** install the standalone version of .NET Version 4.62+ which can be found `here <https://support.microsoft.com/en-us/help/3151800/the-net-framework-4-6-2-offline-installer-for-windows>`__. Before preceding!
         
      Download the installer (32bit or 64bit) `from WPI <https://github.com/wpilibsuite/allwpilib/releases>`__. 
		
      .. image:: images/windows/installer-1.png
         :align: center
      
      Installing for *All Users* will require admin privileges and install for all users on the machine.
      
      .. note:: Software will be installed to ``C:\Users\Public\wpilib\YYYY``. YYYY Corresponds to the currently suppored year.
   
      **Download VS Code**
      
         Due to licensing reasons with VS Code the installer does not contain it bundled in. To overcome this hit the *Select/Download VS Code* button.
      
         .. image:: images/windows/installer-2.png
            :align: center
         
         This will open up the selector tool.

         .. image:: images/windows/installer-3.png
            :align: center
         
         Select the *Download* option and VS Code will be downloaded.
         
         .. image:: images/windows/installer-4.png
            :align: center
         
         Once VS Code is downloaded the window will auto change back to the installer window and *Execute Install* can be run. 
         
         .. image:: images/windows/installer-5.png
            :align: center
      
      **What was just Installed**
      
         -  *Visual Stuido Code* - The prefered and suppored IDE for robot code development. 
         -  *C++ Compiler* - Toolchains required for building C++ code.
         -  *Java JDK/JRE* - Specific version of the JDK/JRE that is used to build code. 
         -  *Gradle* - Specific version of Gradle used for building and deploying Java or C++ code
         -  *WPILib Tools* - Tools used for robot enhancement
         -  *WPILib Dependencies* - OpenCV, etc.
         -  *VS Code Extensions* - WPILib extensions for robot code development
         
      .. important:: The installer creates a seperate version of VS Code for robotics development, even if VS Code is already installed locally. This is done to prevent workflows from breaking.
         
   .. tab:: macOS
   
      This part needs to be written and tested on a apple device
   
   .. tab:: Linux
   
      This part needs to be written and tested on a linux device. Most likely will done through a VM