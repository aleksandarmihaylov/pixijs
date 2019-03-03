## Introduction
I have created an animation on a person who follows a line towards a goal in a given maze. There is also a button which toggles his movement towards the start or the goal.

## Process
The assigment was to create the animation using PixiJS. Since I am not very familiar with PixiJS, I decided to spend the first day to focus on reading upon documentation and go through some online courses. At the end of the day, I was able to create some moving and scaling rotating animations.

During the first day and on the next day I used some of my time to research if I could find any plugins or libraries which will be helpfull for my taks. Unfortunately after trying them out I understood that they won't be helpful for my case or are just outdated. After that I just continued on creating the situation on paper and figuring out the logic behinding and then writing the code.

## Solution
On the index.html you can find the visual solution. When it is opened you can see two images overlaping eachother one is the background maze with a start and a goal points, the other is the guy who needs to follow the black line in order to reach the Goal. The animation starts automatically and clicking on the button you will be toggling the direction of the guy (towards the start or goal).
It was made to be as generic as posible, so if you have another maze to be able to use the same code.

**Quick note**, the guy is moving with 5 pixels in order for the user to see faster the animation, this was possible because all the waypoints on the given maze are devidable by 5.

**Quick note 2** You need to open the html file in Firefox because in order to use chrome you need to start a server to host your files, because there is no local file hosting in chrome

## Conclusion
To sum up I can say that it was both challenging and interesting solving the task without using any help libraries. It helped me increase my logical thinking.

## The task
Implement in Pixi.js a scene featuring the background in "background.png". Implement in the scene the green guy in "guy.png" and let him appear at the "Start" spot. Make an animation which causes the guy to traverse the black path until he reaches the "Goal" spot. Add a button to the scene which causes the guy to change destination to the "Start" spot. Repeatedly clicking the button should make the guy alternate between moving towards the start and the goal.

- Use Pixi.js as the language. Feel free to use plugins you deem appropriate.
Please employ whatever technique you deem suitable to increase the realism of the animation.

Bonus task (not required): Make the entire scene (except the button) rotate slowly around its center.

## Expectations
Make a copy of this repo. Solve the task below. Push your code to a public repository, and send us the link as a reply to our email.

Your solution should include a short readme describing your solution, how to use/test it and any final considerations such as known errors, next steps etc.