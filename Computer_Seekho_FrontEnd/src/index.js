import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Campus from './Pages/Campus';
import ConatctUS from './Pages/ConatctUS';
import Course from './Pages/Course';
import Placement from './Pages/Placement';
import Company from './Pages/Company';

import FacultyDashBoard from './Pages/FacultyDashBoard'
import LogIn from './Pages/LogIn';
import AfterLogOut from './Components/AfterLogOut';
import DashboardPage from './Pages/DashboardPage ';

import Createfaculty from './table/staff_table/Createfaculty';
import Listfaculty from './table/staff_table/Listfaculty';
import Facultydel from './table/staff_table/Facultydel';
import Facultyup from './table/staff_table/Facultyup';

import Listcompany from './table/Company_table/Listcompany';
import CreateCompany from './table/Company_table/CreateCompany';
import Companydel from './table/Company_table/Companydel';
import Companyup from './table/Company_table/Companyup';

import Listcourse from './table/Course_table/Listcourse';
import Createcourse from './table/Course_table/Createcourse';
import Coursedel from './table/Course_table/Coursedel';
import Courseup from './table/Course_table/Courseup';

import Campuslife from './table/Campus_lifetable/Campuslife';
import Campuslifecreate from './table/Campus_lifetable/Campuslifecreate';
import Campuslifeup from './table/Campus_lifetable/Campuslifeup';
import Campuslifedel from './table/Campus_lifetable/Campuslifedel';
import Campuslifelist from './table/Campus_lifetable/Campuslifelist';

import Batch from './table/Batch_table/Batch';
import Batchup from './table/Batch_table/Batchup';
import Batchdel from './table/Batch_table/Batchdel';
import Batchlist from './table/Batch_table/Batchlist';
import Batchcreate from './table/Batch_table/Batchcreate';

import Payment_infoup from './table/Payment_infotable/Payment_infoup';
import Payment_infodel from './table/Payment_infotable/Payment_infodel';
import Payment_infolist from './table/Payment_infotable/Payment_infolist';
import Payment_infocreate from './table/Payment_infotable/Payment_infocreate';
import Payment_info from './table/Payment_infotable/Payment_info';

import Placement_vacancyList from './table/PlacementVacancy/Placement_vacancyList';
import AddPlacement_vacancy from './table/PlacementVacancy/Addplacement_vacancy';
import { Placement_vacancy } from './table/PlacementVacancy/Placement_vacancy';
import UpdatePlacement_vacancy from './table/PlacementVacancy/UpdatePlacement_vacancy';
import DelPlacement_vacancy from './table/PlacementVacancy/DelPlacement_vacancy';

import CreateMaintenance from './table/Maintanence/CreateMaintenance';
import Maintenance from './table/Maintanence/Maintenance';
import UpMaintenance from './table/Maintanence/UpMaintenance';
import DelMaintenance from './table/Maintanence/DelMaintenance';
import ListMaintenance from './table/Maintanence/ListMaintenance';

import CreateRole from './table/Role_table/CreateRole';
import Role from './table/Role_table/Role';
import UpRole from './table/Role_table/UpRole';
import DelRole from './table/Role_table/DelRole';
import ListRole from './table/Role_table/ListRole';

import PRNGeneratorList from './table/PRNGenerator_table/PRNGeneratorList';
import CreatePRNGenerator from './table/PRNGenerator_table/CreatePRNGenerator';
import PRNGeneratorUp from './table/PRNGenerator_table/PRNGeneratorUp';
import PRNGenerator from './table/PRNGenerator_table/PRNGenerator';
import PRNGeneratorDel from './table/PRNGenerator_table/PRNGeneratorDel';

import EnquiryList from './table/Enquiry_table/EnquiryList';
import AddEnquiry from './table/Enquiry_table/AddEnquiry';
import Enquiry from './table/Enquiry_table/Enquiry';
import UpdateEnquiry from './table/Enquiry_table/UpdateEnquiry';
import DeleteEnquiry from './table/Enquiry_table/DeleteEnquiry';

import CreateDesignation from './table/Designation_table/CreateDesignation';
import ListDesignation from './table/Designation_table/ListDesignation';
import Designation from './table/Designation_table/Designation';
import Designationup from './table/Designation_table/Designationup';
import Designationdel from './table/Designation_table/Designationdel';

