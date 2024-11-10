# Please note that my project is in the master branch and not the main. Please filter to see the master branch instead of the main.

# Part two work
-My POE part two had a lot of functions that are being required for the final POE. It had a home screen where there was a list of added menu items showing. Below them was a button to add menu items where the chef was already being taken to a different screen where they will name an item, list the price, insert the image URL and then choose the course that the item falls under. The added items were already being added to an array, without the remove function, this has been added to part 3. There was a function to filter the items by course on the home page, while showing the number of available items in each course; this includes te all items filter where the number of all available items was shown. These features are also part of my POE part 3, along with some changes included in the changelog below.

# Changelog

##  2024-11-10
### Added
- Remove buttons under each menu item so they can be removed.
- A function that shows average prices based on the course selected. If the main course are selected, the average price of the main meals is going to be shown. This function works with all courses.
- The function to add menu item is on a different page where when you click a button it takes you to a page where you can add menu items

### Changed
- The function to choose course type when adding menu items no longer shows as a a list where the chef select one but rather lets the chef write what the item being added falls under
- The file destination. I created a new app with the same code(modified to meet part 3 requirements) but a different repository because my initial app gave me problems when I tried to run it.This is why the 
  lecturer might see only recent commits.

### Fixed
- The average price function was not working in my part two but now I have added it
- I improved the code by adding the remove items functionality. I also added a function to calculate average price so that the average prices of different courses can be shown.
