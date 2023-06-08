        import React from "react"
        import ReactDOM from "react-dom/client"

        const Title = () => (
        <h1 id="name" key="naming">
            vishwajeet
        </h1>
        );
        
        //! Components 
        
        let xyz = 1
        /* way one of writing react component */
        const HeaderComponenet = () => { 
            return (
                <div>
                    <Title/>
                    <Title/>
                </div>
            );
        };

        /* Way two of writing react component*/
            const HeaderComponenet2 = () => (
                    <div>
                        <Title/>                   
                    </div>
                );
        

        const root = ReactDOM.createRoot(document.getElementById('root'))

        //passing a react element inside the root. 
        root.render(<HeaderComponenet/>)