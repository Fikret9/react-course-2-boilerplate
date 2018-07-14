import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    </div>
);


const withAdminwarning = (WrappedComponent) => {
    return (props) => (
        <div>
         {props.isAdmin&&<p>This is private info , please don't share</p>}
         <WrappedComponent {...props} />
        </div>
    );

};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated?<WrappedComponent {...props} />:<p>Please login</p>}       
        </div>
        )
};

const AdminInfo = withAdminwarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the details"/>,document.getElementById("app"));
