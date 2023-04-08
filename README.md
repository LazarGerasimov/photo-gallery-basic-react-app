Single Page Application created with React FE, NodeJS/Express.js for BE and MongoDB as DB. 

![image](https://user-images.githubusercontent.com/99253584/230686154-3c783168-ea0d-490c-b153-b338e4219eef.png)

The app works as a gallery and supports several functionalities:

Registering and logging users. Register and Login components both have quick links for each other.

Both registered and not registered users have access to the Home Page. Both parties see the same message but link redirects to two different pages if there is a logged in user or not. Guests are redirected to a Recent Page where they can see the three latest photos uploaded by the registered users. A quick link is provided for logging in to unlock the full content. Logged in/registered users are redirected to All Photos.

![image](https://user-images.githubusercontent.com/99253584/230732204-0bf53fa6-5f18-4e67-a8c9-161d2bdadb06.png)


Registered users have access to the full content of the website. Upon successful registration, users are redirected to their profile page where quick links are provided for photo upload and browse all. Their personal uploads, content and profile information is stored in the profile tab. Clicking on the photo redirects logged in users to a photo-details page from where they can edit/delete the photo if they are the owners.

![image](https://user-images.githubusercontent.com/99253584/230732181-df4c2e58-518c-4944-9dcd-9ce156f1eb87.png)


There is an implemented like functionality. Only registered users can like other users' photos. Guests can only see the number of likes for each photo. Owners cannot like their own photos. On their profile tab, registered users can see the likes they received for their content. 

Users can upload their own photos, add title, description, price and attach a link for their photos. Upon creation/deletion of a personal photo, user is redirected back to their profile tab. In case they have not uploaded any photos or deleted them all, a quick link is provided to other users' photos so they can browse in search of inspiration.

The database models provide links between themselves - created items have ownerId which links them to their creators. The user model contains an array of uploaded photos so they can be extracted by userId. All photos uploaded by users are created with timestamps so the content can be sorted from the most recent onwards.

There is also a page with the most expensive photos on the platform which only registered users have access to. 

Thank you and enjoy browsing through my gallery.

