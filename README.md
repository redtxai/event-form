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