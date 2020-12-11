import React, { createContext, useState } from 'react';

export const AuthContext = createContext(); //AuthContext tar data från inlogg och exporterar 

export const AuthProvider = ({children}) => {		//underliggande children från App.js i Navigation skrivs ut 
	
	const [authenticatedUser, setAuthenticatedUser] = useState(); //Data från Navigation hämtas 
	return(														//och skrivs ut 
		<AuthContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>   
			{children}
		</AuthContext.Provider>
	) 

}