Titan Status Light
=====================

Below are the various status light blink codes and the meaning behind them.

.. list-table:: Status Light Blink Codes
   :widths: 50 25 25 25
   :header-rows: 1
   :align: center
   
   * - Function
     - Blink 1
     - Blink 2
     - Blink 3
   * - Titan Off
     - .. image:: images/titan-status-light-5.png
     - .. image:: images/titan-status-light-5.png
     - .. image:: images/titan-status-light-5.png
   * - No Communication 
     - .. image:: images/titan-status-light-1.png
     - .. image:: images/titan-status-light-1.png
     - .. image:: images/titan-status-light-1.png
   * - CAN Detected, Robot Disabled 
     - .. image:: images/titan-status-light-1.png
     - .. image:: images/titan-status-light-2.png
     - .. image:: images/titan-status-light-3.png 
   * - CAN Detected, Robot Enabled 
     - .. image:: images/titan-status-light-4.png
     - .. image:: images/titan-status-light-4.png
     - .. image:: images/titan-status-light-4.png
   * - Fault Detected  
     - .. image:: images/titan-status-light-6.png
     - .. image:: images/titan-status-light-6.png
     - .. image:: images/titan-status-light-6.png
     
Titan Off
---------

When the Titan is off, there will be no flashing light. If the Titan is on, and the light is off, there could be a problem with the microcontroller or the LED. 

No Communication
----------------

Is typically seen during bootup. When the Titan receives any CAN packet that is not blocked by the filter, the flashing blue will switch over to CAN Detected. If the light is still flashing blue when it should be in CAN Detected, either the CAN ID on the Titan is set incorrectly or the CAN ID set in the robot code is incorrect. 

.. important:: If the CAN ID on the Titan is changed through the config app, the Titan needs to be rebooted for the configuration on the Titan to be set correctly. 

CAN Detected, Robot Disabled
----------------------------

The flashing lights of RED, GREEN, BLUE, resembles that the CAN bus is detected; however, the robot is disabled. To get out of this state, the robot must be enabled via the driver station. If the robot is enabled and the status light is still showing this state, there is no communication between the driver station and the VMXpi.

CAN Detected, Robot Enabled
---------------------------

The blinking purple displays that the robot is enabled and allows for the motors to be moved. 

Fault Detected
--------------

This state will occur if there is a fault error on one of the gates for driving the motors. This could be but not limited to: thermal shutdown, current overflow, voltage cutoff, and gate failure. 