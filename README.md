# Notes for anyone reading

The idea was to create the game board on page load.

imports arrays of shapes and colors

builds shape array randomly and pushes into allshapes array

allshpaes array is then stored in state as 'dataset'

Win condition is set next in the same useEffect

If the array contains one value 4 times, it is true -- else false

user can then see the 14 svgs displayed in the browser with the choice to select true or false.

if there are 4 shapes of the same color and they choose true - they win. if there are not 4, and they choose false -- they win.

if there are 4 and they choose false -- they lose. If there are not 4 and they choose true -- they lose.

When they select an option, true or false, a modal will open. If they chose the right win condition it will display "You win!" if not "You Lose!" with a button to reset the gameboard.

This way the game can be played indefintely without reloading. SPAs are great for little games like this.

The modal is placed way higher than the underlying game, rendering everything under the modal unusable. On most pages, clicking off the modal would remove it, but I chose not to that here, forcing the user to select play again -- for simplicities sake. Its a game for kids.

One last thing. I commented out some of the shapes and colors. There are too many for a 4x4 game (copying the display output in email). The win condition is almost never true. For the sake of this example I'm going to leave it commented so you can see a win and lose condition. Otherwise, we can comment them out.

For clarity, I am going to make the outline and play again red on lose, green on win.

And Memoized the top portion of the game, since on rerender it has no need to update and will never update.
