

1.  Choose a channel to intercept. For this simulation, you will act as the **Attacker**.

2.  Click **"Start"** to begin the simulation.

3.  Observe the communication path. You will see the connection rerouted from the **Client** to the **Attacker's** machine and then to the **Server**. The terminal at the bottom will display connection status messages.

4.  Click **"Next"** to initiate packet transmission.

5.  Watch as a packet from the **Client** is intercepted by the **Attacker**. The intercepted packet's contents will be displayed in the terminal. With this packet, the **Attacker** can now impersonate the **Client**.

6.  To replay the intercepted packet, click the corresponding port number in the "Respond" section of the **Attacker's** computer view.

7.  Observe as the **Attacker** sends the captured packet to the **Server**, impersonating the **Client**.

8.  Click **"Next"** for the **Server** to send its response. This response, intended for the **Client**, will also be intercepted by the **Attacker**.

9.  Observe the intercepted response from the **Server**, which contains the **Client's** username and password.

10. To forward the server's response to the original **Client**, click the corresponding port number in the "Respond" section of the **Attacker's** computer view.

11. Observe the packet being sent from the **Attacker** to the **Client**.

12. Once the username and password appear on the **Client's** screen, copy and paste them into the input fields provided for verification.

13. Click **"Verify"**. If the credentials are correct, the experiment is successful.

