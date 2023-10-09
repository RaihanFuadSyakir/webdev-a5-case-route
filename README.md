# Field Case Studies [(Padepokan Tujuh Sembilan)](https://minimal-kit-react.vercel.app/)

  

![Technology](https://img.shields.io/badge/Technology-React.js-blue)

  

## `Getting started`

  

Install dependencies

  

```bash

npm  install

```

  

Start the server

  

```bash

npm  run  start

```

  

## `Case Study`
## 10. Exception Handling

Problem

 - Terdapat RestAPI Request yang mereturn status code 404.
 - Meskipun User telah logout, user masih bisa mengakses protected routes.

DoD

 - Dapat Menangani ketika mendapat status code 404 dengan cara me-logout pengguna dan redirect ke laman login
 - Membuat User tidak dapat mengakses protected routes setelah logout.
 
 ## Analisis Masalah
 - Tidak terdapat aksi yang dilakukan ketika user menekan tombol logout.
 - Token yang menjadi kunci penanda user terautorisasi tidak terhapus setiap user logout.
 - Pada Redux yang menangani state management token tidak terdefinisi aksi logout


 # Solusi Penyelesaian
 ### 1.  Mendefinisikan aksi logout pada redux.
 ```javascript
const  actionTypes  = {
	SetToken	:  'SET_TOKEN',
	LogOut	:  'LOGOUT'
};
export  function  logout() {
	return {type:  "LOGOUT"}
}
const  authReducer  = (state  =  initialAuthState, action) => {
	if (action.type  ===  actionTypes.SetToken) {
			const { token } =  action.payload;
			state  = { ...state, token };
	}
	else  if(action.type  ===  actionTypes.LogOut){
			state  = {...state, token :  null};
}
return  state;
};
 ```
 ### 2. Menambahkan aksi Lougout pada tombol logout
 ```jascript
 import { useDispatch } from  'react-redux';
 ...
 ...
 <MenuItem
		onClick={() => {
		handleClose();
		dispatch(logOut());
		navigate('/login');
		}}
	sx={{ m:  1 }}
>
	Logout
</MenuItem>
```

