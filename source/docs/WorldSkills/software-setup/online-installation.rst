.. note:: This setup is for Java/C++ only

Online Installer 
================

.. caution:: The online installation will download approximately 1.3GB worth of data, please maintain a stable connection while downloading

.. tabs::

   .. tab:: Windows
		
      .. warning:: Windows 7: You **must** install the standalone version of .NET Version 4.62+ which can be found `here <https://support.microsoft.com/en-us/help/3151800/the-net-framework-4-6-2-offline-installer-for-windows>`__. Before preceding!
         
      Download the installer (32bit or 64bit) `from WPI <https://github.com/wpilibsuite/allwpilib/releases>`__. 
		
      .. image:: images/windows/installer-1.png
         :align: center
      
      Installing for *All Users* will require admin privileges and install for all users on the machine.
      
      .. note:: Software will be installed to ``C:\Users\Public\wpilib\YYYY``. YYYY Corresponds to the currently supported year.
   
      **Download VS Code**
      
         Due to licensing reasons with VS Code, the installer does not contain it bundled in. To overcome this hit the *Select/Download VS Code* button.
      
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
      
         -  *Visual Studio Code* - The preferred and supported IDE for robot code development. 
         -  *C++ Compiler* - Toolchains required for building C++ code.
         -  *Java JDK/JRE* - Specific version of the JDK/JRE that is used to build code. 
         -  *Gradle* - Specific version of Gradle used for building and deploying Java or C++ code
         -  *WPILib Tools* - Tools used for robot enhancement
         -  *WPILib Dependencies* - OpenCV, etc.
         -  *VS Code Extensions* - WPILib extensions for robot code development
         
      .. important:: The installer creates a separate version of VS Code for robotics development, even if VS Code is already installed locally. This is done to prevent workflows from breaking.
         
   .. tab:: macOS
   
      .. note:: This section and all macOS examples was completed and tested using macOS High Sierra
      
      The macOS installation requires multiple individual steps to be completed.
      
      **VS Code Download**
      
         VS Code needs to be installed before the extensions are installed. The preferred version of VS Code is ``1.41.1`` which can be downloaded `here <https://update.code.visualstudio.com/1.41.1/darwin/stable>`__. This will automatically download a file called ``VSCode-darwin-stable.zip``. Navigate to the downloads folder and drag the ``Visual Studio Code`` into the **Applications** folder.
         
         .. figure:: images/macOS/online-installation-1.png
            :align: center
                      
         After dragging to the Applications folder the VS Code Icon will be visible

         .. image:: images/macOS/online-installation-2.png
            :align: center
            
      **WPILib Download**
      
         The latest release for the WPILib can be found `here <https://github.com/wpilibsuite/allwpilib/releases>`__ 
         
         Chose the macOS version ``WPILib_Mac-2020.3.2.tar.gz``
         
         .. figure:: images/macOS/online-installation-3.png
            :align: center
         
         Double click on the ``WPILib_Mac-2020.3.2.tar`` to remove the tar extension. There should now be a folder as shown below.

         .. figure:: images/macOS/online-installation-4.png
            :align: center
            
         Open the terminal and run these commands
         
         .. code-block:: bash
         
            mkdir wpilib/2020
            
            cp -R ~/Downloads/WPILib_Mac-2020.3.2/ ~/wpilib/2020
            
         This will create the appropriate directories for WPILib and move the contents of ``WPILib_Mac-2020.3.2`` to the ``~/wpilib/2020`` folder. When done the folder structure should look like this.
         
         .. figure:: images/macOS/online-installation-5.png
            :align: center
            
         The tools need to be update so they can be used. Run the commands below to do so.
         
         .. code-block:: bash
         
            cd ~/wpilib/2020/tools
            
            python ToolsUpdater.py 
            
         An example of using the terminal is shown below.
         
         .. image:: images/macOS/online-installation-6.png
            :align: center
            
      **Installing Extensions**
      
         For VS Code to work properly the WPILib extensions need to be installed. Open VS Code and use the shortcut ``Cmd-Shift-P`` to open the command pallet. Type in the command ``Extensions: Install from VSIX``. 

         .. figure:: images/macOS/online-installation-7.png
            :align: center
         
         Navigate to the ``~/wpilib/2020/vsCodeExtensions`` folder, select ``Cpp.vsix`` and hit install. 
         
         .. figure:: images/macOS/online-installation-8.png
            :align: center
            
         Repeat this step for all the vsix files located in ``~/wpilib/2020/vsCodeExtensions``.
         
         **They must be completed in this order:**
         
         1. Cpp.vsix
         2. JavaLang.vsix
         3. JavaDeps.vsix
         4. JavaDebug.vsix
         5. WPILib.vsix
         
         .. note:: On the bottom right of the VS Code window popups will show saying if the installation is complete. Wait until there is a completed popup before preceding with the next extension. Also when installing the JavaLang.vsix there may be an error shown. **This should be ignored for now**
         
      **Getting VS Code to use Java 11**

         VS Code needs to be pointed to where the WPILib Java Home is. This is simply done by running the following command ``WPILib: Set VS Code Java Home to FRC Home``. 
         
         .. image:: images/macOS/online-installation-9.png
            :align: center
      
      **What was just Installed**
      
         -  *Visual Studio Code* - The preferred and supported IDE for robot code development. 
         -  *C++ Compiler* - Toolchains required for building C++ code.
         -  *Java JDK/JRE* - Specific version of the JDK/JRE that is used to build code. 
         -  *Gradle* - Specific version of Gradle used for building and deploying Java or C++ code
         -  *WPILib Tools* - Tools used for robot enhancement
         -  *WPILib Dependencies* - OpenCV, etc.
         -  *VS Code Extensions* - WPILib extensions for robot code development 
         
   .. tab:: Linux
   
      .. note:: This section and all Linux examples was completed and tested using Ubuntu Desktop 20.04 LTS
      
      The Linux installation requires multiple individual steps to be completed. 
      
      **Installing VS Code**