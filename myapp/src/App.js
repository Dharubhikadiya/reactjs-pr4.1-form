import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';

function App() {

  const [input,setInput] = useState({
    fname : '',
    lname : '',
    email : '',
    Address : '',
    country : '',
    dob : '',
    phone : '',
    password : '', 
    cpassword : '',
  })

  const [formerror,setFormerror] = useState({});

  const handlechange = (e) => {
    setInput({
      ...input,[e.target.name] : e.target.value
    })
  }
  const handlesubmit = () => {
    setFormerror(valid(input))
  }

  const valid = (value) => {
      const err = {};
      if(!value.fname){
        err.fname = 'fname is required';
      }if(!value.lname){
        err.lname = 'lname is required';
      }if(!value.email){
        err.email = 'email is required';
      }if(!value.Address){
        err.Address = 'address is required';
      }if(!value.country){
        err.country = 'country is required';
      }if(!value.dob){
        err.dob = 'dob is required';
      }if(!value.phone){
        err.phone = 'phone is required';
      }if(!value.password){
        err.password = 'password is required';
      }if(!value.cpassword){
        err.cpassword = 'cpassword is required';
      }
      return err;
  }


  return (
    <div>
      <div className="container mt-3">
  <form>
    <div className="row jumbotron box8 mt-2 p-5">
    
      <div className="col-sm-6 mb-3">
        <label for="name-f mb-3">First Name</label>
        <input type="text" className="form-control" onChange={handlechange} name="fname" placeholder="Enter your first name." required/>
        <span style={{color:'white'}}>{formerror.fname}</span>
      </div>
      <div className="col-sm-6 form-group mb-3">
        <label for="name-l">Last name</label>
        <input type="text" className="form-control" onChange={handlechange} name="lname" placeholder="Enter your last name." />
        <span style={{color:'white'}}>{formerror.lname}</span>
      </div>
      <div className="col-sm-6 form-group mb-3">
        <label for="email">Email</label>
        <input type="email" className="form-control" onChange={handlechange} name="email" placeholder="Enter your email." />
        <span style={{color:'white'}}>{formerror.email}</span>
      </div>
      <div className="col-sm-6 form-group mb-3">
        <label for="address-1">Address</label>
        <input type="address" className="form-control" onChange={handlechange} name="Address" placeholder="Locality/House/Street no." />
        <span style={{color:'white'}}>{formerror.Address}</span>
      </div>
      <div className="col-sm-6 form-group mb-3">
        <label for="Country">Country</label>
        <select className="form-control custom-select browser-default">
          <option value="Gujarat">Gujarat</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
        <span style={{color:'white'}}>{formerror.country}</span>
      </div>
      <div className="col-sm-6 form-group mb-3">
        <label for="Date">Date Of Birth</label>
        <input type="Date" onChange={handlechange} name="dob" className="form-control" placeholder="" />
        <span style={{color:'white'}}>{formerror.dob}</span>
      </div>
      <div className="col-sm-6 form-group mb-3">
        <label for="sex">Gender</label>
        <select className="form-control browser-default custom-select">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unspesified">Unspecified</option>
        </select>
        <span style={{color:'white'}}>{formerror.fname}</span>
      </div>
      <div className="col-sm-4 form-group mb-3">
        <label for="tel">Phone</label>
        <input type="tel" name="phone" onChange={handlechange} className="form-control" placeholder="Enter Your Contact Number." />
        <span style={{color:'white'}}>{formerror.phone}</span>
      </div>
      <div className="col-sm-6 form-group mb-2">
        <label for="pass">Password</label>
        <input type="Password" name="password" onChange={handlechange} className="form-control"  placeholder="Enter your password." />
        <span style={{color:'white'}}>{formerror.password}</span>
      </div>
      <div className="col-sm-6 form-group">
        <label for="pass2">Confirm Password</label>
        <input type="Password" name="cpassword" onChange={handlechange} className="form-control" placeholder="Re-enter your password." />
        <span style={{color:'white'}}>{formerror.password}</span>
      </div>
     <div className="col-sm-12 form-group my-3">
        <button className="btn btn-light float-right align-item-end" onClick={()=>handlesubmit()}>submit</button>
      </div>

    </div>
  </form>
</div>
    </div>
  );
}

export default App;
