Robot    
=====

.. tabs::
   
   .. tab:: Java
      
      There are multiple sections of ``Robot.java``, below discusses each one and the purpose
      
      **Title Block**
      
      .. code-block:: java
         :linenos:
         
         /*----------------------------------------------------------------------------*/
         /* Copyright (c) 2017-2019 FIRST. All Rights Reserved.                        */
         /* Open Source Software - may be modified and shared by FRC teams. The code   */
         /* must be accompanied by the FIRST BSD license file in the root directory of */
         /* the project.                                                               */
         /*----------------------------------------------------------------------------*/
         
      
      .. hint:: The title block is important as it displays licenses, authors, last edited dates, etc...
      
      Some nice things to have in any title block would be the ``author`` and ``date``. This would provide the next person coming to see who wrote what and when they wrote it.
      
      
      **Imports**
      
      The import section holds all the imports of various libraries that are required for use in the current class.

      .. code-block:: java
         :linenos:
      
         package frc.robot;

         import edu.wpi.first.wpilibj.TimedRobot;
         import edu.wpi.first.wpilibj2.command.Command;
         import edu.wpi.first.wpilibj2.command.CommandScheduler;
         
      **Class Declaration**
      
      In every Java program the class needs to be declared. Below is the class declaration for the ``Robot.java`` class.
      
      .. code-block:: java
         :linenos:
         
         /**
          * The VM is configured to automatically run this class, and to call the functions corresponding to
          * each mode, as described in the TimedRobot documentation. If you change the name of this class or
          * the package after creating this project, you must also update the build.gradle file in the
          * project.
          */
         public class Robot extends TimedRobot {
         
      **Declaring Objects**

      This section declares objects that are required for use later in the class.
      
      .. code-block:: java
         :linenos:
      
         private Command m_autonomousCommand;

         private RobotContainer m_robotContainer;
         
      **Robot Initialization**
      
      This is where any code is to be run when the robot is first booting up.
      
      .. code-block:: java
         :linenos:
      
         /**
           * This function is run when the robot is first started up and should be used for any
           * initialization code.
           */
         @Override
         public void robotInit() {
            // Instantiate our RobotContainer.  This will perform all our button bindings, and put our
            // autonomous chooser on the dashboard.
            m_robotContainer = new RobotContainer();
         }
         
      **Robot Periodic**
      
      .. warning:: Code here is run every robot packet and is not controlled by the **Enable/Disable** buttons. 
      
      Robot periodic is a good section to add code for diagnostics or anything that requires constant polling.
      
      .. code-block:: java
         :linenos:
      
         /**
           * This function is called every robot packet, no matter the mode. Use this for items like
           * diagnostics that you want ran during disabled, autonomous, teleoperated and test.
           *
           * <p>This runs after the mode specific periodic functions, but before
           * LiveWindow and SmartDashboard integrated updating.
           */
         @Override
         public void robotPeriodic() {
           // Runs the Scheduler.  This is responsible for polling buttons, adding newly-scheduled
           // commands, running already-scheduled commands, removing finished or interrupted commands,
           // and running subsystem periodic() methods.  This must be called from the robot's periodic
           // block in order for anything in the Command-based framework to work.
           CommandScheduler.getInstance().run();
         }
         
      **Disabled Initialization**
      
      When ever the robot is put into a disabled state it enters here first. 
      
      .. code-block:: java
         :linenos:
      
         /**
           * This function is called once each time the robot enters Disabled mode.
           */
         @Override
           public void disabledInit() {
         }
         
      **Disabled Periodic**
      
      Code that will run every robot packet when the robot is disabled.
      
      .. code-block:: java
         :linenos:
      
         @Override
         public void disabledPeriodic() {
         }
         
      **Autonomous Initialization**
      
      Code that is run at the start of an autonomous run.
      
      .. code-block::
         :linenos:
         
         /**
           * This autonomous runs the autonomous command selected by your {@link RobotContainer} class.
           */
         @Override
         public void autonomousInit() {
           m_autonomousCommand = m_robotContainer.getAutonomousCommand();

           // schedule the autonomous command (example)
           if (m_autonomousCommand != null) {
              m_autonomousCommand.schedule();
           }
         }
         
      **Autonomous Periodic**
      
      Code that is run every robot packet during the autonomous run.
      
      .. code-block: java
         :linenos:
         
         /**
           * This function is called periodically during autonomous.
           */
         @Override
         public void autonomousPeriodic() {
         }
         
      **Teleop Initialization**
      
      Code that is run at the start of a teleoperated run.
      
      .. code-block:: java
         :linenos:
         
         @Override
         public void teleopInit() {
            // This makes sure that the autonomous stops running when
            // teleop starts running. If you want the autonomous to
            // continue until interrupted by another command, remove
            // this line or comment it out.
            if (m_autonomousCommand != null) {
               m_autonomousCommand.cancel();
            }
         }
         
      **Teleop Periodic**
      
      Code that is run every robot packet when in a periodic run.
      
      .. code-block:: java
         :linenos:
         
         /**
           * This function is called periodically during operator control.
           */
         @Override
         public void teleopPeriodic() {
         }
         
      
      **Test Initialization**
      
      Code that is run at the start of a test run.
      
      .. code-block:: java
         :linenos:
         
         @Override
         public void testInit() {
            // Cancels all running commands at the start of test mode.
            CommandScheduler.getInstance().cancelAll();
         }
         
      
      **Test Periodic**
      
      Code that is run every robot packet when in a test run.
      
      .. code-block:: java
         :linenos:
         
         /**
           * This function is called periodically during test mode.
           */
         @Override
         public void testPeriodic() {
         }
      