
//H1
export const H1 = function({children}){
    
    return <div style={{color: '#2c4d7f' , fontSize: '32px', fontWeight: 'bold', paddingLeft: '20px'}}>{children}</div>
}
//Sign in button
export const SignInBtn = function({children}){
    return <button style={{padding: '10px 24px', backgroundColor: 'green', cursor: 'pointer', fontWeight: 600, color: 'white', border: 0, borderRadius: '5px'}}>{children}</button>
}