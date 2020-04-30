Configuring the project for VMXpi
=================================

This guide will show the steps required to configure the project to be deployed to the VMXpi

.. tabs::

   .. tab:: Windows
      
      The upgrade required for deploying to the VMXpi can be installed online or through the provided usb in the collection. 
      
      **Online Only**
      
      `Git <https://git-scm.com/>`__ is required to grab the updated gradle files from github.
      
      Once installed open command prompt and run the following commands
      .. code-tab:: 
      
         git clone https://github.com/kauailabs/GradleRIO.git
         
         cd GradleRIO
         
         gradlew publishToMavenLocal -PlocalPublish
      
      