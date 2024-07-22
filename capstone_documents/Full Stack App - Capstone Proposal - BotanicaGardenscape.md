# **Full Stack App Proposal** 

#### **General App Description** 

A home garden design app which will include the ability to purchase plants if desired.   The app will allow a user to create a garden and specify the growing conditions for that garden.  With a layout tool, it will allow the user to add plants in a particular location in the garden.  And finally if they choose, the user can add plants to a cart and purchase.  Users will be able to save their garden and cart for accessing at a later date to update and purchase.

#### **Novel Idea Criteria:** 

* User must be able to create an account/login  
* Different functionality must be available to logged in users compared to those visiting the site as a guest   
* Use the stack taught in this bootcamp curriculum  
  Create a GitHub repository. Start from scratch or use [this front-end starter.](https://github.com/FullstackAcademy/2302-ACC-Capstone-FE)

  #### **As a user (not logged in), I should be able to:** 

* Access the app via the Internet so I can browse the site.  
* Sign up for an account so I can have a logged-in experience.  
* Log in to the site if I already have an account.  
* View list of plants and their properties.  
* View links to interesting gardening info.  
* View links to local garden stores.


  #### **As a logged-in user, I should be able to:** 

* Update personal information  
* Create/Edit/Delete a garden  
* In a garden add plants, delete plants,  move plants  
* Filter the available list of plants 	  
    
* View reference information (similar to not logged in user)

  #### **As an administrator, I should be able to:** 

  Normal users should not have the abilities listed below:  
* View a list of all users.  
  * The administrator view for each user should include the users’:  
    * Role (user or administrator)  
    * Email address (should be unique)  
    * Any other relevant information (including garden and its plants)  
* View list of plants  
  * Add, edit and remove plants (including setting inventory information)

  #### **As an engineer I should be able to:** 

* Have a well-seeded database so that I can simulate several different scenarios for the user stories below.  
  * *By doing this, you set yourselves up to tackle many of the points throughout the tiers. In the long run, this will potentially save you tons of time.*  
  * *For example, seed hundreds of items and reviews with dummy data so that when you get to the “pagination” user story, you won’t have to worry about adding more.*  
  * Also, add a bunch of users with reviews so the review editing features can be worked on without already having the “write a review” functionality built.  
* Have secured user data so that no one can unrightfully manipulate information.


  ### **TIER 2: App Essentials**

  #### **As a user (not logged in), I should be able to:** 

* Enjoy an aesthetically pleasing website that is intuitive and easy to use (UI/UX).  
  * Be able to use all website features whether I am using a phone, tablet, or laptop/desktop computer.  
  * Navigate the website successfully regardless of disability.  
    * *Resources: [A11y Checklist](https://a11yproject.com/checklist)*  
    * [*Links to an external site.*](https://a11yproject.com/checklist)  
    * [*WebAIM Contrast Checker*](https://webaim.org/resources/contrastchecker/)  
    * [*Links to an external site.*](https://webaim.org/resources/contrastchecker/)  
* Know when content is loading, or there is an error so that I can manage my expectations. E*xamples:*  
  * Show loading indicators while the frontend is waiting for a backend response.  
  * If I visit an item page that does not exist, notify me and display a link to go to a list of all items.   
* Contact information \- create email to ask questions  
* See an example garden

  #### **As a logged-in user, I should be able to:** 

*  Buy plants (the cart)  
* View and edit my user profile so I can update my information when necessary.  
* “Report” an item… 

  #### **As an administrator, I should be able to:** 

* Have access to a dashboard with the following functionality:  
  * User Modification:  
    * Set other users as administrators.  
    * Edit user information.  
    * Remove users.  
  * Add, edit, and remove reference data

  ### **TIER 3: Extra Features**

  #### **As a logged-in user, I should be able to:** 

* Log in through third-party authentication to avoid creating an account specific to the website. *For example, Google OAuth.*  
* Add multiple gardens  
* Add Favorites List  
* Add plant that we don’t have in our list via request to admin or by interface  
* Add unique garden dimensions

#### **As an administrator, I should be able to:** 

* Receive notifications, either by email or on the site, for the following actions or events:  
  * Log in problems  
  * Reference Data Problems  
  * Cart Problems