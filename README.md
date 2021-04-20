# Whatsana

Whatsana is a website clone of the project management tool Asana. Whatsana allows users to organize, create, and manage projects and tasks. It also has a User profile feature where the user can edit their information, and a Favorites feature where favorite projects can be pinned for easier access.

## Technologies

* PostgreSQL
* Ruby on Rails
* React
* Redux

## Features

* User Auth
* Projects
* Tasks
* User Profile
* Favorites

### User Auth

![alt text](https://github.com/timjkim210/Whatsana/blob/master/readme_assets/login.png "login") ![alt text](https://github.com/timjkim210/Whatsana/blob/master/readme_assets/signin.png "login")

Login or use the demo login on the login page.

### Projects

Create projects with different tasks on them that can be assigned to different users

### Tasks

Create tasks on a project.

### User Profile

Link to a User Profile page where user data can be updated and saved.

### Favorites

Click the star next to projects in order to pin them to the Favorites section in the sidebar. The list of projects in the favorites section will also link to the project.

For this feature I used a Javascript function to toggle between a logos, an empty star logo and a colored in star. At the sametime the function also updates the state of the project, and calls an action to update the project in the back end.

```
toggleStar(e) {
        if (e.target.id === "star-button") {
        this.props.project.favorite = !this.props.project.favorite;
        this.props.updateProject(this.props.project)
        const solidStar = document.createElement('i')
        solidStar.setAttribute("id", "solid-star-button")
        solidStar.setAttribute("class","fas fa-star");

        e.target.parentNode.appendChild(solidStar);
        e.target.remove();
        } else {
        this.props.project.favorite = !this.props.project.favorite;
        this.props.updateProject(this.props.project)
        const star = document.createElement('i')
        star.setAttribute("id", "star-button")
        star.setAttribute("class","far fa-star");

        e.target.parentNode.parentNode.append(star);
        e.target.parentNode.remove()
        }
    }
    
    ```
   
   In the sidebar component, I iterate through my projects and check to see if its favorite property is true or false. If it is true I display it:
   
   ```
   <div className="favorites">
                            <h3>Favorites</h3>
                            <ul>
                                {this.props.projects.map(project => {
                                    if (project.favorite === true) {
                                        return <li><div className="colored-bullet"></div><Link to={`projects/${project.id}`}>{project.name}</Link></li>;
                                    }
                                })}
                            </ul>
                        </div>
```
   
   
   