import CreateClosure from './table/Closure_table/CreateClosure';
import ClosureList from './table/Closure_table/ClosureList';
import Closure from './table/Closure_table/Closure';
import ClosureUp from './table/Closure_table/ClosureUp';
import ClosureDel from './table/Closure_table/ClosureDel';

import CreateEnquirySource from './table/Enquiry_Source_table/CreateEnquirySource';
import EnquirySourceList from './table/Enquiry_Source_table/EnquirySourceList';
import EnquirySource from './table/Enquiry_Source_table/EnquirySource';
import EnquirySourceUp from './table/Enquiry_Source_table/EnquirySourceUp';
import EnquirySourceDel from './table/Enquiry_Source_table/EnquirySourceDel';

import LocationList from './table/Location_table/LocationList';
import CreateLocation from './table/Location_table/CreateLocation';
import Location from './table/Location_table/Location';
import Locationup from './table/Location_table/Locationup';
import Locationdel from './table/Location_table/Locationdel';

import List_Followup from './table/Followup_table/List_Followup';
import Create_Followup from './table/Followup_table/Create_Followup';
import Delete_Followup from './table/Followup_table/Delete_Followup';
import Update_Followup from './table/Followup_table/Update_Followup';

import AddQualification from './table/Qualification_table/addQualification';
import DeleteQualification from './table/Qualification_table/DeleteQualification';
import UpdateQualification from './table/Qualification_table/UpdateQualification';
import QualificationList from './table/Qualification_table/QualificationList';
import Qualification from './table/Qualification_table/Qualification';

import Faculty from './Pages/Faculty';

import CreateStudent from './table/Student_table/CreateStudent';
import Liststudent from './table/Student_table/Liststudent';
import Studentup from './table/Student_table/Studentup';
import Studentdel from './table/Student_table/Studentdel';
import { Student_Entity } from './table/Student_table/Student_Entity';

import ListBatchInfo from './table/BatchInfo_table/ListBatchinfo';
import { BatchInfo_Entity } from './table/BatchInfo_table/BatchInfo_Entity';
import CreateBatchInfo from './table/BatchInfo_table/CreateBatchInfo';
import Batchinfoup from './table/BatchInfo_table/Batchinfoup';
import Batchinfodel from './table/BatchInfo_table/Batchinfodel';

import ListPlacement from './table/Placement_table/ListPlacement';
import { Placement_Data } from './table/Placement_table/Placement_Data';
import CreatePlacement from './table/Placement_table/CreatePlacement';
import Placementdel from './table/Placement_table/Placementdel';
import Placementup from './table/Placement_table/Placementup';

import Createpayment from './table/Payment_table/Createpayment';
import ListPayments from './table/Payment_table/ListPayments';
import Paymentdel from './table/Payment_table/Paymentdel';
import Payments from './table/Payment_table/Payments';
import Paymentup from './table/Payment_table/Paymentup';



import List_Batch_staff from './StaffDashboard/Staff_Panel/List_Batch_staff';
import List_BatchInfo_Staff from './StaffDashboard/Staff_Panel/List_BatchInfo_Staff';
import List_Company_Staff from './StaffDashboard/Staff_Panel/List_Company_Staff';
import List_Enquiry_Staff from './StaffDashboard/Staff_Panel/List_Enquiry_Staff';
import List_Payment_Staff from './StaffDashboard/Staff_Panel/List_Payment_Staff';
import List_Placement_Data from './StaffDashboard/Staff_Panel/List_Placement_Data';
import List_Student_Staff from './StaffDashboard/Staff_Panel/List_Student_Staff';


