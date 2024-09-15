import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Admin_Send_Request from './components/Admin_Send_Request.jsx'
import Admin_Dashboard from './components/Admin_dashboard.jsx'
import Admin_Request_History from './components/Admin_Request_History.jsx'
import Admin_P_to_P_Transfer from './components/Admin_P_To_P_Transfer.jsx'
import Admin_P_To_P_History from './components/Admin_P_To_P_History.jsx'
import Admin_Self_Deposit_Charge_History from './components/Admin_Self_Deposit_Charge_History.jsx'
import Admin_Withdrawal_Send_request from './components/Admin_Withdrawal_Send_request.jsx'
import Admin_Withdrawal_History from './components/Admin_Withdrawal_History.jsx'
import Admin_Edit_Profile from './components/Admin_Edit_Profile.jsx'
import Admin_Change_Password from './components/Admin_Change_Password.jsx'


let router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/admin' element={<App/>}>
      <Route path='/admin/' element={<Admin_Dashboard/>}/>
      <Route path='/admin/sendrequest' element={<Admin_Send_Request/>}/>
      <Route path='/admin/requesthistory' element={<Admin_Request_History/>}/>
      <Route path='/admin/ptoptransfer' element={<Admin_P_to_P_Transfer/>}/>
      <Route path='/admin/ptophistory' element={<Admin_P_To_P_History/>}/>
      <Route path='/admin/selfdepositchargehistory' element={<Admin_Self_Deposit_Charge_History/>}/>
      <Route path='/admin/withdrawalsendrequest' element={<Admin_Withdrawal_Send_request/>}/>
      <Route path='/admin/withdrawalhistory' element={<Admin_Withdrawal_History/>}/>
      <Route path='/admin/editprofile' element={<Admin_Edit_Profile/>}/>
      <Route path='/admin/changepassword' element={<Admin_Change_Password/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
