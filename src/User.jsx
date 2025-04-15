export default function User({user}){
    const {id,name,username,email} = user;

    const styleUser = {
        border:'3px solid yellow',
        margin: '2rem',
        borderRadius:'2rem'
    }

    return(
        <div style={styleUser}>
            <h3>User Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h3>User Id: {id}</h3>
        </div>
    )
}