import List_FollowUpStaff from './StaffDashboard/Staff_Panel/List_FollowUpStaff';
import FeeReceipt from './Pages/FeeReceipt';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Campus" element={<Campus />} />
        <Route path="LogIn" element={<LogIn />} />
        <Route path="AfterLogOut" element={<AfterLogOut />} />
        <Route path="/Company" element={<Company/>} />
        <Route path="/ContactUS" element={<ConatctUS />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Faculty" element={<Faculty />} />
        <Route path="/Placement" element={<Placement />} />

      </Route>


<Route path="/StaffDashBoard" element={<FacultyDashBoard/>}>
    

    </Route>
    
    
    

<Route path="/AdminDashBoard" element={<DashboardPage />} />
    
    
    
      <Route path="/Createfaculty" element={<Createfaculty />} />
      <Route path="/Listfaculty" element={<Listfaculty />} />
      <Route path="facdel/:id" element={<Facultydel />} />
      <Route path="facup/:id" element={<Facultyup />} />


      <Route path="Listcompany" element={<Listcompany />} />
      <Route path="CreateCompany" element={<CreateCompany />} />
      <Route path="cmpdel/:id" element={<Companydel />} />
      <Route path="cmpup/:id" element={<Companyup />} />

      <Route path="Listcourse" element={<Listcourse />} />
      <Route path="Createcourse" element={<Createcourse />} />
      <Route path="coudel/:id" element={<Coursedel />} />
      <Route path="couup/:id" element={<Courseup />} />

      <Route path='/campuslife/:id' element={<Campuslife />} />
      <Route path='/Campuslifeup/:id' element={<Campuslifeup />} />
      <Route path='/Campuslifedel/:id' element={<Campuslifedel />} />
      <Route path='Campus_lifetable/Campuslife' element={<Campuslifelist />} />
      <Route path='/Campuslifecreate' element={<Campuslifecreate />} />

      <Route path='/Batch/:id' element={<Batch />} />
      <Route path='/Batchup/:id' element={<Batchup />} />
      <Route path='/Batchdel/:id' element={<Batchdel />} />
      <Route path='/Batchlist' element={<Batchlist />} />
      <Route path='/Batchcreate' element={<Batchcreate />} />

      <Route path='/Payment_info/:id' element={<Payment_info />} />
      <Route path='/Payment_infoup/:id' element={<Payment_infoup />} />
      <Route path='/Payment_infodel/:id' element={<Payment_infodel />} />
      <Route path='/Payment_infolist' element={<Payment_infolist />} />
      <Route path='/Payment_infocreate' element={<Payment_infocreate />} />

      <Route path='/Placement_vacancyList' element={<Placement_vacancyList />} />
      <Route path='/AddPlacement_vacancy' element={<AddPlacement_vacancy />} />
      <Route path='/Placement_vacancy/:id' element={<Placement_vacancy />} />
      <Route path='/UpdatePlacement_vacancy/:id' element={<UpdatePlacement_vacancy />} />
      <Route path='/DelPlacement_vacancy/:id' element={<DelPlacement_vacancy />} />

      <Route path='/AddQualification' element={<AddQualification />} />
      <Route path='/DeleteQualification/:id' element={<DeleteQualification />} />
      <Route path='/UpdateQualification/:id' element={<UpdateQualification />} />
      <Route path='/QualificationList' element={<QualificationList />} />
      <Route path='/Qualification/:id' element={<Qualification />} />

      <Route path='/CreateMaintenance' element={<CreateMaintenance />} />
      <Route path='/Maintenance/id' element={<Maintenance />} />
      <Route path='/UpMaintenance/id' element={<UpMaintenance />} />
      <Route path='/DelMaintenance/id' element={<DelMaintenance />} />
      <Route path='/ListMaintenance' element={<ListMaintenance />} />

      <Route path='/CreateRole' element={<CreateRole />} />
      <Route path='/Role/:role_id' element={<Role />} />
      <Route path='/UpRole/:role_id' element={<UpRole />} />
      <Route path='/DelRole/:roleid' element={<DelRole />} />
      <Route path='/ListRole' element={<ListRole />} />

      <Route path='/PRNGeneratorList' element={<PRNGeneratorList />}></Route>
      <Route path='/CreatePRNGenerator' element={<CreatePRNGenerator />}></Route>
      <Route path='/PRNGeneratorUp/:id' element={<PRNGeneratorUp />}></Route>
      <Route path='/PRNGenerator/:id' element={<PRNGenerator />}></Route>
      <Route path='/PRNGeneratorDel/:id' element={<PRNGeneratorDel />}></Route>

      <Route path='/EnquiryList' element={<EnquiryList />}></Route>
      <Route path='/AddEnquiry' element={<AddEnquiry />}></Route>
      <Route path='/Enquiry/:id' element={<Enquiry />}></Route>
      <Route path='/UpdateEnquiry/:id' element={<UpdateEnquiry />}></Route>
      <Route path='/DeleteEnquiry/:id' element={<DeleteEnquiry />}></Route>

      <Route path='/CreateDesignation' element={<CreateDesignation />}></Route>
      <Route path='/ListDesignation' element={<ListDesignation />}></Route>
      <Route path='/Designation/:id' element={<Designation />}></Route>
      <Route path='/Designationup/:id' element={<Designationup />}></Route>
      <Route path='/Designationdel/:id' element={<Designationdel />}></Route>

      <Route path='/CreateClosure' element={<CreateClosure />}></Route>
      <Route path='/ClosureList' element={<ClosureList />}></Route>
      <Route path='/Closure/:id' element={<Closure />}></Route>
      <Route path='/ClosureUp/:id' element={<ClosureUp />}></Route>
      <Route path='/ClosureDel/:id' element={<ClosureDel />}></Route>

      <Route path='/CreateEnquirySource' element={<CreateEnquirySource />}></Route>
      <Route path='/EnquirySourceList' element={<EnquirySourceList />}></Route>
      <Route path='/EnquirySource/:id' element={<EnquirySource />}></Route>
      <Route path='/EnquirySourceUp/:id' element={<EnquirySourceUp />}></Route>
      <Route path='/EnquirySourceDel/:id' element={<EnquirySourceDel />}></Route>

      <Route path='/LocationList' element={<LocationList />}></Route>
      <Route path='/CreateLocation' element={<CreateLocation />}></Route>
      <Route path='/Location/:id' element={<Location />}></Route>
      <Route path='/Locationup/:id' element={<Locationup />}></Route>
      <Route path='/Locationdel/:id' element={<Locationdel />}></Route>

      <Route path="/List_Followup" element={<List_Followup />} />
      <Route path="/Create_Followup" element={<Create_Followup />} />
      <Route path="/Delete_Followup/:id" element={<Delete_Followup />} />
      <Route path="/Update_Followup/:id" element={<Update_Followup />} />

      <Route path="CreateStudent" element={<CreateStudent/>}/>
    <Route path="ListStudent" element={<Liststudent/>}/>
    <Route path="Studentup/:Id" element={<Studentup/>}/>
    <Route path="Studentdel/:student_id" element={<Studentdel/>}/>
    <Route path="Student_Entity/:t" element={<Student_Entity/>}/>
    <Route path="fee_receipt/:id" element={<FeeReceipt/>}/>

    <Route path="ListBatchinfo" element={<ListBatchInfo/>}/>
    <Route path="BatchInfo_Entity/:temp1" element={<BatchInfo_Entity/>}/>
    <Route path="CreateBatchInfo" element={<CreateBatchInfo/>}/>
    <Route path="BatchInfoup/:batch_Info_Id" element={<Batchinfoup/>}/>
    <Route path="Batchinfodel/:id" element={<Batchinfodel/>}/>

    <Route path="ListPlacement" element={<ListPlacement/>}/>
    <Route path="placement/:temp" element={<Placement_Data/>}/>
    <Route path="Create" element={<CreatePlacement/>}/>
    <Route path="Placementup/:id" element={<Placementup/>}/>
    <Route path="placementdel/:id" element={<Placementdel/>}/>

    <Route path="Createpayment" element={<Createpayment/>}/>
    <Route path="ListPayments" element={<ListPayments/>}/>
    <Route path="Paymentdel" element={<Paymentdel/>}/>
    <Route path="Payments" element={<Payments/>}/>
    <Route path="Paymentup" element={<Paymentup/>}/>



<Route path="List_Batch_staff" element={<List_Batch_staff/>}/>
<Route path="List_BatchInfo_Staff" element={<List_BatchInfo_Staff/>}/>
<Route path="List_Company_Staff" element={<List_Company_Staff/>}/>
<Route path="List_Enquiry_Staff" element={<List_Enquiry_Staff/>}/>
<Route path="List_Payment_Staff" element={<List_Payment_Staff/>}/>
<Route path="List_Placement_Data" element={<List_Placement_Data/>}/>
<Route path="List_Student_Staff" element={<List_Student_Staff/>}/>
<Route path="List_FollowUpStaff" element={<List_FollowUpStaff/>}/>


    </Routes>
  </BrowserRouter>
);
