**website page flow of folders**
- src
    - component
        - Auth
            - Login.jsx
        - Dashboard
            - AdminDashboard.jsx
            - EmloyeeDashboard.jsx
        - TaskList
            - AcceptTask.jsx
            - CompleteTask.jsx
            - FailedTask.jsx
            - NewTask.jsx
            - TaskList.jsx
        - others
            - TaskItemList.jsx
            - Header.jsx
            - CreateTask.jsx
            - AllTask.jsx
    - context
        - AuthContext.jsx
        - TaskContext.jsx
    - utils
        - LocalStorage.jsx


1. Login.jsx is connected to App.jsx
Login.jsx: Tailwind Css added in it
- flex-col: flex-col class in Tailwind CSS applies flex-direction: column;, which makes flex 
    items stack vertically instead of horizontally
- h-screen and w-screen used to set the height and weight of element to full height and weight 
    of viewPoint
- h-screen: is same as height: 100vh and weight: 100vw

- rounded-xl: It gives the element a slightly more pronounced curve, which can add a softer and 
    more modern look.

- 2 way binding: Two-way data binding is like a bridge that connects your form components and
     the application's state.

2. EmloyeeDashboard.jsx is connected to App.jsx
- Header.jsx is added and used to make header of website.
- TaskItemList.jsx is added and used to make content of Employee with TaskItemList.jsx.
- TaskList.jsx is added and used to make tasks.

-#tasklist::-webkit-scrollbar{
    display:none
}
-flex-nowrap: it will show content in horizontal way.
-mb-2: margin bottom
-leading-5: This class set the line-height at 1.25rem. It depends on the height of content

3. AdminDashboard.jsx is connected to App.jsx 
AdminDashboard.jsx: Header.jsx is added 

- CreateTask.jsx is added
-mb-0.5	margin-bottom: 0.125rem; /* 2px */
-w-full: This class means the width is set to full.
-AllTask.jsx
-h-40 overflow-auto: due to this task will go up down direction by mouse
