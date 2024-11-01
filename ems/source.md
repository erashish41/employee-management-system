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
            - Header.jsx
            - TaskItemList.jsx
    - context
        - AuthContext.jsx
        - TaskContext.jsx
    - utils
        - LocalStorage.jsx


1. Login.jsx: Tailwind Css added in it
- flex-col: flex-col class in Tailwind CSS applies flex-direction: column;, which makes flex 
    items stack vertically instead of horizontally
- h-screen and w-screen used to set the height and weight of element to full height and weight 
    of viewPoint
- h-screen: is same as height: 100vh and weight: 100vw

- rounded-xl: It gives the element a slightly more pronounced curve, which can add a softer and 
    more modern look.

- 2 way binding: Two-way data binding is like a bridge that connects your form components and
     the application's state.

2. EmloyeeDashboard.jsx: 
- Header.jsx is used to make header of website  
- TaskItemList.jsx is used to make content of Employee with TaskItemList.jsx
- TaskList.jsx is used to make

-#tasklist::-webkit-scrollbar{
    display:none
}
-flex-nowrap: it will show content in horizontal way.
-mb-2: margin bottom
-leading-5: This class set the line-height at 1.25rem. It depends on the height of content
