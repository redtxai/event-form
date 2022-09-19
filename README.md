# PROJECT
## Folder Structure

The folder strucuture is composed by the main src folder and inside there are four folders:
assets - containing the banner of the Landing page.
components - containing all Micro components and theirs tests
models - containig the model file with the model classes
pages - containing the CreateEdit page(part 1) and the Landing page(part 2)

Inside each pages, you might find a components folder. These components folder is regarding the components specific for each page, so for example, the Landing page has 4 components: LandingPageBanner, LandingPageBody, LandingPageCommunitySidebar and LandingPageHeader. These components are not the Micro components.

## CreateEdit page

The CreateEdit page is the part 1 of the project, and it's basic the same page and when you access via URL the create(http://localhost:3000/create), it'll load the form without date, but if you access via edit URL(http://localhost:3000/edit/:id), the form will load with date. The mock Event data is located inside the create-edit page folder in a file called event-mock-data.ts. You can edit id = 1 to id = 4 Event, the validation is working for Create and Edit, and after you click to submit with no errors, it'll print a console.log in the the console with your data, but your data will not persist on the mock data, if you reload the page, it'll load the original mock data.

## Responsiveness

Both pages are responsive and you can test it.

## Commands

Intallation:
npm install

Start the project:
npm start

Tests:
npm run test

## URL

'/' - is the Landing page
'/create' - Create page
'/edit/:id' - Edit page


Below is the original Project Roadmap, just in case you want to understand how I was thinking when I start the project. Overall, there are some issues and improvements that could be done, a few of them you can find on the 'issues' session: https://github.com/redtxai/event-form/issues

# PROJECT ROADMAP

## **Begining**

The project will start with the separation of the tasks. We have two parts of the project: Event Form and Landing page. In the Event Form project we'll have three main kind of tasks: **Micro Components**, **SMS tasks**, **Tests** and **Pages and Form**

Regarding the Landing page, I'll leave a task called Landing page tasks and initialization that will be responsible to create the Landing page backbone and then create the tasks.

### **Micro Components**

Consist in the investigation(see below) and creation of the unit components that will be added on the Pages/Forms that will allow the user interact with the applications. Examples: Event Name Input(Figma), Where switch(?)/checkbox(?) component(Figma), When component, URL input, buttons, etc.

For this task, the investigation part is about to look on the Tailwind UI documentation(components available) and make sure that we already have something there that we can use for the creation of the micro component.

### **SMS tasks**

SMS means **S**tate **M**anagement and **S**ervices. These tasks will be responsible to configured any State Management(if needed) and the services layer, such as the communication and configuration of the JSON server(if we have time). Also, these tasks will be responsible for the routing.

The json server is a very useful library that allow us to create a simple backend that can run locally and simulates a RESTFUL API.
More info: https://github.com/typicode/json-server

### **Tests** 

No need any description.

### **Pages and Form**

Basically, once we have a few components created, we are ready to start the creation of the pages and the Form that will be used on the application.
