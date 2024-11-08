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
-w-2/5: This sets the width of the <div> to 2/5 of the parent container.
-w-full: This class means the width is set to full.

-AllTask.jsx
-h-40 overflow-auto: due to this task will go up down direction by mouse

4. Context API 
-AuthContext.jsx
-TaskContext.jsx
-In this Context API AuthContext.jsx is wrap inside of TaskContext.jsx and App.jsx is wrapped in it.
-If we can wrap AuthContext.jsx to TaskContext.jsx or vice versa both will work

-Local storage: to clear it we use localStorage.clear() in main.jsx file after this now delete 
    localStorage.clear() from main.jsx

-to set local storage go to LocalStroage.jsx, then write function:
        export const setLocalStorage = () => {
            localStorage.setItem('employees', JSON.stringify(employees));
            localStorage.setItem('admin', JSON.stringify(admin))
        }
-to check the data in console go to "application" option 
-and put setLocalStorage() in useEffect in App.jsx
        useEffect(()=>{
            setLocalStorage()
        })

-JSON.stringify(): JavaScript object → JSON string.
-JSON.parse(): JSON string → JavaScript object.

-When you use ((employees, admin)) in console.log(), JavaScript interprets this as an expression 
    and returns only the last value, admin.
-this means if we use (()) than it will returns only 1 value which is in last place.

-{!user ? <Login /> : ''} 
-it means if user is empty then show login file if not than nothing
