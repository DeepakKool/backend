
import axios from 'axios';




    export const loginWithEmail = async (
        email, password
      )=> {
        // console.log(valueFrom);
        try {
      
            // Alert.alert('Please Select Destination');
        
            const response = await 
            fetch('https://www.development.airlive24.com/api/login', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                email: 'simran@airlive24.com',
                password: '123456',
                }),
                });

                 
		// const response = await axios.post(
		// 	'https://www.development.airlive24.com/api/login',
		// 	JSON.stringify({ email, password }),
		// 	{
    //             headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json',
    //                     },
		// 	//   withCredentials: true,
		// 	}
		//   );
// console.log(response)
        
            const json = response.json();
            console.log(json)
            return json;
          
        } catch (error) {
          console.error('Holiday search error', error);
        }
      };






