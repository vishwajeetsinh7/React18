        import React from "react"
        import ReactDOM from "react-dom/client"

        const heading = React.createElement('h1',{
            id:'rooting', 
            className: 'vish'
        },'Vishwajeet from react parcel is cool')

        const heading2 = React.createElement('h2', {
            id: 'heading2'
        },
        'This is heading 2')

        const container = React.createElement('div', {
            id: 'container'
        },
        [heading, heading2])
        console.log(heading)
        const root = ReactDOM.createRoot(document.getElementById('root'))
        //passing a react element inside the root. 
        root.render(container)